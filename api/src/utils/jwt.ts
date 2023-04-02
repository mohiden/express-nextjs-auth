import jwt from "jsonwebtoken";

const token_secret = process.env.ACCESS_TOKEN_SECRET!;

export function signJwt(payload: Object, options?: jwt.SignOptions) {
    return jwt.sign(payload, token_secret, { ...(options && options) });
}

export function verifyJwt<T>(token: string): T | null {
    try {
        const decoded = jwt.verify(token, token_secret) as T;
        return decoded;
    } catch (e) {
        console.log(e);
        return null;
    }
}