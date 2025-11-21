// src/components/sections/MensProducts.tsx
import Image from "next/image";

export default function MensProducts() {
  const items = [
    {
      name: "Conditioning Beard Oil – Renegade Blend",
      desc: "Lightweight oil that moisturizes beard hair and the skin underneath — keeps beards from feeling dry or itchy.",
    },
    {
      name: "Conditioning Beard Oil – Kodiak / Alpine / Viking",
      desc: "Scented, 100% natural beard oils in multiple blends so he can match the season or his mood.",
    },
    {
      name: "Moisturizing Beard Butter – Viking Blend",
      desc: "Soft, spreadable butter to shape, condition, and add a low sheen without looking greasy.",
    },
    {
      name: "Moisturizing Beard Butter – OD Buck Blend",
      desc: "Earthier, outdoorsy blend for daily use — nourishes longer beards and flyaways.",
    },
    {
      name: "Taming Beard Balm – Yeti Blend",
      desc: "A little more hold for wild beards; adds moisture while keeping the rustic, masculine profile.",
    },
    {
      name: "Beard Care Set",
      desc: "Pair an oil with a butter or balm for a complete grooming ritual in the Wild Raven style.",
    },
  ];

  return (
    <section id="mens" className="section bg-[--color-forest-green]/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[--color-forest-green] mb-2">
          Men’s
        </h2>
        <p className="text-[--color-forest-green]/80 mb-6 max-w-2xl">
          Built for working hands and working beards — conditioning oils, butters, and balms with rugged, natural scent blends.
        </p>

        {/* collage of beard-care products */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-10">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/beard-care2.jpg"
              alt="Conditioning beard oil and moisturizing beard butter"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/beard-care4.jpg"
              alt="Beard oil and beard balm displayed with antler"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/beard-oil2.jpg"
              alt="Lineup of Wild Raven Homestead conditioning beard oils in multiple blends"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/beard-balm.jpg"
              alt="Taming beard balm in tin labeled Yeti blend"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/beard-butter.jpg"
              alt="Moisturizing beard butter in tin on natural props"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/40 border border-[--color-sage-green]/25">
            <Image
              src="/mens-beard.jpg"
              alt="Beard oil, butter, and brush displayed together"
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
