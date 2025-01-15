import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("Access Denied");
    return;
  }

  // Bearer mytoken
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).send("Access Denied");
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof decoded !== "object" || !decoded?.userId) {
      res.status(401).json({ error: "Access denied" });
      return;
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
