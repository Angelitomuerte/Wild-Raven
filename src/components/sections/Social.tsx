import Image from "next/image";
import { Section } from "@/components/ui/Section";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61574718039951",
    handle: "/wildravenhomestead",
    icon: "/fb.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    handle: "@wildravenhomestead",
    icon: "/insta.png",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
    handle: "@wildravenhomestead",
    icon: "/x.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    handle: "@wildravenhomestead",
    icon: "/youtube.png",
  },
];

export default function Social() {
  return (
    <Section id="social" bg="bg-[--color-cream]">
      <h2 className="section-heading text-center text-[--color-forest-green]">
        <span className="script">Follow the Homestead</span>
        Batch drops, behind-the-scenes, and natural care tips
      </h2>
      <p className="mt-4 text-center text-[--color-moss-green]">
        Join our community and see what’s brewing on the bench.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${s.name}`}
            className="group rounded-lg apothecary-frame p-5 transition-colors bg-white/80 hover:bg-white"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-md border border-[--color-sage-green]/50 bg-[--color-cream]">
                <Image
                  src={s.icon}
                  alt={`${s.name} icon`}
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-semibold text-[--color-forest-green] ui-serif">{s.name}</p>
                <p className="text-sm text-black/70">{s.handle}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
