import { brand } from "@/lib/site-config";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "light", compact = false }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <Image
        src="/brand/logo.png"
        alt={`${brand.shortName} ${brand.name}`}
        width={compact ? 120 : 160}
        height={48}
        className="h-10 w-auto object-contain"
        priority
      />
      {!compact && (
        <span className={`hidden leading-tight sm:block ${text}`}>
          <span className="block text-[10px] uppercase tracking-[0.15em] opacity-80">
            {brand.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}
