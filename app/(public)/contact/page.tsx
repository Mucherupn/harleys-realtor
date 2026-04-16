import { ContactForm } from "@/components/forms/contact-form";
import { SectionContainer } from "@/components/ui/section-container";

export default function ContactPage() {
  return (
    <SectionContainer>
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p className="mt-3 text-muted">Tell us what you are looking for and our team will respond promptly.</p>
      <div className="mt-6 max-w-xl">
        <ContactForm />
      </div>
    </SectionContainer>
  );
}
