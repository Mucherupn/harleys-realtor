insert into public.property_types (name, slug) values
  ('Apartment', 'apartment'),
  ('Townhouse', 'townhouse'),
  ('Villa', 'villa')
on conflict (slug) do nothing;

insert into public.listing_statuses (name, slug) values
  ('Available', 'available'),
  ('Reserved', 'reserved'),
  ('Sold', 'sold')
on conflict (slug) do nothing;

insert into public.services (title, slug, excerpt, content, published) values
  ('Letting & Sales Agency', 'letting-and-sales', 'Premium listing, marketing, and close support.', 'Placeholder service content.', true),
  ('Property Management', 'property-management', 'Tenant and operations management.', 'Placeholder service content.', true),
  ('Real Estate Consultancy', 'consultancy', 'Investment and market advisory.', 'Placeholder service content.', true)
on conflict (slug) do nothing;
