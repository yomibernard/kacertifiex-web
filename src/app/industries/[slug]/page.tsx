import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { industryDetails } from "@/lib/industry-details";
import { industries, services } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  const detail = industryDetails[slug];
  if (!industry || !detail) return {};
  return {
    title: industry.title,
    description: detail.heroDescription,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  const detail = industryDetails[slug];
  if (!industry || !detail) notFound();

  const relatedServices = detail.relatedServiceSlugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.title}
        description={detail.heroDescription}
        image={industry.image}
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <p className="text-lg leading-relaxed text-grey sm:text-xl">{detail.intro}</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                What leaders in this sector face
              </h2>
              <ul className="mt-6 space-y-4">
                {detail.challenges.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-grey-light pb-4 text-base leading-relaxed text-grey last:border-0"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">
                How we create advantage
              </h2>
              <ul className="mt-8 space-y-8">
                {detail.priorities.map((item, index) => (
                  <li key={item.title} className="border-l-2 border-gold pl-6">
                    <span className="font-display text-sm font-bold text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-grey">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal">
                Related capabilities
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {relatedServices.map((svc) =>
                  svc ? (
                    <li key={svc.slug}>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="card-premium block p-5 transition-colors hover:ring-gold/30"
                      >
                        <span className="font-display text-sm font-semibold text-navy">
                          {svc.title}
                        </span>
                        <p className="mt-2 text-sm text-grey">{svc.summary}</p>
                      </Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-sm bg-navy-deep p-8 text-white lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Sector team
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold">
                Partner-led advice from Lagos
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Share your mandate—regulatory, transaction or performance—and we will
                connect you with the partner best placed to respond within one business
                day.
              </p>
              <div className="mt-8 space-y-3">
                <Link
                  href="/book-consultation"
                  className="flex w-full items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
                >
                  Book consultation →
                </Link>
                <Link
                  href="/case-studies"
                  className="flex w-full items-center justify-center rounded-sm border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  See client results
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <CtaBand
          title={`Discuss ${industry.title.toLowerCase()} with a partner`}
          description="Brief us on your organisation, timeline and outcome—we will propose a scoped way to start."
          primaryHref="/contact"
          primaryLabel="Contact Lagos office"
          secondaryHref="/people"
          secondaryLabel="Meet leadership"
        />
      </section>
    </>
  );
}
