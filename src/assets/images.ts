// Centralized image registry — keeps imports tidy and lets dynamic pages
// (servizi, trasformazioni, blog, landing) resolve assets by seed.

import heroHome from "./hero-home.jpg";
import portraitLuca from "./portrait-luca.jpg";

import srvPt from "./srv-pt.jpg";
import srvOnline from "./srv-online.jpg";
import srvHome from "./srv-home.jpg";
import srvDim from "./srv-dim.jpg";
import srvAtl from "./srv-atl.jpg";
import srvRic from "./srv-ric.jpg";

import tr1 from "./tr-1.jpg";
import tr2 from "./tr-2.jpg";
import tr3 from "./tr-3.jpg";
import tr4 from "./tr-4.jpg";
import tr5 from "./tr-5.jpg";
import tr6 from "./tr-6.jpg";

import blog1 from "./blog-1.jpg";
import blog2 from "./blog-2.jpg";
import blog3 from "./blog-3.jpg";
import blog4 from "./blog-4.jpg";
import blog5 from "./blog-5.jpg";

export { heroHome, portraitLuca };

const bySeed: Record<string, string> = {
  // hero
  "lf-home-hero": heroHome,

  // servizi
  "srv-pt": srvPt,
  "srv-online": srvOnline,
  "srv-home": srvHome,
  "srv-dim": srvDim,
  "srv-atl": srvAtl,
  "srv-ric": srvRic,

  // trasformazioni
  "tr-1": tr1,
  "tr-2": tr2,
  "tr-3": tr3,
  "tr-4": tr4,
  "tr-5": tr5,
  "tr-6": tr6,

  // blog
  "blog-1": blog1,
  "blog-2": blog2,
  "blog-3": blog3,
  "blog-4": blog4,
  "blog-5": blog5,

  // landing → riuso coerente delle immagini servizio per categoria/intento
  // obiettivo
  "lf-dimagrire": srvDim,
  "lf-massa": srvRic,
  "lf-tono": srvDim,
  "lf-ricomp": srvRic,
  "lf-peso": srvDim,
  // formato
  "lf-domicilio": srvHome,
  "lf-online": srvOnline,
  "lf-palestra": srvPt,
  "lf-outdoor": srvAtl,
  // target
  "lf-donne": srvRic,
  "lf-over40": srvPt,
  "lf-running": srvAtl,
  "lf-recupero": srvHome,
  "lf-beginners": srvPt,
  // promo
  "lf-settembre": heroHome,
  "lf-estate": srvDim,
  "lf-free": srvPt,
  "lf-coppia": srvHome,
  "lf-mensile": srvOnline,
  "lf-pack12": srvPt,
};

export function imageForSeed(seed: string, fallback: string = heroHome): string {
  return bySeed[seed] ?? fallback;
}
