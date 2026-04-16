import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { getLocationBySlug, getProperties } from "@/lib/queries/public";
import { PropertyCard } from "@/components/properties/property-card";

export default async function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = await getLocationBySlug(params.slug);
  if (!location) notFound();
  const listings = (await getProperties({})).filter((item) => item.location_name?.toLowerCase() === location.name.toLowerCase());

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">{location.name}</h1>
      <p className="mt-3 text-muted">{location.long_description}</p>
      <h2 className="mt-8 text-2xl font-semibold">Available properties</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2">{listings.map((listing) => <PropertyCard key={listing.id} property={listing} />)}</div>
      <h3 className="mt-8 text-xl font-semibold">FAQs</h3>
      <p className="mt-2 text-sm text-muted">Area-specific FAQs placeholder for SEO publishing workflow.</p>
    </SectionContainer>
  );
}
