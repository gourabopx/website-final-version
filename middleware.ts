import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userId = request.cookies.get("userId");

  // If user is not logged in and trying to access protected pages, redirect to auth
  if (!userId && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // If user is logged in and trying to access auth pages, redirect to home
  if (userId && request.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Protect checkout page
  if (request.nextUrl.pathname === "/checkout") {
    if (!userId) {
      return NextResponse.redirect(new URL("/auth", request.url));
    }
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth", "/profile/:path*", "/checkout"],
};
