import { PersonHeadshot } from "@/components/people/PersonHeadshot";
import { SectionIntro } from "@/components/layout/SectionIntro";
import { getPeople } from "@/lib/cms";
import Link from "next/link";

export async function PeopleSection() {
  const people = await getPeople();

  return (
    <section className="section-pad bg-navy text-white">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Leadership"
          title="The partners who stand behind our work"
          description="Qualified leaders with sector depth, regulatory experience and the authority to commit the firm to your result."
          light
        />
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.slug} id={person.slug}>
              <article className="rounded-sm border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <Link href={`/people/${person.slug}`} className="inline-block">
                  <PersonHeadshot
                    person={person}
                    size="lg"
                    className="mx-auto ring-white/20"
                  />
                </Link>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  <Link href={`/people/${person.slug}`} className="hover:text-gold">
                    {person.name}
                  </Link>
                </h3>
                <p className="text-sm font-medium text-gold">{person.role}</p>
                {person.qualifications && (
                  <p className="text-xs text-white/70">{person.qualifications}</p>
                )}
                <p className="mt-2 text-xs text-white/65">{person.focus}</p>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Link
            href="/people"
            className="text-sm font-semibold text-gold hover:text-white"
          >
            Full leadership profiles →
          </Link>
        </div>
      </div>
    </section>
  );
}
