import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { SectionIntro } from "@/components/layout/SectionIntro";
import { getCompanyProfile } from "@/lib/cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "KACERTIFIEX Financial Consulting Services—partner-led audit, tax and consulting in Lagos, Nigeria since 2011.",
};

export default async function AboutPage() {
  const company = await getCompanyProfile();
  const values =
    (company.about as { values?: { title: string; description: string }[] }).values ?? [];

  return (
    <>
      <PageHero
        eyebrow="About KFCS"
        title="A Nigerian firm engineered for global expectations"
        description={company.about.intro}
        image="/images/about-editorial.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">Our story</h2>
              <p className="mt-4 text-base leading-relaxed text-grey">{company.about.story}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-charcoal">Our mission</h2>
              <p className="mt-4 border-l-2 border-gold pl-5 text-lg leading-relaxed text-charcoal">
                {company.about.mission}
              </p>
            </div>
            {values.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-charcoal">Our values</h2>
                <ul className="mt-6 space-y-6">
                  {values.map((v) => (
                    <li key={v.title}>
                      <h3 className="font-display font-semibold text-navy">{v.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-grey">{v.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-sm bg-navy-deep p-8 text-white lg:sticky lg:top-28">
              <SectionIntro
                eyebrow="What we deliver"
                title="Integrated practices"
                light
              />
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {company.about.focus.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-white/10 pb-3 last:border-0">
                    <span className="text-gold" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Leadership
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {company.partners.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <CtaBand
          title="Discuss your mandate with a partner"
          description="Whether you are entering Nigeria, raising capital or strengthening control, we will scope the right team from day one."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/contact"
          secondaryLabel="Contact Lagos office"
        />
      </section>
    </>
  );
}
