"use server";

import { SendInvitationLink } from "@/lib/mail";
import { User } from "@/lib/models/auth.model";
import bcrypt from "bcryptjs";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
}

interface Response {
  status: number;
  message: string;
}

export const SendInvitation = async (formData: FormData): Promise<Response> => {
  try {
    // check if staff exists before adding
    const staff = await User.findOne({ email: formData.email });
    if (staff) {
      return { status: 404, message: "Staff already exist" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formData?.password, salt);
    const user = new User({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: hashedPassword,
      role: formData.role,
    });

    await user.save();

    // const staff = await User.create(formData)
    // send invitation link to staff's email address using SendInvitationLink function from mail.ts file
    // await SendInvitationLink(formData.email);
    return { status: 200, message: "Invitation link sent successfully!" };
  } catch {
    return { status: 500, message: "Failed to send invitation link" };
  }
};
