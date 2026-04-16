import type { PropsWithChildren } from "react";

export function SectionContainer({ children }: PropsWithChildren) {
  return <section className="mx-auto w-full max-w-container px-4 py-16 md:px-8">{children}</section>;
}
