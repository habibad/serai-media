import { Header } from "@/components/Header";
import { Hero, ProofStrip } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { ServicesSection } from "@/components/ServicesSection";
import {
  FinalCTA,
  PositioningSection,
  ProofSection,
} from "@/components/Sections";
import { ApplySection } from "@/components/ApplySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-paper">
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <StorySection />
        <ServicesSection />
        <PositioningSection />
        <ProofSection />
        <ApplySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
