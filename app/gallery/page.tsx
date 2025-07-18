import { Metadata } from "next";
import GalleryDefault from "@/components/galleryPageSections/GalleryDefault";
import GalleryOutSourced from "@/components/galleryPageSections/GalleryOutSourced";
import GalleryVideos from "@/components/galleryPageSections/GalleryVideos";

export const metadata: Metadata = {
  title: "Dcommando Security - Gallery",
  description:
    "Take a look at some of our work captured in pictres and videos.",
  keywords: [
    "crowd control services",
    "event bouncers",
    "bodyguards",
    "ushering services",
    "security guard services",
    "car rental and airport pick-up",
    "security vendor sourcing",
    "escort and convoy services",
    "cyber security",
    "surveillance services",
  ],
};

const Gallery = () => {
  return (
    <div className=" px-8 py-12 bg-gray-100 shadow-md dark:bg-gray-800 ">
      <GalleryDefault />
      <GalleryOutSourced />
      <GalleryVideos />
    </div>
  );
};

export default Gallery;
