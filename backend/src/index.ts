import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use("/auth", authRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port: ${process.env.PORT}`);
  });
});
