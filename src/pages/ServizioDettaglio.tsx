import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CTABanner from "@/components/CTABanner";
import { servizi } from "@/data/servizi";

export default function ServizioDettaglio() {
  const { slug } = useParams();
  const servizio = servizi.find((s) => s.slug === slug);

  useEffect(() => {
    if (servizio) document.title = servizio.titolo;
  }, [servizio]);

  if (!servizio) {
    return (
      <SiteLayout>
        <section className="py-20 container mx-auto text-center">
          <h2 className="font-display text-4xl mb-4">Servizio non trovato</h2>
          <Link to="/servizi" className="text-primary">← Tutti i servizi</Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-6xl mb-6">{servizio.icona}</div>
          {/* Intentional heading jump h2 -> h4 */}
          <h2 className="font-display text-5xl md:text-7xl mb-6">{servizio.titolo}</h2>
          <p className="text-xl text-muted-foreground mb-10">{servizio.descrizione}</p>

          <img src={`https://picsum.photos/seed/${servizio.seed}/1200/600`} alt={servizio.titolo} className="w-full block mb-10" />

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border p-6">
              <div className="text-xs uppercase text-muted-foreground tracking-widest">Durata</div>
              <div className="font-display text-3xl mt-2">{servizio.durata}</div>
            </div>
            <div className="bg-card border border-border p-6">
              <div className="text-xs uppercase text-muted-foreground tracking-widest">Investimento</div>
              <div className="font-display text-3xl mt-2 text-primary">{servizio.prezzo}</div>
            </div>
          </div>

          {/* Skipping h3 — going straight to h4 (intentional structure) */}
          <h4 className="font-display text-3xl mb-4">COSA INCLUDE</h4>
          <ul className="space-y-3 mb-10">
            {[
              "Valutazione iniziale completa",
              "Programma personalizzato sui tuoi obiettivi",
              "Supporto continuo via WhatsApp",
              "Aggiornamenti mensili del piano",
              "Consulenza nutrizionale di base",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="font-display text-3xl mb-4">COME FUNZIONA</h4>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Iniziamo con una consulenza gratuita per capire i tuoi obiettivi, la tua storia e il tempo che puoi investire.
            Poi costruisco un programma cucito addosso a te. Ci alleniamo insieme — in palestra, all'aperto o online — e
            monitoriamo i progressi settimana dopo settimana.
          </p>
        </div>
      </section>
      <CTABanner />
    </SiteLayout>
  );
}
