import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-premium border border-border bg-white shadow-premium">
      <Image
        src={property.cover_image_url ?? "https://images.unsplash.com/photo-1560518883-ce09059eeffa"}
        alt={property.title}
        width={640}
        height={420}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-wider text-brand-700">For {property.purpose}</p>
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-muted">{property.bedrooms} Bed • {property.bathrooms} Bath • {property.neighborhood}</p>
        <p className="text-xl font-bold">{property.currency} {property.price.toLocaleString()}</p>
        <Link href={`/properties/${property.slug}`} className="text-sm font-medium text-brand-700">View Property →</Link>
      </div>
    </article>
  );
}
