# ZA Automation — Next.js Site

Production Next.js 15 (App Router) website for ZA Automation.

## Stack

- Next.js 15 (App Router)
- React 19
- CSS design system
- `next/font` (Sora + Manrope)
- `next/image`
- Supabase REST API for lead storage
- Resend for lead notifications

## Develop locally

```bash
npm ci
cp .env.example .env.local
npm run dev -- --hostname 0.0.0.0 --port 3000
```

The application routes are:

- `/` — Home
- `/about`
- `/services`
- `/machinery`
- `/contact`
- `/sitemap.xml`
- `/robots.txt`

## Build and validate

```bash
npm run lint
npm run build
npm start -- --hostname 0.0.0.0 --port 3000
```

## Vercel deployment

This project is configured for Vercel with `vercel.json`. Vercel should import the GitHub repository as a **Next.js** project and use the `main` branch for production deployments. No static export is enabled because the lead form uses the server-side route at `/api/leads`.

In the Vercel project settings, add these environment variables for **Production**, **Preview**, and **Development** as appropriate:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
RESEND_API_KEY
RESEND_FROM_EMAIL
LEAD_NOTIFICATION_EMAIL
```

The Supabase REST endpoint must allow the publishable key to insert into the `leads` table. Resend must be configured with a verified sending domain matching `RESEND_FROM_EMAIL`.

After deployment, test the complete flow at `/contact`: submit a test lead, confirm the row appears in Supabase, and confirm the notification arrives at `LEAD_NOTIFICATION_EMAIL`.

## Business configuration

Edit `src/lib/site.js` for contacts, brands, services, machinery, structured data, and site URLs.

## Lead API

The route in `src/app/api/leads/route.js` validates the form payload, inserts it into Supabase, and sends an optional Resend notification. The route must remain deployed on a server-capable platform such as Vercel; it will not work from a static-only host such as GitHub Pages.

## Assets

Public images are stored in `public/assets/images/`.
