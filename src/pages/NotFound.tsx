import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Intentional: no document.title set
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <div className="font-display text-8xl md:text-9xl text-primary mb-4">404</div>
        <h1 className="font-display text-3xl mb-4">PAGINA NON TROVATA</h1>
        <p className="mb-8 text-muted-foreground">La pagina che cerchi non esiste o è stata spostata.</p>
        <a href="/" className="inline-block bg-primary text-primary-foreground font-bold uppercase tracking-wider px-6 py-3 hover:bg-primary/90 transition">
          Torna alla home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
