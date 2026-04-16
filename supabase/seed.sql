insert into property_types (name, slug) values
('Apartment', 'apartment'),
('Townhouse', 'townhouse'),
('Office', 'office')
on conflict do nothing;

insert into listing_statuses (name, slug) values
('Available', 'available'),
('Under Offer', 'under-offer'),
('Sold', 'sold')
on conflict do nothing;
