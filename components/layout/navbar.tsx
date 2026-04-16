import Link from "next/link";
import { navLinks } from "@/lib/constants/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-bold">Harleys Realtor</Link>
        <div className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-ink">{link.label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
