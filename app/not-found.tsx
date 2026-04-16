import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-container px-4 py-24 text-center md:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-brand-500">404</p>
      <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">The page you requested could not be located.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-brand-500 px-5 py-3 text-sm font-medium text-white">Back to homepage</Link>
    </main>
  );
}
