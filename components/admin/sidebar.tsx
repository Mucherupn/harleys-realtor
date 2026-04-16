import Link from "next/link";

const links = [
  ["/admin/dashboard", "Dashboard"],
  ["/admin/properties", "Properties"],
  ["/admin/leads", "Leads"],
  ["/admin/blog", "Blog"],
  ["/admin/agents", "Agents"],
  ["/admin/settings", "Settings"]
];

export function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-border bg-white p-4">
      <p className="text-sm font-semibold">Harleys Admin</p>
      <nav className="mt-4 grid gap-2 text-sm">
        {links.map(([href, label]) => (
          <Link key={href} href={href} className="rounded px-3 py-2 hover:bg-surface">{label}</Link>
        ))}
      </nav>
    </aside>
  );
}
