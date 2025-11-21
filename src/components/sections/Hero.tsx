import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section id="hero" bg="bg-[--color-cream]">
      {/* motion background */}
      <div className="leaf-field" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={`leaf ${
              i % 3 === 0 ? "slow" : i % 3 === 1 ? "fast" : ""
            }`}
            style={{ top: `${(i % 7) * 22}px`, left: `${i * 6}%` }}
          />
        ))}
      </div>

      <div className="grid items-center gap-8 md:grid-cols-2 relative">
        {/* ⬇️ this div is the only one we touch */}
        <div className="w-full max-w-[480px] mx-auto md:justify-self-start lg:justify-self-center">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] text-[--color-forest-green]">
            <span className="display-script block text-[1.25em] text-[--color-raven-brown] leading-[0.95]">
              Wild Raven
            </span>
            <span className="ui-serif block mt-1 tracking-wide">
              Homestead
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-[--color-moss-green]">
            Earth-crafted tallow skincare, beard care, and home goods.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn">
              Shop Products
            </a>
            <a href="#about" className="btn alt">
              Learn More
            </a>
          </div>
        </div>

        {/* image under, frame over */}
        <div className="nordic-overlay-frame max-w-[600px] mx-auto">
          <Image
            src="/WRH.jpg"
            alt="Wild Raven Homestead hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
