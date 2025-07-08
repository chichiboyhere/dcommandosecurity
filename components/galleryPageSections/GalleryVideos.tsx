// const galleryVids = ["/videos/galleryVid1.mp4", "/videos/galleryVid2.mp4"];

// const GalleryVideos = () => {
//   return (
//     <section
//       className="p-8 bg-gray-100 text-blue-900 my-12 shadow-md"
//       id="galleryVideos"
//     >
//       <h1 className="text-4xl font-bold mb-8 text-center">
//         Videos on Damion Security at Work
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {galleryVids.map((vid, index) => (
//           <video
//             key={vid}
//             controls
//             preload="metadata"
//             className="w-full h-auto rounded-lg shadow-md"
//             poster={`/videos/thumb${index + 1}.jpg`} // Optional thumbnail
//           >
//             <source src={vid} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GalleryVideos;

"use client";
import { useState } from "react";

const galleryVids = [
  {
    video: "galleryVid1.mp4",
    desc: "Dcommando Security at Regency Hall, Ikeja, Lagos.",
  },
  {
    video: "galleryVid2.mp4",
    desc: "Dcommando Security at Marcelina, GRA, Ikeja, Lagos for a wedding reception.",
  },
  {
    video: "galleryVid3.mp4",
    desc: "We were on crowd control duty at Next Level Prayer Conference at Tafa Balewa Square(TBH), Lagos.",
  },
  { video: "galleryVid4.mp4", desc: "Luxurious Maybach, for hire." },
  {
    video: "galleryVid5.mp4",
    desc: " Toyota Prado for airport pick up with escort van.",
  },
  {
    video: "galleryVid6.mp4",
    desc: "Dcommando Security recreating 'Coming to America' for the popular Charles Okorocha's wife(aka Mr Phenomenal) at Regency Hall, Ikeja, Lagos.",
  },
  {
    video: "galleryVid7.mp4",
    desc: "We were on ground to cover Charles Okorocha's wedding reception.",
  },
]; // Add more if needed

const GalleryVideos = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="text-blue-900 my-12" id="galleryVideos">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Videos of Dcommando Security at Work
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryVids.map((vid, index) => (
          <div
            key={vid.video}
            onClick={() => setActiveVideo(`/videos/${vid.video}`)}
            className="cursor-pointer group"
          >
            <video
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
              poster={`/videos/thumb${index + 1}.jpg`}
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            >
              <source src={`/videos/${vid.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-700 italic text-sm my-4">
              {galleryVids[index].desc}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10 hover:scale-110 transition"
              onClick={() => setActiveVideo(null)}
            >
              &times;
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryVideos;
