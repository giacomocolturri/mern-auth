import { Router } from "express";
import {
  register,
  verifyOtp,
  login,
  logout,
  requestResetPassword,
  resetPassword,
} from "../controllers/authController";
import {
  registerSchema,
  loginSchema,
  otpSchema,
  requestResetPasswordSchema,
  resetPasswordSchema,
} from "../schemas/authSchemas";
import { validate } from "../middlewares/validationMiddlewares";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/verify-otp", validate(otpSchema), verifyOtp);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.post(
  "/reset-password",
  validate(requestResetPasswordSchema),
  requestResetPassword
);
router.post(
  "/reset-password/confirm",
  validate(resetPasswordSchema),
  resetPassword
);

export default router;
