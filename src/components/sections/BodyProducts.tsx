// src/components/sections/BodyProducts.tsx
import Image from "next/image";

export default function BodyProducts() {
  const items = [
    {
      name: "Eucalyptus Rain Sea Salt Soap",
      desc: "Mineral-rich cleansing bar scented with eucalyptus, peppermint, and orange — gentle exfoliation with sea salt and clay.",
    },
    {
      name: "Vanilla Cream Body Butter",
      desc: "Whipped tallow and goat’s milk body butter with notes of vanilla; deeply moisturizing and herb-infused.",
    },
    {
      name: "Sweet Vanilla Bean Body Cream",
      desc: "Emulsified body cream blending mango butter and tallow for soft, lasting hydration with a warm vanilla aroma.",
    },
    {
      name: "Lavender Salve",
      desc: "Deeply hydrating balm made with lavender essential oil and natural beeswax to soothe cracked or dry skin.",
    },
    {
      name: "Wild Botanical Salve",
      desc: "Healing salve for cuts, scrapes, and bruises — crafted from wild herbs, calendula, and chamomile.",
    },
    {
      name: "Aching Muscle Relief",
      desc: "Cooling and aromatic salve with menthol, arnica, and essential oils to ease muscle tension and soreness.",
    },
    {
      name: "Herbal & Calming Bath Salts",
      desc: "A duo of aromatic bath soaks featuring Epsom and Himalayan salts, rose petals, and elderflower for full-body relaxation.",
    },
    {
      name: "Wild Raven Lip Balm",
      desc: "Smooth, tallow-based balm with natural beeswax and a subtle honey scent — long-lasting moisture for lips.",
    },
  ];

  return (
    <section id="body" className="section bg-[--color-cream]/90">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[--color-forest-green] mb-2">
          Body
        </h2>
        <p className="text-[--color-forest-green]/80 mb-6 max-w-2xl">
          From soaps to salves, each body-care product begins with heritage fats,
          wild botanicals, and gentle essential oils — inspired by traditional apothecary methods.
        </p>

        {/* collage of product images */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-10">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/50 border border-[--color-sage-green]/25">
            <Image
              src="/bath-salts.jpg"
              alt="Wild Raven Homestead herbal and calming bath salts"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/50 border border-[--color-sage-green]/25">
            <Image
              src="/body-bar4.jpg"
              alt="Assorted handcrafted tallow and goat’s milk soap bars"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/50 border border-[--color-sage-green]/25">
            <Image
              src="/goats-milk-body-butter.jpg"
              alt="Vanilla cream whipped tallow and goat’s milk body butter"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/50 border border-[--color-sage-green]/25">
            <Image
              src="/lavender-salve3.jpg"
              alt="Lavender salve tin open beside greenery"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/50 border border-[--color-sage-green]/25">
            <Image
              src="/lip-balm.jpg"
              alt="Wild Raven Homestead natural tallow lip balm with bee design"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/50 border border-[--color-sage-green]/25">
            <Image
              src="/muscle-relief.jpg"
              alt="Aching Muscle Relief salve tin with botanical label"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
        </div>

        {/* product listing */}
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
