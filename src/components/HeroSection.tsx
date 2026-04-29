import { useEffect, useState } from "react";
import {
  heroHome,
  portraitLuca,
} from "@/assets/images";
import srvPt from "@/assets/srv-pt.jpg";
import srvDim from "@/assets/srv-dim.jpg";
import srvAtl from "@/assets/srv-atl.jpg";
import srvHome from "@/assets/srv-home.jpg";
import tr1 from "@/assets/tr-1.jpg";

interface HeroSectionProps {
  titolo: string;
  sottotitolo: string;
  cta: string;
  seed: string;
  ctaHref?: string;
}

// Slider asincrono: carica una serie di immagini con ritardi crescenti.
// Ogni slide ha un'altezza diversa per amplificare il CLS quando entra in scena.
const SLIDES: { src: string; minHeight: string; delay: number }[] = [
  { src: heroHome, minHeight: "60vh", delay: 1400 },
  { src: srvPt, minHeight: "85vh", delay: 2600 },
  { src: srvDim, minHeight: "70vh", delay: 3800 },
  { src: srvAtl, minHeight: "95vh", delay: 5000 },
  { src: tr1, minHeight: "65vh", delay: 6200 },
  { src: srvHome, minHeight: "90vh", delay: 7400 },
  { src: portraitLuca, minHeight: "75vh", delay: 8600 },
];

export default function HeroSection({ titolo, sottotitolo, cta, seed, ctaHref = "/contatti" }: HeroSectionProps) {
  const [loaded, setLoaded] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);

  // Carica le slide una alla volta in modo asincrono — ritarda volutamente l'LCP.
  useEffect(() => {
    const timers = SLIDES.map((slide, i) =>
      setTimeout(() => {
        setLoaded((prev) => (prev.includes(i) ? prev : [...prev, i]));
      }, slide.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Avvia la rotazione solo quando almeno due slide sono caricate.
  useEffect(() => {
    if (loaded.length < 2) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % loaded.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [loaded.length]);

  const activeSlide = SLIDES[loaded[current] ?? 0];

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-secondary"
      style={{ minHeight: loaded.length === 0 ? "60vh" : activeSlide.minHeight }}
    >
      {loaded.map((i) => {
        const slide = SLIDES[i];
        const isActive = loaded[current] === i;
        return (
          <img
            key={i}
            src={slide.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: isActive ? 1 : 0,
              minHeight: slide.minHeight,
            }}
          />
        );
      })}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="relative z-10 container mx-auto text-center px-6 py-20">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-6">
          {titolo}
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-10">
          {sottotitolo}
        </p>
        <a
          href={ctaHref}
          className="inline-block bg-primary text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 text-base hover:bg-primary/90 transition"
        >
          {cta}
        </a>
      </div>
    </section>
  );
}
