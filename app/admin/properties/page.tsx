import Link from "next/link";
import { AdminTopbar } from "@/components/admin/topbar";

export default function AdminPropertiesPage() {
  return (
    <section>
      <AdminTopbar title="Properties" />
      <Link href="/admin/properties/new" className="rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white">New Property</Link>
      <div className="mt-6 rounded-premium border border-border bg-white p-5 text-sm text-muted">CRUD table scaffold with draft/publish, feature toggle, delete, duplicate, preview, and image ordering placeholders.</div>
    </section>
  );
}
