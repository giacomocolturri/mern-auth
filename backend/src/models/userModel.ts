import mongoose, { Document, ObjectId, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  id: ObjectId;
  name: string;
  email: string;
  password: string;
  otp?: string;
  otpExpires?: Date;
  verified: boolean;
  isModified: (path: string) => boolean;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String },
  otpExpires: { type: Date },
  verified: { type: Boolean, default: false },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export const User = mongoose.model<IUser>("User", userSchema);
