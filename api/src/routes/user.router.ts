import { Router } from 'express';
import { validateResource } from '../middlewares';
import { UserController, UserSchema } from '../resources';

const router = Router();

const controller = new UserController();

router.post("/signup", validateResource(UserSchema.createUserSchema), controller.createUserHandler);
router.post("/verify-phone", validateResource(UserSchema.verifyPhoneSchema), controller.verifyPhoneHandler);
router.post("/reset-password", validateResource(UserSchema.resetPasswordSchema), controller.resetPasswordHandler)
router.post("/new-password", validateResource(UserSchema.newPasswordSchema), controller.newPasswordHandler)
router.post("/login", validateResource(UserSchema.loginUserSchema), controller.loginUserHandler)


export default router;