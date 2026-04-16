import { siteConfig } from "@/lib/constants/site";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Harleys Realtor",
  url: siteConfig.url,
  areaServed: "Nairobi",
  telephone: "+254700000000"
});

export const breadcrumbSchema = (items: Array<{ name: string; item: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((entry, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: entry.name,
    item: `${siteConfig.url}${entry.item}`
  }))
});

export const realEstateListingSchema = (args: { title: string; description: string; price: number; currency: string }) => ({
  "@context": "https://schema.org",
  "@type": "Offer",
  itemOffered: {
    "@type": "SingleFamilyResidence",
    name: args.title,
    description: args.description
  },
  price: args.price,
  priceCurrency: args.currency
});

export const articleSchema = (args: { headline: string; description: string; datePublished: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: args.headline,
  description: args.description,
  datePublished: args.datePublished
});

export const faqSchema = (questions: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: { "@type": "Answer", text: q.answer }
  }))
});
