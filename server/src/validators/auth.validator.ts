import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3).max(100),

  email: z.email(),

  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "One uppercase required")
    .regex(/[a-z]/, "One lowercase required")
    .regex(/[0-9]/, "One number required"),
});

export const loginSchema = z.object({
  email: z.email(),

  password: z.string().min(8),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export type LoginInput = z.infer<typeof loginSchema>;