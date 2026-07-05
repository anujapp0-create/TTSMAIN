# TaxTrack Solutions Website

Multi-page marketing site for TaxTrack Solutions — Home, About, Services (with
individual service pages), Blog (with posts), and Contact. Built with
Next.js (App Router) and Tailwind CSS, exported as static HTML so it can be
hosted on Hostinger shared hosting with no Node.js server required.

## Before launch — replace placeholder content

- **`lib/siteConfig.ts`** — phone number, email, office address, business
  hours, and social media links are all placeholders. Update this one file
  and it flows through the whole site (header, footer, contact page).
- **Stats on the homepage/about page** (`lib/siteConfig.ts` → `stats`) are
  illustrative placeholders (years in business, clients served, etc.) —
  replace with real numbers.
- **Contact form** (`components/ContactForm.tsx`) opens the visitor's email
  client with a pre-filled message, since a static export has no backend to
  receive submissions. To collect submissions directly, connect it to a form
  service such as Formspree, Web3Forms, or EmailJS.
- **Logo** (`components/Logo.tsx`) is a simple generated wordmark/icon. Swap
  in a real logo file if you have one.
- **Team photos / testimonials** are not included yet — add them to the About
  page once available.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for deployment (static export)

```bash
npm run build
```

This produces a fully static site in the `out/` folder — plain HTML, CSS, and
JS, no server required.

## Deploying to Hostinger

1. Run `npm run build`.
2. Upload the **contents** of the `out/` folder (not the folder itself) to
   `public_html` on Hostinger, via File Manager or FTP.
3. That's it — no Node.js, no build step needed on the server.

## Project structure

- `app/` — pages (Home, About, Services, Blog, Contact) using the Next.js App
  Router.
- `components/` — shared UI (header, footer, cards, forms, etc.).
- `lib/siteConfig.ts` — business contact info and site-wide settings.
- `lib/services.ts` — content for the 4 service pages.
- `lib/blogPosts.ts` — blog post content.
