"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";
const BackToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const toggle = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <>
      {showScrollTop && (
        <button
          className="fixed bottom-6 right-6 bg-yellow-400 p-2 rounded-full text-blue-900 shadow-lg cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp />
        </button>
      )}
    </>
  );
};
export default BackToTop;
