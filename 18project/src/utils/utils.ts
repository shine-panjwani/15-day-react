import { z } from "zod";
export const JWT_SECRET = "qwertyui";
export const UserInputValidation = z.object({
  username: z.string().min(2).max(100).trim(),
  password: z
    .string()
    .min(8)
    .max(50)
    .trim()
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must contain at least one lowercase letter",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must contain atleast one uppercase letter",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "Password must contain aleast one speacial character",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must contain atleast one number",
    }),
});
export const ContentValidation = z.object({
  title: z.string().min(3).max(50).trim(),
  type: z.enum(["links", "tweet", "videos", "tags", "documents"]),
  link: z.string().url().optional(),
  tags: z.string().uuid(),
});
