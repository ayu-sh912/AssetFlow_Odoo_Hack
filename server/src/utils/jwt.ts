import jwt from "jsonwebtoken";

import { env } from "../config/env.js";
import { IUser } from "../models/user.model.js";

export function generateAccessToken(user: IUser) {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      email: user.email,
    },
    env.JWT_ACCESS_SECRET,
    {
      expiresIn: env.ACCESS_TOKEN_EXPIRES as jwt.SignOptions["expiresIn"],
    }
  );
}

export function generateRefreshToken(user: IUser) {
  return jwt.sign(
    {
      id: user._id,
    },
    env.JWT_REFRESH_SECRET,
    {
      expiresIn: env.REFRESH_TOKEN_EXPIRES as jwt.SignOptions["expiresIn"],
    }
  );
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.JWT_ACCESS_SECRET);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, env.JWT_REFRESH_SECRET);
}