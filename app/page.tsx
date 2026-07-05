import { CheckCircle2, ShieldCheck, Clock, Users, ArrowRight, Star } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";
import StatsBar from "@/components/StatsBar";
import { services, getServiceBySlug } from "@/lib/services";
import { getSortedPosts } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/siteConfig";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Accurate & compliant",
    description:
      "Every filing is reviewed against the latest MCA, Income Tax, and GST rules before it's submitted — no shortcuts.",
  },
  {
    icon: Clock,
    title: "Never miss a deadline",
    description:
      "We track your due dates for you and reach out well before they're close, not after.",
  },
  {
    icon: Users,
    title: "Personal, not automated",
    description:
      "You work directly with people who know your file, not a rotating support queue.",
  },
  {
    icon: CheckCircle2,
    title: "Clear pricing",
    description:
      "You'll know what a service costs before we start — no surprise fees at filing time.",
  },
];

export default function Home() {
  const latestPosts = getSortedPosts().slice(0, 3);
  const flagship = getServiceBySlug("private-limited-company-registration")!;

  return (
    <>
      <section className="relative overflow-hidden bg-brand-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative flex flex-col gap-14 py-20 sm:py-28 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <Star size={13} fill="currentColor" />
              Our most requested service
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Register your{" "}
              <span className="text-gold-400">Private Limited Company</span>{" "}
              — done right, start to finish.
            </h1>
            <p className="mt-6 text-lg text-brand-200">
              From DSC and name approval to SPICe+ filing with the MCA and
              your company PAN and TAN, {siteConfig.name}{" "}
              handles your entire incorporation — then keeps you compliant
              on income tax, GST, and bookkeeping once you&apos;re up and
              running.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/services/private-limited-company-registration/" variant="primary">
                Register My Company
              </Button>
              <Button
                href="/services/"
                variant="outline"
                className="border-brand-700 text-white hover:bg-brand-900"
              >
                Explore All Services
              </Button>
            </div>
          </div>

          <div className="w-full max-w-md rounded-3xl border border-gold-400/40 bg-brand-900/60 p-8 backdrop-blur lg:ml-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-400">
              <Star size={12} fill="currentColor" />
              Flagship service
            </span>
            <h2 className="mt-4 text-xl font-bold text-white">
              Private Limited Company Registration
            </h2>
            <ul className="mt-5 space-y-4">
              {[
                "DSC & DIN for all directors",
                "Company name approval with the MCA",
                "SPICe+ incorporation filing",
                "Company PAN & TAN included",
                "GST & Udyam registration add-on",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-100">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/services/private-limited-company-registration/"
              variant="primary"
              className="mt-6 w-full"
            >
              See how it works
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-brand-900 py-10">
        <Container>
          <StatsBar />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Tax and compliance services built for how Indian businesses actually work"
            description="Company registration is where we do our best work — and we cover everything you need afterward, too."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-950 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            <Star size={13} fill="currentColor" />
            {flagship.title}
          </span>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Thinking of starting a company? Let&apos;s get it registered
            properly.
          </h2>
          <p className="max-w-xl text-lg text-brand-200">
            {flagship.shortDescription}
          </p>
          <Button
            href={`/services/${flagship.slug}/`}
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            Start My Registration
            <ArrowRight size={16} />
          </Button>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why TaxTrack Solutions"
            title="Compliance handled with care, not just paperwork"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-900 text-gold-400">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-brand-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="From the blog"
              title="Straightforward tax guidance, in plain language"
            />
            <Button href="/blog/" variant="outline" className="w-fit">
              View all posts
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
