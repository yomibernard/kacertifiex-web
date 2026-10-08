import { industries } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";

const nigeriaSlide = {
  title: "Nigeria",
  image: "/images/nigeria.png",
  href: "/international",
  featured: true,
} as const;

type Slide = {
  title: string;
  image: string;
  href: string;
  featured?: boolean;
};

function buildSlides(): Slide[] {
  const industrySlides: Slide[] = industries.map((i) => ({
    title: i.title,
    image: i.image,
    href: `/industries/${i.slug}`,
  }));
  return [nigeriaSlide, ...industrySlides];
}

function GalleryCard({ slide }: { slide: Slide }) {
  const wide = slide.featured;
  return (
    <Link
      href={slide.href}
      className={`group relative flex-shrink-0 snap-start overflow-hidden rounded-sm ${
        wide ? "w-[300px] sm:w-[360px]" : "w-[260px] sm:w-[300px]"
      }`}
    >
      <div className={`relative ${wide ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
        <Image
          src={slide.image}
          alt=""
          fill
          className="hero-photo-tune object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="360px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
        <span className="absolute bottom-5 left-5 right-5 font-display text-lg font-semibold text-white sm:text-xl">
          {slide.title}
        </span>
      </div>
    </Link>
  );
}

export function LandingScrollGallery() {
  const slides = buildSlides();
  const track = [...slides, ...slides];

  return (
    <div className="landing-scroll-marquee relative mt-12 overflow-hidden">
      <div className="landing-scroll-track flex gap-5 py-1">
        {track.map((slide, index) => (
          <GalleryCard key={`${slide.href}-${index}`} slide={slide} />
        ))}
      </div>
    </div>
  );
}
