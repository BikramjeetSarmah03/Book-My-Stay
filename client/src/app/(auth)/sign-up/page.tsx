"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import * as services from "@/services/auth.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";

export const registerFormSchema = z
  .object({
    firstName: z.string().min(1, { message: "Please enter first name" }),
    lastName: z.string().min(1, { message: "Please enter last name" }),
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z.string().min(1, { message: "Please enter password" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please enter confirm password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords doesn't match",
  });

export default function Signup() {
  const router = useRouter();

  const mutation = useMutation(services.registerUser, {
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        router.push("/");
      }
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(`Error while Signing Up \n${error.response?.data.message}`);
      } else {
        toast.error("Error in Signing Up");
      }
    },
  });

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerFormSchema>) {
    mutation.mutate(values);
  }

  return (
    <main className="flex items-center justify-center flex-1">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 py-4 my-4">
          <h1 className="font-bold text-2xl">Create An Account</h1>
          <div className="flex items-center gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <div>
              Already registered ?{" "}
              <Link href={"/sign-in"} className="underline">
                Sign in here
              </Link>
            </div>

            <LoadingButton
              loading={form.formState.isSubmitting}
              disabled={form.formState.isSubmitting}
              type="submit">
              Create Account
            </LoadingButton>
          </div>
        </form>
      </Form>
    </main>
  );
}
