import { BaseModel } from "./BaseModel";

export interface IUser extends BaseModel {
    username: string;
    phoneNumber: string;
    password: string;
    isVerified: boolean;
    comparePassword: (logPassword: string) => Promise<boolean>;
}