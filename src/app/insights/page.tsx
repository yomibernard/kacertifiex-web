import { InsightCard } from "@/components/insights/InsightCard";
import { InsightsHubFeatured } from "@/components/insights/InsightsHubFeatured";
import { InsightsHubSidebar } from "@/components/insights/InsightsHubSidebar";
import { InsightsNewsletterBand } from "@/components/insights/InsightsNewsletterBand";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { getInsight, getInsights, getInsightsHub } from "@/lib/cms";
import type { Insight } from "@/lib/cms/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Partner-authored briefings on Nigerian tax, finance, regulation and market entry for boards and finance leaders.",
};

function groupBySection(
  insights: Insight[],
  categoryMap: Record<string, string>,
  excludeSlug?: string,
) {
  const groups: Record<string, Insight[]> = {};
  for (const item of insights) {
    if (item.slug === excludeSlug) continue;
    const sectionId = categoryMap[item.category] ?? "finance";
    if (!groups[sectionId]) groups[sectionId] = [];
    groups[sectionId].push(item);
  }
  return groups;
}

export default async function InsightsPage() {
  const hub = await getInsightsHub();
  const insights = await getInsights();
  const featured = (await getInsight(hub.featuredSlug)) ?? insights[0];
  const grouped = groupBySection(insights, hub.categoryMap, featured?.slug);

  return (
    <>
      <PageHero
        eyebrow={hub.hero.eyebrow}
        title={hub.hero.title}
        description={hub.hero.description}
        image="/images/hero-strategy.webp"
      />
      {featured && <InsightsHubFeatured insight={featured} />}
      <InsightsNewsletterBand />

      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-8">
            {hub.sections.map((section) => {
              const items = grouped[section.id] ?? [];
              if (items.length === 0) return null;
              return (
                <div key={section.id} id={section.id}>
                  <div className="max-w-2xl">
                    <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-grey">
                      {section.description}
                    </p>
                  </div>
                  <ul className="mt-8 grid gap-8 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item.slug} className={items.length === 1 ? "sm:col-span-2" : ""}>
                        <InsightCard item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="lg:col-span-4">
            <InsightsHubSidebar />
          </div>
        </div>

        <CtaBand
          title="Turn insight into action"
          description="Share your context—we will connect you with a partner who can scope the right tax, finance or international response."
          primaryHref="/contact"
          primaryLabel="Speak to an adviser"
          secondaryHref="/tax-intelligence"
          secondaryLabel="Tax Intelligence Centre"
        />
      </section>
    </>
  );
}
