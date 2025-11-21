import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import FaceProducts from "@/components/sections/FaceProducts";
import BodyProducts from "@/components/sections/BodyProducts";
import HomeProducts from "@/components/sections/HomeProducts";
import MensProducts from "@/components/sections/MensProducts";
import About from "@/components/sections/About";
import Social from "@/components/sections/Social";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Top padding so content isn't hidden behind the fixed navbar */}
      <main id="main" className="pt-[80px] md:pt-[100px]">
        <Hero />
        <div className="section-divider" aria-hidden="true" />

        {/* products hub (shows the 4 categories) */}
        <Products />
        <div className="section-divider" aria-hidden="true" />

        {/* individual product lines */}
        <FaceProducts />
        <BodyProducts />
        <HomeProducts />
        <MensProducts />
        <div className="section-divider" aria-hidden="true" />

        <About />
        <div className="section-divider" aria-hidden="true" />

        <Social />
        <div className="section-divider" aria-hidden="true" />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
