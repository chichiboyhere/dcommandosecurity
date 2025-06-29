"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, X, Menu, ChevronUp } from "lucide-react";
import CroppedImageGallery from "@/components/CroppedImageGallery";
import AOSInitializer from "@/components/AOSInitializer";
import bg1 from "@/public/bg1.jpg";
import bg2 from "@/public/bg2.jpg";
import bg3 from "@/public/bg3.jpg";
import t1 from "@/public/images/t1.jpg";
import t2 from "@/public/images/t2.jpg";
import t3 from "@/public/images/t3.jpg";
import t4 from "@/public/images/t4.jpg";
import t5 from "@/public/images/t5.jpg";
import t6 from "@/public/images/t6.jpg";
import t7 from "@/public/images/t7.jpg";
import t8 from "@/public/images/t8.jpg";

const imageUrls = [t1, t2, t3, t4, t5, t6, t7, t8];

const slides = [
  {
    title: "Secure. Reliable. Trusted.",
    text: "Your safety is our priority.",
    image: bg1,
  },
  {
    title: "Cutting-edge Surveillance",
    text: "Keeping watch, so you don’t have to.",
    image: bg2,
  },
  {
    title: "24/7 Monitoring",
    text: "Peace of mind, day and night.",
    image: bg3,
  },
];

