import ExpertiseSection from "@/components/ExpertiseSection/ExpertiseSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/hero-section";
import InfrastructureSection from "@/components/Introduction/InfrastructureSection";
import JankalGroupStatistics from "@/components/StatisticsSection/JankalGroupStatistics";
import Tagline from "@/components/Tagline/Tagline";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <InfrastructureSection/>
    <ExpertiseSection/>
    <JankalGroupStatistics/>
    <Tagline/>
    <Footer/>
   </div>
  );
}
