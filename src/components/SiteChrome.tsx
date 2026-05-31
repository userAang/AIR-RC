import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-air-bg/70 border-b border-air-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-white rounded-lg p-1 group-hover:scale-105 transition-transform">
            <Image src="/logo.png" alt="AIR" fill className="object-contain" sizes="40px" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-air-text tracking-tight text-lg">
              AIR <span className="text-air-cyan">Pôle RC</span>
            </div>
            <div className="text-[10px] text-air-muted uppercase tracking-widest">
              Réseaux & Cybersécurité
            </div>
          </div>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/" className="text-air-muted hover:text-air-cyan transition">
            Accueil
          </Link>
          <Link href="/#cours" className="text-air-muted hover:text-air-cyan transition">
            Cours
          </Link>
          <Link href="/#about" className="text-air-muted hover:text-air-cyan transition">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-air-border mt-20 py-8 bg-air-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="text-air-muted text-sm">
          AIR — <span className="text-air-cyan">A</span>SEBEM{" "}
          <span className="text-air-cyan">I</span>nnovation and{" "}
          <span className="text-air-cyan">R</span>esearch · Pôle Réseaux & Cybersécurité
        </div>
        <div className="text-air-muted text-xs mt-2">
          © {new Date().getFullYear()} AIR Club · Contact :{" "}
          <a href="mailto:castromadjri@gmail.com" className="text-air-accent hover:underline">
            castromadjri@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
