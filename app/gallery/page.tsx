import GalleryDefault from "@/components/galleryPageSections/GalleryDefault";
import GalleryOutSourced from "@/components/galleryPageSections/GalleryOutSourced";
import GalleryVideos from "@/components/galleryPageSections/GalleryVideos";
const Gallery = () => {
  return (
    <div className=" p-8 bg-gray-100 shadow-md dark:bg-gray-800">
      <GalleryDefault />
      <GalleryOutSourced />
      <GalleryVideos />
    </div>
  );
};

export default Gallery;
