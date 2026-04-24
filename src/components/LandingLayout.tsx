import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-6 text-center">
        <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</Link>
        <span className="text-muted-foreground mx-3">·</span>
        <Link to="/cookie-policy" className="text-xs text-muted-foreground hover:text-primary">Cookie Policy</Link>
      </footer>
    </div>
  );
}
