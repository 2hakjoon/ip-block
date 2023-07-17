import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IPHandler } from "./utils/ip-handler";

const ipHandler2 = new IPHandler();

export function middleware(request: NextRequest) {
  console.log("request.ip: ", request.ip);
  const result = ipHandler2.connect(request.ip as string);
  console.log("result: ", ipHandler2.getIpObj());
  if (!result) {
    return NextResponse.redirect(new URL("/middle-disable", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/middle-able",
};
