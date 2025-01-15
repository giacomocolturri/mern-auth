import { Router } from "express";
import {
  register,
  verifyOtp,
  login,
  logout,
  requestResetPassword,
  resetPassword,
  protectedRoute,
} from "../controllers/authController";
import {
  registerSchema,
  loginSchema,
  otpSchema,
  resetPasswordSchema,
} from "../schemas/authSchemas";
import { verifyToken } from "../middlewares/authMiddlewares";
import { validate } from "../middlewares/validationMiddlewares";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/verify-otp", validate(otpSchema), verifyOtp);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.post("/reset-password", validate(otpSchema), requestResetPassword);
router.post(
  "/reset-password/confirm",
  validate(resetPasswordSchema),
  resetPassword
);
router.get("/protected", verifyToken, protectedRoute);

export default router;
