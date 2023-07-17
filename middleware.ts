import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IPHandler } from "./utils/ip-handler";

export const ipHandler2 = new IPHandler();

export function middleware(request: NextRequest) {
  const result = ipHandler2.connect(request.ip as string);
  console.log(
    "ipHandler2.getConnectCount",
    ipHandler2.getConnectCount(request.ip as string)
  );
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
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/middle",
};
