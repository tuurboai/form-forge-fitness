import type { RouteRecord } from "vite-react-ssg";
import { servizi } from "./data/servizi";
import { articoli } from "./data/blog";
import { landings } from "./data/landings";

export const routes: RouteRecord[] = [
  {
    path: "/",
    lazy: () => import("./pages/Index"),
  },
  {
    path: "/chi-sono",
    lazy: () => import("./pages/ChiSono"),
  },
  {
    path: "/servizi",
    lazy: () => import("./pages/Servizi"),
  },
  {
    path: "/servizi/:slug",
    lazy: () => import("./pages/ServizioDettaglio"),
    getStaticPaths: () => servizi.map((s) => `/servizi/${s.slug}`),
  },
  {
    path: "/trasformazioni",
    lazy: () => import("./pages/Trasformazioni"),
  },
  {
    path: "/blog",
    lazy: () => import("./pages/Blog"),
  },
  {
    path: "/blog/:slug",
    lazy: () => import("./pages/BlogArticolo"),
    getStaticPaths: () => articoli.map((a) => `/blog/${a.slug}`),
  },
  {
    path: "/contatti",
    lazy: () => import("./pages/Contatti"),
  },
  {
    path: "/privacy-policy",
    lazy: () => import("./pages/PrivacyPolicy"),
  },
  {
    path: "/cookie-policy",
    lazy: () => import("./pages/CookiePolicy"),
  },
  {
    path: "/l/:slug",
    lazy: () => import("./pages/LandingPage"),
    getStaticPaths: () => landings.map((l) => `/l/${l.slug}`),
  },
  {
    path: "*",
    lazy: () => import("./pages/NotFound"),
  },
];
