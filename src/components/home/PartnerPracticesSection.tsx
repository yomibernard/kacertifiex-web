import Link from "next/link";

const practices = [
  {
    title: "SME advisory",
    lead: "Oriyomi Bernard",
    profileHref: "/people/oriyomi-bernard",
    contactHref: "/contact?practice=sme-advisory",
    description:
      "Financial control, compliance and growth planning for small and mid-sized Nigerian businesses.",
  },
  {
    title: "Wealth management consulting",
    lead: "Davida Echetabu",
    description:
      "Structured planning and advisory for individuals and families building long-term financial security.",
    profileHref: "/people/davida-echetabu",
    contactHref: "/contact?practice=wealth-management",
  },
];

export function PartnerPracticesSection() {
  return (
    <section className="border-y border-grey-light bg-white px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Partner-led practices
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-charcoal sm:text-3xl">
          Specialist support from named partners
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {practices.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-grey-light bg-grey-light/40 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{item.lead} · Partner</p>
              <p className="mt-3 text-sm text-grey leading-relaxed">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href={item.profileHref} className="text-navy hover:text-gold">
                  Meet the partner →
                </Link>
                <Link href={item.contactHref} className="text-navy hover:text-gold">
                  Enquire →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
