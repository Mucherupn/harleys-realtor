import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PropertyCard } from "@/components/properties/property-card";
import {
  getFeaturedProperties,
  getPublishedServices,
  getPublishedLocations,
  getPublishedBlogPosts,
} from "@/lib/queries/public";
import { buildMetadata } from "@/lib/seo/metadata";
import { TrustStrip } from "@/components/home/trust-strip";
import { PropertySearchCard } from "@/components/home/property-search-card";
import { Card } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Premium Nairobi Real Estate",
  description:
    "Harleys Realtor offers premium sales, lettings, management, and consultancy services in Nairobi.",
  path: "/",
});

type PropertyItem = {
  id: string;
  [key: string]: unknown;
};

type ServiceItem = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
};

type LocationItem = {
  id: string;
  name: string;
  slug?: string;
  short_description?: string | null;
};

type PostItem = {
  id: string;
  title: string;
  slug?: string;
  excerpt?: string | null;
  created_at?: string | null;
};

export default async function HomePage() {
  let featuredProperties: PropertyItem[] = [];
  let services: ServiceItem[] = [];
  let locations: LocationItem[] = [];
  let posts: PostItem[] = [];

  try {
    const [featuredPropertiesResult, servicesResult, locationsResult, postsResult] =
      await Promise.all([
        getFeaturedProperties(),
        getPublishedServices(),
        getPublishedLocations(),
        getPublishedBlogPosts(),
      ]);

    featuredProperties = Array.isArray(featuredPropertiesResult)
      ? (featuredPropertiesResult as PropertyItem[])
      : [];

    services = Array.isArray(servicesResult)
      ? (servicesResult as ServiceItem[])
      : [];

    locations = Array.isArray(locationsResult)
      ? (locationsResult as LocationItem[])
      : [];

    posts = Array.isArray(postsResult) ? (postsResult as PostItem[]) : [];
  } catch (error) {
    console.error("Homepage data load failed:", error);
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-[#111111] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,18,18,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />

        <SectionContainer className="relative py-24 md:py-32">
          <div className="max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-brand-500">
              Harleys Realtor • Nairobi
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] md:text-6xl">
              Acquire, lease, and manage exceptional property with confidence.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              We combine strategic advisory, premium marketing, and disciplined
              execution for owners, investors, occupiers, and tenants across Nairobi.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/properties"
                className="rounded-md bg-brand-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:opacity-90"
              >
                Explore Properties
              </Link>

              <Link
                href="/request-valuation"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Request Valuation
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <PropertySearchCard />
          </div>

          <div className="mt-10">
            <TrustStrip />
          </div>
        </SectionContainer>
      </section>

      <SectionContainer className="py-20 md:py-24">
        <SectionHeading
          eyebrow="Featured Listings"
          title="Selected opportunities"
          description="A curated view of active premium inventory across Nairobi's most sought after locations."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProperties.length > 0 ? (
            featuredProperties.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))
          ) : (
            <>
              <Card className="p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-brand-500">
                  Featured Listing
                </p>
                <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                  Premium apartment inventory will appear here
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Once your featured properties are connected from Supabase, this
                  section will automatically populate with live listings.
                </p>
              </Card>

              <Card className="p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-brand-500">
                  Curated Stock
                </p>
                <h3 className="mt-3 text-xl font-semibold text-neutral-900">
                  Showcase your strongest sale and rental opportunities
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  This layout is already ready for real data, so you can continue
                  refining the frontend while backend content is being connected.
                </p>
              </Card>
            </>
          )}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface py-20 md:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Full spectrum capability"
          description="From sale mandates to management strategy, every service is presented with clarity and confidence."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.length > 0 ? (
            services.map((item) => (
              <Card
                key={item.id}
                className="rounded-2xl border border-border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.excerpt || "Premium property advisory and execution tailored to each mandate."}
                </p>

                <Link
                  href={`/services/${item.slug}`}
                  className="mt-5 inline-flex text-sm font-medium text-brand-700 transition hover:text-brand-500"
                >
                  Learn more
                </Link>
              </Card>
            ))
          ) : (
            <>
              <Card className="rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">Lettings and Sales</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Structured marketing, lead handling, and transaction support for
                  premium residential and commercial mandates.
                </p>
              </Card>

              <Card className="rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">Property Management</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Practical management support focused on occupancy, reporting,
                  maintenance coordination, and landlord confidence.
                </p>
              </Card>

              <Card className="rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">Consultancy</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Guidance for investors, owners, and occupiers seeking sharper
                  decisions in Nairobi real estate.
                </p>
              </Card>
            </>
          )}
        </div>
      </SectionContainer>

      <SectionContainer className="py-20 md:py-24">
        <SectionHeading
          eyebrow="Locations"
          title="Nairobi focus areas"
          description="A location led presentation gives the platform stronger trust, relevance, and SEO depth."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {locations.length > 0 ? (
            locations.map((location) => (
              <Card
                key={location.id}
                className="rounded-2xl border border-border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {location.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {location.short_description ||
                    "Explore available opportunities, local market context, and tailored real estate support in this location."}
                </p>

                {location.slug ? (
                  <Link
                    href={`/locations/${location.slug}`}
                    className="mt-5 inline-flex text-sm font-medium text-brand-700 transition hover:text-brand-500"
                  >
                    View location
                  </Link>
                ) : null}
              </Card>
            ))
          ) : (
            <>
              <Card className="rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">Karen</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Leafy, established, and consistently attractive for premium
                  residential occupation and long term value.
                </p>
              </Card>

              <Card className="rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">Kilimani</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  A dense mixed use node with strong rental activity, apartment
                  stock, and growing investor attention.
                </p>
              </Card>
            </>
          )}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface py-20 md:py-24">
        <SectionHeading
          eyebrow="Insights"
          title="Recent market intelligence"
          description="A strong real estate brand should not only list property. It should also inform the market."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card
                key={post.id}
                className="rounded-2xl border border-border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {post.created_at
                    ? new Date(post.created_at).toLocaleDateString("en-KE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Market Insight"}
                </p>

                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {post.excerpt ||
                    "Read a concise view on pricing, demand, and decision making in Nairobi real estate."}
                </p>

                {post.slug ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-flex text-sm font-medium text-brand-700 transition hover:text-brand-500"
                  >
                    Read article
                  </Link>
                ) : null}
              </Card>
            ))
          ) : (
            <>
              <Card className="rounded-2xl border border-border p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Market Insight
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  Why location pages matter in modern real estate marketing
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Premium real estate websites win when they combine listings with
                  useful location based intelligence and trust signals.
                </p>
              </Card>

              <Card className="rounded-2xl border border-border p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Strategy
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  Building a stronger digital mandate for sales and letting
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Strong structure, cleaner presentation, and consistent data
                  handling create a better experience for both clients and agents.
                </p>
              </Card>
            </>
          )}
        </div>
      </SectionContainer>

      <SectionContainer className="py-20 md:py-24">
        <Card className="rounded-3xl bg-[#111111] p-8 text-white md:p-12">
          <p className="text-xs uppercase tracking-[0.16em] text-brand-500">
            Start a mandate
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-tight md:text-4xl">
            Looking to sell, let, or reposition a Nairobi asset?
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            Speak to our advisory team for a tailored go to market strategy, asset
            positioning support, and practical execution guidance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-md bg-brand-500 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:opacity-90"
            >
              Speak With an Advisor
            </Link>

            <Link
              href="/request-quote"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Request Management Quote
            </Link>
          </div>
        </Card>
      </SectionContainer>
    </>
  );
}