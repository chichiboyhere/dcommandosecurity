// components/CroppedImageGallery.tsx

import React from "react";
import Image from "next/image";

// interface CroppedImageGalleryProps {
//   images: string[];
//   aspectRatio?: string; // e.g., 'aspect-[3/2]', 'aspect-square', etc.
//   widthClass?: string; // e.g., 'w-48', 'w-64', etc.
// }

// const CroppedImageGallery: React.FC<CroppedImageGalleryProps> = ({
//   images,
//   aspectRatio = "aspect-square",
//   widthClass = "w-48",
// }) => {
//   return (
//     <div className="flex flex-wrap justify-center gap-4">
//       {images.map((src, index) => (
//         <div
//           key={index}
//           className={`${widthClass} ${aspectRatio} overflow-hidden rounded-lg bg-gray-200`}
//         >
//           <img
//             src={src}
//             alt={`Image ${index}`}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

interface CroppedImageGalleryProps {
  images: string[];
  aspectRatio?: string; // e.g. 'aspect-[3/2]', 'aspect-square'
  widthClass?: string; // e.g. 'w-64', 'w-full sm:w-64'
}

const CroppedImageGallery: React.FC<CroppedImageGalleryProps> = ({
  images,
  aspectRatio = "aspect-square",
  widthClass = "w-48",
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((src, index) => (
        <div
          key={index}
          className={`relative ${widthClass} ${aspectRatio} overflow-hidden rounded-lg bg-gray-200`}
        >
          <Image
            src={src}
            alt={`Image ${index}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default CroppedImageGallery;
