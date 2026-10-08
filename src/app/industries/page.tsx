import { PageHero } from "@/components/layout/PageHero";
import { industryDetails } from "@/lib/industry-details";
import { industries } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sector-focused tax, finance and advisory for financial services, energy, real estate, technology, consumer and manufacturing in Nigeria.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Perspective where your sector is moving"
        description="We combine regulatory depth with industry economics—so advice reflects how your business earns revenue, uses capital and manages risk."
        image="/images/industry-general.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <ul className="grid gap-8 lg:grid-cols-2">
          {industries.map((industry) => {
            const detail = industryDetails[industry.slug];
            return (
              <li key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="card-premium group flex h-full flex-col overflow-hidden md:flex-row"
                >
                  <div className="relative aspect-[16/10] md:aspect-auto md:w-2/5 md:min-h-[240px]">
                    <Image
                      src={industry.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="400px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h2 className="font-display text-xl font-semibold text-charcoal group-hover:text-navy">
                      {industry.title}
                    </h2>
                    {detail && (
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">
                        {detail.heroDescription}
                      </p>
                    )}
                    <span className="mt-5 text-sm font-semibold text-navy group-hover:text-gold">
                      Sector perspective →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
