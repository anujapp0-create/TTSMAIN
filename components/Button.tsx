import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-brand-950 hover:bg-gold-400 focus-visible:outline-gold-500",
  secondary:
    "bg-brand-900 text-white hover:bg-brand-800 focus-visible:outline-brand-900",
  outline:
    "border border-brand-200 text-brand-900 hover:bg-brand-50 focus-visible:outline-brand-500",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

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
