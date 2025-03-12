import { ObjectId } from "mongoose";

type PermissionLevel = "view" | "off" | "full";

interface Permissions {
  view_dashboard: { level: PermissionLevel };
  manage_users: { level: PermissionLevel };
  manage_staffs: { level: PermissionLevel };
  manage_events: { level: PermissionLevel };
  manage_settings: { level: PermissionLevel };
}

export interface RoleTypes {
  _id: ObjectId;
  name: string;
  description: string;
  permissions: Permissions;
  __v: number;
}
export enum UserRole {
  ADMIN = "admin",
  USER = "Attendees",
  STAFF = "staff",
}

export enum UserProvider {
  GOOGLE = "google",
  CREDENTIALS = "credentials",
}

export interface IUser extends Document {
  _id: string;
  firstName: string;
  initial?: string;
  lastName: string;
  email: string;
  password?: string;
  phoneNumber?: string;
  avatar?: string;
  registeredAt?: string;
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
  role: RoleTypes;
  status: "active" | "suspended" | "blocked";
  isVerified: boolean;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  registeredUsers: {
    eventId: string; // ObjectId reference
    registeredAt: Date;
  }[];
  waitlistedEvents: {
    eventId: string; // ObjectId reference
    joinedAt: Date;
  }[];
  loginHistory: {
    ipAddress?: string;
    device?: string;
    timestamp: Date;
  }[];
  lastLogin?: string;
  updatedAt: Date;
  provider: UserProvider;
  registeredEvents: {
    eventId: string; // ObjectId reference
    attendedAt?: Date;
  }[];
  createdAt: string;
}

export interface UserDataInterfaceProps {
  page: number;
  isPreviousPage: boolean | undefined;
  isNextPage: boolean | undefined;
  totalCount: number | undefined;
  search: string | undefined;
  users: IUser[];
  userType: string;
  // events: EventInterfaceType[];
}
interface EventSchedule {
  start: string; // ISO date string
  end: string; // ISO date string
}

interface EventNotifications {
  sendReminders: boolean;
  reminderTimes: string[]; // Array of ISO date strings
}

// ADDITIONAL TYPE DEF ==================================
type AgeRange = {
  min: number;
  max: number;
};


type MoreEvent = {
  title: string;
  date: string; // ISO 8601 format recommended
  price: number;
  organizer: string;
  imageUrl: string;
};


type Geolocation = {
  address: string;
  city: string;
  state: string;
  country: string;
  coordinates: string; // Assuming [latitude, longitude]
};






type Categories =
  | "all ages"
  | "for babies"
  | "main arena"
  | "toddler"
  | "teen"
  | "education"
  | "attraction"
  | "classes and workshops"
  | "birthday"
  | "food and drink"
  | "arts"
  | "sports"
  | "charity & causes"
  | "hobbies"
  | "holiday"
  | "stem&coding"
  | "academic"
  | "homeschoolfriendly"
  | "tutoring"
  | "specialneeds"
  | "special deals";

// ADDITIONAL TYPE DEF ==================================


export interface EventInterfaceType {
  map(
    arg0: (item: IUser, index: number) => import("react").JSX.Element
  ): import("react").ReactNode;
  _id: string;
  title: string;
  description: string;
  location: string;
  schedule: EventSchedule;
  registrationDeadline: string; // ISO date string
  maxParticipants: number;
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  isPublished: boolean;
  notifications: EventNotifications;
  registeredUsers: IUser[]; // Array of IUser references
  waitlist: IUser[]; // Array of IUser references
  createdAt: string; // ISO date string
  eventId: string;
  image: string;
  geolocation: Geolocation;
  specialDeal?: boolean;
  capacity?: number;
  ageRange?: AgeRange;
  price: number;
  refundPolicy?: string;
  duration?: string; // e.g., "2 hours", "3 days"
  organizer: string;
  moreEvents: MoreEvent[];
  mode: "online" | "offline" | "hybrid";
  category: Categories;
}

export interface SystemSettingsTypes {
  general: {
    systemName: string;
    logo: string;
    contactEmail: string;
    contactPhone: string;
  };
  userManagement: {
    allowUserRegistration: boolean;
    maxFailedLogins: number;
  };
  eventManagement: {
    allowWaitlist: boolean;
  };
  notifications: {
    enableEmailNotifications: boolean;
    enableSMSNotifications: boolean;
    enableAppNotifications: boolean;
    eventReminderSchedule: number; // Hours before event
  };
  paymentSettings: {
    enablePaidEvents: boolean;
    supportedCurrencies: string[];
    paymentGateway: {
      provider: "Stripe" | "PayPal" | "None";
      apiKey: string;
    };
  };
  _id: string;
  updatedAt: string;
  __v: number;
}
