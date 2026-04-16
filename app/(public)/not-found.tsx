import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";

export default function NotFound() {
  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 text-muted">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-flex text-brand-700">Back to homepage</Link>
    </SectionContainer>
  );
}
