import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { PropertyCard } from "@/components/properties/property-card";
import { SectionContainer } from "@/components/ui/section-container";
import { formatCurrencyKES } from "@/lib/utils/formatters";
import { getPropertyBySlug, getSimilarProperties } from "@/lib/queries/public";

export default async function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = await getPropertyBySlug(params.slug);
  if (!property) notFound();
  const similar = await getSimilarProperties(property.id);

  return (
    <>
      <SectionContainer>
        <p className="text-xs uppercase tracking-[0.2em] text-brand-500">{property.purpose === "sale" ? "For Sale" : "For Rent"}</p>
        <h1 className="mt-3 text-4xl font-semibold">{property.title}</h1>
        <p className="mt-2 text-lg font-semibold">{formatCurrencyKES(property.price)}</p>
        <p className="mt-2 text-muted">{property.location_name} • {property.bedrooms} Bed • {property.bathrooms} Bath</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(property.gallery_images ?? []).map((img) => <div key={img} className="h-48 rounded-premium border border-border bg-surface" />)}
        </div>
      </SectionContainer>
      <SectionContainer className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-3 text-muted">{property.description}</p>
          <h3 className="mt-6 font-semibold">Amenities</h3>
          <p className="mt-2 text-sm text-muted">{property.amenities?.join(" • ")}</p>
          <h3 className="mt-6 font-semibold">Details</h3>
          <p className="mt-2 text-sm text-muted">Reference: {property.reference_code} | Area: {property.area_size} {property.area_unit}</p>
        </div>
        <aside className="rounded-premium border border-border p-5">
          <h3 className="text-lg font-semibold">Inquire about this property</h3>
          <p className="mt-2 text-sm text-muted">WhatsApp CTA placeholder: +254 700 000 000</p>
          <div className="mt-4"><InquiryForm propertyId={property.id} /></div>
        </aside>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-2xl font-semibold">Similar properties</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">{similar.map((item) => <PropertyCard key={item.id} property={item} />)}</div>
      </SectionContainer>
    </>
  );
}
