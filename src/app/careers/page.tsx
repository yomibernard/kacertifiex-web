import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { getCareers } from "@/lib/cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at KACERTIFIEX—partner-led tax, audit and consulting in Lagos, Nigeria.",
};

export default async function CareersPage() {
  const roles = await getCareers();

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Do your best work—for clients who expect global standards"
        description="We hire professionals who combine technical excellence with commercial judgement in the Nigerian market."
        image="/images/hero-strategy.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        {roles.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-sm border border-grey-light bg-white p-10 text-center shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              No open roles listed today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-grey">
              We welcome expressions of interest from experienced tax, audit, accounting
              and consulting professionals in Lagos. Share your CV and the practice areas
              you are passionate about—we review strong profiles for future needs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact">Send your CV</Button>
              <Button href="/people" variant="ghost" className="!text-navy">
                Meet our partners
              </Button>
            </div>
          </div>
        ) : (
          <>
            <ul className="space-y-6">
              {roles.map((role) => (
                <li
                  key={role.slug}
                  className="card-premium p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-display text-xl font-semibold text-charcoal">
                        {role.title}
                      </h2>
                      <p className="mt-1 text-sm text-navy">
                        {role.practice} · {role.location} · {role.type}
                      </p>
                    </div>
                    <Button href="/contact" variant="ghost" className="shrink-0 !text-navy">
                      Apply →
                    </Button>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-grey">{role.summary}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-2xl text-base text-grey leading-relaxed">
              We respond to applications that demonstrate relevant qualifications and
              client service experience.
            </p>
          </>
        )}
      </section>
    </>
  );
}
