import SiteLayout from "@/components/SiteLayout";

export default function CookiePolicy() {
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-5xl mb-8">COOKIE POLICY</h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>Questo sito utilizza cookie tecnici e, previo consenso, cookie analitici e di profilazione di terze parti.</p>
            <h4 className="font-display text-2xl mt-8">Cookie tecnici</h4>
            <p>Necessari al corretto funzionamento del sito. Non richiedono consenso.</p>
            <h4 className="font-display text-2xl mt-8">Cookie analitici</h4>
            <p>Utilizzati per misurare il traffico e migliorare l'esperienza utente in forma aggregata e anonima.</p>
            <h4 className="font-display text-2xl mt-8">Cookie di profilazione</h4>
            <p>Utilizzati per mostrare annunci pubblicitari in linea con gli interessi dell'utente. Possono essere disattivati in qualsiasi momento.</p>
            <h4 className="font-display text-2xl mt-8">Gestione preferenze</h4>
            <p>L'utente può modificare le preferenze sui cookie tramite le impostazioni del proprio browser.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
