import { QuoteForm } from "@/components/forms/quote-form";
import { SectionContainer } from "@/components/ui/section-container";

export default function RequestQuotePage() {
  return (
    <SectionContainer className="grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">Request a Quote</h1>
        <p className="mt-4 text-muted">Receive a clear scope and professional fee outline tailored to your property objective.</p>
      </div>
      <QuoteForm />
    </SectionContainer>
  );
}
