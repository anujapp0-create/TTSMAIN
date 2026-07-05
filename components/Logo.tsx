import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Logo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={146}
        height={140}
        className="h-10 w-auto shrink-0"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span
          className={`text-base font-extrabold uppercase tracking-wide ${
            isDark ? "text-white" : "text-brand-700"
          }`}
        >
          TaxTrack
        </span>
        <span
          className={`text-[11px] font-extrabold uppercase tracking-wider ${
            isDark ? "text-brand-200" : "text-brand-700"
          }`}
        >
          Solutions
        </span>
      </span>
    </Link>
  );
}
