import { Button } from "@/components/Button";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export default function CTASection({
  title = "Ready to get your taxes sorted?",
  description = "Book a free consultation and let's figure out exactly what you need — no jargon, no pressure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gold-500 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_45%)]"
      />
      <Container className="relative">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-brand-950 sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-brand-950/70">{description}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact/" variant="secondary">
              Book Free Consultation
            </Button>
            <Button
              href={`tel:${siteConfig.phoneHref}`}
              variant="outline"
              className="border-brand-950/30 text-brand-950 hover:bg-white/40"
            >
              Call {siteConfig.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
