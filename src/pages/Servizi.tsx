import SiteLayout from "@/components/SiteLayout";
import ServiziCard from "@/components/ServiziCard";
import CTABanner from "@/components/CTABanner";
import { servizi } from "@/data/servizi";

export default function Servizi() {
  // Intentional: no document.title set
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-primary uppercase tracking-widest text-sm mb-4">Servizi</div>
          <h2 className="font-display text-5xl md:text-6xl mb-4">SCEGLI IL TUO PERCORSO</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Sei formati di lavoro per ogni obiettivo, esigenza e stile di vita. Tutti personalizzati su di te.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((s) => (
              <ServiziCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </SiteLayout>
  );
}
