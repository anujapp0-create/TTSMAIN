import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}/`}
      className={`group relative flex flex-col rounded-2xl border bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(8,28,72,0.18)] ${
        service.flagship
          ? "border-gold-300 ring-1 ring-gold-200 hover:border-gold-400"
          : "border-slate-200 hover:border-brand-200"
      }`}
    >
      {service.flagship && (
        <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          <Star size={12} fill="currentColor" />
          Most Popular
        </span>
      )}
      <span
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-gold-400 ${
          service.flagship ? "bg-gold-50 text-gold-600" : "bg-brand-50 text-brand-700"
        }`}
      >
        <Icon size={24} strokeWidth={1.75} />
      </span>
      <h3 className="font-serif text-xl font-medium text-brand-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-slate-600">{service.shortDescription}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
