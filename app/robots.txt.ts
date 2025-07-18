// app/robots.txt.ts
import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User -agent: *
Disallow: /api/
Allow: /`;

  return NextResponse.text(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
