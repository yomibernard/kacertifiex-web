import { LandingScrollGallery } from "@/components/home/LandingScrollGallery";
import { SectionIntro } from "@/components/layout/SectionIntro";
import Link from "next/link";

export function IndustriesSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Industries"
          title="Sector perspective where it matters"
          description="Teams that understand the economics, regulation and capital cycles of Nigeria's most active industries."
        />
        <LandingScrollGallery />
        <p className="mt-6 text-sm text-grey">
          Scroll pauses on hover. Tap a sector—or start with{" "}
          <Link href="/international" className="font-semibold text-navy hover:text-gold">
            Nigeria market entry
          </Link>
          .
        </p>
        <Link
          href="/industries"
          className="mt-6 inline-flex text-sm font-semibold text-navy hover:text-gold"
        >
          All industries →
        </Link>
      </div>
    </section>
  );
}
