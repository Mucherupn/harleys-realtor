import { AdminTopbar } from "@/components/admin/topbar";

export default function AdminBlogNewPage() {
  return (
    <section>
      <AdminTopbar title="Create Blog Post" />
      <div className="rounded-premium border border-border bg-white p-5 text-sm text-muted">Post editor scaffold with publish toggle and cover image upload placeholder.</div>
    </section>
  );
}
