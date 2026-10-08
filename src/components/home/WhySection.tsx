import { SectionIntro } from "@/components/layout/SectionIntro";
import { whyPoints } from "@/lib/site-config";

export function WhySection() {
  return (
    <section className="section-pad bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Why KACERTIFIEX"
          title="Global standards. Local command."
          description="We built KFCS for leaders who refuse to choose between international-grade rigour and advisers who understand Nigeria's markets, regulators and pace."
          light
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((point) => (
            <li key={point.title} className="bg-navy-deep p-8">
              <h3 className="font-display text-lg font-semibold text-gold">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/78">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
