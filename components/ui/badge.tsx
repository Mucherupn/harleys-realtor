import { cn } from "@/lib/utils/cn";

export function Badge({ label, className }: { label: string; className?: string }) {
  return <span className={cn("inline-flex rounded-full border border-border px-3 py-1 text-xs font-medium", className)}>{label}</span>;
}
