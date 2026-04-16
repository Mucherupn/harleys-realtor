import { ContactForm } from "@/components/forms/contact-form";
import { SectionContainer } from "@/components/ui/section-container";
import { getSiteSettings } from "@/lib/queries/public";

export default async function ContactPage() {
  const settings = await getSiteSettings();
  return (
    <SectionContainer className="grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="mt-4 text-muted">Office details, operating hours, and consultation request.</p>
        <div className="mt-6 space-y-2 text-sm text-muted">
          <p>{settings.address}</p>
          <p>{settings.phone}</p>
          <p>{settings.email}</p>
          <p>Mon–Fri, 8:30 AM – 6:00 PM</p>
        </div>
        <div className="mt-6 h-56 rounded-premium border border-border bg-surface p-4 text-sm text-muted">Google Maps placeholder</div>
      </div>
      <ContactForm />
    </SectionContainer>
  );
}
