type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: Props) {
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";
  const titleColor = light ? "text-white" : "text-charcoal";
  const descColor = light ? "text-white/80" : "text-grey";

  return (
    <div className={alignClass}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
