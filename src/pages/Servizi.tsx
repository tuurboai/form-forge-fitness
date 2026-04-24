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
          <p className="text-muted-foreground text-lg max-w-3xl mb-8 leading-relaxed">
            Sei formati di lavoro per ogni obiettivo, esigenza e stile di vita. Tutti personalizzati su di te, tutti basati sullo stesso metodo: valutazione onesta, programmazione seria, supporto continuo, revisione mensile.
          </p>
          <div className="max-w-3xl mb-12 space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Nessun servizio è un pacchetto chiuso che ti vendo e poi sparisco. Anche la singola sessione di personal training prevede una valutazione iniziale gratuita, un piano d'allenamento scritto e revisionabile, e la possibilità di scrivermi tra un appuntamento e l'altro per dubbi o aggiustamenti. La differenza tra i formati è essenzialmente di intensità, frequenza e modalità di erogazione — non di qualità del lavoro che faremo insieme.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se non sai quale percorso fa per te, non ti preoccupare: la prima consulenza serve esattamente a questo. In trenta minuti capiamo dove sei, dove vuoi arrivare, quanto tempo hai davvero a disposizione e qual è il formato che ti permette di essere costante. Spesso le persone arrivano convinte di volere il personal training 1:1 e si rendono conto che il coaching online si incastra meglio nelle loro settimane. O viceversa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I prezzi indicati sono di partenza e variano in base al numero di sessioni del pacchetto, alla zona di Milano per il domicilio, e alla complessità del programma nutrizionale eventualmente associato. Tutto viene messo nero su bianco prima di iniziare: nessuna sorpresa, nessun rinnovo automatico, nessuna penale se per qualunque motivo il percorso non funziona e decidi di interrompere.
            </p>
          </div>
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
