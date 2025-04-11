"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { registerSchema } from "@/schemas/auth.schema";
import FirstStep from "./_components/first-step";
import SecondStep from "./_components/second-step";

export type RegisterFormValues = z.infer<typeof registerSchema>;

const SignUp = () => {
  const [step, setStep] = useState(1);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      surname: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("Register Form Data:", data);
  };

  const handleContinue = async () => {
    const result = await form.trigger(["name", "surname"]);
    result && setStep(2);
  };

  return (
    <div className="flex items-center justify-center min-h-[85vh] p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>{step === 1 ? "Personal Information" : "Account Details"}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-1">{step === 1 ? <FirstStep form={form} /> : <SecondStep form={form} />}</CardContent>
            <CardFooter className="flex flex-col space-y-1">
              {step === 1 ? (
                <Button
                  type="button"
                  className="w-full"
                  onClick={handleContinue}
                >
                  Continue
                </Button>
              ) : (
                <>
                  <div className="flex w-full gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-1/2"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="w-1/2"
                    >
                      Sign Up
                    </Button>
                  </div>
                </>
              )}
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-primary hover:underline"
                >
                  Login
                </Link>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
