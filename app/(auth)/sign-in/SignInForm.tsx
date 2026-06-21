"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useActionState } from "react";

function SignInForm() {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });
  return (
    <>
      <form action={action}>
        <div className="space-y-6">
          <div>
            <Label htmlFor="email" className="mb-2">
              ایمیل
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2">
              رمز عبور
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="password"
            />
          </div>
          <div>
            <Button className="w-full" variant={"default"}>
              ورود
            </Button>
          </div>
          {data && !data.message && (
            <div className="text-center text-destructive">{data.message}</div>
          )}
          <div className="text-sm text-center">
            <Link href={"sign-up"}> ثبت نام</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
