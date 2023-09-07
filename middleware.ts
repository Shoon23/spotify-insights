import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getAuthUrl from "./utils/getAuthUrl";
import { useAuthStore } from "./store/authStore";
import { setCookie } from "cookies-next";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  // if (!code) {
  //   return NextResponse.redirect(new URL(getAuthUrl()));
  // }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
