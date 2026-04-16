import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types";
import { formatCurrencyKES, imageAltFallback } from "@/lib/utils/formatters";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-premium border border-border bg-white shadow-sm">
      <div className="relative h-56">
        <Image src={property.cover_image_url ?? "https://images.unsplash.com/photo-1560185008-b033106af5c3"} alt={imageAltFallback(property.title)} fill className="object-cover" />
      </div>
      <div className="space-y-2 p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-brand-500">For {property.purpose}</p>
        <h3 className="text-lg font-semibold"><Link href={`/properties/${property.slug}`}>{property.title}</Link></h3>
        <p className="text-sm text-muted">{property.neighborhood ?? "Nairobi"}</p>
        <p className="font-semibold">{formatCurrencyKES(property.price)}</p>
        <p className="text-sm text-muted">{property.bedrooms} bed • {property.bathrooms} bath</p>
      </div>
    </article>
  );
}
