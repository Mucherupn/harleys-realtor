import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";

export default function Page() {
  return (
    <>
      <SectionContainer>
        <p className="text-xs uppercase tracking-[0.2em] text-brand-500">Service</p>
        <h1 className="mt-3 text-4xl font-semibold">Property Management</h1>
        <p className="mt-4 max-w-2xl text-muted">Structured tenant operations, financial reporting, and lifecycle maintenance for resilient performance.</p>
      </SectionContainer>
      <SectionContainer className="bg-surface">
        <h2 className="text-2xl font-semibold">Benefits</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted md:grid-cols-3"><li>Dedicated advisory lead</li><li>Premium marketing and reporting</li><li>Process-led execution</li></ul>
      </SectionContainer>
      <SectionContainer>
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <p className="mt-3 text-sm text-muted">Detailed FAQs are scaffolded and ready for CMS content.</p>
        <Link href="/contact" className="mt-6 inline-block rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-white">Book Consultation</Link>
      </SectionContainer>
    </>
  );
}
