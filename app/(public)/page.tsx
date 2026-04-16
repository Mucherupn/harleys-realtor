import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PropertyCard } from "@/components/properties/property-card";
import { getFeaturedProperties, getPublishedServices, getPublishedLocations, getPublishedBlogPosts } from "@/lib/queries/public";
import { buildMetadata } from "@/lib/seo/metadata";
import { TrustStrip } from "@/components/home/trust-strip";
import { PropertySearchCard } from "@/components/home/property-search-card";
import { Card } from "@/components/ui/card";

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
        <SectionContainer className="py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-500">Harleys Realtor • Nairobi</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">Acquire, lease, and manage exceptional property with confidence.</h1>
          <p className="mt-6 max-w-2xl text-white/75">We blend strategic advisory, premium marketing, and disciplined execution for owners, investors, and tenants across Nairobi.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/properties" className="rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold">Explore Properties</Link>
            <Link href="/request-valuation" className="rounded-md border border-white/40 px-5 py-3 text-sm">Request Valuation</Link>
          </div>
          <PropertySearchCard />
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
            <Card key={item.id} className="p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
              <Link href={`/services/${item.slug}`} className="mt-4 inline-block text-sm text-brand-700">Learn more →</Link>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionHeading eyebrow="Locations" title="Nairobi focus areas" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {locations.map((location) => (
            <Card key={location.id} className="p-5">
              <h3 className="text-lg font-semibold">{location.name}</h3>
              <p className="mt-2 text-sm text-muted">{location.short_description}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface">
        <SectionHeading eyebrow="Insights" title="Recent market intelligence" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.id} className="p-5">
              <p className="text-xs uppercase tracking-wide text-muted">{post.created_at}</p>
              <h3 className="mt-2 text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <Card className="bg-[#111111] p-8 text-white md:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-brand-500">Start a mandate</p>
          <h2 className="mt-3 text-3xl font-semibold">Looking to sell, let, or reposition a Nairobi asset?</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/75">Talk to our advisory team for a tailored go-to-market strategy and asset plan.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold">Speak With an Advisor</Link>
            <Link href="/request-quote" className="rounded-md border border-white/40 px-5 py-3 text-sm">Request Management Quote</Link>
          </div>
        </Card>
      </SectionContainer>
    </>
  );
}
