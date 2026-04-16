import Link from "next/link";

const links = [
  ["Dashboard", "/admin/dashboard"],
  ["Properties", "/admin/properties"],
  ["Leads", "/admin/leads"],
  ["Blog", "/admin/blog"],
  ["Agents", "/admin/agents"],
  ["Locations", "/admin/locations"],
  ["Services", "/admin/services"],
  ["Media", "/admin/media"],
  ["Settings", "/admin/settings"],
  ["SEO", "/admin/seo"]
] as const;

export function AdminSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-64 border-r border-border bg-white p-5 md:block">
      <p className="text-lg font-semibold">Harleys Admin</p>
      <nav className="mt-6 space-y-1">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-ink">{label}</Link>
        ))}
      </nav>
    </aside>
  );
}
