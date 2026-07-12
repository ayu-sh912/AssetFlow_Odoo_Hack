import { Router } from "express";

import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

import { UserRole } from "../constants/roles.js";

import { DepartmentController } from "../controllers/department.controller.js";

const router = Router();

router.use(authenticate);

router.get(
  "/",
  DepartmentController.getAll
);

router.get(
  "/:id",
  DepartmentController.getById
);

router.post(
  "/",
  authorize(
    UserRole.ADMIN,
    UserRole.ASSET_MANAGER
  ),
  DepartmentController.create
);

router.put(
  "/:id",
  authorize(
    UserRole.ADMIN,
    UserRole.ASSET_MANAGER
  ),
  DepartmentController.update
);

router.delete(
  "/:id",
  authorize(UserRole.ADMIN),
  DepartmentController.remove
);

export default router;