create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  role text not null default 'admin',
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.agents (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  role text,
  bio text,
  phone text,
  email text,
  whatsapp text,
  linkedin_url text,
  photo_url text,
  display_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.locations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  short_description text,
  long_description text,
  cover_image_url text,
  published boolean not null default true,
  meta_title text,
  meta_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.property_types (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.listing_statuses (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.amenities (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  icon text,
  created_at timestamptz not null default now()
);

create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  reference_code text unique,
  purpose text not null check (purpose in ('sale', 'rent')),
  property_type_id uuid references public.property_types(id),
  listing_status_id uuid references public.listing_statuses(id),
  location_id uuid references public.locations(id),
  neighborhood text,
  address text,
  latitude numeric,
  longitude numeric,
  price numeric not null,
  currency text not null default 'KES',
  short_description text,
  description text,
  bedrooms integer default 0,
  bathrooms integer default 0,
  parking_spaces integer default 0,
  area_size numeric,
  area_unit text default 'sq ft',
  year_built integer,
  featured boolean not null default false,
  published boolean not null default false,
  cover_image_url text,
  agent_id uuid references public.agents(id),
  meta_title text,
  meta_description text,
  canonical_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.property_amenities (
  property_id uuid not null references public.properties(id) on delete cascade,
  amenity_id uuid not null references public.amenities(id) on delete cascade,
  primary key (property_id, amenity_id)
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete set null,
  source text default 'website',
  name text not null,
  email text,
  phone text,
  message text,
  status text not null default 'new',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.valuation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  property_type text,
  location text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  service_type text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  cover_image_url text,
  author_name text,
  published boolean not null default false,
  meta_title text,
  meta_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  cover_image_url text,
  published boolean not null default true,
  meta_title text,
  meta_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  phone text,
  email text,
  address text,
  logo_url text,
  favicon_url text,
  social_links jsonb,
  hero_title text,
  hero_subtitle text,
  default_meta_title text,
  default_meta_description text,
  updated_at timestamptz not null default now()
);

create index if not exists idx_agents_slug on public.agents(slug);
create index if not exists idx_agents_published on public.agents(published);
create index if not exists idx_locations_slug on public.locations(slug);
create index if not exists idx_locations_published on public.locations(published);
create index if not exists idx_properties_slug on public.properties(slug);
create index if not exists idx_properties_published on public.properties(published);
create index if not exists idx_properties_featured on public.properties(featured);
create index if not exists idx_properties_created_at on public.properties(created_at desc);
create index if not exists idx_properties_property_type_id on public.properties(property_type_id);
create index if not exists idx_properties_location_id on public.properties(location_id);
create index if not exists idx_properties_purpose on public.properties(purpose);
create index if not exists idx_blog_posts_slug on public.blog_posts(slug);
create index if not exists idx_blog_posts_published on public.blog_posts(published);
create index if not exists idx_blog_posts_created_at on public.blog_posts(created_at desc);
create index if not exists idx_services_slug on public.services(slug);
create index if not exists idx_services_published on public.services(published);

create trigger set_profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger set_agents_updated_at before update on public.agents for each row execute function public.set_updated_at();
create trigger set_locations_updated_at before update on public.locations for each row execute function public.set_updated_at();
create trigger set_properties_updated_at before update on public.properties for each row execute function public.set_updated_at();
create trigger set_inquiries_updated_at before update on public.inquiries for each row execute function public.set_updated_at();
create trigger set_valuation_requests_updated_at before update on public.valuation_requests for each row execute function public.set_updated_at();
create trigger set_quote_requests_updated_at before update on public.quote_requests for each row execute function public.set_updated_at();
create trigger set_blog_posts_updated_at before update on public.blog_posts for each row execute function public.set_updated_at();
create trigger set_services_updated_at before update on public.services for each row execute function public.set_updated_at();
create trigger set_site_settings_updated_at before update on public.site_settings for each row execute function public.set_updated_at();

alter table public.agents enable row level security;
alter table public.locations enable row level security;
alter table public.properties enable row level security;
alter table public.blog_posts enable row level security;
alter table public.services enable row level security;
alter table public.site_settings enable row level security;

-- Public read only for published content.
create policy public_read_agents on public.agents for select using (published = true);
create policy public_read_locations on public.locations for select using (published = true);
create policy public_read_properties on public.properties for select using (published = true);
create policy public_read_blog_posts on public.blog_posts for select using (published = true);
create policy public_read_services on public.services for select using (published = true);
create policy public_read_site_settings on public.site_settings for select using (true);

-- Admin writes only (authenticated role checks to be refined for your Supabase project roles).
create policy admin_write_agents on public.agents for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy admin_write_locations on public.locations for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy admin_write_properties on public.properties for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy admin_write_blog_posts on public.blog_posts for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy admin_write_services on public.services for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy admin_write_site_settings on public.site_settings for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

insert into storage.buckets (id, name, public)
values
  ('property-images', 'property-images', true),
  ('agent-images', 'agent-images', true),
  ('blog-images', 'blog-images', true),
  ('site-assets', 'site-assets', true)
on conflict (id) do nothing;
