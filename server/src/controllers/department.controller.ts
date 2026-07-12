import { Request, Response } from "express";

import { DepartmentService } from "../services/department.service.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  createDepartmentSchema,
  updateDepartmentSchema,
} from "../validators/department.validator.js";



export class DepartmentController {
  static async create(req: Request, res: Response) {
    const body = createDepartmentSchema.parse(req.body);

    const department = await DepartmentService.create(body);

    res.status(201).json(
      new ApiResponse(
        true,
        "Department created successfully",
        department
      )
    );
  }

  static async getAll(req: Request, res: Response) {
    const departments =
      await DepartmentService.getAll();

    res.json(
      new ApiResponse(
        true,
        "Departments fetched successfully",
        departments
      )
    );
  }

static async getById(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
        throw new Error("Department ID is required");
    }

    const department =
        await DepartmentService.getById(id);

    res.json(
        new ApiResponse(
            true,
            "Department fetched successfully",
            department
        )
    );
}

  static async update(req: Request, res: Response) {
    const body =
      updateDepartmentSchema.parse(req.body);

    const department =
      await DepartmentService.update(
        req.params.id!,
        body
      );

    res.json(
      new ApiResponse(
        true,
        "Department updated successfully",
        department
      )
    );
  }

  static async remove(req: Request, res: Response) {
    await DepartmentService.remove(
      req.params.id!
    );

    res.json(
      new ApiResponse(
        true,
        "Department deleted successfully"
      )
    );
  }
}