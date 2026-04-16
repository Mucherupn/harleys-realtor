import { ValuationForm } from "@/components/forms/valuation-form";
import { SectionContainer } from "@/components/ui/section-container";

export default function RequestValuationPage() {
  return (
    <SectionContainer className="grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">Request a Valuation</h1>
        <p className="mt-4 text-muted">Confidential, data-informed valuation support for sale, letting, refinancing, and portfolio planning.</p>
      </div>
      <ValuationForm />
    </SectionContainer>
  );
}
