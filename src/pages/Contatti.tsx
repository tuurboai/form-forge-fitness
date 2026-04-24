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
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Compila il form qui accanto. Ti rispondo entro 24 ore con una proposta concreta o una call gratuita.
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
