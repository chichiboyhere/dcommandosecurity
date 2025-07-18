import { Metadata } from "next";
import HeroSection from "@/components/servicesPageSections/ServicesHero";
import Services from "@/components/servicesPageSections/Services";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Damion Security - Services",
  description: "We are the leading company for security services.",
  keywords: [
    "crowd control services",
    "event bouncers",
    "bodyguards",
    "ushering services",
    "security guard services",
    "car rental and airport pick-up",
    "security vendor sourcing",
    "escort and convoy services",
    "cyber security",
    "surveillance services",
  ],
};
export default function ServicesSection() {
  const servicesJsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "Organization",
      name: "Damion Security",
      url: "https://damionsecurity.com",
      logo: {
        "@type": "ImageObject",
        url: "https://damionsecurity.com/logo.png",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: service.icon, // You can modify this to be more descriptive
    url: `https://damionsecurity.com/services#${service.id}`,
  }));

  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <div className=" py-10 space-y-20 dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
        <HeroSection />
        <Services />
      </div>
    </>
  );
}
