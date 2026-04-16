import Link from "next/link";
import { navLinks } from "@/lib/constants/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">Harleys Realtor</Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-ink">{link.label}</Link>
          ))}
          <Link href="/request-quote" className="rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white">Request Quote</Link>
        </div>
      </nav>
    </header>
  );
}
