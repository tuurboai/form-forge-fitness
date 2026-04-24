export default function StatsBanner() {
  const stats = [
    { num: "9", label: "Anni di esperienza" },
    { num: "340+", label: "Clienti seguiti" },
    { num: "12.000+", label: "Sessioni svolte" },
    { num: "98%", label: "Tasso di soddisfazione" },
  ];
  return (
    <section className="bg-primary text-primary-foreground py-14">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display text-5xl md:text-6xl mb-2">{s.num}</div>
            <div className="uppercase text-xs tracking-widest opacity-90">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
