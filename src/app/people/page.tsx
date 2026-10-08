import { PageHero } from "@/components/layout/PageHero";
import { PersonHeadshot } from "@/components/people/PersonHeadshot";
import { getPeople } from "@/lib/cms";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our People",
  description: "Meet KACERTIFIEX advisers leading tax, finance and consulting in Nigeria.",
};

export default async function PeoplePage() {
  const people = await getPeople();

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Advisers you can name—and trust"
        description="Senior professionals with qualifications, sector focus and experience across Nigeria's regulatory and commercial landscape."
        image="/images/about-editorial.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <ul className="grid gap-8 lg:grid-cols-2">
          {people.map((person) => (
            <li
              key={person.slug}
              id={person.slug}
              className="card-premium flex flex-col gap-6 p-8 sm:flex-row sm:items-start"
            >
              <Link href={`/people/${person.slug}`} className="shrink-0">
                <PersonHeadshot person={person} size="sm" />
              </Link>
              <div>
                <h2 className="font-display text-xl font-semibold text-charcoal">
                  <Link href={`/people/${person.slug}`} className="hover:text-navy">
                    {person.name}
                  </Link>
                </h2>
                <p className="text-sm font-medium text-navy">{person.role}</p>
                {person.qualifications && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                    {person.qualifications}
                  </p>
                )}
                <p className="mt-2 text-sm text-grey">{person.focus}</p>
                {person.bio && (
                  <p className="mt-4 text-base leading-relaxed text-grey line-clamp-4">
                    {person.bio}
                  </p>
                )}
                <Link
                  href={`/people/${person.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-navy hover:text-gold"
                >
                  View profile →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
