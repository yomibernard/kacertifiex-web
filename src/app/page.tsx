import { AboutPreview } from "@/components/home/AboutPreview";
import { ChallengeSection } from "@/components/home/ChallengeSection";
import { ClientAgendaSection } from "@/components/home/ClientAgendaSection";
import { ExecutiveStatement } from "@/components/home/ExecutiveStatement";
import { GlobalCredentialsSection } from "@/components/home/GlobalCredentialsSection";
import { FeaturedInsightSection } from "@/components/home/FeaturedInsightSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactSpotlight } from "@/components/home/ImpactSpotlight";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { InsightsGridSection } from "@/components/home/InsightsGridSection";
import { PeopleSection } from "@/components/home/PeopleSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhySection } from "@/components/home/WhySection";
import { Reveal } from "@/components/layout/Reveal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Reveal>
        <ExecutiveStatement />
      </Reveal>
      <ClientAgendaSection />
      <GlobalCredentialsSection />
      <Reveal>
        <ServicesSection />
      </Reveal>
      <Reveal>
        <ImpactSpotlight />
      </Reveal>
      <InsightsGridSection />
      <Reveal>
        <IndustriesSection />
      </Reveal>
      <Reveal>
        <WhySection />
      </Reveal>
      <FeaturedInsightSection />
      <Reveal>
        <AboutPreview />
      </Reveal>
      <Reveal>
        <PeopleSection />
      </Reveal>
      <Reveal>
        <ChallengeSection />
      </Reveal>
    </>
  );
}
