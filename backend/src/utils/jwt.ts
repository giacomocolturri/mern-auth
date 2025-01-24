import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

export const generateToken = (userId: ObjectId, email: string): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign(
    { userId: userId, email: email },
    process.env.JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );

  return token;
};
