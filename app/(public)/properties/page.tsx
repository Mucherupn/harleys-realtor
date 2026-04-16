import { PropertyCard } from "@/components/properties/property-card";
import { SectionContainer } from "@/components/ui/section-container";
import { getProperties } from "@/lib/queries/public";

export default async function PropertiesPage({
  searchParams
}: {
  searchParams: Promise<{ purpose?: "sale" | "rent"; keyword?: string }>;
}) {
  const { purpose, keyword } = await searchParams;
  const properties = await getProperties({ purpose, keyword });

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Property Listings</h1>
      <p className="mt-2 text-sm text-muted">Filter by purpose and keyword via URL query parameters.</p>
      {properties.length === 0 ? (
        <div className="mt-6 rounded-premium border border-border bg-surface p-6 text-sm">No properties match your filter.</div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">{properties.map((property) => <PropertyCard key={property.id} property={property} />)}</div>
      )}
    </SectionContainer>
  );
}
