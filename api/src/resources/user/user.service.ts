import { DocumentDefinition } from "mongoose";
import { IUser } from "src/lib";
import { firebaseAdmin, signJwt, TwilioClient } from "../../utils";
import { UserModel } from "./user.model";
import { omit } from 'lodash';

export class UserService {
    public async createUser(input: DocumentDefinition<Omit<IUser, "createdAt" | "updatedAt" | "comparePassword" | "isVerified" | "changePassword">>) {
        const twilioClint = new TwilioClient();
        const user = await UserModel.create(input);
        if (user) {
            //TODO::
            //more validation for the number...
            twilioClint.sendCode(user.phoneNumber);
        }
        return user;
    }

    public loginUser = async (
        input: DocumentDefinition<
            Omit<IUser, "createdAt" | "updatedAt" | "comparePassword" | "changePassword" | "isVerified">
        >
    ) => {
        const e = "Invalid username/password";
        //validate if user exists
        const user = await UserModel.findOne({ username: input.username });
        if (!user) throw new Error(e);
        //compare password
        const isMatch = await user.comparePassword(input.password);
        if (!isMatch) throw new Error(e);
        //sign jwt
        const token = signJwt(omit(user.toJSON(), "password"), {
            expiresIn: "365d",
        });
        //send back the token
        return token;
    };

    public resetPassword = async (
        email: string) => {
        return await firebaseAdmin.auth().generateEmailVerificationLink(email);
    }
}