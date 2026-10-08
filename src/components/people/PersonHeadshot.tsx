import type { Person } from "@/lib/cms/types";
import Image from "next/image";

type Props = {
  person: Person;
  size: "sm" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-32 w-32",
  lg: "h-40 w-40 ring-4 ring-white shadow-md",
} as const;

export function PersonHeadshot({ person, size, className = "" }: Props) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full ${sizeClasses[size]} ${className}`}
    >
      <Image
        src={person.image}
        alt={person.name}
        fill
        className="object-cover"
        style={
          person.imagePosition
            ? { objectPosition: person.imagePosition }
            : undefined
        }
        sizes={size === "lg" ? "160px" : "128px"}
      />
    </div>
  );
}
