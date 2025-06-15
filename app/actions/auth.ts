"use server";

import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { VerificationEmail } from "@/emails/VerificationEmail";

export async function logout() {
  const cookieStore = cookies();

  // Remove all authentication related cookies
  cookieStore.delete("userId");
  cookieStore.delete("userEmail");
  cookieStore.delete("username");
  cookieStore.delete("token");

  return { success: true };
}

export async function getAuthenticatedUserId() {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId");

  if (!userId) {
    return { error: "Unauthorized" };
  }

  return { userId: userId.value };
}

export async function checkAuthStatus() {
  const result = await getAuthenticatedUserId();
  return {
    isAuthenticated: !result.error,
    userId: result.userId,
  };
}

export async function checkEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { username: true },
    });

    if (user) {
      return { exists: true, username: user.username };
    }

    return { exists: false };
  } catch (error) {
    console.error("Error checking email:", error);
    throw new Error("Failed to check email");
  }
}
