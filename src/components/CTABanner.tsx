import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl mb-4">PRONTO A INIZIARE?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Prima consulenza gratuita. Capiamo se siamo la coppia giusta per i tuoi obiettivi.
        </p>
        <Link to="/contatti" className="inline-block bg-primary text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 hover:bg-primary/90 transition">
          Prenota la consulenza
        </Link>
      </div>
    </section>
  );
}
