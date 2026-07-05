"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  "Individual Tax Filing",
  "Business Tax Filing",
  "Bookkeeping & Payroll",
  "Tax Notice & Compliance Consulting",
  "Something else",
];

// This site is exported as static HTML (no server), so the form can't post
// to an API route on this host. It opens the visitor's email client with the
// message pre-filled. To collect submissions directly instead, connect this
// form to a form backend such as Formspree, Web3Forms, or EmailJS and swap
// the handleSubmit logic below for a fetch() call to that endpoint.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const phone = form.get("phone");
    const service = form.get("service");
    const message = form.get("message");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      `${message}`,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `New enquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:grid-cols-2"
    >
      <div className="sm:col-span-1">
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-900">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-900">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-900">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-brand-900">
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
          defaultValue={services[0]}
        >
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-900">
          Tell us a bit more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:bg-gold-400 sm:w-auto"
        >
          Send Message
        </button>
        {submitted && (
          <p className="mt-3 text-sm text-brand-700">
            Your email app should have opened with your message ready to
            send. If it didn&apos;t, email us directly at{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
