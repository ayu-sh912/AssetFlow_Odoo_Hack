import { NextFunction, Request, Response } from "express";

import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { verifyAccessToken } from "../utils/jwt.js";

interface JwtPayload {
  id: string;
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      throw new ApiError(401, "Unauthorized");
    }

    const token = header.split(" ")[1];

    const payload =
      verifyAccessToken(token) as JwtPayload;

    const user = await User.findById(payload.id);

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    req.user = user;

    next();
  } catch {
    next(new ApiError(401, "Invalid token"));
  }
}