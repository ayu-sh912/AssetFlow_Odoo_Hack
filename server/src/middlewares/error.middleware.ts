import { NextFunction, Request, Response } from "express";

import { ApiError } from "../utils/ApiError.js";

export function errorHandler(
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);

  res.status(error.statusCode || 500).json({
    success: false,
    message:
      error.message ||
      "Internal Server Error",
  });
}