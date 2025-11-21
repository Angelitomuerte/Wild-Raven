// src/components/sections/HomeProducts.tsx
import Image from "next/image";

export default function HomeProducts() {
  const items = [
    {
      name: "Enchanted Forest Soy + Coco Wax Candle",
      desc: "Hand-poured in amber glass with a bamboo lid — foresty, slightly sweet, perfect for fall and cabin days.",
    },
    {
      name: "Homestead Hearth Candle",
      desc: "Cozy, house-filling scent in the same clean-burning soy + coco blend for everyday burn.",
    },
    {
      name: "Rustic Apothecary Candle",
      desc: "Greenery-and-antler inspired styling, herbal notes, and a low-tox wax blend to match the rest of the WRH line.",
    },
  ];

  return (
    <section id="home" className="section bg-[--color-cream]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[--color-forest-green] mb-2">
          Home
        </h2>
        <p className="text-[--color-forest-green]/80 mb-6 max-w-2xl">
          Hand-poured soy & coconut wax candles styled with antler, botanicals, and glassware to match the Wild Raven Homestead aesthetic.
        </p>

        {/* collage */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/soy-coco-candle.jpg"
              alt="Wild Raven Homestead Enchanted Forest soy + coco wax candle burning"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/soy-coco-candle2.jpg"
              alt="Enchanted Forest candle with bamboo lid and greenery"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
            />
          </div>
          {/* optional empty slots for balance on large screens */}
          <div className="hidden lg:block rounded-xl bg-white/10 border border-[--color-sage-green]/10" />
          <div className="hidden lg:block rounded-xl bg-white/10 border border-[--color-sage-green]/10" />
        </div>

        {/* products */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="rounded-xl bg-white/80 border border-[--color-sage-green]/25 p-4 flex flex-col gap-2"
            >
              <h3 className="font-semibold text-[--color-forest-green]">
                {item.name}
              </h3>
              <p className="text-sm text-[--color-forest-green]/75">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
