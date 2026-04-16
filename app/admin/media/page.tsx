import { AdminTopbar } from "@/components/admin/topbar";
import { storageBuckets } from "@/lib/constants/storage";

export default function AdminMediaPage() {
  return (
    <section>
      <AdminTopbar title="Media Library" />
      <div className="rounded-premium border border-border bg-white p-5 text-sm text-muted">
        Supabase storage management placeholder for {storageBuckets.propertyImages}, {storageBuckets.agentImages}, {storageBuckets.blogImages}, and {storageBuckets.siteAssets}.
      </div>
    </section>
  );
}
