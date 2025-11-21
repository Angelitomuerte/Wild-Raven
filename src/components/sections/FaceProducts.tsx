// src/components/sections/FaceProducts.tsx
import Image from "next/image";

export default function FaceProducts() {
  // products based on your actual photos
  const items = [
    {
      name: "Tallow & Honey Face Moisturizer",
      desc: "Creamy, slow-whipped moisturizer made with grass-fed tallow, local honey, and botanicals to calm thirsty skin.",
    },
    {
      name: "Arctic Youth Serum",
      desc: "A light, oil-based serum in an amber dropper bottle — packed with skin-loving oils to brighten and soften.",
    },
    {
      name: "Tallow & Goat’s Milk Face Bar",
      desc: "Pressed, embossed facial bar with a bee motif — gentle enough for daily cleansing and facial shaving.",
    },
    {
      name: "Wildflower Complexion Cream",
      desc: "Face cream formulated for sensitive, natural-leaning skin; made to pair with the serum for day or night.",
    },
  ];

  return (
    <section id="face" className="section bg-[--color-cream]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[--color-forest-green] mb-2">
          Face
        </h2>
        <p className="text-[--color-forest-green]/80 mb-6 max-w-2xl">
          Facial care that actually matches the rest of your homestead line — tallow, honey, goat’s milk,
          and herbal oils in glass and tin packaging.
        </p>

        {/* collage of face products */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-10">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/face-bar2.jpg"
              alt="Embossed tallow & goat’s milk face bar with bee detail"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/face-care1.jpg"
              alt="Amber jar of tallow & honey face moisturizer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/face-care2.jpg"
              alt="Face moisturizer and soap displayed with greenery"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/face-serum.jpg"
              alt="Arctic Youth serum in amber dropper bottle"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/face-serum2.jpg"
              alt="Stacked face creams with serum bottle"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/tallow-honey-face-moisturizer.jpg"
              alt="Wild Raven Homestead tallow & honey face moisturizer"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
        </div>

        {/* actual products with descriptors */}
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
