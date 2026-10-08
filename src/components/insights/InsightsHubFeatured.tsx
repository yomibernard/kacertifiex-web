import { Button } from "@/components/ui/Button";
import type { Insight } from "@/lib/cms/types";
import Image from "next/image";
export function InsightsHubFeatured({ insight }: { insight: Insight }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 opacity-35">
        <Image src={insight.image} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="hero-gradient-soft absolute inset-0" aria-hidden />
      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Featured briefing · {insight.category}
            </p>
            <h2 className="font-editorial mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {insight.title}
            </h2>
            {insight.excerpt && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {insight.excerpt}
              </p>
            )}
            <p className="mt-4 text-xs uppercase tracking-wide text-white/55">
              {insight.date}
              {insight.readMinutes ? ` · ${insight.readMinutes} min read` : ""}
            </p>
            <div className="mt-8">
              <Button href={`/insights/${insight.slug}`} variant="primary">
                Read full briefing →
              </Button>
            </div>
          </div>
          {insight.keyTakeaways && insight.keyTakeaways.length > 0 && (
            <div className="rounded-sm border border-white/15 bg-white/5 p-6 backdrop-blur-sm lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Key takeaways
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/85">
                {insight.keyTakeaways.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-gold" aria-hidden>
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
