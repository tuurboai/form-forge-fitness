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
              Personal trainer a Milano da nove anni. Ho seguito oltre trecentoquaranta persone — dai ventenni che mettono piede in palestra per la prima volta ai sessantenni che vogliono tornare a giocare a calcetto senza svegliarsi distrutti il giorno dopo. Ho iniziato per caso, allenando un amico in un parchetto vicino casa nel 2016. Mi sono accorto che mi piaceva più costruire programmi che farli per me stesso, e da lì non mi sono più fermato.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La mia filosofia è semplice: niente scorciatoie, niente promesse impossibili, niente protocolli copiati. Solo metodo, costanza e un programma costruito addosso a te. Credo che il fitness sia uno strumento, non un fine — uno strumento per stare meglio nella tua vita di tutti i giorni, per dormire bene, per avere energia quando torni a casa la sera, per piacerti un po' di più quando ti guardi allo specchio.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lavoro in palestra in zona Navigli, a domicilio se preferisci la comodità di casa, all'aperto nei parchi quando il meteo regge, e online con chi non vive a Milano ma vuole un coach serio che non si limita a mandare PDF generici. Ho clienti da Roma, Torino, Berlino e perfino due da Singapore: la distanza non è mai stata un problema, la mancanza di metodo sì.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quando non alleno, alleno me stesso. Pratico powerlifting amatoriale, corro almeno tre volte a settimana, e una volta all'anno mi prendo una settimana per studiare — corsi, libri, conferenze. Il giorno in cui smetterò di imparare sarà il giorno in cui chiuderò la partita IVA.
            </p>
          </div>
          <img src="https://picsum.photos/seed/luca-portrait/700/900" alt="Luca Ferretti" className="w-full block" />
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto">
          <h3 className="font-display text-4xl mb-6">CERTIFICAZIONI</h3>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            La formazione continua è parte del lavoro, non un optional. Ogni anno scelgo almeno un corso strutturato in cui investire tempo e soldi: nutrizione applicata, riabilitazione del lombare, programmazione della forza. Ecco i titoli principali su cui si basa il mio metodo.
          </p>
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
