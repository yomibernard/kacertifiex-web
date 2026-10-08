import { Button } from "@/components/ui/Button";
import { getHomeContent, getInsight } from "@/lib/cms";
import Image from "next/image";
import Link from "next/link";

export async function FeaturedInsightSection() {
  const home = await getHomeContent();
  const insight = await getInsight(home.featuredInsightSlug);
  if (!insight) return null;

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 opacity-40">
        <Image src={insight.image} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="hero-gradient-soft absolute inset-0" aria-hidden />
      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Featured insight · {insight.category}
            </p>
            <h2 className="font-editorial mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {insight.title}
            </h2>
            {insight.excerpt && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {insight.excerpt}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`/insights/${insight.slug}`} variant="primary">
                Read briefing →
              </Button>
              <Link
                href="/tax-intelligence"
                className="inline-flex items-center text-sm font-semibold text-white/90 hover:text-gold"
              >
                Tax Intelligence Centre
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-white/70">
              Research and commentary from KACERTIFIEX partners—grounded in Nigerian
              regulation, written for boards and finance teams who need to act.
            </p>
            {insight.date && (
              <p className="mt-4 text-xs uppercase tracking-wide text-white/50">
                {insight.date}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
