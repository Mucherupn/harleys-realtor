import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPublishedAgents } from "@/lib/queries/public";

export default async function AboutPage() {
  const agents = await getPublishedAgents();

  return (
    <>
      <SectionContainer>
        <SectionHeading eyebrow="About" title="Built for trust, precision, and long-term value." description="Harleys Realtor is a Nairobi focused advisory and brokerage firm supporting investors, owners, and occupiers." />
      </SectionContainer>
      <SectionContainer className="bg-surface">
        <h2 className="text-2xl font-semibold">Our values</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Integrity", "Transparent pricing guidance and honest communication."],
            ["Execution", "Disciplined processes that reduce friction and surprises."],
            ["Insight", "Local intelligence grounded in neighborhood fundamentals."]
          ].map(([title, body]) => (
            <article key={title} className="rounded-premium border border-border bg-white p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-2xl font-semibold">Leadership highlights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {agents.map((agent) => (
            <article key={agent.id} className="rounded-premium border border-border p-5">
              <p className="font-semibold">{agent.name}</p>
              <p className="text-sm text-muted">{agent.role}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="mt-8 inline-block rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-white">Speak to our team</Link>
      </SectionContainer>
    </>
  );
}
