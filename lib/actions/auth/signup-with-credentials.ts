"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/auth.model";
import Role from "@/lib/models/role.model";
import { UserProvider } from "@/lib/models/types";
import { SignUpValidation } from "@/lib/validation/auth";
// import { generateToken } from "@/lib/jwt-token";
// import { generateVerificationToken } from "@/lib/token"
// import { sendVerificationEmail } from "@/lib/mailer";
// import { sendVerificationEmail } from "@/lib/mail"

type SignUpWithCredentialsInput = z.infer<typeof SignUpValidation>;

export const signUpWithCredentials = async (
  values: SignUpWithCredentialsInput,
  roleName: "Attendee" | "Host"
) => {
  const validatedFields = SignUpValidation.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, firstName } = validatedFields.data;

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const error =
      existingUser.provider === UserProvider.CREDENTIALS
        ? "Email already exists"
        : "Email has already been used for third-party login";
    return { error };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Fetch role from the Role collection
  const role = await Role.findOne({ name: roleName });
  if (!role) {
    return { error: `${roleName} role not found!` };
  }

  const user = new User({
    lastName: firstName,
    firstName,
    email,
    password: hashedPassword,
    role: role._id,
  });

  await user.save();

  return { success: `${roleName} account created successfully!` };

  // const verificationToken = await generateToken({ email });
  // console.log({ verificationToken });

  // await sendVerificationEmail(email, verificationToken);

  // const verificationToken = await generateVerificationToken(email);

  // await sendVerificationEmail(
  //   verificationToken.email,
  //   verificationToken.token
  // );

  // return { success: "Confirmation email sent!" };
};

export const signUpAttendee = async (values: SignUpWithCredentialsInput) => {
  return await signUpWithCredentials(values, "Attendee");
};

export const signUpHost = async (values: SignUpWithCredentialsInput) => {
  return await signUpWithCredentials(values, "Host");
};
