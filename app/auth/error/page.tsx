// app/auth/error/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl font-bold mb-2">Authentication Error</h1>
      <p className="text-red-500">Error: {error}</p>
      <p className="mt-4">Please try logging in again.</p>
    </div>
  );
}
