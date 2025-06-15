"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import {
  initiateAuth,
  verifyCode,
  resendVerificationCode,
} from "@/actions/auth";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getAuthenticatedUser } from "@/lib/auth";
import { checkEmail } from "../actions/auth";

export default function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<"email" | "username" | "verification">(
    "email"
  );
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    code: ["", "", "", ""],
  });
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      const user = await getAuthenticatedUser();
      if (user) {
        router.push("/profile");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  const startResendTimer = () => {
    setResendTimer(30);
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Please enter your email");
      return;
    }

    setIsLoading(true);
    try {
      const result = await checkEmail(formData.email);
      if (result.exists) {
        // Existing user - send verification code directly
        const authResult = await initiateAuth(formData.email, result.username);
        if (authResult.success) {
          setFormData((prev) => ({ ...prev, username: result.username }));
          setStep("verification");
          startResendTimer();
          toast.success("Verification code sent to your email");
        } else {
          toast.error(authResult.error || "Failed to send verification code");
        }
      } else {
        // New user - ask for username
        setStep("username");
        toast.success("Please choose a username to continue");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
    setIsLoading(false);
  };

  const handleUsernameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username) {
      toast.error("Please choose a username");
      return;
    }

    setIsLoading(true);
    try {
      const result = await initiateAuth(formData.email, formData.username);
      if (result.success) {
        setStep("verification");
        startResendTimer();
        toast.success("Verification code sent to your email");
      } else {
        toast.error(result.error || "Failed to send verification code");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
    setIsLoading(false);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    setFormData((prev) => {
      const newCode = [...prev.code];
      newCode[index] = value;
      return { ...prev, code: newCode };
    });

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = formData.code.join("");
    if (code.length !== 4) {
      toast.error("Please enter the complete verification code");
      return;
    }

    setIsLoading(true);
    try {
      const result = await verifyCode(formData.email, formData.username, code);
      if (result.success) {
        toast.success("Successfully logged in");
        router.refresh();
        router.push("/profile");
      } else {
        toast.error(result.error || "Invalid verification code");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
    setIsLoading(false);
  };

  const handleResendCode = async () => {
    if (resendTimer > 0) return;

    setIsLoading(true);
    try {
      const result = await resendVerificationCode(
        formData.email,
        formData.username
      );
      if (result.success) {
        startResendTimer();
        toast.success("New verification code sent");
      } else {
        toast.error(result.error || "Failed to resend code");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
    setIsLoading(false);
  };

  const renderStepContent = () => {
    switch (step) {
      case "email":
        return (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        );

      case "username":
        return (
          <form onSubmit={handleUsernameSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Choose Username</Label>
              <Input
                id="username"
                placeholder="Enter a username"
                value={formData.username}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        );

      case "verification":
        return (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div className="space-y-2">
              <Label>Verification Code</Label>
              <div className="flex gap-2 justify-center">
                {formData.code.map((digit, index) => (
                  <Input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    maxLength={1}
                    className="w-12 text-center text-lg"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full">
              Verify
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={handleResendCode}
              disabled={resendTimer > 0}
            >
              {resendTimer > 0
                ? `Resend code in ${resendTimer}s`
                : "Resend code"}
            </Button>
          </form>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-[425px] mx-auto">
        <div className={`relative ${isLoading ? "pointer-events-none" : ""}`}>
          {isLoading && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          )}
          <CardHeader>
            <CardTitle className="heading text-center">Login/Signup</CardTitle>
            <CardDescription className="text-center">
              {step === "email" && "Enter your email to continue"}
              {step === "username" && "Choose a username for your account"}
              {step === "verification" &&
                "Enter the verification code sent to your email"}
            </CardDescription>
          </CardHeader>

          <CardContent>{renderStepContent()}</CardContent>
        </div>
      </Card>
    </div>
  );
}
