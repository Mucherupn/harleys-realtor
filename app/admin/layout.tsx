import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="mx-auto flex max-w-[1440px]">
        <AdminSidebar />
        <main className="w-full p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
