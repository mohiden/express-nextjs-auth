"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const utils_1 = require("../../utils");
const user_model_1 = require("./user.model");
const lodash_1 = require("lodash");
class UserService {
    constructor() {
        this.loginUser = async (input) => {
            const e = "Invalid username/password";
            const user = await user_model_1.UserModel.findOne({ username: input.username });
            if (!user)
                throw new Error(e);
            const isMatch = await user.comparePassword(input.password);
            if (!isMatch)
                throw new Error(e);
            const token = (0, utils_1.signJwt)((0, lodash_1.omit)(user.toJSON(), "password"), {
                expiresIn: "365d",
            });
            return token;
        };
        this.resetPassword = async (email) => {
            return await utils_1.firebaseAdmin.auth().generateEmailVerificationLink(email);
        };
    }
    async createUser(input) {
        const twilioClint = new utils_1.TwilioClient();
        const user = await user_model_1.UserModel.create(input);
        if (user) {
            twilioClint.sendCode(user.phoneNumber);
        }
        return user;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map