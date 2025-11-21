import Image from "next/image";
import { Section } from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about" bg="bg-[--color-moss-green]">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="section-heading text-[--color-sand]">
            <span className="script">Our Story</span>
            Rooted in the wild, crafted for your skin
          </h2>
          <p className="mt-4 leading-relaxed text-[--color-sand]">
            Born from the wild beauty of the mountains, we craft small-batch goods with simple, honest
            ingredients—locally rendered tallow, botanicals, and essential oils. Every batch is handled with care
            to respect nature and your skin.
          </p>
          <p className="mt-4 leading-relaxed text-[--color-sand]">
            We keep it minimal and sustainable: clean formulas, recyclable packaging, and a devotion to
            long-lasting quality.
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg apothecary-frame card-hover border border-[--color-pine-green]/50">
          <Image
            src="/WRH7.png"
            alt="Homestead and products"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
