import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { getPublishedLocations } from "@/lib/queries/public";

export default async function LocationsPage() {
  const locations = await getPublishedLocations();
  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Locations</h1>
      <p className="mt-3 text-muted">SEO-oriented area pages for Nairobi neighborhoods with inventory and lifestyle context.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {locations.map((location) => (
          <article key={location.id} className="rounded-premium border border-border p-5">
            <h2 className="text-xl font-semibold"><Link href={`/locations/${location.slug}`}>{location.name}</Link></h2>
            <p className="mt-2 text-sm text-muted">{location.short_description}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
