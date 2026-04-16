import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { getPublishedAgents } from "@/lib/queries/public";

export default async function TeamPage() {
  const agents = await getPublishedAgents();
  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Our Team</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {agents.map((agent) => (
          <article key={agent.id} className="rounded-premium border border-border p-5">
            <h2 className="text-xl font-semibold"><Link href={`/team/${agent.slug}`}>{agent.name}</Link></h2>
            <p className="text-sm text-muted">{agent.role}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
