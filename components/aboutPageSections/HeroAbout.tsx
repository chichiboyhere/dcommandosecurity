import Image from "next/image";
import abtUs from "@/public/images/about/aboutUs.jpg";

const HeroSection = () => {
  const aboutUsMenu = [
    { id: "ourStory", msg: "Our Story" },
    { id: "ourGoals", msg: "Our Goals" },
    { id: "ourManagement", msg: "Our Management" },
  ];
  return (
    <section className="relative overflow-hidden h-[100vh]  flex items-center justify-center dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
      <div
        className="absolute  top-0 left-0 w-full h-full transition-opacity duration-1000 
             opacity-100 z-10"
      >
        <Image
          src={abtUs}
          alt="about us"
          fill
          className="object-cover md:object-top brightness-50 scale-x-[-1] "
        />
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h2
            className="text-5xl md:text-5xl font-bold text-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            About Us
          </h2>md:grid-cols-2 className="absolute top-[45vh] right-[300px]"
        </div> */}
        <div className="flex flex-col  p-4 z-20 items-center justify-center relative ">
          <div className="absolute top-[30vh]">
            <h2
              className="text-5xl md:text-6xl font-bold text-white"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              About us
            </h2>
          </div>

          <div
            className="rounded-3xl bg-white/60 mt-20 md:w-96 absolute top-[40vh] w-80"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {aboutUsMenu.map((menu, index) => (
              <a
                key={index}
                href={`#${menu.id}`}
                className={`block text-blue-900 text-xl font-semibold text-center p-3 transition duration-300 hover:text-blue-600 ${
                  index === aboutUsMenu.length - 1
                    ? ""
                    : "border-b border-blue-300"
                }`}
              >
                {menu.msg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
