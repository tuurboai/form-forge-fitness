import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  titolo: string;
  categoria: string;
  data: string;
  intro: string;
  seed: string;
}

export default function BlogCard({ slug, titolo, categoria, data, intro, seed }: BlogCardProps) {
  return (
    <article className="bg-card border border-border hover:border-primary transition-colors">
      <img
        src={`https://picsum.photos/seed/${seed}/600/400`}
        alt={titolo}
        className="w-full block"
      />
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 uppercase tracking-wider">
          <span className="text-primary">{categoria}</span>
          <span>·</span>
          <span>{data}</span>
        </div>
        <h3 className="font-display text-2xl mb-3 leading-tight">{titolo}</h3>
        <p className="text-muted-foreground text-sm mb-4">{intro}</p>
        <Link to={`/blog/${slug}`} className="text-primary text-2xl">
          →
        </Link>
      </div>
    </article>
  );
}
