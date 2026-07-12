import { Department } from "../models/department.model.js";
import { ApiError } from "../utils/ApiError.js";

export class DepartmentService {
  static async create(data: any) {
    const exists = await Department.findOne({
      $or: [{ name: data.name }, { code: data.code }],
    });

    if (exists) {
      throw new ApiError(409, "Department already exists");
    }

    return Department.create(data);
  }

  static async getAll() {
    return Department.find().sort({ createdAt: -1 });
  }

  static async getById(id: string) {
    const department = await Department.findById(id);

    if (!department) {
      throw new ApiError(404, "Department not found");
    }

    return department;
  }

  static async update(id: string, data: any) {
    const department = await Department.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );

    if (!department) {
      throw new ApiError(404, "Department not found");
    }

    return department;
  }

  static async remove(id: string) {
    const department = await Department.findByIdAndDelete(id);

    if (!department) {
      throw new ApiError(404, "Department not found");
    }

    return department;
  }
}