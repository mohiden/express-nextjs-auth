"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireUser = void 0;
const resources_1 = require("../../resources");
async function requireUser(_, res, next) {
    const decodedUser = res.locals.user;
    if (!decodedUser)
        return res.sendStatus(401);
    const user = await resources_1.UserModel.findOne({ username: decodedUser.username });
    if (!user)
        return res.status(401).send("user doesn't exists");
    return next();
}
exports.requireUser = requireUser;
//# sourceMappingURL=requireUser.js.map