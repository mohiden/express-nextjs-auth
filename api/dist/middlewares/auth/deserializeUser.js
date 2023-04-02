"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeUser = void 0;
const lodash_1 = require("lodash");
const utils_1 = require("../../utils");
function deserializeUser(req, res, next) {
    const token = (0, lodash_1.get)(req.headers, "authorization");
    const decoded = token && (0, utils_1.verifyJwt)(token);
    res.locals.user = decoded;
    return next();
}
exports.deserializeUser = deserializeUser;
//# sourceMappingURL=deserializeUser.js.map