import Image from "next/image";

const clients = [
  "/images/clientsicons/hicc.png",
  "/images/clientsicons/sony.png",
  "/images/clientsicons/plumeperfection.png",
  "/images/clientsicons/lydiaHall.jpg",
  "/images/clientsicons/cricketAssociationNgr.png",
  "/images/clientsicons/eventsbychoc.png",
  "/images/clientsicons/droomLodge.png",
  "/images/clientsicons/v&j.png",
];

export default function ClientMarquee() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-5 dark:text-white">
        Here are just a few of the brands we have worked with
      </h2>

      <div className="relative overflow-hidden w-full h-[150px]  bg-white dark:bg-gray-800">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 h-full w-8 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-8 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="w-full h-full flex items-center">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...clients, ...clients, ...clients, ...clients].map((src, i) => (
              <Image
                key={`client-${i}`}
                src={src}
                alt={`Client ${i % clients.length}`}
                height={150}
                className="h-[150px] w-auto object-contain"
                width={250}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
