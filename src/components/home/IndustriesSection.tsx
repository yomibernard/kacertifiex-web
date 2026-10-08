import { SectionIntro } from "@/components/layout/SectionIntro";
import { industries } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";

export function IndustriesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Industries"
          title="Sector perspective where it matters"
          description="Teams that understand the economics, regulation and capital cycles of Nigeria's most active industries."
        />
        <div className="mt-12 flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative min-w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-sm sm:min-w-[320px]"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
                <span className="absolute bottom-6 left-6 right-6 font-display text-xl font-semibold text-white">
                  {industry.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/industries"
          className="mt-8 inline-flex text-sm font-semibold text-navy hover:text-gold"
        >
          All industries →
        </Link>
      </div>
    </section>
  );
}
