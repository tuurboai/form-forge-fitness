import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import CTABanner from "@/components/CTABanner";
import { servizi } from "@/data/servizi";
import { imageForSeed } from "@/assets/images";

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

          <img src={imageForSeed(servizio.seed)} alt={servizio.titolo} className="w-full block mb-10" />

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

          <div className="space-y-5 text-foreground/90 leading-relaxed mb-12">
            <p>
              Questo percorso nasce per chi ha smesso di voler provare l'ennesima cosa nuova e vuole finalmente un metodo serio, costruito su misura, che porti risultati misurabili senza stravolgere la propria vita. Non è il programma più aggressivo che esista, non è quello che ti farà vedere in palestra dieci ore a settimana, non è quello che promette miracoli in trenta giorni. È quello che funziona davvero su orizzonti realistici, perché tiene conto di chi sei oggi e non di chi vorresti essere domani.
            </p>
            <p>
              Il punto di partenza è sempre la valutazione iniziale: anamnesi sportiva e medica, test di mobilità articolare, valutazione della forza sui pattern fondamentali (squat, hinge, push, pull, carry), composizione corporea con plicometria o impedenziometria, fotografie standardizzate per il monitoraggio nel tempo. Niente di invasivo, niente da temere — anzi, per molte persone è il primo momento in cui qualcuno guarda con attenzione professionale come si muovono e cosa il loro corpo è già in grado di fare.
            </p>
            <p>
              Da quella fotografia iniziale costruisco un programma scritto su quattro o sei settimane, con obiettivi intermedi misurabili e progressioni chiare. Niente "fai tre serie da dieci e vediamo": ogni esercizio ha un perché, ogni numero di ripetizioni risponde a uno stimolo specifico, ogni settimana è collegata a quella precedente e a quella successiva. Così si genera adattamento, non confusione.
            </p>
            <p className="text-muted-foreground">
              In parallelo lavoriamo sull'alimentazione, ma senza diete impossibili. La maggior parte dei miei clienti non ha bisogno di un piano da pesare al grammo: ha bisogno di capire come strutturare i pasti della giornata, come gestire la cena fuori del venerdì sera, come non saltare la colazione perché la sveglia suona alle 6. Lavoriamo per abitudini, non per restrizioni — perché le restrizioni durano due settimane, le abitudini durano per sempre.
            </p>
            <p className="text-muted-foreground">
              Il supporto tra una sessione e l'altra è incluso: WhatsApp aperto per la domanda al volo, controllo dei diari di allenamento per chi si allena anche senza di me, debriefing mensile per rivedere i numeri e ricalibrare il piano. Non sparisco mai per più di ventiquattro ore senza rispondere, e quando vado in vacanza ti avviso con una settimana di anticipo lasciandoti istruzioni chiare per quei giorni.
            </p>
          </div>

          {/* Skipping h3 — going straight to h4 (intentional structure) */}
          <h4 className="font-display text-3xl mb-4">COSA INCLUDE</h4>
          <ul className="space-y-3 mb-10">
            {[
              "Valutazione iniziale completa con test di mobilità, forza e composizione corporea",
              "Programma personalizzato scritto su quattro o sei settimane di periodizzazione",
              "Supporto continuo via WhatsApp per dubbi, aggiustamenti e momenti difficili",
              "Aggiornamenti mensili del piano in base ai progressi reali e ai nuovi vincoli",
              "Consulenza nutrizionale di base con regole pratiche e gestione dei pasti fuori casa",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-primary mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h4 className="font-display text-3xl mb-4">COME FUNZIONA</h4>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Iniziamo con una consulenza gratuita di trenta minuti — in studio, in videochiamata o al telefono, come preferisci. In questa prima conversazione capiamo i tuoi obiettivi, la tua storia sportiva, gli infortuni passati, il tempo settimanale che puoi davvero dedicare e qualunque altro vincolo abbia senso conoscere prima di partire. Non è un colloquio di vendita: spesso da qui usciamo dicendoci che non siamo la coppia giusta, e va benissimo così.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Se decidiamo di lavorare insieme, fissiamo la valutazione iniziale completa e nei sette giorni successivi ricevi il programma scritto. Da quel momento partiamo: ci alleniamo insieme nelle sessioni concordate, monitoriamo i progressi settimana dopo settimana, e una volta al mese facciamo un check-in strutturato per rivedere i numeri e aggiornare il piano. Tutto rimane scritto, tutto è tracciabile, niente è lasciato a memoria o intuito.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Non firmi nessun contratto vincolante: i pacchetti si esauriscono con le sessioni svolte e si rinnovano solo se vuoi continuare. Se per qualunque motivo il percorso non sta funzionando, ne parliamo apertamente e cambiamo approccio o ci salutiamo senza penali. Il mio interesse è che tu abbia risultati veri, non che tu rimanga cliente per sempre.
          </p>
        </div>
      </section>
      <CTABanner />
    </SiteLayout>
  );
}
