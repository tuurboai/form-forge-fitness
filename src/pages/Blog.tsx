import { useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";
import BlogCard from "@/components/BlogCard";
import { articoli } from "@/data/blog";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  return (
    <SiteLayout>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-primary uppercase tracking-widest text-sm mb-4">Blog</div>
          <h2 className="font-display text-5xl md:text-6xl mb-4">CONOSCENZA CHE FA LA DIFFERENZA</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Articoli senza giri di parole su allenamento, alimentazione e mindset.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articoli.map((a) => (
              <BlogCard key={a.slug} {...a} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
