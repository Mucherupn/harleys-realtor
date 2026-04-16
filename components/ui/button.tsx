import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-premium bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700",
        className
      )}
      {...props}
    />
  );
}
