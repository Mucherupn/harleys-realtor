import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

export const buildMetadata = (title: string, description: string, path = "/"): Metadata => ({
  title,
  description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title,
    description,
    url: `${siteConfig.url}${path}`,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
});
