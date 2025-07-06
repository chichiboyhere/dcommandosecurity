"use client";

import Image from "next/image";
import servicesHero from "@/public/images/services/servicesHero.jpg";
import { services } from "@/data/servicesData";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-[100vh] flex items-center justify-center">
      <div className="w-full h-full z-10 relative flex items-center justify-center">
        <Image
          src={servicesHero}
          alt="about us"
          fill
          className="object-cover md:object-top brightness-50"
        />

        <div className="grid md:grid-cols-2 gap-10 p-4 z-20 items-center justify-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-white"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Our Services
          </h2>

          <div
            className="rounded-3xl bg-white/60 mt-20"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {services.map((service, index) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={`block text-blue-900 text-xl font-semibold text-center p-3 transition duration-300 hover:text-blue-600 ${
                  index === services.length - 1
                    ? ""
                    : "border-b border-blue-300"
                }`}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
