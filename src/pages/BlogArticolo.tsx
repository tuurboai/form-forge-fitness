import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CTABanner from "@/components/CTABanner";
import { articoli } from "@/data/blog";

export default function BlogArticolo() {
  const { slug } = useParams();
  const articolo = articoli.find((a) => a.slug === slug);

  useEffect(() => {
    if (articolo) document.title = articolo.titolo;
  }, [articolo]);

  if (!articolo) {
    return (
      <SiteLayout>
        <section className="py-20 container mx-auto text-center">
          <h2 className="font-display text-4xl mb-4">Articolo non trovato</h2>
          <Link to="/blog" className="text-primary">← Tutti gli articoli</Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <article className="py-20">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-6 uppercase tracking-wider">
            <span className="text-primary">{articolo.categoria}</span>
            <span>·</span>
            <span>{articolo.data}</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl mb-6 leading-tight">{articolo.titolo}</h2>
          <p className="text-xl text-muted-foreground mb-10">{articolo.intro}</p>
          <img src={`https://picsum.photos/seed/${articolo.seed}/1200/600`} alt={articolo.titolo} className="w-full block mb-10" />
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed">
            <p>
              C'è una domanda che mi viene fatta praticamente ogni settimana, e la risposta non è mai la stessa.
              Perché dipende — dipende sempre — dalla persona che me la sta facendo.
            </p>
            <p>
              In questo articolo voglio darti un framework concreto per orientarti. Niente formule magiche, solo principi che funzionano nella pratica con centinaia di persone diverse.
            </p>
            <h4 className="font-display text-2xl mt-10 mb-3">Il punto di partenza</h4>
            <p>
              Tutto inizia da dove sei oggi. Non dal piano perfetto trovato su Instagram, non dalla scheda del tuo amico che ha 10 anni di palestra alle spalle. Da te. Da quanti giorni puoi davvero allenarti, da quanto recupero il tuo corpo gestisce, da cosa ti motiva a tornare in palestra.
            </p>
            <h4 className="font-display text-2xl mt-10 mb-3">Cosa fare adesso</h4>
            <p>
              Scegli un punto di partenza realistico. Mantienilo per almeno 4 settimane. Misura i progressi. Aggiusta. Ripeti. È meno sexy delle promesse "30 giorni e cambi vita", ma è ciò che funziona davvero a lungo termine.
            </p>
          </div>
        </div>
      </article>
      <CTABanner />
    </SiteLayout>
  );
}
