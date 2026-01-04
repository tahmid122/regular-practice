import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const isAuthenticated = false;
  const protectedRoutes = ["/dashboard", "/profile"];
  if (!isAuthenticated && protectedRoutes.includes(request.nextUrl.pathname)) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile"],
};
