import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]" />
      <div className="glow-orb -top-24 right-1/4 h-72 w-72 bg-accent/15" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
