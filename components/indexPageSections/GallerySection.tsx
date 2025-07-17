"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
];
import Link from "next/link";
const GallerySlideSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setItemsPerSlide(width >= 768 ? 3 : 1);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const slideWidth = 100 / itemsPerSlide;
  const translateX = -(currentIndex * 100);

  return (
    <div className="relative max-w-screen-xl mx-auto p-4 w-full my-8 dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900 dark:text-white">
        Explore our gallery of gallent men at work
      </h1>
      {/* Slider wrapper */}
      <Link href="/gallery">
        <div className="relative flex gap-4 overflow-hidden w-full justify-center content-center ">
          {/* Slide track */}

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${(images.length * 100) / itemsPerSlide}%`,
              transform: `translateX(${translateX}%)`,
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{ width: `${slideWidth}%` }}
              >
                <Image
                  key={idx}
                  width={500}
                  height={375}
                  src={src}
                  alt={`Banner ${idx}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-lg object-cover w-full h-[200px] md:h-[250px] max-w-[90%] content-center "
                />
              </div>
            ))}
          </div>

          {/* Chevrons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400 p-2 rounded-full shadow hover:bg-gray-200 "
          >
            <ChevronLeft className="w-5 h-5 " />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-400 p-2 rounded-full shadow hover:bg-gray-200"
          >
            <ChevronRight className="w-5 h-5 " />
          </button>
        </div>
      </Link>
      {/* Indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GallerySlideSection;
