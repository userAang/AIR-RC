import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <div className="text-air-cyan font-mono text-sm uppercase tracking-widest">Erreur 404</div>
        <h1 className="font-display font-bold text-5xl sm:text-6xl mt-2 text-air-text">
          Page introuvable
        </h1>
        <p className="text-air-muted mt-4">
          La page que tu cherches n'existe pas ou plus. Reviens à l'accueil pour reprendre le
          cours.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-air-cyan text-air-bg font-medium hover:bg-air-cyan/90 transition btn-glow"
        >
          <Home className="w-4 h-4" /> Retour à l'accueil
        </Link>
      </section>
      <SiteFooter />
    </>
  );
}
