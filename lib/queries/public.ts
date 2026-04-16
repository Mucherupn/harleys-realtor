import { agents, blogPosts, locations, properties, services, siteSettings } from "@/lib/constants/mock-data";
import type { PropertyPurpose } from "@/types";

export const getSiteSettings = async () => siteSettings;
export const getPublishedServices = async () => services.filter((item) => item.published);
export const getFeaturedProperties = async () => properties.filter((item) => item.featured && item.published);
export const getLatestProperties = async () => properties.filter((item) => item.published);
export const getPropertyBySlug = async (slug: string) => properties.find((item) => item.slug === slug && item.published) ?? null;
export const getSimilarProperties = async (propertyId: string) =>
  properties.filter((item) => item.id !== propertyId && item.published).slice(0, 3);

export const getProperties = async (filters: { purpose?: PropertyPurpose; keyword?: string }) =>
  properties.filter((item) => {
    const purposeMatch = !filters.purpose || item.purpose === filters.purpose;
    const keywordMatch = !filters.keyword || item.title.toLowerCase().includes(filters.keyword.toLowerCase());
    return item.published && purposeMatch && keywordMatch;
  });

export const getPublishedLocations = async () => locations.filter((item) => item.published);
export const getLocationBySlug = async (slug: string) => locations.find((item) => item.slug === slug && item.published) ?? null;

export const getPublishedAgents = async () => agents.filter((item) => item.published !== false);
export const getAgentBySlug = async (slug: string) => agents.find((item) => item.slug === slug && item.published !== false) ?? null;

export const getPublishedBlogPosts = async () => blogPosts.filter((item) => item.published);
export const getBlogPostBySlug = async (slug: string) => blogPosts.find((item) => item.slug === slug && item.published) ?? null;
