"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SignUpValidation } from "@/lib/validation/auth";
import { signUpWithCredentials } from "@/lib/actions/auth/signup-with-credentials";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/common/form-error";
import { FormSuccess } from "@/components/common/form-success";
import Link from "next/link";

const SignUpForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const attendeeForm = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const hostForm = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-[500px] mx-auto my-5 rounded-2xl shadow-lg border-yellow-500 border bg-white p-5 text-black">
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
                <div className="space-y-3">
                  <FormField
                    control={attendeeForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
                            disabled={isPending}
                            placeholder="Your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={attendeeForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
                            disabled={isPending}
                            placeholder="mail@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={attendeeForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
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
                            className="border-black"
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
              <form
                onSubmit={hostForm.handleSubmit(onSubmit)}
                className="w-full"
              >
                <h1 className="font-extrabold text-cente text-2xl border-b border-yellow-400 mb-4 pb-2">
                  Register As Host
                </h1>
                <div className="space-y-3">
                  <FormField
                    control={hostForm.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
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
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
                            disabled={isPending}
                            placeholder="Your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={hostForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
                            disabled={isPending}
                            placeholder="mail@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={hostForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            className="border-black"
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
                            className="border-black"
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
