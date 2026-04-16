import { AdminTopbar } from "@/components/admin/topbar";

export default function AdminPropertyNewPage() {
  return (
    <section>
      <AdminTopbar title="Create Property" />
      <div className="rounded-premium border border-border bg-white p-5 text-sm text-muted">Form scaffold includes all required fields: title, slug, pricing, location, amenities, media, SEO, and assignment.</div>
    </section>
  );
}
