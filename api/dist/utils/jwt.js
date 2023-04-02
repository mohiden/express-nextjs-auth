"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_secret = process.env.ACCESS_TOKEN_SECRET;
function signJwt(payload, options) {
    return jsonwebtoken_1.default.sign(payload, token_secret, Object.assign({}, (options && options)));
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, token_secret);
        return decoded;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=jwt.js.map