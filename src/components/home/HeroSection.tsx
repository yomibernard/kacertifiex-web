import { HeroBackground } from "@/components/home/HeroBackground";
import { Button } from "@/components/ui/Button";
import { brand, stats } from "@/lib/site-config";
import { getHomeContent } from "@/lib/cms";

export async function HeroSection() {
  const home = await getHomeContent();
  const { hero } = home;
  const backgroundVideo =
    (hero as { backgroundVideo?: string }).backgroundVideo ??
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

  return (
    <section className="relative min-h-[100svh] text-white">
      <HeroBackground
        image={
          (hero as { heroImage?: string }).heroImage?.trim() || "/images/nigeria.png"
        }
        video={backgroundVideo?.trim() || undefined}
      />
      <div className="hero-gradient absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-8 pt-28 lg:px-6 lg:pb-12 lg:pt-36">
        <div className="grid flex-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 animate-fade-up">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-accent">
              {brand.eyebrow}
            </p>
            <h1 className="font-editorial mt-5 text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem]">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg">
              {hero.subhead}
            </p>
            <div className="divider-gold mt-8" />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/book-consultation" variant="primary">
                Book a consultation →
              </Button>
              <Button href="/insights" variant="outline">
                Latest insights
              </Button>
            </div>
          </div>
          <div className="hidden animate-fade-up-delay lg:col-span-5 lg:block">
            <div className="rounded-sm border border-white/15 bg-white/5 p-8 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-accent">
                {hero.sideCard.kicker}
              </p>
              <p className="mt-4 font-display text-xl font-semibold leading-snug">
                {hero.sideCard.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {hero.sideCard.body}
              </p>
              <Button href="/people" variant="outline" className="mt-6 !border-white/40">
                Meet our partners →
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 bg-navy-deep/95 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:grid-cols-4 lg:px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-gold/40 pl-4 sm:pl-5">
              <dt className="font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs leading-snug text-white/70 sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
