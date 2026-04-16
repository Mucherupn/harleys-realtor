import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-container px-4 md:px-8", className)} {...props} />;
}
