import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-brand-950 shadow-[0_1px_2px_rgba(15,23,42,0.08)] hover:bg-gold-400 hover:shadow-[0_6px_16px_-4px_rgba(240,115,26,0.45)] focus-visible:outline-gold-500",
  secondary:
    "bg-brand-900 text-white hover:bg-brand-800 hover:shadow-[0_6px_16px_-4px_rgba(8,28,72,0.45)] focus-visible:outline-brand-900",
  outline:
    "border border-brand-200 text-brand-900 hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-brand-500",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  variant = "primary",
  className = "",
  href,
  ...props
}: {
  variant?: Variant;
  className?: string;
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

export function ButtonExternal({
  variant = "primary",
  className = "",
  ...props
}: {
  variant?: Variant;
  className?: string;
} & ComponentProps<"a">) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
