import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../resources";
import { IUser } from "../../lib";

export async function requireUser(
    _: Request,
    res: Response,
    next: NextFunction
) {
    const decodedUser: Omit<IUser, "password"> = res.locals.user;
    if (!decodedUser) return res.sendStatus(401);
    const user = await UserModel.findOne({ username: decodedUser.username });
    if (!user) return res.status(401).send("user doesn't exists");
    return next();
}