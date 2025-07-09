"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
