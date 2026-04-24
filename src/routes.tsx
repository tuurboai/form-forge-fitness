import type { RouteRecord } from "vite-react-ssg";
import { servizi } from "./data/servizi";
import { articoli } from "./data/blog";
import { landings } from "./data/landings";

const wrap = (loader: () => Promise<{ default: React.ComponentType }>) =>
  async () => {
    const m = await loader();
    return { Component: m.default };
  };

export const routes: RouteRecord[] = [
  {
    path: "/",
    lazy: wrap(() => import("./AppShell")),
    children: [
      { index: true, lazy: wrap(() => import("./pages/Index")) },
      { path: "chi-sono", lazy: wrap(() => import("./pages/ChiSono")) },
      { path: "servizi", lazy: wrap(() => import("./pages/Servizi")) },
      {
        path: "servizi/:slug",
        lazy: wrap(() => import("./pages/ServizioDettaglio")),
        getStaticPaths: () => servizi.map((s) => `/servizi/${s.slug}`),
      },
      { path: "trasformazioni", lazy: wrap(() => import("./pages/Trasformazioni")) },
      { path: "blog", lazy: wrap(() => import("./pages/Blog")) },
      {
        path: "blog/:slug",
        lazy: wrap(() => import("./pages/BlogArticolo")),
        getStaticPaths: () => articoli.map((a) => `/blog/${a.slug}`),
      },
      { path: "contatti", lazy: wrap(() => import("./pages/Contatti")) },
      { path: "privacy-policy", lazy: wrap(() => import("./pages/PrivacyPolicy")) },
      { path: "cookie-policy", lazy: wrap(() => import("./pages/CookiePolicy")) },
      {
        path: "l/:slug",
        lazy: wrap(() => import("./pages/LandingPage")),
        getStaticPaths: () => landings.map((l) => `/l/${l.slug}`),
      },
      { path: "*", lazy: wrap(() => import("./pages/NotFound")) },
    ],
  },
];
