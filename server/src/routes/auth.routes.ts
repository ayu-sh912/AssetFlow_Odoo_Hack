import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { AuthController } from "../controllers/auth.controller.js";

const router = Router();
router.get(
    "/me",
    authenticate,
    AuthController.me
);

router.post(
  "/register",
  AuthController.register
);

router.post(
  "/login",
  AuthController.login
);
router.post(
    "/logout",
    authenticate,
    AuthController.logout
);

router.post(
    "/refresh",
    AuthController.refresh
);

export default router;