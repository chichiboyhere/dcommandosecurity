import { NextResponse } from "next/server";

export function handleApiError(error: unknown, location: string = "API") {
  if (error instanceof Error) {
    console.error(`[${location}]`, error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  console.error(`[${location}]`, error);
  return NextResponse.json(
    { message: "An unknown error occurred" },
    { status: 500 }
  );
}
