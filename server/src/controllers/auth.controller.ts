import { Request, Response } from "express";
import { ApiError } from "../utils/ApiError.js";

import {
    generateAccessToken,
    verifyRefreshToken,
} from "../utils/jwt.js";

import { User } from "../models/user.model.js";
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
  static async me(
        req: Request,
        res: Response
    ) {
        res.json(
            new ApiResponse(
                true,
                "Profile fetched",
                req.user
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
  static async logout(
    req: Request,
    res: Response
) {
    if (!req.user) {
        throw new ApiError(
            401,
            "Unauthorized"
        );
    }

    req.user.refreshToken = "";

    await req.user.save();

    res.json(
        new ApiResponse(
            true,
            "Logout successful"
        )
    );
}

static async refresh(
    req: Request,
    res: Response
) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        throw new ApiError(
            401,
            "Refresh token required"
        );
    }

    const payload =
        verifyRefreshToken(refreshToken) as {
            id: string;
        };

    const user = await User.findById(payload.id).select(
        "+refreshToken"
    );

    if (
        !user ||
        user.refreshToken !== refreshToken
    ) {
        throw new ApiError(
            401,
            "Invalid refresh token"
        );
    }

    const accessToken =
        generateAccessToken(user);

    res.json(
        new ApiResponse(
            true,
            "Access token refreshed",
            {
                accessToken,
            }
        )
    );
}
}