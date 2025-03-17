// lib/database.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserRole(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { role: true }, // Include the role relation
  });

  return user?.role?.name || null; // Return the role name or null if the user/role is not found
}