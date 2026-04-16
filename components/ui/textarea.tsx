import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn("w-full rounded-md border border-border px-3 py-2 text-sm outline-none ring-brand-500 placeholder:text-muted focus:ring-2", props.className)} />;
}
