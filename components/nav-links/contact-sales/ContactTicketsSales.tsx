"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the form schema using Zod
const formSchema = z.object({
  firstName: z
    .string()
    .min(3, "First name must be at least 3 characters")
    .max(50),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50),
  workEmail: z.string().email("Invalid email address").min(2).max(50),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(50),
  organizationType: z
    .string()
    .min(2, "Organization type must be at least 2 characters")
    .max(50),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15),
  countryCode: z.string().min(1, "Country code is required"),
  country: z.string().min(2, "Country must be at least 2 characters").max(50),
  ticketAmount: z.string().min(1, "Ticket amount is required").max(50),
  costPerTicket: z.string().min(1, "Cost per ticket is required").max(50),
  reason: z.string().min(2, "Reason must be at least 2 characters").max(50),
});

// Country codes with names
const countryCodes = [
  { code: "+1", name: "United States" },
  { code: "+220", name: "Gambia" },
  { code: "+44", name: "United Kingdom" },
  { code: "+91", name: "India" },
  // Add more country codes as needed
];

const ContactTicketsSales = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      companyName: "",
      organizationType: "",
      phoneNumber: "",
      countryCode: "+220", // Default country code
      country: "",
      ticketAmount: "",
      costPerTicket: "",
      reason: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // You can add your form submission logic here
  }

  // Function to format phone number with spaces
  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const formatted = cleaned.replace(/(\d{3})(?=\d)/g, "$1 ");
    return formatted;
  };

  // Render stars for rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-6 h-6 ${
            i <= rating ? "text-yellow-400 fill-yellow-400" : "text-yellow-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-16 pt-32 pb-16 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="flex-1 text-justify">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-left">
          Reach 90 million unique ticket-buyers on Eventbrite
        </h1>
        <p className="pt-5 text-lg">
          Tap into the world&apos;s largest events marketplace and reach more
          consumers looking for events like yours with our industry-leading
          event marketing tools. Ready to bring your next event to life?
        </p>
        <p className="pt-5 text-lg">
          Our dedicated{" "}
          <span className="font-bold text-lg underline">Sales Team</span> is
          here to show you how Eventbrite can amplify your events and help you
          achieve your event goals. Reach out to us directly at +1 628-600-1786
          to get started, or if you prefer, complete the Contact Us form and
          someone from our Sales team will be in touch shortly.
        </p>
        <p className="p-5 mt-5 text-lg border-2 rounded-lg border-yellow-500">
          Current Eventbrite customers can contact customer support. Your
          support options are based on your plan or package.
        </p>
        <div className="flex items-center pt-5 space-x-2">
          {renderStars(4)}
          <span>4.5 star rating on Capterra from 4664 reviews</span>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 w-full max-w-lg ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 bg-white p-4 rounded-lg shadow-lg border border-yellow-500"
          >
            {/* First Name and Last Name */}
            <div className="flex flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-500"
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-500"
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Work Email */}
            <FormField
              control={form.control}
              name="workEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Work Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-500"
                      placeholder="Work Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name and Organization Type */}
            <div className="flex flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-500"
                        placeholder="Company Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="organizationType"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Organization Type</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-500"
                        placeholder="Organization Type"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-500"
                      placeholder="Country"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number and Country Code */}
            <div className="flex flex-row gap-4 w-full">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country Code</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border border-gray-500">
                          <SelectValue placeholder="Select country code" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countryCodes.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            {`${country.name} (${country.code})`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        className="border border-gray-500"
                        placeholder="Phone Number"
                        {...field}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value);
                          field.onChange(formatted);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Ticket Amount and Cost Per Ticket */}
            <FormField
              control={form.control}
              name="ticketAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount of Tickets to Sell</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-500"
                      placeholder="How many paid tickets do you plan to sell in the next year?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="costPerTicket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cost Per Ticket</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-500"
                      placeholder="Cost Per Ticket"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Reason
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason</FormLabel>
                  <FormControl>
                    <Input placeholder="Reason" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full font-extrabold text-black text-lg h-12 rounded-lg"
            >
              Contact Sales
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactTicketsSales;
