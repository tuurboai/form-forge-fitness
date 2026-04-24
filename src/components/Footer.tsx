import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl mb-4">LUCA <span className="text-primary">FERRETTI</span></div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Personal Trainer a Milano. 9 anni di esperienza, 340+ clienti seguiti.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Sito</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/chi-sono" className="text-muted-foreground hover:text-primary">Chi sono</Link></li>
            <li><Link to="/servizi" className="text-muted-foreground hover:text-primary">Servizi</Link></li>
            <li><Link to="/trasformazioni" className="text-muted-foreground hover:text-primary">Trasformazioni</Link></li>
            <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            <li><Link to="/contatti" className="text-muted-foreground hover:text-primary">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Legale</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Seguimi</h4>
          <a href="#" className="text-muted-foreground hover:text-primary text-sm block">Instagram @lucaferrettift</a>
          <p className="text-xs text-muted-foreground mt-6">
            P.IVA 09812345678<br/>
            Via Vigevano 12, 20144 Milano<br/>
            © {new Date().getFullYear()} Luca Ferretti
          </p>
        </div>
      </div>
    </footer>
  );
}
