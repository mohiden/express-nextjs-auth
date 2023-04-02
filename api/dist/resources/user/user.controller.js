"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const utils_1 = require("../../utils");
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
class UserController {
    constructor() {
        this.createUserHandler = async (req, res) => {
            try {
                const user = await this.userService.createUser(req.body);
                return res.send(user);
            }
            catch (e) {
                return res.status(500).send(e.message);
            }
        };
        this.verifyPhoneHandler = async (req, res) => {
            try {
                const user = await user_model_1.UserModel.findOne({ phoneNumber: req.body.phoneNumber });
                if (!user)
                    return res.status(404).send("no account with this number");
                const resp = await this.twilioClient.verifyPhone(req.body.phoneNumber, req.body.code);
                if (resp.status === "approved") {
                    user.isVerified = true;
                    await user.save();
                    return res.send(resp.status);
                }
                ;
                return res.status(300).send("failed");
            }
            catch (e) {
                return res.status(500).send(e.message);
            }
        };
        this.loginUserHandler = async (req, res) => {
            try {
                const token = await this.userService.loginUser(req.body);
                return res.send(token);
            }
            catch (e) {
                if (e.message) {
                    return res.status(400).send(e.message);
                }
                return res
                    .status(500)
                    .send("Something wen't wrong, please try again later!");
            }
        };
        this.resetPasswordHandler = async (req, res) => {
            try {
                const user = await user_model_1.UserModel.findOne({ phoneNumber: req.body.phoneNumber });
                if (!user)
                    return res.status(404).send("Not found this user");
                this.twilioClient.sendCode(user.phoneNumber);
                return res.send({
                    phoneNumber: user.phoneNumber,
                });
            }
            catch (e) {
                return res.status(400).send("Error occurred");
            }
        };
        this.newPasswordHandler = async (req, res) => {
            try {
                const user = await user_model_1.UserModel.findOne({ phoneNumber: req.body.phoneNumber });
                if (!user)
                    return res.status(404).send("no user with this phone number was found");
                user.password = req.body.password;
                await user.save();
                return res.send(user);
            }
            catch (error) {
                return res.status(500).send(error.message);
            }
        };
        this.userService = new user_service_1.UserService();
        this.twilioClient = new utils_1.TwilioClient();
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map