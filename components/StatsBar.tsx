import { siteConfig } from "@/lib/siteConfig";

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {siteConfig.stats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <p className="text-3xl font-bold text-white sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-brand-200">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
