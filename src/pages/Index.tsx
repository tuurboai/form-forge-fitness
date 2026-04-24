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
        sottotitolo="Personal training a Milano. Programmi su misura per dimagrimento, ricomposizione e funzionale. Prima consulenza gratuita, nessun impegno."
        cta="Prenota la consulenza"
        seed="lf-home-hero"
      />

      <StatsBanner />

      <section className="py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-primary uppercase tracking-widest text-sm mb-4">Il metodo</div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">NON ESISTE IL PROGRAMMA PERFETTO. ESISTE IL TUO.</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-5">
            Negli ultimi nove anni ho accompagnato oltre trecento persone — manager con quaranta minuti scarsi a disposizione, mamme che si rimettono in moto dopo una gravidanza, ragazzi che vogliono il loro primo squat sotto il parallelo, runner che inseguono il personal best sulla mezza. Ognuno con un punto di partenza diverso, ognuno con una vita da incastrare. La verità che ho imparato è semplice: il programma migliore non è quello più aggressivo o più alla moda, è quello che riesci davvero a portare a casa per dodici, ventiquattro, cinquantadue settimane di fila.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Ecco perché il mio lavoro non comincia mai con una scheda. Comincia con una conversazione onesta. Cosa ti porta qui adesso? Cosa hai già provato e perché non ha funzionato? Quanto recupero hai a disposizione tra una sessione e l'altra? Quanto sei disposto a togliere dalla tua agenda per metterci dentro l'allenamento? Da quelle risposte nasce un piano realistico, costruito sui tuoi vincoli reali e non su quelli ideali.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Niente promesse da venti chili in due mesi, niente integratori da rivendere, niente protocolli copiati da Instagram. Solo periodizzazione seria, progressioni misurabili, alimentazione sostenibile e un livello di supporto che ti tiene aggrappato al percorso anche quando la motivazione cala — perché calerà, e va bene così.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl mb-4">I MIEI SERVIZI</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sei formati di lavoro pensati per adattarsi alla tua vita, non il contrario. In palestra a Milano zona Navigli, a domicilio se preferisci la comodità di casa, online se vivi lontano o viaggi spesso. Ogni percorso include valutazione iniziale, scheda personalizzata, supporto WhatsApp e revisione mensile del piano.
              </p>
            </div>
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

      <section className="py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-primary uppercase tracking-widest text-sm mb-4">Come lavoriamo insieme</div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">QUATTRO FASI, ZERO IMPROVVISAZIONE</h2>
          <p className="text-foreground/90 leading-relaxed mb-5">
            La prima settimana facciamo una valutazione completa: anamnesi, mobilità, forza, composizione corporea, abitudini alimentari e — soprattutto — obiettivi reali. Da lì costruisco un programma su misura con periodizzazione su quattro o sei settimane, con obiettivi intermedi misurabili. Ogni mese rivediamo i numeri insieme e aggiusto il tiro: cosa funziona resta, cosa non funziona cambia. Senza ego, senza dogmi.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Tra una sessione e l'altra non sparisco. Sono raggiungibile via WhatsApp per la domanda al volo sull'esercizio, sulla cena fuori, sulla settimana storta in cui non ce l'hai fatta a chiudere gli allenamenti. Il coaching vero succede in quei piccoli momenti, non solo nell'ora di palestra.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl mb-4">DAL BLOG</h2>
              <p className="text-muted-foreground leading-relaxed">
                Articoli pratici per chi vuole capire prima di agire. Niente copia-incolla da riviste americane: ogni pezzo nasce da una domanda che mi viene fatta davvero, in palestra, ogni settimana.
              </p>
            </div>
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
