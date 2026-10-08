import { InsightCard } from "@/components/insights/InsightCard";
import type { Insight } from "@/lib/cms/types";

export function RelatedInsights({
  items,
  title = "Related briefings",
}: {
  items: Insight[];
  title?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mt-16 border-t border-grey-light pt-16">
      <h2 className="font-display text-2xl font-semibold text-charcoal">{title}</h2>
      <ul className="mt-8 grid gap-8 md:grid-cols-2">
        {items.map((item) => (
          <li key={item.slug}>
            <InsightCard item={item} variant="horizontal" />
          </li>
        ))}
      </ul>
    </section>
  );
}
