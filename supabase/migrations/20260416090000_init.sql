create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key references auth.users(id),
  full_name text,
  email text,
  role text default 'admin',
  avatar_url text,
  created_at timestamptz default now()
);

create table if not exists roles (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  created_at timestamptz default now()
);

create table if not exists agents (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  role text,
  bio text,
  phone text,
  email text,
  whatsapp text,
  photo_url text,
  linkedin_url text,
  display_order int default 0,
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists locations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  short_description text,
  long_description text,
  cover_image_url text,
  published boolean default true,
  meta_title text,
  meta_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists property_types (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  slug text unique not null
);

create table if not exists listing_statuses (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  slug text unique not null
);

create table if not exists amenities (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  slug text unique not null,
  icon text
);

create table if not exists properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  reference_code text unique,
  purpose text not null check (purpose in ('sale','rent')),
  property_type_id uuid references property_types(id),
  listing_status_id uuid references listing_statuses(id),
  location_id uuid references locations(id),
  neighborhood text,
  address text,
  latitude numeric,
  longitude numeric,
  price numeric not null default 0,
  currency text default 'KES',
  short_description text,
  description text,
  bedrooms int default 0,
  bathrooms int default 0,
  parking_spaces int default 0,
  area_size numeric,
  area_unit text default 'sq ft',
  year_built int,
  featured boolean default false,
  published boolean default false,
  cover_image_url text,
  agent_id uuid references agents(id),
  meta_title text,
  meta_description text,
  canonical_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references properties(id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists property_amenities (
  property_id uuid references properties(id) on delete cascade,
  amenity_id uuid references amenities(id) on delete cascade,
  primary key(property_id, amenity_id)
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id) on delete set null,
  source text default 'website',
  name text not null,
  email text,
  phone text,
  message text,
  status text default 'new',
  notes text,
  created_at timestamptz default now()
);

create table if not exists valuation_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  property_type text,
  location text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text,
  service_type text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  cover_image_url text,
  author_name text,
  published boolean default false,
  meta_title text,
  meta_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists blog_tags (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  slug text unique not null
);

create table if not exists blog_post_tags (
  post_id uuid references blog_posts(id) on delete cascade,
  tag_id uuid references blog_tags(id) on delete cascade,
  primary key(post_id, tag_id)
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  cover_image_url text,
  published boolean default true,
  meta_title text,
  meta_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  phone text,
  email text,
  address text,
  logo_url text,
  favicon_url text,
  hero_title text,
  hero_subtitle text,
  facebook_url text,
  instagram_url text,
  linkedin_url text,
  youtube_url text,
  default_meta_title text,
  default_meta_description text,
  updated_at timestamptz default now()
);

create table if not exists seo_pages (
  id uuid primary key default gen_random_uuid(),
  path text unique not null,
  title text,
  description text,
  canonical_url text,
  updated_at timestamptz default now()
);

create index if not exists idx_properties_slug on properties(slug);
create index if not exists idx_properties_published on properties(published);
create index if not exists idx_properties_featured on properties(featured);
create index if not exists idx_properties_created_at on properties(created_at desc);
create index if not exists idx_properties_location_id on properties(location_id);
create index if not exists idx_properties_property_type_id on properties(property_type_id);
create index if not exists idx_properties_purpose on properties(purpose);

alter table agents enable row level security;
alter table locations enable row level security;
alter table properties enable row level security;
alter table blog_posts enable row level security;
alter table services enable row level security;
alter table site_settings enable row level security;

create policy "public_read_agents" on agents for select using (published = true);
create policy "public_read_locations" on locations for select using (published = true);
create policy "public_read_properties" on properties for select using (published = true);
create policy "public_read_blog_posts" on blog_posts for select using (published = true);
create policy "public_read_services" on services for select using (published = true);
create policy "public_read_site_settings" on site_settings for select using (true);
