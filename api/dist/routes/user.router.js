"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const resources_1 = require("../resources");
const router = (0, express_1.Router)();
const controller = new resources_1.UserController();
router.post("/signup", (0, middlewares_1.validateResource)(resources_1.UserSchema.createUserSchema), controller.createUserHandler);
router.post("/verify-phone", (0, middlewares_1.validateResource)(resources_1.UserSchema.verifyPhoneSchema), controller.verifyPhoneHandler);
router.post("/reset-password", (0, middlewares_1.validateResource)(resources_1.UserSchema.resetPasswordSchema), controller.resetPasswordHandler);
router.post("/new-password", (0, middlewares_1.validateResource)(resources_1.UserSchema.newPasswordSchema), controller.newPasswordHandler);
router.post("/login", (0, middlewares_1.validateResource)(resources_1.UserSchema.loginUserSchema), controller.loginUserHandler);
exports.default = router;
//# sourceMappingURL=user.router.js.map