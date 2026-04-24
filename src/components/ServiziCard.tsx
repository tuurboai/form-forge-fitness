import { Link } from "react-router-dom";

interface ServiziCardProps {
  slug: string;
  titolo: string;
  descrizione: string;
  durata: string;
  prezzo: string;
  icona: string;
  seed: string;
}

export default function ServiziCard({ slug, titolo, descrizione, durata, prezzo, icona, seed }: ServiziCardProps) {
  return (
    <article className="bg-card border border-border hover:border-primary transition-colors group">
      {/* No fixed height wrapper, no width/height on img — intentional CLS */}
      <img
        src={`https://picsum.photos/seed/${seed}/600/400`}
        alt={titolo}
        className="w-full block"
      />
      <div className="p-6">
        <div className="text-3xl mb-3">{icona}</div>
        <h3 className="font-display text-2xl mb-2">{titolo}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{descrizione}</p>
        <div className="flex items-center justify-between text-sm border-t border-border pt-4">
          <div>
            <div className="text-xs text-muted-foreground uppercase">{durata}</div>
            <div className="text-primary font-semibold">{prezzo}</div>
          </div>
          {/* Icon-only link, no aria-label, no visible text — intentional a11y issue */}
          <Link to={`/servizi/${slug}`} className="text-primary text-2xl group-hover:translate-x-1 transition">
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
