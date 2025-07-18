import { Metadata } from "next";
import ContactHero from "@/components/contactPageSections/ContactHero";
import ContactPage from "@/components/contactPageSections/Contact";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dcommando Security - Contact",
  description: "Reach out to us for any inquiries on security.",
  keywords: ["security services in Nigeria"],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dcommando Security",
  image: "https://dcommandosecurity.com/logo.png",
  telephone: "+234-703-822-3500",
  email: "info@dcommandosecurity.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "14 Faosat Somade Street, Bako Estate, Irawo, Mile 12, Lagos State, Nigeria.",
    addressLocality: "Lagos",
    addressRegion: "LA",
    postalCode: "100001",
    addressCountry: "NG",
  },
  url: "https://dcommandosecurity.com/contact",
  openingHours: "Mo-Fr 09:00-17:00",
  sameAs: ["https://www.instagram.com/dcommandoeventsecurity_backup"],
};
const Contact = () => {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <ContactHero />
      <ContactPage />
    </>
  );
};

export default Contact;
