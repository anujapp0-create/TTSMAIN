import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for a free consultation on income tax, GST, bookkeeping, or compliance.`,
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: `${siteConfig.address.line2}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pin}`,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-950 py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
              Get in touch
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s talk about your tax and compliance needs
            </h1>
            <p className="mt-6 text-lg text-brand-200">
              Book a free consultation and we&apos;ll help you figure out
              exactly what you need — whether it&apos;s a single return or
              ongoing support for your business.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading title="Contact details" />
            <ul className="mt-8 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-slate-500">
                        {item.label}
                      </span>
                      <span className="block font-semibold text-brand-900">
                        {item.value}
                      </span>
                    </span>
                  </span>
                );
                return (
                  <li key={item.label}>
                    {item.href ? <a href={item.href}>{content}</a> : content}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-900">
                <Clock size={16} />
                Office hours
              </h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.hours.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex justify-between text-sm text-slate-600"
                  >
                    <span>{slot.day}</span>
                    <span className="font-medium text-brand-900">
                      {slot.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <SectionHeading title="Send us a message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
