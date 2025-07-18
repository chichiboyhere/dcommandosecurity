import { Metadata } from "next";
import HeroSection from "@/components/aboutPageSections/HeroAbout";
import HistoryAndAchievements from "@/components/aboutPageSections/HistoryAndAchievements";
import VisionMission from "@/components/aboutPageSections/VisionMission";
import ManagementTeam from "@/components/aboutPageSections/ManagementTeam";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dcommando Security - About Us",
  description: "This is Dcommando security.",
  keywords: ["our story", "our management team", "our core principles"],
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Dcommando Security",
  description:
    "Dcommando Security is a Nigerian private security company offering personal and corporate protection services.",
  mainEntity: {
    "@type": "Organization",
    name: "Dcommando Security",
    url: "https://dcommandosecurity.com",
    foundingDate: "2015-06-01",
    founder: {
      "@type": "Person",
      name: "Emeka James",
    },
    logo: {
      "@type": "ImageObject",
      url: "https://dcommandosecurity.com/logo.png",
    },
  },
};
export default function About() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <div className=" py-10 space-y-20 dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
        <HeroSection />

        <HistoryAndAchievements />

        <VisionMission />

        <ManagementTeam />
      </div>
    </>
  );
}
