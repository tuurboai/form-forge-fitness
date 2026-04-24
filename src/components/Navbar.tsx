import { Link, NavLink } from "react-router-dom";
import { landings } from "@/data/landings";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm uppercase tracking-wider transition-colors ${
      isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
    }`;

  const categorie = Array.from(new Set(landings.map((l) => l.categoria as string)));

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo as h1 (problem 7) */}
        <Link to="/" className="block">
          <h1 className="font-display text-3xl text-foreground">
            LUCA <span className="text-primary">FERRETTI</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/chi-sono" className={linkClass}>Chi sono</NavLink>
          <NavLink to="/servizi" className={linkClass}>Servizi</NavLink>
          <NavLink to="/trasformazioni" className={linkClass}>Trasformazioni</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>

          <div className="relative group">
            <button className="text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
              Landing <span className="text-xs">▾</span>
            </button>
            <div className="absolute right-0 top-full pt-3 hidden group-hover:block">
              <div className="bg-background border border-border shadow-xl w-[640px] grid grid-cols-2 gap-x-6 gap-y-1 p-6 max-h-[70vh] overflow-y-auto">
                {categorie.map((cat: string) => (
                  <div key={cat} className="mb-3">
                    <div className="text-xs uppercase tracking-widest text-primary mb-2 border-b border-border pb-1">
                      {cat}
                    </div>
                    <ul className="space-y-1">
                      {landings
                        .filter((l) => l.categoria === cat)
                        .map((l) => (
                          <li key={l.slug}>
                            <Link
                              to={`/l/${l.slug}`}
                              className="block text-sm text-foreground/80 hover:text-primary py-1 leading-snug"
                            >
                              {l.titolo}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/contatti" className={linkClass}>Contatti</NavLink>
        </nav>
        <Link
          to="/contatti"
          className="hidden md:inline-block bg-primary text-primary-foreground font-semibold uppercase tracking-wider px-5 py-2.5 text-sm hover:bg-primary/90 transition"
        >
          Inizia ora
        </Link>
      </div>
    </header>
  );
}
