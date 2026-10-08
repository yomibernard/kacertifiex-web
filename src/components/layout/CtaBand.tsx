import { Button } from "@/components/ui/Button";

type Props = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: Props) {
  return (
    <div className="mt-16 rounded-sm bg-navy-deep p-8 text-white lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
      <div className="max-w-xl">
        <h2 className="font-display text-xl font-semibold sm:text-2xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
        <Button href={primaryHref} variant="primary">
          {primaryLabel}
        </Button>
        {secondaryHref && secondaryLabel && (
          <Button href={secondaryHref} variant="outline">
            {secondaryLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
