// // // components/RouteSpinner.tsx
// // "use client";

// // import { useState, useEffect } from "react";
// // import { useRouter } from "next/router";

// // export default function RouteSpinner() {
// //   const router = useRouter();
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     const handleStart = () => setLoading(true);
// //     const handleStop = () => setLoading(false);

// //     router.events.on("routeChangeStart", handleStart);
// //     router.events.on("routeChangeComplete", handleStop);
// //     router.events.on("routeChangeError", handleStop);

// //     return () => {
// //       router.events.off("routeChangeStart", handleStart);
// //       router.events.off("routeChangeComplete", handleStop);
// //       router.events.off("routeChangeError", handleStop);
// //     };
// //   }, [router]);

// //   if (!loading) return null;

// //   return (
// //     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
// //       <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-800 border-t-transparent" />
// //     </div>
// //   );
// // }

// // components/RouteSpinner.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

// export default function RouteSpinner() {
//   const router = useRouter();
//   const pathname = usePathname(); // Just to trigger re-renders on path change
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     const handleStop = () => setLoading(false);

//     router.events?.on("routeChangeStart", handleStart);
//     router.events?.on("routeChangeComplete", handleStop);
//     router.events?.on("routeChangeError", handleStop);

//     return () => {
//       router.events?.off("routeChangeStart", handleStart);
//       router.events?.off("routeChangeComplete", handleStop);
//       router.events?.off("routeChangeError", handleStop);
//     };
//   }, [router]);

//   if (!loading) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
//       <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-800 border-t-transparent" />
//     </div>
//   );
// }

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
