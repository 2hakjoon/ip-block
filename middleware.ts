import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IPHandler } from "./utils/ip-handler";

export const ipHandler2 = new IPHandler();

export function middleware(request: NextRequest) {
  const result = ipHandler2.connect(request.ip as string);
  if (!result) {
    return NextResponse.redirect(
      new URL(
        `/middle-disable?ip=${request.ip}&cnt=${ipHandler2.getConnectCount(
          request.ip as string
        )}`,
        request.url
      )
    );
  }
  return NextResponse.redirect(
    new URL(
      `/middle-able?ip=${request.ip}&cnt=${ipHandler2.getConnectCount(
        request.ip as string
      )}`,
      request.url
    )
  );
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/middle", "/^/((?!api|_next/static|_next/image|favicon.ico).*)/i"],
};
