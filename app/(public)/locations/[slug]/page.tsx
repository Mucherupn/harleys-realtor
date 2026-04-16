import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { getLocationBySlug } from "@/lib/queries/public";

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Living in {location.name}</h1>
      <p className="mt-4 text-muted">{location.short_description}</p>
    </SectionContainer>
  );
}
