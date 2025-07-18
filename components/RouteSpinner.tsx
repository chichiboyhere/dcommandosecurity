"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteSpinner() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // detects route changes

  useEffect(() => {
    setLoading(true);

    // Simulate delay to allow transition to display for brief moment
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust for preferred duration

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="h-15 w-15 animate-spin rounded-full border-10 border-blue-800 border-t-transparent" />
    </div>
  );
}
