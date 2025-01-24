import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`);
  });
});
