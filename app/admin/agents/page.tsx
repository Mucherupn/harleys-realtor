import Link from "next/link";
import { AdminTopbar } from "@/components/admin/topbar";

export default function AdminAgentsPage() {
  return (
    <section>
      <AdminTopbar title="Agents" />
      <Link href="/admin/agents/new" className="rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white">New Agent</Link>
      <div className="mt-6 rounded-premium border border-border bg-white p-5 text-sm text-muted">Agent CRUD scaffold with profile, role, socials, photo, display order, and publish toggle.</div>
    </section>
  );
}
