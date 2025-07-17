import about1 from "@/public/images/about/about1.jpg";
import about2 from "@/public/images/about/about2.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="p-8 space-y-12 dark:text-[#ffffffcf] bg-white dark:bg-gray-800"
    >
      {/* Row 1 */}
      <div
        className="flex flex-col md:flex-row gap-8 items-center md:px-12"
        data-aos="fade-up"
      >
        <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-160 md:w-160">
          <Image
            src={about1}
            alt="About us"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">
            About Us
          </h3>
          <p className="text-gray-800 text-xl dark:text-[#ffffffcf]">
            We provide top-notch security systems and services that give you
            peace of mind. At the heart of our success lies innovation.
            Dcommando Security embraces modern technology to proactively tackle
            security threats—deploying AI-driven surveillance, drone
            reconnaissance, GPS-enabled patrol systems, and mobile apps for
            real-time incident reporting. This tech-forward approach has allowed
            us to prevent crime, improve response time, and ensure transparent
            service delivery in a fast-evolving threat landscape.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div
        className="flex flex-col md:flex-row-reverse gap-8 items-center md:px-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="bg-white rounded-xl md: p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-160 md:w-160">
          <Image
            src={about2}
            alt="Our Expertise"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">
            Our Expertise
          </h3>
          <p className="text-gray-800 text-xl dark:text-[#ffffffcf]">
            From residential to corporate security solutions, we bring services
            that safe-guard your interest on all fronts. Our services cover
            escort, personal protection and security of your work-environment,
            event center, club, and more so you can focus on what you have to
            do. We deploy gallant and well-trained security personnel who know
            their onions in the world of safe-guarding people and properties. No
            matter the occasion or location, we are one call away from coming
            around to ensure all goes as planed.
            <Link href="/about"> Learn more</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
