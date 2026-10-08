# KACERTIFIEX Digital Experience (Phase 1)

Premium Nigerian financial, tax and management advisory website built with **Next.js**, **React**, and **Tailwind CSS**—aligned to the Phase 1 PRD and design mockups.

## Run locally

```bash
cd kacertifiex-web
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Phase 1 scope included

- Homepage (hero, challenges, services, why us, industries, about, insights, people)
- Core pages: About, Services (+ 6 practice detail routes), Industries, Insights (+ full articles), People, International, Careers, Contact, Tax Intelligence, Client Centre (placeholder)
- **Let's Talk** CTA, consultation booking form, structured **WhatsApp** topic picker
- Site search (services, people, insights, challenges)
- Design tokens: navy `#0B2A5B`, accent gold `#9A7D45`, Inter + Manrope
- SEO metadata baseline, mobile-first layout

## Content (no code required)

Edit JSON in **`content/`** — people, insights, case studies. See [docs/CMS.md](docs/CMS.md).

## Next steps (your inputs)

1. Confirm **real contact details**, Lagos address, and WhatsApp number in `.env.local`
2. Provide **logo files**, team photos, and verified **stats**
3. Optional **Sanity** env vars when ready (see docs/CMS.md)
4. Connect forms to **HubSpot** or email API; add **GA4** / **Clarity** IDs to `.env.local`
5. Optional: individual **partner headshots** in `public/images/partners/`
6. After adding PNGs to `public/images/`, run **`npm run optimize-images`** (WebP for the site)

**Careers:** an empty `content/careers.json` shows “no open roles”; add job objects when hiring.

## Launch (production)

See **[docs/LAUNCH.md](docs/LAUNCH.md)** for Vercel env vars, custom domain, deployment protection, and smoke tests.

## Deploy

See [docs/DEPLOY.md](docs/DEPLOY.md). Set environment variables from `.env.example`.
