"use client";
import Image from "next/image";
import { Phone, CalendarClock, X } from "lucide-react";
import { useState } from "react";

import Link from "next/link";
const galleryOutSrcImgs = [
  "/images/gallery/gallery19.jpg",
  "/images/gallery/gallery20.jpg",
  "/images/gallery/gallery21.jpg",
  "/images/gallery/gallery22.jpg",
  "/images/gallery/gallery23.jpg",
  "/images/gallery/gallery24.jpg",
  "/images/gallery/gallery25.jpg",
  "/images/gallery/gallery26.jpg",
  "/images/gallery/gallery27.jpg",

  "/images/gallery/gallery28.jpg",

  "/images/gallery/gallery29.jpg",
  "/images/gallery/gallery30.jpg",

  "/images/gallery/gallery31.jpg",

  "/images/gallery/gallery32.jpg",

  "/images/gallery/gallery33.jpg",

  "/images/gallery/gallery34.jpg",
];

const GalleryOutSourced = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section
      className="text-blue-900 dark:text-white my-12 "
      id="galleryOutSourced"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Mr Phenomenal&apos;s Wedding Occasion - One of Our Outsourced Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryOutSrcImgs.map((galleryPic, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative group aspect-[4/3] w-full bg-white rounded-xl overflow-hidden shadow border border-blue-100 cursor-pointer">
              {/* IMAGE */}

              <Image
                src={galleryPic}
                alt="GalleryPic"
                fill
                onClick={() => setLightboxImg(galleryPic)}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />

              {/* HOVER ACTIONS */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-8">
                  <Link
                    href="/services"
                    className="flex flex-col items-center group/icon"
                  >
                    <CalendarClock
                      size={30}
                      className="text-white group-hover/icon:animate-bounce"
                    />
                    <span className="text-xs text-white mt-1">Book Now</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex flex-col items-center group/icon"
                  >
                    <Phone
                      size={30}
                      className="text-white group-hover/icon:animate-bounce"
                    />
                    <span className="text-xs text-white mt-1">Contact us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={lightboxImg}
              alt="Enlarged"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryOutSourced;
