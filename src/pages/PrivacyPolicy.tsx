import SiteLayout from "@/components/SiteLayout";

export default function PrivacyPolicy() {
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-5xl mb-8">PRIVACY POLICY</h2>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>La presente Privacy Policy descrive le modalità di gestione del sito lucaferrettift.it in riferimento al trattamento dei dati personali degli utenti che lo consultano.</p>
            <h4 className="font-display text-2xl mt-8">Titolare del trattamento</h4>
            <p>Luca Ferretti, P.IVA 09812345678, Via Vigevano 12, 20144 Milano.</p>
            <h4 className="font-display text-2xl mt-8">Tipologie di dati raccolti</h4>
            <p>Dati di navigazione (anonimi), dati forniti volontariamente tramite il form di contatto (nome, email, telefono).</p>
            <h4 className="font-display text-2xl mt-8">Finalità del trattamento</h4>
            <p>Rispondere alle richieste di contatto, fornire i servizi richiesti, adempimenti contrattuali e fiscali.</p>
            <h4 className="font-display text-2xl mt-8">Diritti dell'utente</h4>
            <p>L'utente può richiedere in qualsiasi momento accesso, rettifica o cancellazione dei propri dati scrivendo a info@lucaferrettift.it.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
