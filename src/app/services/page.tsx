import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax, accounting, management consulting, financial advisory, risk and outsourced services for Nigerian businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Capabilities mobilised around your mandate"
        description="Six integrated practices—each led by partners who can bring tax, finance, consulting and transaction skills to the same table."
        image="/images/hero-boardroom.webp"
      />
      <section className="section-pad mx-auto max-w-7xl">
        <ul className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="card-premium group flex h-full flex-col overflow-hidden md:flex-row"
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:w-2/5 md:min-h-[220px]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="400px"
                  />
                  <span className="absolute left-4 top-4 font-display text-xs font-bold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="font-display text-xl font-semibold text-charcoal group-hover:text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-grey">
                    {service.summary}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-navy group-hover:text-gold">
                    View practice →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
