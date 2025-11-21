// src/components/sections/Products.tsx
import Image from "next/image";

export default function Products() {
  const categories = [
    {
      id: "face",
      name: "Face",
      blurb: "Moisturizers, oils, and cleansers made with tallow for delicate skin.",
    },
    {
      id: "body",
      name: "Body",
      blurb: "Soaps, body butters, scrubs, and salves for everyday nourishment.",
    },
    {
      id: "home",
      name: "Home",
      blurb: "Soy & coco wax candles to bring the homestead vibe inside.",
    },
    {
      id: "mens",
      name: "Men’s",
      blurb: "Beard care rooted in tallow and botanicals.",
    },
  ];

  return (
    <section
      id="products"
      className="section bg-[--color-sage-green] text-[--color-cream]"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-[--color-cream]">
          <span className="script block mb-2">Our Creations</span>
          Wild Raven Homestead Product Lines
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-[--color-cream]/85">
          Small-batch tallow creams, herbal facial oils, whipped body butters, and apothecary goods —
          all made to look as good on your counter as they feel on your skin.
        </p>

        {/* image collage */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <Image
              src="/craft.jpg"
              alt="Tallow cream in amber jar"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <Image
              src="/craft2.jpg"
              alt="Herbal face oil dropper"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <Image
              src="/craft3.jpg"
              alt="Whipped tallow body butter"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <Image
              src="/craft4.jpg"
              alt="Whipped cream in wooden bowl"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <Image
              src="/craft5.jpg"
              alt="Amber jar tallow butter"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10">
            <Image
              src="/craft6.jpg"
              alt="Cream applied to hand"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
        </div>

        {/* category cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-xl bg-white/10 border border-white/15 hover:bg-white/16 transition-all duration-200 p-5 flex flex-col gap-3 min-h-[160px]"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[--color-cream]">
                {cat.name}
              </h3>
              <p className="text-sm leading-relaxed text-[--color-cream]/80">
                {cat.blurb}
              </p>
              <span className="mt-auto text-sm font-medium text-[--color-cream]">
                View {cat.name} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
