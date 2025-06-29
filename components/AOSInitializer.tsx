// components/AOSInitializer.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return null;
};

export default AOSInitializer;
