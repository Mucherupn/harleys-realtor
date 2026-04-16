import type { Property } from "@/types";

const demoProperties: Property[] = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    slug: "westlands-skyline-residence",
    title: "Westlands Skyline Residence",
    purpose: "sale",
    price: 42000000,
    currency: "KES",
    bedrooms: 4,
    bathrooms: 3,
    neighborhood: "Westlands",
    cover_image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    featured: true
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    slug: "kileleshwa-garden-apartment",
    title: "Kileleshwa Garden Apartment",
    purpose: "rent",
    price: 250000,
    currency: "KES",
    bedrooms: 3,
    bathrooms: 2,
    neighborhood: "Kileleshwa",
    cover_image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    featured: true
  }
];

export const getFeaturedProperties = async () => demoProperties.filter((p) => p.featured);
export const getLatestProperties = async () => demoProperties;
export const getPropertyBySlug = async (slug: string) => demoProperties.find((p) => p.slug === slug) ?? null;
export const getSimilarProperties = async (propertyId: string) => demoProperties.filter((p) => p.id !== propertyId);

export interface PropertyFilters {
  purpose?: "sale" | "rent";
  keyword?: string;
}

export const getProperties = async (filters: PropertyFilters) => {
  return demoProperties.filter((property) => {
    const purposeOk = !filters.purpose || property.purpose === filters.purpose;
    const keywordOk = !filters.keyword || property.title.toLowerCase().includes(filters.keyword.toLowerCase());
    return purposeOk && keywordOk;
  });
};

export const getPublishedLocations = async () => [
  { id: "1", slug: "westlands", name: "Westlands", short_description: "Prime mixed-use urban district." },
  { id: "2", slug: "kileleshwa", name: "Kileleshwa", short_description: "Leafy residential location." }
];

export const getLocationBySlug = async (slug: string) =>
  (await getPublishedLocations()).find((location) => location.slug === slug) ?? null;

export const getPublishedAgents = async () => [
  { id: "1", slug: "jane-wanjiku", name: "Jane Wanjiku", role: "Head of Sales" },
  { id: "2", slug: "brian-otieno", name: "Brian Otieno", role: "Leasing Consultant" }
];

export const getPublishedBlogPosts = async () => [
  { id: "1", slug: "nairobi-market-outlook", title: "Nairobi Market Outlook", excerpt: "Premium segment insights." },
  { id: "2", slug: "rental-yield-guide", title: "Rental Yield Guide", excerpt: "How investors evaluate returns." }
];

export const getBlogPostBySlug = async (slug: string) =>
  (await getPublishedBlogPosts()).find((post) => post.slug === slug) ?? null;

export const getSiteSettings = async () => ({
  company_name: "Harleys Realtor",
  phone: "+254 700 000 000",
  email: "info@harleysrealtor.co.ke",
  address: "Nairobi, Kenya"
});

export const getPublishedServices = async () => [
  { slug: "letting-and-sales", title: "Letting & Sales", excerpt: "Transaction excellence from listing to close." },
  { slug: "property-management", title: "Property Management", excerpt: "Operational and tenant lifecycle management." },
  { slug: "consultancy", title: "Consultancy", excerpt: "Strategy for investors, developers, and owners." }
];
