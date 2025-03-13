"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SignUpValidation } from "@/lib/validation/auth";
import { signUpWithCredentials } from "@/lib/actions/auth/signup-with-credentials";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormWrapper } from "@/components/common/form-wrapper";
import { FormError } from "@/components/common/form-error";
import { FormSuccess } from "@/components/common/form-success";
import Link from "next/link";

// Country codes with names
const countryCodes = [
  { code: "+1", name: "United States" },
  { code: "+220", name: "Gambia" },
  { code: "+44", name: "United Kingdom" },
  { code: "+91", name: "India" },
  // Add more country codes as needed
];

const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, "");
  const formatted = cleaned.replace(/(\d{3})(?=\d)/g, "$1 ");
  return formatted;
};

const SignUpForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const attendeeForm = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      initial: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      countryCode: "",
      phoneNumber: "",
      address: "",
      avatar: undefined,
    },
  });

  const hostForm = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      initial: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      countryCode: "",
      phoneNumber: "",
      address: "",
      avatar: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    setError("");
    setSuccess("");

    startTransition(() => {
      signUpWithCredentials(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          } else if (data?.success) {
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  }

  return (
    <div>
 <div className="max-w-[550px] mx-auto my-5 rounded-2xl shadow-lg border-yellow-500 border bg-white p-5 text-black">
      <Tabs defaultValue="attendee" className="w-full">
        <TabsList className="grid w-full grid-cols-2 gap-2 bg-white">
          <TabsTrigger
            value="attendee"
            className="bg-black font-extrabold text-white p-2"
          >
            Attendee
          </TabsTrigger>
          <TabsTrigger
            value="host"
            className="bg-black font-extrabold text-white p-2"
          >
            Host
          </TabsTrigger>
        </TabsList>

        {/* Attendee Form */}
        <TabsContent value="attendee" className="mt-4">
          <Form {...attendeeForm}>
            <form
              onSubmit={attendeeForm.handleSubmit(onSubmit)}
              className="w-full"
            >
              <h1 className="font-extrabold text-start text-2xl border-b border-yellow-400 mb-4 pb-2">
                Register As Attendee
              </h1>

              <div className="space-y-4">
                <div className="flex flex-row gap-2 w-full">
                  <FormField
                    control={attendeeForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="Your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={attendeeForm.control}
                    name="initial"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Initial (Optional)</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="initial"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={attendeeForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="Your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={attendeeForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                        className='border-black'
                          disabled={isPending}
                          placeholder="mail@example.com"
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
                    control={attendeeForm.control}
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
                              <SelectItem
                                key={country.code}
                                value={country.code}
                              >
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
                    control={attendeeForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black border'
                            placeholder="Phone Number"
                            {...field}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(
                                e.target.value
                              );
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={attendeeForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                        className='border-black'
                          disabled={isPending}
                          type="password"
                          placeholder="Your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={attendeeForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                        className='border-black'
                          disabled={isPending}
                          type="password"
                          placeholder="Confirm your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-row gap-4 w-full">
                  <FormField
                    control={attendeeForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={attendeeForm.control}
                    name="avatar"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Profile Image</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            type="file"
                            disabled={isPending}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              field.onChange(file);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                size="lg"
                className="w-full mt-6 font-extrabold text-white bg-yellow-500 text-md"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Attendee Sign Up"}
              </Button>
              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link href="/auth" className="underline text-blue-800">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </TabsContent>

        {/* Host Form */}
        <TabsContent value="host" className="mt-4">
          <Form {...hostForm}>
            <form onSubmit={hostForm.handleSubmit(onSubmit)} className="w-full">
              <h1 className="font-extrabold text-cente text-2xl border-b border-yellow-400 mb-4 pb-2">
                Register As Host
              </h1>
              <div className="space-y-4">
                <div className="flex flex-row gap-2 w-full">
                  <FormField
                    control={hostForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="Your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={hostForm.control}
                    name="initial"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Initial (Optional)</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="initial"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={hostForm.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="Your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={hostForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                        className='border-black'
                          disabled={isPending}
                          placeholder="mail@example.com"
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
                    control={hostForm.control}
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
                              <SelectItem
                                key={country.code}
                                value={country.code}
                              >
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
                    control={hostForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            placeholder="Phone Number"
                            {...field}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(
                                e.target.value
                              );
                              field.onChange(formatted);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={hostForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                        className='border-black'
                          disabled={isPending}
                          type="password"
                          placeholder="Your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={hostForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                        className='border-black'
                          disabled={isPending}
                          type="password"
                          placeholder="Confirm your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-row gap-4 w-full">
                  <FormField
                    control={hostForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            disabled={isPending}
                            placeholder="Address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={hostForm.control}
                    name="avatar"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Profile Image</FormLabel>
                        <FormControl>
                          <Input
                          className='border-black'
                            type="file"
                            disabled={isPending}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              field.onChange(file);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <Button
                size="lg"
                className="w-full mt-6 font-extrabold text-white bg-yellow-500 text-md"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Host Sign Up"}
              </Button>
              <div className="text-center mt-4">
                Already have an account?{" "}
                <Link href="/auth" className="underline text-blue-800">
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  );
};

export default SignUpForm;
