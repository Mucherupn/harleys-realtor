import { AdminTopbar } from "@/components/admin/topbar";
import { StatCard } from "@/components/ui/stat-card";

export default function AdminDashboardPage() {
  return (
    <section>
      <AdminTopbar title="Dashboard" />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Active Listings" value="42" />
        <StatCard label="New Leads" value="18" />
        <StatCard label="Published Insights" value="16" />
        <StatCard label="Conversion Rate" value="12.4%" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-premium border border-border bg-white p-5"><h2 className="font-semibold">Recent Leads</h2><p className="mt-2 text-sm text-muted">Lead status updates and notes placeholder.</p></article>
        <article className="rounded-premium border border-border bg-white p-5"><h2 className="font-semibold">Recent Properties</h2><p className="mt-2 text-sm text-muted">Draft, publish, and featured toggle quick actions.</p></article>
      </div>
    </section>
  );
}
