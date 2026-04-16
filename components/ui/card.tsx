import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <article className={cn("rounded-premium border border-border bg-white shadow-soft", className)} {...props} />;
}
