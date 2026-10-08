import Image from "next/image";

type Props = {
  image: string;
  /** Optional looped MP4/WebM in public/ e.g. /images/hero-premium.mp4 */
  video?: string;
};

export function HeroBackground({ image, video }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {video ? (
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div className="hero-ken-burns absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      )}
    </div>
  );
}
