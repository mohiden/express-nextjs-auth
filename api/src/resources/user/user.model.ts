import mongoose from "mongoose";
import argon2 from "argon2";
import { IUser } from "src/lib";


const COLLECTION_NAME = "users";

const schema = new mongoose.Schema<IUser>(
    {
        username: {
            type: mongoose.Schema.Types.String,
            required: true,
            unique: true,
            index: true,
        },
        password: {
            type: mongoose.Schema.Types.String,
            required: true,
        },
        isVerified: {
            type: mongoose.Schema.Types.Boolean,
            default: false,
        },
        phoneNumber: {
            type: mongoose.Schema.Types.String,
            required: true,
            unique: true
        },
    },
    { timestamps: true }
);

schema.pre<IUser>("save", async function (next) {
    // hash password before saving...
    if (!this.isModified("password")) next();
    const hash = await argon2.hash(this.password);
    this.password = hash;
});

//method to compare password when logging in.
schema.methods.comparePassword = async function (
    logPassword: string
): Promise<boolean> {
    // comparing logic here.
    return argon2.verify(this.password, logPassword).catch((_) => false);
};


export const UserModel = mongoose.model<IUser>("User", schema, COLLECTION_NAME);