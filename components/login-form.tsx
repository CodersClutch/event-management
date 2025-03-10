"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SignInValidation } from "@/lib/validation/auth";
import { signInWithCredentials } from "@/lib/actions/auth/signin-with-credentials";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormError } from "./common/form-error";
import { FormSuccess } from "./common/form-success";
import { FormWrapper } from "./common/form-wrapper";
const SignInForm = () => {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  const [error, setError] = useState<string | undefined | null>("");
  const [success, setSuccess] = useState<string | undefined | null>("");
  // const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignInValidation>) {
    // console.log(values)
    setError("");
    setSuccess("");
    startTransition(() => {
      signInWithCredentials(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          } else if (data?.url) {
            setSuccess("Login successful");
            window.location.assign(data?.url);
          } else if (data?.url) {
            window.location.assign(data?.url);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  }

  return (
    <FormWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/signup"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-4">
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
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
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        type="password"
                        placeholder="your password"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">Forgot password?</Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          </div>
          <FormError message={error ?? undefined} />
          <FormSuccess message={success ?? undefined} />
          <Button
            size="lg"
            className="w-full mt-6"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Sign In"}
          </Button>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default SignInForm;
