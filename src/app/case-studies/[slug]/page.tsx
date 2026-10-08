import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CaseStudyJsonLd } from "@/components/seo/CaseStudyJsonLd";
import { getCaseStudies, getCaseStudy } from "@/lib/cms";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) return { title: "Case study" };
  return {
    title: study.title,
    description: study.summary ?? study.outcome,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  const others = (await getCaseStudies()).filter((s) => s.slug !== slug).slice(0, 2);

  const sections = [
    { label: "Challenge", body: study.challenge },
    { label: "Our approach", body: study.approach },
    { label: "Outcome", body: study.outcome },
  ];

  return (
    <>
      <CaseStudyJsonLd study={study} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ]}
      />
      <PageHero
        eyebrow={`Client result · ${study.industry}`}
        title={study.title}
        description={study.summary}
        image="/images/service-consulting.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Link
              href="/case-studies"
              className="text-sm font-semibold text-navy hover:text-gold"
            >
              ← All client results
            </Link>

            <p className="mt-8 rounded-sm border border-gold/30 bg-gold/5 p-5 text-sm leading-relaxed text-grey">
              Representative engagement pattern based on KACERTIFIEX work with Nigerian
              clients. Names and figures are anonymised or composite; not a guarantee of
              future results.
            </p>

            <ol className="mt-12 space-y-10">
              {sections.map((section, index) => (
                <li key={section.label} className="border-l-2 border-gold pl-6">
                  <span className="font-display text-sm font-bold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-1 font-display text-xl font-semibold text-charcoal">
                    {section.label}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-grey sm:text-lg">
                    {section.body}
                  </p>
                </li>
              ))}
            </ol>

            {study.metric && (
              <p className="mt-10 font-display text-lg font-semibold text-navy">
                {study.metric}
              </p>
            )}

            {others.length > 0 && (
              <div className="mt-16 border-t border-grey-light pt-16">
                <h2 className="font-display text-2xl font-semibold text-charcoal">
                  More client results
                </h2>
                <ul className="mt-8 grid gap-8 md:grid-cols-2">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <CaseStudyCard study={s} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-sm bg-navy-deep p-8 text-white lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Discuss your mandate
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Share your challenge in confidence. A partner will respond with scope,
                team and indicative next steps.
              </p>
              <Link
                href="/contact"
                className="mt-6 flex w-full items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
              >
                Speak to an adviser →
              </Link>
              {study.industrySlug && (
                <Link
                  href={`/industries/${study.industrySlug}`}
                  className="mt-3 flex w-full items-center justify-center rounded-sm border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {study.industry} perspective
                </Link>
              )}
            </div>
          </aside>
        </div>

        <CtaBand
          title="Ready for a similar outcome?"
          description="Book a consultation or send a brief overview—we route you to the right practice lead in Lagos."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/case-studies"
          secondaryLabel="All case studies"
        />
      </section>
    </>
  );
}
