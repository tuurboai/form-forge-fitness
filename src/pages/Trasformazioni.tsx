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
          <p className="text-muted-foreground text-lg max-w-2xl mb-8 leading-relaxed">
            Storie di chi ha deciso di iniziare. Numeri, mesi, kilogrammi. Niente filtri, niente foto rubate da internet, niente prima/dopo costruiti con illuminazioni diverse e pancia in dentro.
          </p>
          <div className="max-w-3xl mb-12 space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Le persone che vedi qui sotto non sono modelli, non sono atleti professionisti, non hanno avuto vite più semplici della tua. Sono ingegneri, infermiere, mamme, ristoratori, studenti universitari. Hanno tutti due cose in comune: a un certo punto hanno deciso che la situazione attuale non andava più bene, e hanno scelto di affidarsi a un metodo invece di provare l'ennesima cosa nuova in autonomia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I tempi che leggi accanto a ogni storia sono reali. Sedici settimane vogliono dire sedici settimane: non sei mesi spalmati con due settimane buone e quattro a saltare gli allenamenti. Tutti hanno seguito un programma scritto, hanno fatto check-in regolari, hanno avuto giornate storte e settimane in cui non avevano voglia. La differenza è che non si sono fermati. Le trasformazioni che funzionano non sono quelle violente, sono quelle che riesci a sostenere mentre la vita reale ti succede attorno.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ogni storia qui sotto ha richiesto adattamenti in corso: chi si è infortunato a una caviglia e abbiamo riprogrammato il blocco di forza, chi ha cambiato lavoro e siamo passati da quattro a tre sessioni a settimana, chi è andato in vacanza tre settimane e abbiamo costruito un mini-programma da hotel. Nessuno di questi imprevisti ha fatto saltare il risultato, perché era previsto che ci fossero.
            </p>
          </div>
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
