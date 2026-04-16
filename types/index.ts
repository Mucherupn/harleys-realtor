export type PropertyPurpose = "sale" | "rent";

export interface Property {
  id: string;
  slug: string;
  title: string;
  purpose: PropertyPurpose;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  neighborhood?: string | null;
  cover_image_url?: string | null;
  featured: boolean;
}

export interface Agent {
  id: string;
  slug: string;
  name: string;
  role?: string | null;
  photo_url?: string | null;
}
