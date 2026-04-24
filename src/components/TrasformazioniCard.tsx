import { imageForSeed } from "@/assets/images";

interface TrasformazioniCardProps {
  nome: string;
  risultato: string;
  storia: string;
  seed: string;
  altVariant?: "empty" | "missing";
}

export default function TrasformazioniCard({ nome, risultato, storia, seed, altVariant = "empty" }: TrasformazioniCardProps) {
  const src = imageForSeed(seed);
  return (
    <article className="bg-card border border-border">
      {altVariant === "missing" ? (
        // intentional: alt completely absent
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={src} className="w-full block" />
      ) : (
        <img src={src} alt="" className="w-full block" />
      )}
      <div className="p-6">
        <div className="text-primary font-display text-2xl mb-1">{risultato}</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wider mb-3">{nome}</div>
        <p className="text-foreground/90 text-sm leading-relaxed">{storia}</p>
      </div>
    </article>
  );
}
