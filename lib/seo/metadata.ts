import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

export const buildMetadata = (args: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata => {
  const url = `${siteConfig.url}${args.path ?? ""}`;
  return {
    title: `${args.title} | Harleys Realtor`,
    description: args.description,
    alternates: { canonical: url },
    robots: args.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      title: args.title,
      description: args.description,
      url,
      siteName: "Harleys Realtor"
    }
  };
};
