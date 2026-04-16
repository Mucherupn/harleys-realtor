import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("h-11 w-full rounded-md border border-border px-3 text-sm outline-none ring-brand-500 placeholder:text-muted focus:ring-2", props.className)} />;
}
