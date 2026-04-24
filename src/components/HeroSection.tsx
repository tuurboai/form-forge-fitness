import { useEffect, useState } from "react";

interface HeroSectionProps {
  titolo: string;
  sottotitolo: string;
  cta: string;
  seed: string;
  ctaHref?: string;
}

export default function HeroSection({ titolo, sottotitolo, cta, seed, ctaHref = "/contatti" }: HeroSectionProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setImgSrc(`https://picsum.photos/seed/${seed}/1600/800`);
    }, 1200);
    return () => clearTimeout(t);
  }, [seed]);

  return (
    <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-secondary">
      {imgSrc && (
        <img
          src={imgSrc}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div className="relative z-10 container mx-auto text-center px-6">
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
