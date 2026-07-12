import { Request, Response } from "express";

import { AuthService } from "../services/auth.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  loginSchema,
  registerSchema,
} from "../validators/auth.validator.js";

export class AuthController {
  static async register(
    req: Request,
    res: Response
  ) {
    const data = registerSchema.parse(req.body);

    const result =
      await AuthService.register(data);

    res.status(201).json(
      new ApiResponse(
        true,
        "Registration successful",
        result
      )
    );
  }

  static async login(
    req: Request,
    res: Response
  ) {
    const data = loginSchema.parse(req.body);

    const result =
      await AuthService.login(data);

    res.json(
      new ApiResponse(
        true,
        "Login successful",
        result
      )
    );
  }
}