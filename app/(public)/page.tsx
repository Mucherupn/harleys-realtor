import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PropertyCard } from "@/components/properties/property-card";
import { getFeaturedProperties, getPublishedServices, getPublishedLocations, getPublishedBlogPosts } from "@/lib/queries/public";
import { buildMetadata } from "@/lib/seo/metadata";
import { TrustStrip } from "@/components/home/trust-strip";

export const metadata = buildMetadata({
  title: "Premium Nairobi Real Estate",
  description: "Harleys Realtor offers premium sales, lettings, management, and consultancy services in Nairobi.",
  path: "/"
});

export default async function HomePage() {
  const [featuredProperties, services, locations, posts] = await Promise.all([
    getFeaturedProperties(),
    getPublishedServices(),
    getPublishedLocations(),
    getPublishedBlogPosts()
  ]);

  return (
    <>
      <section className="border-b border-border bg-[#111111] text-white">
        <SectionContainer className="py-24 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-500">Premium Nairobi Realty</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">Strategic property advisory for discerning owners, investors, and tenants.</h1>
          <p className="mt-6 max-w-2xl text-white/75">Harleys Realtor delivers sales, lettings, and management with editorial-level presentation and disciplined execution.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/properties" className="rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold">Explore Properties</Link>
            <Link href="/request-valuation" className="rounded-md border border-white/40 px-5 py-3 text-sm">Request Valuation</Link>
          </div>
          <div className="mt-10"><TrustStrip /></div>
        </SectionContainer>
      </section>

      <SectionContainer>
        <SectionHeading eyebrow="Featured Listings" title="Selected opportunities" description="A curated view of active premium inventory." />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProperties.map((item) => <PropertyCard key={item.id} property={item} />)}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface">
        <SectionHeading eyebrow="Services" title="Full spectrum capability" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <article key={item.id} className="rounded-premium border border-border bg-white p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
              <Link href={`/services/${item.slug}`} className="mt-4 inline-block text-sm text-brand-700">Learn more →</Link>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Locations" title="Nairobi focus areas" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <article key={location.id} className="rounded-premium border border-border p-5">
              <h3 className="text-lg font-semibold">{location.name}</h3>
              <p className="mt-2 text-sm text-muted">{location.short_description}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface">
        <SectionHeading eyebrow="Insights" title="Recent market intelligence" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="rounded-premium border border-border bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-muted">{post.created_at}</p>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
