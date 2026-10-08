import { InsightBody } from "@/components/insights/InsightBody";
import { InsightKeyTakeaways } from "@/components/insights/InsightKeyTakeaways";
import { RelatedInsights } from "@/components/insights/RelatedInsights";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { getInsight, getInsights } from "@/lib/cms";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return { title: "Insight" };
  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();

  const all = await getInsights();
  const related = all
    .filter((i) => i.slug !== slug && i.category === insight.category)
    .slice(0, 2);
  const fallbackRelated =
    related.length >= 2
      ? related
      : all.filter((i) => i.slug !== slug).slice(0, 2);

  const metaLine = [
    insight.category,
    insight.date,
    insight.readMinutes ? `${insight.readMinutes} min read` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <PageHero
        eyebrow="Insight"
        title={insight.title}
        description={insight.excerpt}
        image={insight.image}
      />
      <article className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Link
              href="/insights"
              className="text-sm font-semibold text-navy hover:text-gold"
            >
              ← Insights centre
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold">
              {metaLine}
            </p>

            {insight.keyTakeaways && insight.keyTakeaways.length > 0 && (
              <div className="mt-8">
                <InsightKeyTakeaways items={insight.keyTakeaways} />
              </div>
            )}

            <div className="mt-10">
              <InsightBody sections={insight.body} />
            </div>

            <p className="mt-12 rounded-sm border border-grey-light bg-grey-light/50 p-5 text-sm leading-relaxed text-grey">
              General information only—not tax, legal, or investment advice. For guidance
              specific to your business, contact KACERTIFIEX under an engagement or
              discovery discussion.
            </p>

            <RelatedInsights items={fallbackRelated} />
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-sm bg-navy-deep p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Discuss this briefing
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  Our partners can walk your board or finance team through implications
                  and a practical action plan.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 flex w-full items-center justify-center rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
                >
                  Speak to an adviser →
                </Link>
              </div>
              <div className="card-premium p-6">
                <p className="font-display text-sm font-semibold text-charcoal">
                  Tax Intelligence Centre
                </p>
                <p className="mt-2 text-sm text-grey">
                  Deadlines and compliance notes to pair with this article.
                </p>
                <Link
                  href="/tax-intelligence"
                  className="mt-4 inline-flex text-sm font-semibold text-navy hover:text-gold"
                >
                  Open centre →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <CtaBand
          title="Apply this to your business"
          description="Our tax and finance partners translate regulatory change into an action plan for your board and finance team."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/tax-intelligence"
          secondaryLabel="Tax Intelligence Centre"
        />
      </article>
    </>
  );
}
