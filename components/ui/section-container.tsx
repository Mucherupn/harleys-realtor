import type { HTMLAttributes } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";

export function SectionContainer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container {...props} />
    </section>
  );
}
