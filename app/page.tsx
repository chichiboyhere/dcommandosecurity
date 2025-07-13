import HeroSection from "@/components/indexPageSections/HeroSection";

import ServicesSection from "@/components/indexPageSections/ServicesSection";
import AboutSection from "@/components/indexPageSections/AboutSection";
import AOSInitializer from "@/components/AOSInitializer";
import Testimonial from "@/components/indexPageSections/Testimonial";
import ClientMarquee from "@/components/indexPageSections/ClientMarquee";
import GallerySlideSection from "@/components/indexPageSections/GallerySection";

import BlogSection from "@/components/indexPageSections/BlogSection";

export default function Home() {
  return (
    <div className="text-white">
      {/* Main */}
      <main className="pt-20">
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
