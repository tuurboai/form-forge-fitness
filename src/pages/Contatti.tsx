import SiteLayout from "@/components/SiteLayout";

export default function Contatti() {
  // Intentional: no document.title set
  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-primary uppercase tracking-widest text-sm mb-4">Contatti</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">PARLIAMO DEL TUO OBIETTIVO</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Compila il form qui accanto e raccontami in due righe cosa ti porta qui. Ti rispondo entro ventiquattro ore con una proposta concreta o, se preferisci, fissiamo una call gratuita di trenta minuti per capire insieme se il mio metodo è quello giusto per te.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Non mando preventivi standardizzati e non ti inserisco in nessuna lista email automatica. Leggo personalmente ogni richiesta e rispondo personalmente. Se preferisci scrivere su WhatsApp o chiamare direttamente, trovi tutti i contatti qui sotto — l'orario migliore per la cornetta è dalle 9 alle 11 del mattino o dopo le 19, fuori dalle fasce di allenamento con i clienti.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Se non sai ancora cosa vuoi esattamente, va benissimo: scrivimi due righe sulla tua situazione attuale e penso io a fare le domande giuste. Spesso il primo contatto serve proprio a mettere in ordine i pensieri, prima ancora che a vendermi qualcosa.
            </p>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-widest">Email</div>
                <div className="text-lg">info@lucaferrettift.it</div>
              </div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-widest">Whatsapp</div>
                <div className="text-lg">+39 333 1234567</div>
              </div>
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-widest">Zona</div>
                <div className="text-lg">Milano — Navigli</div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Messaggio inviato (demo)"); }}
            className="bg-card border border-border p-8 space-y-4"
          >
            {/* Intentional: no <label>, only placeholder */}
            <input type="text" placeholder="Nome e cognome" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <input type="email" placeholder="Email" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <input type="tel" placeholder="Telefono" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <select className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary text-muted-foreground">
              <option>Obiettivo principale</option>
              <option>Dimagrimento</option>
              <option>Massa muscolare</option>
              <option>Ricomposizione</option>
              <option>Tonificazione</option>
              <option>Preparazione atletica</option>
            </select>
            <textarea placeholder="Raccontami di te e del tuo obiettivo" rows={5} className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider py-4 hover:bg-primary/90 transition">
              Invia
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
