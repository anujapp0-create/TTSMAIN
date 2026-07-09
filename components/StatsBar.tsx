import { siteConfig } from "@/lib/siteConfig";

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 divide-y divide-brand-800 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
      {siteConfig.stats.map((stat) => (
        <div key={stat.label} className="px-0 py-5 text-center first:pt-0 sm:px-8 sm:py-2 sm:first:pl-0">
          <p className="font-serif text-4xl font-medium tabular-nums text-white sm:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.1em] text-brand-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
