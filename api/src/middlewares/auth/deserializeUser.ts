import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { IUser } from "../../lib";
import { verifyJwt } from "../../utils";

export function deserializeUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = get(req.headers, "authorization");
    const decoded = token && verifyJwt<IUser>(token);
    res.locals.user = decoded;
    return next();
}