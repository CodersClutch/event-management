import { z } from "zod";
import { CATEGORIES } from "../types";

export const eventSchema = z
  .object({
    title: z.string().trim().min(3, "Title must be at least 3 characters long"),

    image: z.string().trim().optional(),
(1, "At least one category must be selected"),
      .array(z.enum(CATEGORIES as [string, ...string[]])) // Validates an array of categories
      .min(1, "At least one category must be selected"), // Optional: Ensures that at least one category is selected
    price: z.string().min(0, "Price must be at least 0 characters long"),
    ageRange: z
      .string()
      .trim()
      .min(3, "Age Range must be at least 3 characters long"),

    description: z
      .string()
      .trim()
      .min(10, "Description must be at least 10 characters long"),
    location: z
      .string()
      .trim()
      .min(3, "Location must be at least 3 characters long"),

    schedule: z
      .object({
        start: z.date().refine((date) => date > new Date(), {
          message: "Start date must be in the future",
        }),
        end: z.date(),
      })
      .superRefine((schedule, ctx) => {
        if (schedule.end <= schedule.start) {
          ctx.addIssue({
            code: "custom",
            message: "End date must be after the start date",
            path: ["end"],
          });
        }
      }),
    mode: z.string().optional().default(""), // Can be empty but should be a string

    refundPolicy: z.string().optional().default(""), // Ensures it is a string

    specialDeal: z.boolean().default(false), // Ensures it is a boolean

    geolocation: z.object({
      address: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      country: z.string().optional(),
      coordinates: z.string().optional(),
    }),

    registrationDeadline: z.date(),

    createdBy: z
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid Admin ID")
      .optional(), // MongoDB ObjectId validation

    maxParticipants: z
      .string()

      .max(1000, "Max participants cannot exceed 1000")
      .default("100"),
    status: z
      .enum(["upcoming", "ongoing", "completed", "canceled"])
      .default("upcoming"),

    isPublished: z.boolean().default(false).optional(),
    canceledReason: z.string().nullable().optional(),

    notifications: z
      .object({
        sendReminders: z.boolean().default(true),
        reminderTimes: z.array(z.date()).optional(),
      })
      .default({ sendReminders: true })
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.schedule?.start) {
      ctx.addIssue({
        code: "custom",
        message: "Start date is required before setting registration deadline",
        path: ["schedule", "start"],
      });
      return;
    }

    if (data.registrationDeadline >= data.schedule.start) {
      ctx.addIssue({
        code: "custom",
        message: "Registration deadline must be before the event start date",
        path: ["registrationDeadline"],
      });
    }
  });

export type EventInput = z.infer<typeof eventSchema>;

// deleting event reason schema
export const deleteEventSchemaMessage = z.object({
  reason: z.string().min(10, "Reason must be at least 10 characters long"),
});
