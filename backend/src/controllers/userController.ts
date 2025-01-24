import { Request, Response } from "express";
import { User } from "../models/userModel";

export const protectedRoute = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json({ id: user._id, name: user.name, email: user.email });
};
