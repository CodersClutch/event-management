// ✅ sign-up-with-credentials.ts
"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/auth.model";
import Role from "@/lib/models/role.model";
import { UserProvider } from "@/lib/models/types";
import { SignUpValidation } from "@/lib/validation/auth";

type SignUpWithCredentialsInput = z.infer<typeof SignUpValidation>;

export const signUpWithCredentials = async (
  values: SignUpWithCredentialsInput,
  roleName: "Attendees" | "Hosts"
) => {
  const validated = SignUpValidation.safeParse(values);
  if (!validated.success) return { error: "Invalid form data!" };

  const { email, password, firstName, lastName } = validated.data;

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const errorMsg =
      existingUser.provider === UserProvider.CREDENTIALS
        ? "Email already exists"
        : "Email has been used for a third-party login";
    return { error: errorMsg };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const role = await Role.findOne({ name: roleName });
  if (!role) return { error: `${roleName} role not found!` };

  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role: role._id,
  });

  await user.save();

  return { success: `${roleName} account created successfully!` };
};

export const signUpAttendee = async (values: SignUpWithCredentialsInput) => {
  return await signUpWithCredentials(values, "Attendees");
};

export const signUpHost = async (values: SignUpWithCredentialsInput) => {
  return await signUpWithCredentials(values, "Hosts");
};
