import { NextFunction, Request, Response } from "express";

import { ApiError } from "../utils/ApiError.js";

export function authorize(...roles: string[]) {
  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return next(
        new ApiError(401, "Unauthorized")
      );
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          403,
          "Access denied"
        )
      );
    }

    next();
  };
}