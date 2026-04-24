import { useParams, Link } from "react-router-dom";
import LandingLayout from "@/components/LandingLayout";
import HeroSection from "@/components/HeroSection";
import { landings } from "@/data/landings";
import { imageForSeed } from "@/assets/images";

export default function LandingPage() {
  const { slug } = useParams();
  const landing = landings.find((l) => l.slug === slug);

  // Intentional: no document.title set on landings

  if (!landing) {
    return (
      <LandingLayout>
        <section className="py-20 container mx-auto text-center">
          <h2 className="font-display text-4xl mb-4">Landing non trovata</h2>
          <Link to="/" className="text-primary">← Torna al sito</Link>
        </section>
      </LandingLayout>
    );
  }

  const benefici = [
    { titolo: "Programma su misura", desc: "Costruito sui tuoi obiettivi reali, non su modelli generici copia-incolla." },
    { titolo: "Risultati misurabili", desc: "Check-in regolari, numeri alla mano. Sai sempre dove sei e dove stai andando." },
    { titolo: "Supporto continuo", desc: "WhatsApp aperto tra una sessione e l'altra. Non sei mai solo nel percorso." },
    { titolo: "Zero perdite di tempo", desc: "Ogni esercizio ha un perché. Niente filler, solo ciò che porta risultati." },
  ];

  return (
    <LandingLayout>
      <HeroSection
        titolo={landing.titolo}
        sottotitolo={landing.sottotitolo}
        cta={landing.cta}
        seed={landing.seed}
        ctaHref="#form"
      />

      {/* Mixed alt: some empty, some missing — intentional */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4">PERCHÉ FUNZIONA</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Quattro motivi concreti per cui chi inizia con me arriva al risultato — e ci resta.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {benefici.map((b, i) => {
              const benefitSrc = imageForSeed(`${landing.seed}-b${i}`, imageForSeed(landing.seed));
              return (
                <div key={b.titolo} className="bg-card border border-border p-6 text-center">
                  {i % 2 === 0 ? (
                    <img src={benefitSrc} alt="" className="w-full block mb-4" />
                  ) : (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img src={benefitSrc} className="w-full block mb-4" />
                  )}
                  <h3 className="font-display text-xl mb-2">{b.titolo}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="text-accent text-6xl mb-4">"</div>
          <p className="text-2xl md:text-3xl font-display leading-tight mb-6">
            HO PERSO 12 KG IN 4 MESI. NON PENSAVO FOSSE POSSIBILE A 38 ANNI, CON DUE FIGLI E UN LAVORO DA QUARANTA ORE A SETTIMANA.
          </p>
          <div className="text-primary uppercase tracking-widest text-sm">— Marco R., cliente dal 2024</div>
        </div>
      </section>

      <section id="form" className="py-20">
        <div className="container mx-auto max-w-xl">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4">RICHIEDI INFO</h2>
          <p className="text-muted-foreground text-center mb-10">
            Compila il form. Ti ricontatto entro 24 ore con una proposta concreta. Nessun impegno, nessun preventivo automatico.
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Richiesta inviata (demo)"); }}
            className="bg-card border border-border p-8 space-y-4"
          >
            <input type="text" placeholder="Nome e cognome" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <input type="email" placeholder="Email" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <input type="tel" placeholder="Telefono" className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <textarea placeholder="Il tuo obiettivo" rows={4} className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary" />
            <button type="submit" className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider py-4 hover:bg-primary/90 transition">
              {landing.cta}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Inviando il form accetti la <Link to="/privacy-policy" className="text-primary">privacy policy</Link>.
            </p>
          </form>
        </div>
      </section>
    </LandingLayout>
  );
}
