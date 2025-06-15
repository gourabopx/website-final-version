"use server";

import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { VerificationEmail } from "@/emails/VerificationEmail";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Generate a random 4-digit code
function generateVerificationCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

// Store verification codes in memory (you might want to use Redis in production)
const verificationCodes = new Map<
  string,
  { code: string; timestamp: number }
>();

export async function initiateAuth(email: string, username: string) {
  try {
    // Generate verification code
    const code = generateVerificationCode();

    // Store the code with timestamp
    verificationCodes.set(email, {
      code,
      timestamp: Date.now(),
    });

    // Render email template and await the result
    const emailHtml = await render(
      VerificationEmail({
        username,
        verificationCode: code,
      })
    );

    // Send verification email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Your VibeCart Verification Code",
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Error initiating auth:", error);
    return { success: false, error: "Failed to send verification code" };
  }
}

export async function verifyCode(
  email: string,
  username: string,
  code: string
) {
  try {
    const storedData = verificationCodes.get(email);

    if (!storedData) {
      return { success: false, error: "Verification code expired" };
    }

    if (Date.now() - storedData.timestamp > 30 * 60 * 1000) {
      // 30 minutes
      verificationCodes.delete(email);
      return { success: false, error: "Verification code expired" };
    }

    if (storedData.code !== code) {
      return { success: false, error: "Invalid verification code" };
    }

    // Code is valid, clean up
    verificationCodes.delete(email);

    // Find or create user
    const user = await prisma.user.upsert({
      where: { email },
      update: { username },
      create: {
        email,
        username,
        role: "user",
        defaultPaymentMethod: "",
      },
    });

    // Set cookies
    const cookieStore = cookies();
    cookieStore.set("userId", user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });
    cookieStore.set("userEmail", user.email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });
    cookieStore.set("username", user.username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60, // 30 days
    });

    return { success: true, user };
  } catch (error) {
    console.error("Error verifying code:", error);
    return { success: false, error: "Failed to verify code" };
  }
}

export async function resendVerificationCode(email: string, username: string) {
  try {
    // Check if we should allow resending (30 seconds cooldown)
    const storedData = verificationCodes.get(email);
    if (storedData && Date.now() - storedData.timestamp < 30 * 1000) {
      return {
        success: false,
        error: "Please wait before requesting a new code",
        remainingTime: Math.ceil(
          (30 * 1000 - (Date.now() - storedData.timestamp)) / 1000
        ),
      };
    }

    // Generate and send new code
    return await initiateAuth(email, username);
  } catch (error) {
    console.error("Error resending code:", error);
    return { success: false, error: "Failed to resend verification code" };
  }
}
