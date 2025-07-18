import { Metadata } from "next";
import HeroSection from "@/components/indexPageSections/HeroSection";
import ServicesSection from "@/components/indexPageSections/ServicesSection";
import AboutSection from "@/components/indexPageSections/AboutSection";
import AOSInitializer from "@/components/AOSInitializer";
import Testimonial from "@/components/indexPageSections/Testimonial";
import ClientMarquee from "@/components/indexPageSections/ClientMarquee";
import GallerySlideSection from "@/components/indexPageSections/GallerySection";

import BlogSection from "@/components/indexPageSections/BlogSection";

export const metadata: Metadata = {
  title: "Dcommando Security - Home page",
  description: "Your sure plug for security services in Nigeria.",
  keywords: [
    "security",
    "security services",
    "event bouncers",
    "bodyguard providers",
    "ushering services",
  ],
};
export default function Home() {
  return (
    <div className="text-white dark:bg-gray-800">
      {/* Main */}
      <main className="pt-16">
        <HeroSection />

        <AOSInitializer />
        <AboutSection />

        <ServicesSection />
        <GallerySlideSection />
        <Testimonial />
        <section className="my-16">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Our Clients
          </h2>
          <ClientMarquee />
        </section>
        {/* Blogs */}
        <AOSInitializer />

        <BlogSection />
      </main>
    </div>
  );
}
