import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-light border border-gold font-semibold",
  secondary:
    "bg-navy text-white hover:bg-navy-deep border border-navy font-semibold",
  outline:
    "bg-transparent text-white border border-white/80 hover:bg-white/10 font-semibold",
  ghost: "bg-transparent text-navy hover:bg-grey-light font-medium",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  href?: string;
};

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
