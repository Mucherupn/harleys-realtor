import Link from "next/link";
import { AdminTopbar } from "@/components/admin/topbar";

export default function AdminBlogPage() {
  return (
    <section>
      <AdminTopbar title="Blog" />
      <Link href="/admin/blog/new" className="rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white">New Post</Link>
      <div className="mt-6 rounded-premium border border-border bg-white p-5 text-sm text-muted">Blog CRUD scaffold with slug, excerpt, content, tags placeholder, and SEO fields.</div>
    </section>
  );
}
