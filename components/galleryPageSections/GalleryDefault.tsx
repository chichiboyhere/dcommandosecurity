"use client";

import Image from "next/image";
import { Phone, CalendarClock, X } from "lucide-react";
import { useState } from "react";
import { galleryInfo } from "@/data/galleryDefaultData";
import Link from "next/link";

const GalleryDefault = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section
      className="text-blue-900 my-12 dark:text-[#ffffffcf] bg-white dark:bg-gray-800"
      id="galleryDefault"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Client Image Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryInfo.map((galleryPic, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative group aspect-[4/3] w-full bg-white rounded-xl overflow-hidden shadow border border-blue-100 cursor-pointer">
              {/* IMAGE */}

              <Image
                src={galleryPic.image}
                alt="GalleryPic"
                fill
                onClick={() => setLightboxImg(galleryPic.image)}
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

            {/* DESCRIPTION */}
            <p className="text-gray-700 italic text-sm my-4 dark:text-[#ffffffcf]">
              {galleryPic.desc}
            </p>
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

export default GalleryDefault;
