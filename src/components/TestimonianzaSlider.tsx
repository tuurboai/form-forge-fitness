const testimonianze = [
  { nome: "Marco R.", risultato: "-12 kg in 4 mesi", testo: "Luca mi ha cambiato il rapporto con l'allenamento. Niente trucchi, solo metodo." },
  { nome: "Giulia M.", risultato: "Ricomposizione completa", testo: "Risultati che non pensavo possibili. Disponibile, professionale, motivante." },
  { nome: "Andrea T.", risultato: "+9 kg massa magra", testo: "Dopo anni in palestra da solo, finalmente progressi reali. Lo consiglio." },
];

export default function TestimonianzaSlider() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">DICONO DI ME</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonianze.map((t) => (
            <div key={t.nome} className="bg-card border border-border p-8">
              <div className="text-accent text-4xl mb-3">"</div>
              <p className="text-foreground/90 mb-6 leading-relaxed">{t.testo}</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{t.nome}</div>
                <div className="text-primary text-sm">{t.risultato}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
