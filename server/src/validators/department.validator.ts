import { z } from "zod";

export const createDepartmentSchema = z.object({
  name: z.string().min(2).max(100),
  code: z.string().min(2).max(10),
  description: z.string().optional(),
});

export const updateDepartmentSchema = createDepartmentSchema.partial();