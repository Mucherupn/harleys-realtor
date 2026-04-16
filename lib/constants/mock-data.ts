import type { Agent, BlogPost, Location, Property, Service, SiteSettings } from "@/types";

export const services: Service[] = [
  {
    id: "svc-1",
    slug: "letting-and-sales",
    title: "Letting & Sales Agency",
    excerpt: "Strategic pricing, premium marketing, and disciplined negotiation for landlords and sellers.",
    content:
      "From valuation to close, we run a structured process designed to protect value and reduce time-on-market.",
    published: true
  },
  {
    id: "svc-2",
    slug: "property-management",
    title: "Property Management",
    excerpt: "Hands-on rent collection, tenant operations, maintenance oversight, and reporting.",
    content:
      "Our management model combines operational rigor with proactive communication to preserve asset performance.",
    published: true
  },
  {
    id: "svc-3",
    slug: "consultancy",
    title: "Real Estate Consultancy",
    excerpt: "Advisory for investors, owners, and developers in Nairobi's high-demand corridors.",
    content:
      "We support investment decisions with local insight, scenario planning, and practical market intelligence.",
    published: true
  }
];

export const agents: Agent[] = [
  {
    id: "a-1",
    slug: "jane-wanjiku",
    name: "Jane Wanjiku",
    role: "Director, Residential Sales",
    photo_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    id: "a-2",
    slug: "brian-otieno",
    name: "Brian Otieno",
    role: "Head of Lettings",
    photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }
];

export const locations: Location[] = [
  {
    id: "l-1",
    slug: "westlands",
    name: "Westlands",
    short_description: "A prime mixed-use district with strong rental demand and executive housing stock.",
    long_description: "Westlands blends commercial convenience, nightlife, and modern apartments favored by professionals.",
    published: true
  },
  {
    id: "l-2",
    slug: "kileleshwa",
    name: "Kileleshwa",
    short_description: "A leafy residential area with modern apartments and family oriented compounds.",
    long_description: "Kileleshwa remains a resilient neighborhood for both owner-occupiers and buy-to-let investors.",
    published: true
  }
];

export const properties: Property[] = [
  {
    id: "p-1",
    slug: "westlands-skyline-residence",
    title: "Westlands Skyline Residence",
    reference_code: "HR-WS-2091",
    purpose: "sale",
    price: 42000000,
    currency: "KES",
    bedrooms: 4,
    bathrooms: 3,
    parking_spaces: 2,
    area_size: 2850,
    area_unit: "sq ft",
    neighborhood: "Westlands",
    location_name: "Westlands",
    cover_image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    gallery_images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    short_description: "A premium family residence with skyline views and strong access to key business districts.",
    description: "Designed for modern urban living, this residence combines natural light, generous spaces, and refined finishes.",
    amenities: ["Gym", "Lift", "Backup Generator", "CCTV", "Borehole"],
    featured: true,
    published: true,
    agent_id: "a-1"
  },
  {
    id: "p-2",
    slug: "kileleshwa-garden-apartment",
    title: "Kileleshwa Garden Apartment",
    reference_code: "HR-KL-1872",
    purpose: "rent",
    price: 250000,
    currency: "KES",
    bedrooms: 3,
    bathrooms: 2,
    parking_spaces: 2,
    area_size: 1800,
    area_unit: "sq ft",
    neighborhood: "Kileleshwa",
    location_name: "Kileleshwa",
    cover_image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    gallery_images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e"
    ],
    short_description: "A calm, secure apartment with landscaped surroundings and excellent commuter convenience.",
    description: "Well-planned interiors, quality fixtures, and responsive management make this ideal for executive tenants.",
    amenities: ["Parking", "Children's Play Area", "24/7 Security", "Water Storage"],
    featured: true,
    published: true,
    agent_id: "a-2"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "b-1",
    slug: "nairobi-prime-market-outlook-2026",
    title: "Nairobi Prime Residential Outlook 2026",
    excerpt: "Where demand is moving for executive rentals and premium owner-occupied homes.",
    content: "Demand remains resilient in established locations supported by strong infrastructure and amenities.",
    author_name: "Research Desk",
    published: true,
    created_at: "2026-03-20"
  },
  {
    id: "b-2",
    slug: "how-to-prepare-your-home-for-sale",
    title: "How to Prepare Your Home for a High-Value Sale",
    excerpt: "Practical steps that improve presentation and protect asking price.",
    content: "Presentation, pricing discipline, and buyer qualification are core to conversion quality.",
    author_name: "Jane Wanjiku",
    published: true,
    created_at: "2026-02-28"
  }
];

export const siteSettings: SiteSettings = {
  company_name: "Harleys Realtor",
  phone: "+254 700 000 000",
  email: "info@harleysrealtor.co.ke",
  address: "Riverside Drive, Nairobi",
  hero_title: "Premium Real Estate Advisory in Nairobi",
  hero_subtitle: "Selling, letting, management, and consultancy delivered with precision.",
  default_meta_title: "Harleys Realtor | Nairobi Real Estate",
  default_meta_description: "Premium Nairobi real estate firm for sales, lettings, management, and advisory."
};
