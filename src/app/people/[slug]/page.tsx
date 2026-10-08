import { PersonHeadshot } from "@/components/people/PersonHeadshot";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { getPeople, getPerson } from "@/lib/cms";
import { siteUrl, whatsappUrl } from "@/lib/site-config";
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
  const url = `${siteUrl()}/people/${person.slug}`;
  const image = person.image.startsWith("http")
    ? person.image
    : `${siteUrl()}${person.image}`;
  return {
    title: person.name,
    description: `${person.role} — ${person.focus} at KACERTIFIEX, Lagos.`,
    openGraph: {
      title: person.name,
      description: person.bio ?? `${person.role} at KACERTIFIEX`,
      url,
      images: [{ url: image }],
    },
  };
}

export default async function PersonProfilePage({ params }: Props) {
  const { slug } = await params;
  const person = await getPerson(slug);
  if (!person) notFound();

  const others = (await getPeople()).filter((p) => p.slug !== slug);
  const whatsappTopic = `${person.focus} — speak with ${person.name.split(" ")[0]}`;

  return (
    <>
      <PersonJsonLd person={person} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our People", path: "/people" },
          { name: person.name, path: `/people/${person.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Leadership"
        title={person.name}
        description={`${person.role} · ${person.focus}`}
        image="/images/about-editorial.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Link
              href="/people"
              className="text-sm font-semibold text-navy hover:text-gold"
            >
              ← All advisers
            </Link>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start">
              <PersonHeadshot person={person} size="lg" className="shrink-0" />
              <div>
                {person.qualifications && (
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                    {person.qualifications}
                  </p>
                )}
                <p className="mt-2 font-display text-lg font-semibold text-navy">
                  {person.role}
                </p>
                <p className="mt-1 text-sm text-grey">{person.focus}</p>
                {person.bio && (
                  <p className="mt-6 text-base leading-relaxed text-grey sm:text-lg">
                    {person.bio}
                  </p>
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
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center rounded-sm border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-gold"
              >
                Book consultation
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-sm bg-navy-deep p-6 text-white lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Work with {person.name.split(" ")[0]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Partner-led engagements in {person.focus.toLowerCase()}—scoped for
                boards, founders and finance teams across Nigeria.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex text-sm font-semibold text-gold hover:text-white"
              >
                View capabilities →
              </Link>
            </div>
            {others.length > 0 && (
              <div className="card-premium mt-6 p-6">
                <p className="font-display text-sm font-semibold text-charcoal">
                  Other partners
                </p>
                <ul className="mt-4 space-y-2">
                  {others.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/people/${p.slug}`} className="text-sm text-navy hover:text-gold">
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <CtaBand
          title="Partner-led from first conversation"
          description="Major mandates are overseen by partners—not passed to anonymous teams after the proposal."
          primaryHref="/book-consultation"
          primaryLabel="Book consultation"
          secondaryHref="/insights"
          secondaryLabel="Read insights"
        />
      </section>
    </>
  );
}
