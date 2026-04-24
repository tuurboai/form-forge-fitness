import SiteLayout from "@/components/SiteLayout";
import TrasformazioniCard from "@/components/TrasformazioniCard";
import CTABanner from "@/components/CTABanner";
import { trasformazioni } from "@/data/trasformazioni";

export default function Trasformazioni() {
  // Intentional: no document.title set
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-primary uppercase tracking-widest text-sm mb-4">Trasformazioni</div>
          <h2 className="font-display text-5xl md:text-6xl mb-4">RISULTATI VERI, PERSONE VERE</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Storie di chi ha deciso di iniziare. Numeri, mesi, kilogrammi. Niente filtri.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trasformazioni.map((t, i) => (
              <TrasformazioniCard key={t.seed} {...t} altVariant={i % 2 === 0 ? "empty" : "missing"} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </SiteLayout>
  );
}
