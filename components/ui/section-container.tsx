import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

export function SectionContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <section className={cn("mx-auto w-full max-w-container px-4 py-16 md:px-8", className)}>{children}</section>;
}
