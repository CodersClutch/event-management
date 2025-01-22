export interface RoleTypes {
  name: string;
}

import { Document } from "mongoose";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  SUBAdmin = "sub-admin",
}

export enum UserProvider {
  GOOGLE = "google",
  CREDENTIALS = "credentials",
}

export interface IUser extends Document {
  fullName: string;
  email: string;
  password?: string;
  image?: string;
  role: UserRole;
  provider: UserProvider;
  emailVerified: Date;
  isTwoFactorEnabled: boolean;
  emailPendingVerification?: string;
  createdAt: Date;
  updatedAt: Date;
}
