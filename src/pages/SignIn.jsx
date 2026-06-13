import React, { useState } from "react";
import { images } from "../config/media";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSocialLogin = (provider) => {
    console.log(`Sign in with ${provider}`);
  };

  return (
    <section className="relative w-full md:min-h-screen min-h-160 max-sm:min-h-screen overflow-hidden px-5 md:px-22 max-sm:px-4 flex items-center gap-3 font-Manrope">
      {/* background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.authen.auth3})` }}
      />
      <div className="absolute inset-0 z-0 block backdrop-blur-xs" />

      {/* back btn  */}
      <Link
        to="/"
        className="absolute top-4 left-3 z-10 h-9 w-fit max-sm:left-7 max-sm:top-8 text-white"
      >
        <ArrowLeft className="inline-block h-20 w-20 max-sm:h-18 max-sm:w-18 rotate-45 hover:rotate-0 transition-all duration-300 ease-in-out " />
      </Link>

      {/* sign in card */}
      <Card className="relative z-10 w-full max-w-sm max-sm:max-w-85 mx-auto overflow-hidden rounded-3xl max-sm:rounded-2xl bg-linear-tr from-white/10 via-white/6 to-white/3 border border-white/30 backdrop-blur-lg backdrop-saturate-100 shadow-2xl">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -left-8 w-64 h-64 rounded-full bg-linear-to-br from-white/40 to-transparent opacity-60 blur-3xl transform rotate-12" />
          <div className="absolute -bottom-20 -right-8 w-80 h-80 rounded-full bg-linear-to-tl from-[#7cc8ff]/18 to-transparent opacity-55 blur-3xl transform -rotate-6" />
          <div className="absolute inset-0 border border-white/8 rounded-3xl max-sm:rounded-2xl pointer-events-none" />
        </div>

        <div className="relative z-10 text-gray-200">
          <CardHeader className="text-left max-sm:px-5 max-sm:pt-6">
            <CardTitle className="text-2xl max-sm:text-xl font-bold">
              Sign In
            </CardTitle>
            <CardDescription className="text-gray-200/80 max-sm:text-sm">
              Welcome back, athlete ⚡
              <br />
              No excuses. Let's goooo.
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-6 max-sm:mt-4 max-sm:px-5">
            <form>
              <div className="flex flex-col gap-6 max-sm:gap-4">
                <div className="grid gap-2 text-white">
                  <Label htmlFor="email" className="max-sm:text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nmc@example.com"
                    className="bg-white/6 max-sm:h-10"
                    required
                  />
                </div>

                <div className="grid gap-2 text-white">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="max-sm:text-sm">
                      Password
                    </Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-[13px] max-sm:text-[11px] text-gray-200/90 underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="bg-white/6 pr-10 max-sm:h-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200/70 hover:text-white transition-colors py-2"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 max-sm:h-3.5 max-sm:w-3.5" />
                      ) : (
                        <Eye className="h-4 w-4 max-sm:h-3.5 max-sm:w-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-3 max-sm:gap-2.5 max-sm:px-5 max-sm:pb-6">
            <Button
              type="submit"
              className="w-full bg-white/10 hover:bg-white/12 max-sm:h-10"
            >
              Sign in
            </Button>

            <label className="text-[13px] max-sm:text-[11px] text-gray-200">
              or sign in via
            </label>

            {/* Social Login Buttons */}
            <div className="flex gap-3 w-full max-sm:gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 py-3 max-sm:py-2.5 bg-transparent hover:bg-white/3 border-white/6 rounded-lg"
              >
                <svg
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#fff"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#fff"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#fff"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-white text-sm max-sm:text-xs">
                  Google
                </span>
              </Button>

              <Button
                type="button"
                onClick={() => handleSocialLogin("Apple")}
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 py-3 max-sm:py-2.5 bg-transparent hover:bg-white/3 border-white/6 rounded-lg"
              >
                <svg
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span className="text-white text-sm max-sm:text-xs">Apple</span>
              </Button>

              <Button
                type="button"
                onClick={() => handleSocialLogin("Twitter")}
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 py-3 max-sm:py-2.5 bg-transparent hover:bg-white/3 border-white/6 rounded-lg"
              >
                <svg
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-white text-sm max-sm:text-xs">
                  Twitter
                </span>
              </Button>
            </div>

            <label className="mt-2 max-sm:mt-1 text-[13px] max-sm:text-[11px] text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-white/90 hover:underline font-bold py-2"
              >
                Sign Up
              </Link>
            </label>
          </CardFooter>
        </div>
      </Card>
    </section>
  );
};

export default SignIn;
