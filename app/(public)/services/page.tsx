import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPublishedServices } from "@/lib/queries/public";

export default async function ServicesPage() {
  const services = await getPublishedServices();

  return (
    <SectionContainer>
      <SectionHeading eyebrow="Services" title="End-to-end real estate capability" description="Operationally robust services aligned to premium residential and investment assets." />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-premium border border-border p-5">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-muted">{service.excerpt}</p>
            <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm font-medium text-brand-700">View service</Link>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
