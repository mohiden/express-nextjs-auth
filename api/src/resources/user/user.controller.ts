import { Request, Response } from 'express';
import { TwilioClient } from '../../utils';
import { UserModel } from './user.model';
import { CreateUserInput, NewPasswordInput, ResetPasswordInput, VerifyPhoneInput } from './user.schema';
import { UserService } from './user.service';

export class UserController {
    private readonly userService: UserService;
    private readonly twilioClient: TwilioClient;
    constructor() {
        this.userService = new UserService();
        this.twilioClient = new TwilioClient();
    }
    public createUserHandler = async (
        req: Request<{}, {}, CreateUserInput["body"]>,
        res: Response
    ) => {
        try {
            const user = await this.userService.createUser(req.body);
            return res.send(user);
        } catch (e) {
            return res.status(500).send(e.message);
        }
    };

    public verifyPhoneHandler = async (
        req: Request<{}, {}, VerifyPhoneInput['body']>,
        res: Response
    ) => {
        try {
            const user = await UserModel.findOne({ phoneNumber: req.body.phoneNumber });
            if (!user) return res.status(404).send("no account with this number");
            const resp = await this.twilioClient.verifyPhone(req.body.phoneNumber, req.body.code);
            if (resp.status === "approved") {
                user.isVerified = true;
                await user.save();
                return res.send(resp.status)
            };

            return res.status(300).send("failed");
        } catch (e) {
            return res.status(500).send(e.message);
        }
    }

    public loginUserHandler = async (
        // req: Request<{}, {}, LoginUserInput["body"]>,
        req: Request<{}, {}, any>,
        res: Response
    ) => {
        try {
            const token = await this.userService.loginUser(req.body);
            return res.send(token);
        } catch (e) {
            if (e.message) {
                return res.status(400).send(e.message);
            }
            return res
                .status(500)
                .send("Something wen't wrong, please try again later!");
        }
    };
    public resetPasswordHandler = async (
        req: Request<{}, {}, ResetPasswordInput['body']>,
        res: Response
    ) => {

        try {
            const user = await UserModel.findOne({ phoneNumber: req.body.phoneNumber });
            if (!user) return res.status(404).send("Not found this user");
            this.twilioClient.sendCode(user.phoneNumber);
            return res.send({
                phoneNumber: user.phoneNumber,
            });
        } catch (e) {
            return res.status(400).send("Error occurred");
        }
    }

    public newPasswordHandler = async (
        req: Request<{}, {}, NewPasswordInput['body']>,
        res: Response
    ) => {
        try {
            const user = await UserModel.findOne({ phoneNumber: req.body.phoneNumber });
            if (!user) return res.status(404).send("no user with this phone number was found");
            user.password = req.body.password;
            await user.save()
            return res.send(user);
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}