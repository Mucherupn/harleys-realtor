# Harleys Realtor — Premium Next.js + Supabase Scaffold

Production-minded real estate platform starter for a Nairobi-focused brokerage, built with:

- Next.js App Router + TypeScript + Tailwind CSS
- Supabase Postgres + Auth + Storage
- Public marketing site + protected admin workspace

## What is included

- Premium public pages: home, services, properties, locations, team, blog, contact, quote, valuation, legal
- Admin area under `/admin` with login gate, dashboard, and CRUD scaffolds
- API routes for contact, inquiry, valuation, and quote capture
- Supabase clients for browser, server, and service-role admin usage
- SQL migration with UUID keys, triggers, indexes, and baseline RLS
- SEO helpers: metadata builder, sitemap, robots, and structured data
- Reusable UI primitives (buttons, cards, forms, badges, stat cards, skeletons, etc.)

## Local setup

1. Install dependencies

```bash
npm install
```

2. Copy environment template

```bash
cp .env.example .env.local
```

3. Fill `.env.local`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
RESEND_API_KEY=
CONTACT_EMAIL_TO=
```

4. Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Supabase connection and migrations

1. Create a Supabase project.
2. Add project URL and keys to `.env.local`.
3. Run migrations:

```bash
supabase db push
```

or execute SQL files manually:

- `supabase/migrations/20260416090000_init.sql`
- `supabase/seed.sql` (optional sample content)

### Storage buckets expected

- `property-images`
- `agent-images`
- `blog-images`
- `site-assets`

## Auth assumptions

- Admin pages (`/admin/*`) require an authenticated session cookie.
- Non-authenticated users are redirected to `/admin/login`.
- Supabase Auth user records can be mapped to local `profiles`.