const testimonials = [
  {
    title: "Solution Driven",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.  A dolores fugiat maiores esse corporis natus nemo hic consequatur impedit molestias.",
    image: bg1,
    person: "John Doe",
  },
  {
    title: "Massively impact business in the positive direction",
    content:
      "consectetur adipisicing elit. Dicta, ex voluptatum delectus molestias, repellat perspiciatis esse ratione neque nihil quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorem eius, consequuntur molestiae nobis eaque mollitia maxime harum!",

    image: bg2,
    person: "Kennedy Oke",
  },
  {
    title: "They are the best at what they do",
    content:
      "perspiciatis esse ratione neque nihil quidem pariatur corporis vel. Enim soluta pariatur unde doloremque dolorum quaerat. A dolores fugiat maiores esse corporis natus nemo hic consequatur impedit molestias.",
    image: bg3,
    person: "Adam baba",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  //const slideRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  const pauseAutoScroll = () =>
    intervalRef.current && clearInterval(intervalRef.current);
  const resumeAutoScroll = () =>
    (intervalRef.current = setInterval(nextSlide, 4000));

  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const toggle = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <div className="text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white text-blue-900 z-55 shadow">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Damion Security</h1>
          <button onClick={() => setMenuOpen(true)}>
            <Menu className="text-blue-900 w-6 h-6" />
          </button>
        </div>
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 p-4 animate-slide-in">
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-6 h-6 text-blue-900" />
            </button>
            <nav className="mt-12 space-y-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <div
                  key={item}
                  className="flex items-center text-blue-900 text-lg"
                >
                  {item}
                  <ChevronRight className="ml-2 w-4 h-4" />
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="pt-20">
        {/* Hero Section */}

        <section
          className="relative overflow-hidden h-[80vh] flex items-center justify-center"
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  {slide.title}
                </h2>
                <p className="mt-4 text-white text-lg">{slide.text}</p>
                <a
                  href="#about"
                  className="mt-6 bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded-full"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
          <button
            className="absolute left-3 md:left-20  top-1/2 transform -translate-y-1/2 z-50"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-15 h-15" strokeWidth={1} />
          </button>
          <button
            className="absolute right-3 md:right-20 top-1/2 transform -translate-y-1/2 z-50"
            onClick={nextSlide}
          >
            <ChevronRight className="w-15 h-15" strokeWidth={1} />
          </button>
          <div className="absolute bottom-4 flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`w-8 h-1 rounded-full ${
                  i === current ? "bg-white" : "bg-white/40"
                }`}
              ></div>
            ))}
          </div>
        </section>

        {/* About Us */}
        <AOSInitializer />
        <section id="about" className="p-8 space-y-12">
          {/* Row 1 */}
          <div
            className="flex flex-col md:flex-row gap-8 items-center md:px-12"
            data-aos="fade-up"
          >
            {/* <div className="w-full md:w-1/2">
              <Image
                src={t4}
                alt="About us"
                className="rounded-xl"
                width={500}
                height={300}
              />
            </div> */}
            <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-160 md:w-160">
              <Image
                src={t4}
                alt="About us"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                About Us
              </h3>
              <p className="text-gray-800">
                We provide top-notch security systems and services that give you
                peace of mind... Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Natus nesciunt similique cum distinctio!
                Veritatis provident minima aperiam. Obcaecati reprehenderit ipsa
                qui similique? Suscipit consectetur nobis non odio dicta nihil
                adipisicing elit. Natus nesciunt similique cum distinctio!
                Veritatis provident minima aperiam. Obcaecati reprehenderit ipsa
                adipisicing elit. Natus nesciunt similique cum distinctio!
                Veritatis provident minima aperiam. Obcaecati reprehenderit ipsa
                qui similique? Suscipit consectetur nobis non odio dicta nihil
                adipisicing elit. Natus nesciunt similique cum distinctio!
                Veritatis provident minima aperiam. Obcaecati reprehenderit ipsa
                qui similique? Suscipit consectetur nobis non odio dicta nihil
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div
            className="flex flex-col md:flex-row-reverse gap-8 items-center md:px-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* <div className="w-full md:w-1/2">
              <Image
                src={t5} // Or bg3
                alt="Our Expertise"
                className="rounded-xl"
                width={500}
                height={300}
              />
            </div> */}
            <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-160 md:w-160">
              <Image
                src={t5}
                alt="Our Expertise"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Our Expertise
              </h3>
              <p className="text-gray-800">
                From residential to corporate security solutions, we bring...
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laudantium numquam culpa, eveniet reiciendis dis
                dignissimos, necessitatibus provident iste nesciunt, quae qui
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laudantium numquam culpa, eveniet reiciendis dis
                dignissimos, necessitatibus provident iste nesciunt, quae qui
                Inventore laudantium numquam culpa, eveniet reiciendis dis
                dignissimos, necessitatibus provident iste nesciunt, quae qui
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore laudantium numquam culpa, eveniet reiciendis dis
                dignissimos, necessitatibus provident iste nesciunt, quae qui
                nam aspernatur maiores libero laborum omnis illo architecto
                beatae?
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <AOSInitializer />
        <section className="p-8 bg-gray-100 text-blue-900">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-110"
              >
                <div className="bg-white rounded-xl p-4 shadow border border-blue-100 overflow-hidden relative aspect-[4/3] w-full sm:w-120 md:w-90">
                  <Image
                    src={testimonial.image}
                    alt="Testimonial"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="text-lg font-bold my-4">{testimonial.title}</h4>
                <p>{testimonial.content}</p>
                <p className="mt-4 font-semibold">- {testimonial.person}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Gallery section */}
        <section className="p-8 bg-gray-100 text-blue-900">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Client Image Gallery
          </h1>
          <CroppedImageGallery
            images={imageUrls}
            aspectRatio="aspect-[4/3]"
            widthClass="w-full sm:w-100 md:w-75"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-8 relative">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg1.jpg')" }}
        ></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {["Company", "Services", "Support", "Contact"].map((section) => (
            <div key={section}>
              <h4 className="font-bold mb-2">{section}</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae, ducimus, a nesciunt sint obcaecati minima possimus
                  alias laboriosam ea odio voluptatum earum non eos iure iste
                  consectetur eaque hic! Consequuntur?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore autem rem tenetur laborum qui harum itaque, corrupti
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Natus, accusantium dignissimos, eligendi quam amet aspernatur
                </li>
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {showScrollTop && (
        <button
          className="fixed bottom-6 right-6 bg-yellow-400 p-2 rounded-full text-blue-900 shadow-lg cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
}
