import { SectionIntro } from "@/components/layout/SectionIntro";
import { credentials } from "@/lib/site-config";

export function GlobalCredentialsSection() {
  if (credentials.length === 0) return null;

  return (
    <section className="border-y border-grey-light bg-grey-light/60">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-16">
        <SectionIntro
          eyebrow="Global standards, local execution"
          title="Built for boards, investors and regulators"
          description="We align Nigerian delivery to the reporting, tax and governance expectations international stakeholders already use to judge quality."
          align="center"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => (
            <li
              key={item.title}
              className="rounded-sm border border-white bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-base font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
