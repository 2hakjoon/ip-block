import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ipHandler2 } from "./pages/_app";

export function middleware(request: NextRequest) {
  const result = ipHandler2.connect(request.ip as string);
  if (!result) {
    return NextResponse.redirect(new URL("/middle-disable", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/middle-able",
};
