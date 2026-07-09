export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="font-serif text-3xl font-medium leading-[1.15] text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
