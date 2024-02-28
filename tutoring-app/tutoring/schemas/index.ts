import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(6, {
    message: "First name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
  university: z.string(),
  role: z.string(),
});

// export const UserSchema = z.object({
//   email: z.string().email(),
//   name: z.string(),
//   university: z.string(),
//   role: z.string(),
// });
