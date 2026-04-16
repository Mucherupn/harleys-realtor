import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { PropertyCard } from "@/components/properties/property-card";
import { getFeaturedProperties } from "@/lib/queries/public";

export default async function HomePage() {
  const featured = await getFeaturedProperties();

  return (
    <>
      <section className="bg-premium text-white">
        <SectionContainer>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-500">Harleys Realtor</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">Premium property solutions in Nairobi.</h1>
          <p className="mt-4 max-w-2xl text-white/80">Buy, rent, manage, and invest with a trusted team focused on quality outcomes.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/properties" className="rounded-premium bg-brand-500 px-5 py-3 text-sm font-semibold">Explore Properties</Link>
            <Link href="/request-valuation" className="rounded-premium border border-white/40 px-5 py-3 text-sm">Request Consultation</Link>
          </div>
        </SectionContainer>
      </section>
      <SectionContainer>
        <h2 className="text-3xl font-semibold">Featured Properties</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">{featured.map((item) => <PropertyCard key={item.id} property={item} />)}</div>
      </SectionContainer>
    </>
  );
}
