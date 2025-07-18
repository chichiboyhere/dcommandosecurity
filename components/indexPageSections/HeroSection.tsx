"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import hero1 from "@/public/images/hero/hero-slide1.jpg";
import hero2 from "@/public/images/hero/hero-slide2.jpg";
import hero3 from "@/public/images/hero/hero-slide3.jpg";

const slides = [
  {
    title: "Secure. Reliable. Trusted.",
    text: "Your safety is our priority.",
    image: hero1,
  },
  {
    title: "Cutting-edge Surveillance",
    text: "Keeping watch, so you don’t have to.",
    image: hero2,
  },
  {
    title: "24/7 Monitoring",
    text: "Peace of mind, day and night.",
    image: hero3,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      return undefined;
    };
  }, []);

  const pauseAutoScroll = () =>
    intervalRef.current && clearInterval(intervalRef.current);
  const resumeAutoScroll = () =>
    (intervalRef.current = setInterval(nextSlide, 4000));

  return (
    <section
      className="relative overflow-hidden h-[100vh] pt-16 flex items-center justify-center"
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={resumeAutoScroll}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover md:object-top brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {slide.title}
            </h2>
            <p className="mt-4 text-white text-lg">{slide.text}</p>
            <a
              href="/about"
              className="mt-6 bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute left-3 md:left-20 top-1/2 transform -translate-y-1/2 z-50"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-15 h-15" strokeWidth={1} />
      </button>
      <button
        className="absolute right-3 md:right-20 top-1/2 transform -translate-y-1/2 z-50"
        onClick={nextSlide}
      >
        <ChevronRight className="w-15 h-15" strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-8 h-1 rounded-full ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
