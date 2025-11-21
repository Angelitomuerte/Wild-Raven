// /src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import {
  Allison,
  Birthstone_Bounce,
  Mea_Culpa,
  Cormorant_Garamond,
} from "next/font/google";

// Each font exposes a CSS variable we can reference in globals.css
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const meaCulpa = Mea_Culpa({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mea-culpa",
  display: "swap",
});

const allison = Allison({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allison",
  display: "swap",
});

const birthstone = Birthstone_Bounce({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-birthstone-bounce",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wild Raven Homestead",
  description: "Nature apothecary — tallow skincare, beard care, and oils.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${meaCulpa.variable} ${allison.variable} ${birthstone.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
