"use server";
import { cookies } from "next/headers";

export async function getAuthenticatedUser() {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId");
  const userEmail = cookieStore.get("userEmail");
  const username = cookieStore.get("username");

  if (!userId || !userEmail || !username) {
    return null;
  }

  return {
    id: userId.value,
    email: userEmail.value,
    username: username.value,
  };
}
