import Image from "next/image";
const HistoryAndAchievements = () => {
  return (
    <section id="ourStory" className="md:px-16  px-4 ">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div className="text-black">
          <h2 className="text-5xl font-bold text-blue-900 my-6 dark:text-white">
            Our story in an evolving world
          </h2>
          <p className="mb-4 text-xl dark:text-[#ffffffcf]">
            Dcommando Security was established in 2015 as a private security
            firm with a bold vision to redefine safety across Nigeria. What
            began as a modest patrol unit in Lagos has evolved into a national
            force.
          </p>
          <p className="mb-4 text-xl dark:text-[#ffffffcf]">
            Dcommando Security embraces modern technology to proactively tackle
            security threats—deploying AI-driven surveillance, drones, GPS
            patrols, and real-time incident reporting.
          </p>
        </div>
        <div
          className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-160 md:w-120"
          data-aos="fade-up"
        >
          <Image
            src={"/images/gallery/gallery7.jpg"}
            alt="About us"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div className="text-black">
          <h2 className="text-5xl font-bold text-blue-900 my-6 dark:text-white">
            We collaborate with big brands to bring about innovative security
            measures
          </h2>
          <p className="mb-4 text-xl dark:text-[#ffffffcf]">
            Our journey includes partnerships with multinationals and deployment
            of thousands of personnel nationwide. We’ve served sectors including
            oil & gas, finance, and estates.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-160 md:w-120">
          <Image
            src={"/images/gallery/gallery2.jpg"}
            alt="About us"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default HistoryAndAchievements;
