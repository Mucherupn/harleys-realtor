# Harleys Realtor — Premium Rebuild Scaffold

This is a production-minded starter for rebuilding Harleys Realtor with **Next.js App Router + Supabase**.

## Included

- Public website route scaffold for core marketing, listings, locations, team, blog, and lead pages
- Admin route scaffold under `/admin` (login, dashboard, CRUD surfaces)
- Supabase clients (browser, server, service role)
- SQL migration for the full data model + starter indexes + RLS baseline
- API route handlers for contact, inquiry, quote, and valuation submissions
- Middleware for admin route protection
- SEO foundation (`sitemap.ts`, `robots.ts`, metadata helper)
- Tailwind premium theme extension based on brand red `#e71212`

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Copy env file and fill values:

```bash
cp .env.example .env.local
```

3. Start dev server:

```bash
npm run dev
```

## Supabase

- Execute migrations in `supabase/migrations`
- Optionally run `supabase/seed.sql`
- Configure storage buckets:
  - `property-images`
  - `agent-images`
  - `blog-images`
  - `site-assets`

## Next iteration

- Connect all query helpers to live Supabase reads
- Implement complete CRUD forms for admin modules
- Add richer property filters, map UX, and schema details
- Add email notifications and production deployment hardening
