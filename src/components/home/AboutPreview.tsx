import { Button } from "@/components/ui/Button";
import { SectionIntro } from "@/components/layout/SectionIntro";
import { getCompanyProfile } from "@/lib/cms";
import Image from "next/image";

export async function AboutPreview() {
  const company = await getCompanyProfile();

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-sm shadow-[0_24px_60px_rgba(11,42,91,0.18)] lg:order-1">
          <Image
            src="/images/about-editorial.webp"
            alt="KACERTIFIEX partners and advisers in Lagos"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <SectionIntro eyebrow="About KFCS" title="Built for decisions that define your business" />
          <p className="mt-6 text-lg leading-relaxed text-grey">{company.about.intro}</p>
          <p className="mt-4 leading-relaxed text-grey">{company.about.story}</p>
          <p className="mt-4 border-l-2 border-gold pl-4 text-sm font-medium text-charcoal">
            {company.about.mission}
          </p>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Our firm →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
