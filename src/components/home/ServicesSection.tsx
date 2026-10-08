import { SectionIntro } from "@/components/layout/SectionIntro";
import { services } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro
            eyebrow="Capabilities"
            title="Capabilities that work as one firm"
            description="Six practices—tax, finance, consulting, transactions, governance and outsourced delivery—mobilised around your mandate, not departmental silos."
          />
          <Link
            href="/services"
            className="shrink-0 text-sm font-semibold text-navy hover:text-gold"
          >
            Explore all capabilities →
          </Link>
        </div>
        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.slug}>
              <article className="card-premium group h-full">
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                    <span className="absolute left-5 top-5 font-display text-xs font-bold text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="absolute bottom-5 left-5 right-5 font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-grey">{service.summary}</p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-navy group-hover:text-gold">
                      View practice →
                    </span>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
