export type PropertyPurpose = "sale" | "rent";

export interface Property {
  id: string;
  slug: string;
  title: string;
  reference_code?: string;
  purpose: PropertyPurpose;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  parking_spaces?: number;
  area_size?: number;
  area_unit?: string;
  neighborhood?: string;
  location_name?: string;
  cover_image_url?: string;
  gallery_images?: string[];
  short_description?: string;
  description?: string;
  amenities?: string[];
  featured: boolean;
  published?: boolean;
  agent_id?: string;
}

export interface Agent {
  id: string;
  slug: string;
  name: string;
  role?: string;
  bio?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  linkedin_url?: string;
  photo_url?: string;
  published?: boolean;
}

export interface Location {
  id: string;
  slug: string;
  name: string;
  short_description?: string;
  long_description?: string;
  published?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  author_name?: string;
  published?: boolean;
  created_at?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  published?: boolean;
}

export interface SiteSettings {
  company_name: string;
  phone: string;
  email: string;
  address: string;
  hero_title: string;
  hero_subtitle: string;
  default_meta_title: string;
  default_meta_description: string;
}
