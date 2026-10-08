import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  if (image) {
    return (
      <section className="relative min-h-[42vh] text-white lg:min-h-[48vh]">
        <Image
          src={image}
          alt=""
          fill
          className="hero-photo-tune object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-gradient-soft absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[42vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 lg:min-h-[48vh] lg:px-6 lg:pb-20 lg:pt-32">
          {eyebrow && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="font-editorial mt-3 max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">{description}</p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-navy-deep px-4 pb-14 pt-28 text-white lg:px-6 lg:pb-20 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="font-editorial mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
