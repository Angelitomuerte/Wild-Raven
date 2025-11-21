import { ReactNode } from "react";

export function Section({
  id,
  bg,
  children
}: {
  id?: string;
  bg?: string; // e.g. "bg-[--color-cream]"
  children: ReactNode;
}) {
  return (
    <section id={id} className={`section ${bg ?? ""}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
