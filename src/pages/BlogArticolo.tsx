import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CTABanner from "@/components/CTABanner";
import { articoli } from "@/data/blog";
import { imageForSeed } from "@/assets/images";

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
          <img src={imageForSeed(articolo.seed)} alt={articolo.titolo} className="w-full block mb-10" />
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed">
            <p>
              C'è una domanda che mi viene fatta praticamente ogni settimana, e la risposta non è mai la stessa.
              Perché dipende — dipende sempre — dalla persona che me la sta facendo. È una di quelle domande apparentemente banali che però nascondono presupposti enormi: idee preconcette, paure, tentativi precedenti andati male, aspettative gonfiate da quello che si vede sui social.
            </p>
            <p>
              In questo articolo voglio darti un framework concreto per orientarti. Niente formule magiche, niente calcoli da copiare e applicare, solo principi che funzionano nella pratica con centinaia di persone diverse. Se cerchi la risposta in tre righe non la troverai qui, perché non esiste. Se cerchi un modo serio di ragionare sulla questione, continua a leggere.
            </p>
            <h4 className="font-display text-2xl mt-10 mb-3">Il punto di partenza</h4>
            <p>
              Tutto inizia da dove sei oggi. Non dal piano perfetto trovato su Instagram, non dalla scheda del tuo amico che ha dieci anni di palestra alle spalle, non dal protocollo dell'atleta professionista che hai visto in un documentario. Da te. Da quanti giorni puoi davvero allenarti tenendo conto di lavoro, famiglia, spostamenti e vita sociale. Da quanto recupero il tuo corpo gestisce — e il recupero non è solo dormire, è anche stress mentale, alimentazione, idratazione, ormoni, età. Da cosa ti motiva a tornare in palestra anche nelle settimane in cui non ne hai voglia, perché quelle settimane arriveranno e dovrai avere una ragione più forte della motivazione del momento.
            </p>
            <p>
              Il punto di partenza include anche tutto quello che hai già provato. Hai fatto sei mesi di full body tre volte a settimana e ti sei stancato? Hai provato la split bro a cinque giorni e l'hai mollata dopo tre settimane perché non riuscivi a incastrarla? Hai fatto il PT ma il programma non era costruito su di te? Tutte queste informazioni contano, perché ti dicono cosa probabilmente non funzionerà per la tua testa e per la tua vita, indipendentemente da quanto sia "ottimale" sulla carta.
            </p>
            <h4 className="font-display text-2xl mt-10 mb-3">Il principio della frequenza minima efficace</h4>
            <p>
              Esiste una soglia sotto la quale lo stimolo è troppo basso per generare adattamenti significativi. Per la maggior parte delle persone adulte non sportive che vogliono semplicemente "stare in forma", quella soglia si colloca tra le due e le tre sessioni settimanali strutturate, della durata di quarantacinque-sessanta minuti, fatte con un'intensità ragionevole e una progressione nel tempo. Sotto le due sessioni gli adattamenti sono lenti e la motivazione cala perché non vedi risultati. Sopra le quattro, per chi non è atleta, spesso il rapporto fatica/risultato non giustifica l'investimento di tempo.
            </p>
            <p>
              Ma — e qui sta il punto — è meglio essere costanti con due sessioni a settimana per due anni che fare cinque sessioni per sei settimane e poi mollare tutto. Il lungo periodo vince sempre sull'intensità di breve. Quindi la prima domanda da farsi non è "quante sessioni fanno gli atleti", è "quante sessioni riesco a fare per i prossimi dodici mesi senza sentirmi schiacciato".
            </p>
            <h4 className="font-display text-2xl mt-10 mb-3">Il fattore recupero</h4>
            <p>
              Allenarsi senza recuperare non è allenarsi: è accumulare stress. Il muscolo non cresce in palestra, cresce a casa, mentre dormi, mentre mangi, mentre stai fermo. Se la tua vita non ti permette di dormire sette ore filate, di mangiare regolarmente, di abbassare lo stress mentale almeno un po', alzare il numero delle sessioni settimanali peggiora le cose invece di migliorarle.
            </p>
            <p>
              Questo è il motivo per cui spesso, con clienti molto stressati o con figli piccoli, partiamo da due sessioni a settimana e basta. E nei primi tre mesi vedono comunque risultati importanti, perché stiamo lavorando sotto la soglia di rischio invece che sopra.
            </p>
            <h4 className="font-display text-2xl mt-10 mb-3">Cosa fare adesso</h4>
            <p>
              Scegli un punto di partenza realistico — non quello che ti sembra "giusto" o quello che fa il tuo amico, ma quello che sai onestamente di poter sostenere. Mantienilo per almeno quattro settimane senza cambiarlo, perché meno di un mese non ti dice nulla. Misura i progressi: peso sulla bilancia ma anche centimetri, foto standardizzate, carichi sollevati, energia percepita, qualità del sonno. Aggiusta sulla base dei dati reali, non delle sensazioni del giorno. Ripeti. È meno sexy delle promesse "trenta giorni e cambi vita", ma è ciò che funziona davvero a lungo termine, e l'unica cosa che ho visto produrre trasformazioni che restano nel tempo.
            </p>
            <p>
              Se senti che da solo non riesci a gestire questo processo — e per moltissime persone è normale che sia così — è esattamente per questo che esiste un personal trainer serio. Non per farti fare gli esercizi giusti (quelli puoi imparare anche su YouTube), ma per costruire un sistema sostenibile attorno alla tua vita reale e per tenerti aggrappato al percorso quando la motivazione vacilla. Il mio compito non è farti sudare di più, è farti continuare quando da solo avresti già mollato.
            </p>
          </div>
        </div>
      </article>
      <CTABanner />
    </SiteLayout>
  );
}
