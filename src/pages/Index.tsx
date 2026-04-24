import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import HeroSection from "@/components/HeroSection";
import StatsBanner from "@/components/StatsBanner";
import ServiziCard from "@/components/ServiziCard";
import TestimonianzaSlider from "@/components/TestimonianzaSlider";
import BlogCard from "@/components/BlogCard";
import CTABanner from "@/components/CTABanner";
import { servizi } from "@/data/servizi";
import { articoli } from "@/data/blog";

export default function Index() {
  useEffect(() => {
    document.title = "Luca Ferretti — Personal Trainer Milano";
  }, []);

  return (
    <SiteLayout>
      <HeroSection
        titolo="ALLENAMENTO CHE CAMBIA TUTTO"
        sottotitolo="Personal training a Milano. Programmi su misura per dimagrimento, ricomposizione e funzionale. Prima consulenza gratuita."
        cta="Prenota la consulenza"
        seed="lf-home-hero"
      />

      <StatsBanner />

      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl">I MIEI SERVIZI</h2>
            <Link to="/servizi" className="text-primary uppercase tracking-wider text-sm">Tutti i servizi →</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.slice(0, 6).map((s) => (
              <ServiziCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>

      <TestimonianzaSlider />

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl">DAL BLOG</h2>
            <Link to="/blog" className="text-primary uppercase tracking-wider text-sm">Tutti gli articoli →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articoli.slice(0, 3).map((a) => (
              <BlogCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
