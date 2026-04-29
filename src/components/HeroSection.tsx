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
const INITIAL_DELAY = 1000;
const STEP_DELAY = 1000;
const SLIDES: { src: string; height: number; delay: number }[] = [
  { src: heroHome, height: 420, delay: INITIAL_DELAY + STEP_DELAY * 0 },
  { src: srvPt, height: 880, delay: INITIAL_DELAY + STEP_DELAY * 1 },
  { src: srvDim, height: 540, delay: INITIAL_DELAY + STEP_DELAY * 2 },
  { src: srvAtl, height: 1020, delay: INITIAL_DELAY + STEP_DELAY * 3 },
  { src: tr1, height: 480, delay: INITIAL_DELAY + STEP_DELAY * 4 },
  { src: srvHome, height: 940, delay: INITIAL_DELAY + STEP_DELAY * 5 },
  { src: portraitLuca, height: 600, delay: INITIAL_DELAY + STEP_DELAY * 6 },
];

export default function HeroSection({ titolo, sottotitolo, cta, seed, ctaHref = "/contatti" }: HeroSectionProps) {
  // Lo shift di altezza avviene solo al primo caricamento della sessione.
  // In ogni caso lo slider parte solo dopo INITIAL_DELAY (1s).
  const isFirstLoad = typeof window !== "undefined"
    ? !window.sessionStorage.getItem("hero-loaded")
    : true;

  const [loaded, setLoaded] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);

  // Caricamento asincrono delle slide.
  useEffect(() => {
    if (!isFirstLoad) {
      // Visite successive: dopo 1s monto tutte le slide insieme, altezza già stabile.
      const t = setTimeout(() => {
        setLoaded(SLIDES.map((_, i) => i));
      }, INITIAL_DELAY);
      return () => clearTimeout(t);
    }
    // Prima visita: caricamento progressivo con shift di altezza.
    const timers = SLIDES.map((slide, i) =>
      setTimeout(() => {
        setLoaded((prev) => {
          if (prev.includes(i)) return prev;
          const next = [...prev, i];
          setCurrent(next.length - 1);
          if (next.length === SLIDES.length) {
            window.sessionStorage.setItem("hero-loaded", "1");
          }
          return next;
        });
      }, slide.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [isFirstLoad]);

  // Rotazione continua tra le slide caricate (nessuno shift dopo il primo carico).
  useEffect(() => {
    if (loaded.length < 2) return;
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % loaded.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [loaded.length]);

  const allLoaded = loaded.length === SLIDES.length;
  const activeSlide = SLIDES[loaded[current] ?? 0];
  // Durante il primo caricamento l'altezza varia per ogni slide (CLS).
  // Una volta caricate tutte (o nelle visite successive), altezza fissa.
  const STABLE_HEIGHT = 640;
  const sectionHeight = allLoaded
    ? STABLE_HEIGHT
    : loaded.length === 0
    ? 420
    : activeSlide.height;

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-secondary"
      style={{ height: `${sectionHeight}px` }}
    >
      {loaded.map((i) => {
        const slide = SLIDES[i];
        const isActive = loaded[current] === i;
        return (
          <img
            key={i}
            src={slide.src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: isActive ? 1 : 0 }}
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
