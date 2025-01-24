import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/userModel";
import { sendEmail } from "../utils/email";
import { generateToken } from "../utils/jwt";
import { generateOtp } from "../utils/otp";
import { ObjectId } from "mongoose";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

    const user = new User({ name, email, password });

    const otp = generateOtp();
    user.otp = otp.value;
    user.otpExpires = otp.expiresAt;

    await user.save();

    await sendEmail({
      to: email,
      subject: "Verify your email",
      text: `Your OTP is: ${otp.value}`,
    });

    res.status(201).json({
      message: "User registered. Verify your email to activate your account.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    if (!user.verified) {
      res.status(400).json({ message: "Please verify your email first" });
      return;
    }

    const token = generateToken(user._id as ObjectId, user.email);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (_req: Request, res: Response) => {
  res.status(200).json({ message: "Logged out successfully" });
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpires! < new Date()) {
      res.status(400).json({ message: "Invalid or expired OTP" });
      return;
    }

    user.verified = true;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const requestResetPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const otp = generateOtp();
    user.otp = otp.value;
    user.otpExpires = otp.expiresAt;

    await user.save();

    await sendEmail({
      to: email,
      subject: "Reset Password OTP",
      text: `Your OTP is: ${otp.value}`,
    });

    res.status(200).json({ message: "OTP sent to email" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, otp, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || user.otpExpires! < new Date()) {
      res.status(400).json({ message: "Invalid or expired OTP" });
      return;
    }

    user.password = newPassword;
    user.otp = undefined;
    user.otpExpires = undefined;

    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
