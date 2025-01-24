import { Router } from "express";
import { protectedRoute } from "../controllers/userController";

import { verifyToken } from "../middlewares/authMiddlewares";

const router = Router();
router.get("/protected", verifyToken, protectedRoute);

export default router;
