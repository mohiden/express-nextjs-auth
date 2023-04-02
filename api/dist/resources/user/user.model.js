"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const argon2_1 = __importDefault(require("argon2"));
const COLLECTION_NAME = "users";
const schema = new mongoose_1.default.Schema({
    username: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    isVerified: {
        type: mongoose_1.default.Schema.Types.Boolean,
        default: false,
    },
    phoneNumber: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true
    },
}, { timestamps: true });
schema.pre("save", async function (next) {
    if (!this.isModified("password"))
        next();
    const hash = await argon2_1.default.hash(this.password);
    this.password = hash;
});
schema.methods.comparePassword = async function (logPassword) {
    return argon2_1.default.verify(this.password, logPassword).catch((_) => false);
};
exports.UserModel = mongoose_1.default.model("User", schema, COLLECTION_NAME);
//# sourceMappingURL=user.model.js.map