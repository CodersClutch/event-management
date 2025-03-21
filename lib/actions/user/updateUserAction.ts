"use server";

import { User } from "@/lib/models/user.model";
import { IUser } from "@/lib/types";
// import { UserInterfaceType } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function updateUserServerAction(
  userId: string,
  updateData: IUser
) {
  try {
    if (!userId || !updateData) {
      return { status: 400, message: "Invalid input data" };
    }

    const existingUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });

    if (!existingUser) {
      return { status: 404, message: "User not found" };
    }

    revalidatePath("/users");

    return {
      status: 200,
      message: "User updated successfully",
      user: existingUser,
    };
  } catch (error) {
    return { status: 500, message: "Error updating user", error };
  }
}




export async function updateUser(userId: string, data: any) {
  try {
    // Update the user based on userId and provided data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: data,
        $currentDate: { updatedAt: true }, // Automatically update 'updatedAt'
      },
      { new: true } // Return the updated user
    ).lean();

    if (!updatedUser) {
      throw new Error("User not found");
    }

    return {
      status: 200,
      message: "User profile updated successfully",
      data: updatedUser,
    };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      status: 500,
      message: "An error occurred while updating the user",
    };
  }
}