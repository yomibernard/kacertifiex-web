import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { getInsight, getInternationalContent } from "@/lib/cms";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "International Business",
  description:
    "Nigeria market entry—CAC setup, tax registration, compliance and partner-led finance for foreign investors.",
};

export default async function InternationalPage() {
  const content = await getInternationalContent();
  const featured = await getInsight(content.featuredInsightSlug);

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        image="/images/hero-strategy.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <p className="max-w-3xl text-lg leading-relaxed text-grey sm:text-xl">
          {content.intro}
        </p>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-charcoal">
            How we sequence market entry
          </h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-sm bg-charcoal/10 sm:grid-cols-2">
            {content.phases.map((phase, index) => (
              <li key={phase.title} className="bg-white">
                <Link
                  href={phase.href}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-navy-deep hover:text-white lg:p-10"
                >
                  <span className="font-display text-sm font-bold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-charcoal group-hover:text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-grey group-hover:text-white/80">
                    {phase.description}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-navy group-hover:text-gold">
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              What we help you navigate
            </h2>
            <ul className="mt-8 space-y-6">
              {content.topics.map((topic) => (
                <li key={topic.title} className="border-l-2 border-gold pl-6">
                  <h3 className="font-display font-semibold text-navy">{topic.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-grey">{topic.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-sm bg-navy-deep p-8 text-white lg:sticky lg:top-28">
              <h2 className="font-display text-xl font-semibold">Cross-border corridors</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                We structure advice around your home jurisdiction while KACERTIFIEX leads
                Nigeria execution.
              </p>
              <ul className="mt-6 space-y-4">
                {content.corridors.map((c) => (
                  <li key={c.label}>
                    <p className="font-semibold text-gold">{c.label}</p>
                    <p className="mt-1 text-sm text-white/75">{c.note}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 flex w-full items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
              >
                Speak to international desk →
              </Link>
            </div>
          </aside>
        </div>

        {featured && (
          <div className="card-premium mt-16 p-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                Featured briefing
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-charcoal">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="mt-3 text-sm leading-relaxed text-grey">{featured.excerpt}</p>
              )}
            </div>
            <Link
              href={`/insights/${featured.slug}`}
              className="mt-6 inline-flex shrink-0 text-sm font-semibold text-navy hover:text-gold lg:mt-0"
            >
              Read article →
            </Link>
          </div>
        )}

        <CtaBand
          title="Planning Nigeria entry or expansion?"
          description="Book a discovery call—we will outline entity, tax and finance steps for your timeline."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/services/tax-regulatory-advisory"
          secondaryLabel="Tax practice"
        />
      </section>
    </>
  );
}
