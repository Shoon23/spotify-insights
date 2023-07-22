import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getAuthUrl from "./utils/getAuthUrl";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (!request.nextUrl.searchParams.get("code")) {
    return NextResponse.redirect(new URL(getAuthUrl()));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
