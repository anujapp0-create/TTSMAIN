import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  icon: Icon,
  title,
  description,
  children,
  align = "left",
}: {
  eyebrow?: string;
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-8%] h-[380px] w-[380px] rounded-full bg-gold-200/60 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-[-6%] h-[320px] w-[320px] rounded-full bg-brand-100/50 blur-[100px]"
      />
      <Container className="relative">
        <Reveal
          className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
        >
          {Icon && (
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-50 text-gold-600 ring-1 ring-gold-200">
              <Icon size={26} strokeWidth={1.75} />
            </span>
          )}
          {eyebrow && (
            <span className="inline-flex items-center rounded-full bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-gold-700 ring-1 ring-gold-200">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-brand-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
