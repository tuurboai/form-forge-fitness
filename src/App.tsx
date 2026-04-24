import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ChiSono from "./pages/ChiSono.tsx";
import Servizi from "./pages/Servizi.tsx";
import ServizioDettaglio from "./pages/ServizioDettaglio.tsx";
import Trasformazioni from "./pages/Trasformazioni.tsx";
import Blog from "./pages/Blog.tsx";
import BlogArticolo from "./pages/BlogArticolo.tsx";
import Contatti from "./pages/Contatti.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/servizi/:slug" element={<ServizioDettaglio />} />
          <Route path="/trasformazioni" element={<Trasformazioni />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticolo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/l/:slug" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
