import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { getCaseStudies } from "@/lib/cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Representative client outcomes from KACERTIFIEX tax, finance and consulting engagements in Nigeria.",
};

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();

  return (
    <>
      <PageHero
        eyebrow="Client results"
        title="Impact you can explain in the boardroom"
        description="Anonymised examples of how partner-led teams reduce tax exposure, strengthen reporting and prepare companies for investment."
        image="/images/service-audit.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <p className="max-w-3xl rounded-sm border border-gold/25 bg-grey-light/80 p-5 text-sm leading-relaxed text-grey">
          These stories are{" "}
          <span className="font-semibold text-charcoal">representative</span> of our
          work—composite or anonymised for confidentiality. They illustrate patterns,
          not guaranteed outcomes for your business.
        </p>
        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {studies.map((study) => (
            <li key={study.slug}>
              <CaseStudyCard study={study} />
            </li>
          ))}
        </ul>

        <CtaBand
          title="Facing a similar challenge?"
          description="Brief us on your industry, timeline and outcome—we will propose a partner-led way to start."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/insights"
          secondaryLabel="Read insights"
        />
      </section>
    </>
  );
}
