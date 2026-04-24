import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm uppercase tracking-wider transition-colors ${
      isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
    }`;

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
