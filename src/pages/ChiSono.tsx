import { useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";
import CTABanner from "@/components/CTABanner";

export default function ChiSono() {
  useEffect(() => {
    document.title = "Chi sono — Luca Ferretti PT";
  }, []);

  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary uppercase tracking-widest text-sm mb-4">Chi sono</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">CIAO, SONO LUCA.</h2>
            <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
              Personal trainer a Milano da 9 anni. Ho aiutato oltre 340 persone a trasformare il proprio corpo e la propria vita.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mia filosofia è semplice: niente scorciatoie, niente promesse impossibili. Solo metodo, costanza e un programma costruito su di te.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lavoro in palestra, a domicilio o all'aperto in zona Navigli. E online con chi non vive a Milano ma vuole un coach serio.
            </p>
          </div>
          <img src="https://picsum.photos/seed/luca-portrait/700/900" alt="Luca Ferretti" className="w-full block" />
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto">
          <h3 className="font-display text-4xl mb-10">CERTIFICAZIONI</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["ISSA Certified Personal Trainer", "FIF Functional Training", "Precision Nutrition L1"].map((c) => (
              <div key={c} className="border border-border p-6">
                <div className="text-primary text-3xl mb-3">✓</div>
                <div className="font-semibold">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </SiteLayout>
  );
}
