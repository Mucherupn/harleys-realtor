export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-premium border border-border bg-white p-5 shadow-sm">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </article>
  );
}
