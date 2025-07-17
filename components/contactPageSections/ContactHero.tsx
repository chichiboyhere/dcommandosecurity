import Image from "next/image";
import contact from "@/public/images/contact/contact.jpg";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden h-[100vh]  flex items-center justify-center dark:text-[#ffffffcf] bg-white dark:bg-gray-800 ">
      <div
        className="absolute  top-0 left-0 w-full h-full transition-opacity duration-1000 
             opacity-100 z-10"
      >
        <Image
          src={contact}
          alt="about us"
          fill
          className="object-cover md:object-top brightness-50"
        />

        <div className="flex flex-col  p-4 z-20 items-center justify-center relative">
          <div className="absolute top-[70vh]">
            <h2
              className="text-5xl md:text-6xl font-bold text-white"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Contact us
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
