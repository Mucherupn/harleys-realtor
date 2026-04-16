import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/section-container";
import { getPublishedAgents } from "@/lib/queries/public";

export default async function TeamDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = (await getPublishedAgents()).find((item) => item.slug === slug);
  if (!agent) notFound();

  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">{agent.name}</h1>
      <p className="mt-3 text-muted">{agent.role}</p>
    </SectionContainer>
  );
}
