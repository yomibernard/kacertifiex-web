import { PersonHeadshot } from "@/components/people/PersonHeadshot";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { getPeople, getPerson } from "@/lib/cms";
import { whatsappUrl } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const people = await getPeople();
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) return { title: "Adviser" };
  return {
    title: person.name,
    description: `${person.role} — ${person.focus} at KACERTIFIEX, Lagos.`,
  };
}

export default async function PersonProfilePage({ params }: Props) {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) notFound();

  const whatsappTopic = `${person.focus} — speak with ${person.name.split(" ")[0]}`;

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title={person.name}
        description={`${person.role} · ${person.focus}`}
        image="/images/about-editorial.webp"
      />
      <section className="section-pad mx-auto max-w-3xl">
        <Link
          href="/people"
          className="text-sm font-semibold text-navy hover:text-gold"
        >
          ← All advisers
        </Link>
        <div className="mt-10 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <PersonHeadshot person={person} size="lg" className="shrink-0" />
          <div>
            {person.qualifications && (
              <p className="text-sm font-semibold text-gold">{person.qualifications}</p>
            )}
            {person.bio && (
              <p className="mt-4 text-base leading-relaxed text-grey">{person.bio}</p>
            )}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
          >
            Send an enquiry
          </Link>
          <a
            href={whatsappUrl(whatsappTopic)}
            className="inline-flex items-center justify-center rounded-sm border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp this practice
          </a>
        </div>
        <CtaBand
          title="Partner-led from first conversation"
          description="Major mandates are overseen by partners—not passed to anonymous teams after the proposal."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/services"
          secondaryLabel="Our capabilities"
        />
      </section>
    </>
  );
}
