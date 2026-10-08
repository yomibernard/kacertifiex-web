import type { InsightSection } from "@/lib/cms/types";

export function InsightBody({ sections }: { sections: InsightSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => (
        <div key={section.heading ?? `section-${index}`}>
          {section.heading && (
            <h2 className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
              {section.heading}
            </h2>
          )}
          {section.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-base leading-relaxed text-grey sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
