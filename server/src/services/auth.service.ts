import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt.js";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export class AuthService {
  static async register(data: RegisterData) {
    const existingUser = await User.findOne({
      email: data.email.toLowerCase(),
    });

    if (existingUser) {
      throw new ApiError(409, "Email already exists");
    }

    const user = await User.create({
      ...data,
      email: data.email.toLowerCase(),
    });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;

    await user.save();

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }

  static async login(data: LoginData) {
    const user = await User.findOne({
      email: data.email.toLowerCase(),
    }).select("+password +refreshToken");

    if (!user) {
      throw new ApiError(401, "Invalid credentials");
    }

    const validPassword = await user.comparePassword(
      data.password
    );

    if (!validPassword) {
      throw new ApiError(401, "Invalid credentials");
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    user.refreshToken = refreshToken;

    await user.save();

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      accessToken,
      refreshToken,
    };
  }
}