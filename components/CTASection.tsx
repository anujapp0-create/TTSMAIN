import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/siteConfig";

export default function CTASection({
  title = "Ready to get your taxes sorted?",
  description = "Book a free consultation and let's figure out exactly what you need — no jargon, no pressure.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-brand-900 py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-lg text-brand-200">{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact/" variant="primary">
            Book Free Consultation
          </Button>
          <Button href={`tel:${siteConfig.phoneHref}`} variant="outline" className="border-brand-600 text-white hover:bg-brand-800">
            Call {siteConfig.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
