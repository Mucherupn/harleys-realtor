# Harleys Realtor — Premium Next.js + Supabase Platform Scaffold

This repository is a production-minded rebuild scaffold for Harleys Realtor, using:

- **Next.js App Router + TypeScript + Tailwind CSS**
- **Supabase Postgres + Auth + Storage**
- **Vercel deployment target** with Cloudflare DNS/security in mind

## Features Included

- Premium public website scaffold (home, about, services, listings, detail pages, locations, team, blog, contact, quote, valuation, legal)
- Admin scaffold under `/admin` with protected route middleware and module pages
- Supabase clients for browser/server/admin service role usage
- API routes for contact, inquiry, quote, valuation, upload placeholder, and revalidation
- SQL migration for full requested schema + indexes + RLS baseline + updated_at triggers + storage buckets
- Seed placeholders for key taxonomies and services
- SEO baseline with metadata builder, sitemap, robots, and structured-data helpers
- Utilities for slug generation, KES currency formatting, class merging, image alt fallback, and query filter parsing

## Project Setup

1. Install dependencies

```bash
npm install
```

2. Create local env file

```bash
cp .env.example .env.local
```

3. Fill in `.env.local` values.

4. Run the app

```bash
npm run dev
```

The homepage should immediately show the custom Harleys premium design (not the default Next.js starter).

## Environment Variables

See `.env.example`:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`

## Supabase Connection

- Create a Supabase project
- Add URL and keys to `.env.local`
- Run SQL migration in `supabase/migrations/20260416090000_init.sql`
- Optionally run `supabase/seed.sql`
- Ensure Auth users used for admin login

## Migrations

If using Supabase CLI:

```bash
supabase db push
```

or run the SQL files manually in Supabase SQL Editor.

## Notes

- All pages are scaffolded with premium placeholders and can be CMS-driven from Supabase.
- Admin CRUD views are production-structured placeholders intended for iterative hardening.
- API routes already validate payloads with Zod and write to Supabase tables.
