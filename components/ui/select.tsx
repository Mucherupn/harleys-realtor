import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cn("h-11 w-full rounded-md border border-border bg-white px-3 text-sm outline-none ring-brand-500 focus:ring-2", props.className)} />;
}
