import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { getPropertyBySlug, getSimilarProperties } from "@/lib/queries/public";
import { PropertyCard } from "@/components/properties/property-card";
import { ContactForm } from "@/components/forms/contact-form";

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) notFound();

  const similar = await getSimilarProperties(property.id);

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">{property.title}</h1>
      <p className="mt-2 text-muted">{property.neighborhood} • {property.bedrooms} bedrooms • {property.bathrooms} bathrooms</p>
      <p className="mt-4 text-2xl font-bold">{property.currency} {property.price.toLocaleString()}</p>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Inquire about this property</h2>
          <div className="mt-4"><ContactForm /></div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Similar properties</h2>
          <div className="mt-4 grid gap-4">{similar.map((item) => <PropertyCard key={item.id} property={item} />)}</div>
        </div>
      </div>
    </SectionContainer>
  );
}
