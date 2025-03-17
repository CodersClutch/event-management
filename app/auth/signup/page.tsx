"use client";
import { useState, useTransition, useEffect } from "react"; // Add useEffect
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
import { Eye, EyeOff } from "lucide-react"; // Import eye icons
import { useRouter } from "next/navigation"; // Import useRouter

const SignUpForm = () => {
  const [attendeeError, setAttendeeError] = useState<string | undefined>("");
  const [attendeeSuccess, setAttendeeSuccess] = useState<string | undefined>("");
  const [hostError, setHostError] = useState<string | undefined>("");
  const [hostSuccess, setHostSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Initialize useRouter

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

  // Redirect to login page after successful registration
  useEffect(() => {
    if (attendeeSuccess || hostSuccess) {
      const timer = setTimeout(() => {
        router.push("/auth"); // Redirect to login page
      }, 2000); // Redirect after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [attendeeSuccess, hostSuccess, router]);

  async function onSubmit(
    values: z.infer<typeof SignUpValidation>,
    role: "Attendees" | "Hosts"
  ) {
    if (role === "Attendees") {
      setAttendeeError("");
      setAttendeeSuccess("");
    } else {
      setHostError("");
      setHostSuccess("");
    }

    startTransition(() => {
      signUpWithCredentials(values, role)
        .then((data) => {
          if (data?.error) {
            if (role === "Attendees") {
              setAttendeeError(data.error);
            } else {
              setHostError(data.error);
            }
          } else if (data?.success) {
            if (role === "Attendees") {
              setAttendeeSuccess(data.success);
            } else {
              setHostSuccess(data.success);
            }
          }
        })
        .catch(() => {
          if (role === "Attendees") {
            setAttendeeError("Something went wrong");
          } else {
            setHostError("Something went wrong");
          }
        });
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
                onSubmit={attendeeForm.handleSubmit((values) =>
                  onSubmit(values, "Attendees")
                )}
                className="w-full"
              >
                <h1 className="font-extrabold text-start text-2xl border-b border-yellow-400 mb-4 pb-2">
                  Register As Attendee
                </h1>
                <div className="space-y-3">
                  {/* First Name */}
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
                  {/* Last Name */}
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
                  {/* Email */}
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
                  {/* Password */}
                  <FormField
                    control={attendeeForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="border-black"
                              disabled={isPending}
                              type={showPassword ? "text" : "password"}
                              placeholder="Your password"
                              {...field}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-2.5"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Confirm Password */}
                  <FormField
                    control={attendeeForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="border-black"
                              disabled={isPending}
                              type={showPassword ? "text" : "password"}
                              placeholder="Confirm your password"
                              {...field}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-2.5"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={attendeeError} />
                <FormSuccess message={attendeeSuccess} />
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
                onSubmit={hostForm.handleSubmit((values) =>
                  onSubmit(values, "Hosts")
                )}
                className="w-full"
              >
                <h1 className="font-extrabold text-cente text-2xl border-b border-yellow-400 mb-4 pb-2">
                  Register As Host
                </h1>
                <div className="space-y-3">
                  {/* First Name */}
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
                  {/* Last Name */}
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
                  {/* Email */}
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
                  {/* Password */}
                  <FormField
                    control={hostForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="border-black"
                              disabled={isPending}
                              type={showPassword ? "text" : "password"}
                              placeholder="Your password"
                              {...field}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-2.5"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Confirm Password */}
                  <FormField
                    control={hostForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="border-black"
                              disabled={isPending}
                              type={showPassword ? "text" : "password"}
                              placeholder="Confirm your password"
                              {...field}
                            />
                            <button
                              type="button"
                              className="absolute right-2 top-2.5"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormError message={hostError} />
                <FormSuccess message={hostSuccess} />
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