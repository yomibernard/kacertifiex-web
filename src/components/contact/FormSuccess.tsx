import Link from "next/link";

type Props = {
  title: string;
  description: string;
  whatsappHref?: string;
};

export function FormSuccess({ title, description, whatsappHref }: Props) {
  return (
    <div className="rounded-sm border border-gold/30 bg-gold/10 p-8 text-center sm:p-10">
      <h2 className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-grey sm:text-base">{description}</p>
      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-deep"
        >
          Message on WhatsApp
        </a>
      )}
      <p className="mt-6 text-xs text-grey">
        Lagos office · Mon–Fri, 9:00–17:00 (WAT)
      </p>
    </div>
  );
}
