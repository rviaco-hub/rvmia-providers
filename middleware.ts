import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("🔥 MIDDLEWARE RUNNING");

  const token = request.cookies.get("token")?.value;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard") && !token) {
    console.log("🔴 REDIRECT LOGIN");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    (pathname.startsWith("/login") ||
      pathname.startsWith("/register")) &&
    token
  ) {
    console.log("🟢 REDIRECT DASHBOARD");
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};