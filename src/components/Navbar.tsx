"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Simple local clsx alternative (no dependency needed)
function clsx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // close menu on scroll so it doesn't float over content
      setMenuOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#social", label: "Social" },
  ];

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-[--color-forest-green] shadow-[0_4px_16px_rgba(0,0,0,0.18)] backdrop-blur-none h-[64px]"
          : "bg-white/10 backdrop-blur-md h-[80px]"
      )}
      role="banner"
    >
      <div className="relative z-10 h-full">
        <div className="flex h-full w-full items-center justify-between px-4 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 leading-none"
          >
            <span className="relative inline-flex items-center justify-center">
              <Image
                src="/ravantler6.png"
                alt="Wild Raven Homestead logo"
                width={scrolled ? 44 : 54}
                height={scrolled ? 44 : 54}
                priority
                className={clsx(
                  "transition-all duration-300",
                  scrolled ? "drop-shadow-sm" : "scale-100"
                )}
              />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className={clsx(
                  "display-script text-[clamp(1.4rem,4vw,2.25rem)] transition-colors duration-300",
                  scrolled
                    ? "text-[--color-cream]"
                    : "text-[--color-raven-brown]"
                )}
              >
                Wild Raven
              </span>
              <span
                className={clsx(
                  "ui-serif tracking-wide text-[clamp(0.9rem,1.8vw,1.1rem)] transition-colors duration-300",
                  scrolled
                    ? "text-[--color-cream]"
                    : "text-[--color-forest-green]"
                )}
                style={{ letterSpacing: "0.02em" }}
              >
                Homestead
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary">
            <ul className="flex items-center gap-3 md:gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={clsx(
                      "px-4 py-2 md:px-5 md:py-2.5 font-semibold text-[0.95rem] rounded-md transition-all duration-300 border border-transparent text-[--color-cream]",
                      "nav-btn-earthy",
                      scrolled && "shadow-[0_4px_18px_rgba(0,0,0,0.25)]"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                    href="#cta"
                    className={clsx(
                      "px-4 py-2 md:px-5 md:py-2.5 font-semibold text-[0.95rem] rounded-md transition-all duration-300 border border-transparent text-[--color-cream]",
                      "nav-btn-earthy",
                      scrolled && "shadow-[0_4px_18px_rgba(0,0,0,0.25)]"
                    )}
                  >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={clsx(
              "md:hidden inline-flex items-center justify-center rounded-md p-2 transition",
              scrolled ? "text-[--color-cream]" : "text-[--color-forest-green]"
            )}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div
            className={clsx(
              "md:hidden absolute inset-x-0 top-full pb-3 pt-3 shadow-lg border-t border-[--color-forest-green]/30",
              "mobile-menu-panel"
            )}
            style={{ zIndex: 9999 }}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-2 px-5">
                {[...navItems, { href: "#cta", label: "Contact" }].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={clsx(
                        "block rounded-md px-4 py-2.5 text-[1rem] font-semibold tracking-wide transition-all duration-200",
                        "mobile-menu-text-light hover:bg-white/15"
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
