import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold">Harleys Realtor</p>
          <p className="mt-3 max-w-md text-sm text-muted">A premium Nairobi real estate partner for sales, lettings, management, and consultancy.</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/team">Team</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
