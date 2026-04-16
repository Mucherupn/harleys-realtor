import { EmptyState } from "@/components/ui/empty-state";
import { PropertyCard } from "@/components/properties/property-card";
import { SectionContainer } from "@/components/ui/section-container";
import { parsePropertyFilters } from "@/lib/utils/query-params";
import { getProperties } from "@/lib/queries/public";

export default async function PropertiesPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const filters = parsePropertyFilters(searchParams);
  const properties = await getProperties(filters);

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Property Listings</h1>
      <p className="mt-3 text-muted">Refined search, sort, and pagination scaffold prepared for production data integration.</p>
      <div className="mt-6 rounded-premium border border-border bg-surface p-4 text-sm text-muted">Filter Bar: purpose, budget, bedrooms, location, and sort controls.</div>
      {properties.length === 0 ? (
        <div className="mt-8"><EmptyState title="No listings found" description="Try adjusting filters or viewing featured inventory." /></div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2">{properties.map((property) => <PropertyCard key={property.id} property={property} />)}</div>
      )}
      <div className="mt-8 text-sm text-muted">Pagination scaffold: Page 1 of 1</div>
    </SectionContainer>
  );
}
