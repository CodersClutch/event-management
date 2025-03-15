import { z } from "zod";

// export const SignInValidation = z.object({
//   email: z.string().min(1, "Email is required").email("Invalid email"),
//   password: z
//     .string()
//     .min(1, "Password is required")
//     .min(8, "Password must be 8+ characters"),
//   code: z.optional(z.string()),

export const ResetPasswordValidation = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export const setUpAccount = z
  .object({
    firstName: z.string().min(1, "Email is required").email("Invalid email"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be 8+ characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

export const NewPasswordValidation = z
  .object({
    newPassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be 8+ characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

export const SignInValidation = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be 8+ characters"),
  // code: z.optional(z.string()),
});

export const SignUpValidation = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .max(50, "First name must be less than 50 characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .max(50, "Last name must be less than 50 characters"),
    // initial: z.string().optional(),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    // phoneNumber: z.string().optional(),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be 8+ characters"),
    confirmPassword: z
      .string()
      .min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });