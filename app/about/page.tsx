import HeroSection from "@/components/aboutPageSections/HeroAbout";
import HistoryAndAchievements from "@/components/aboutPageSections/HistoryAndAchievements";
import VisionMission from "@/components/aboutPageSections/VisionMission";
import ManagementTeam from "@/components/aboutPageSections/ManagementTeam";
export default function About() {
  return (
    <div className=" py-10 space-y-20">
      <HeroSection />

      <HistoryAndAchievements />

      <VisionMission />

      <ManagementTeam />
    </div>
  );
}
