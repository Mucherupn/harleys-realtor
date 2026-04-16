import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { getAgentBySlug } from "@/lib/queries/public";

export default async function TeamDetailPage({ params }: { params: { slug: string } }) {
  const agent = await getAgentBySlug(params.slug);
  if (!agent) notFound();

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">{agent.name}</h1>
      <p className="mt-2 text-muted">{agent.role}</p>
      <p className="mt-4 text-sm text-muted">Detailed profile page scaffold: biography, listings, social links, and consultation CTA.</p>
    </SectionContainer>
  );
}
