import Link from "next/link";
import Image from "next/image";
import { months } from "@/data/months";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Calendar, Lock, ArrowRight, ShieldCheck, Network, Cpu } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-animated opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-air-bg/50 to-air-bg" />

        {/* Halo cyan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-air-cyan/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8 bg-white rounded-2xl p-3 glow-cyan-strong animate-glow-pulse">
              <Image src="/logo.png" alt="AIR Logo" fill className="object-contain p-2" priority />
            </div>

            <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-air-cyan/80 mb-4 font-mono">
              ASEBEM Innovation and Research
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05]">
              Pôle <span className="text-air-cyan">Réseaux</span>
              <br />
              <span className="text-air-cyan">&amp;</span> Cybersécurité
            </h1>

            <p className="mt-6 max-w-2xl text-air-muted text-base sm:text-lg leading-relaxed">
              Une plateforme dédiée à la formation des membres du club AIR. Sept mois de cours
              progressifs, du fondamental informatique jusqu'au pentest avancé. Apprends à ton
              rythme, valide tes acquis, livre des mini-projets.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-air-surface border border-air-border">
                <Cpu className="w-4 h-4 text-air-cyan" /> Informatique
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-air-surface border border-air-border">
                <Network className="w-4 h-4 text-air-cyan" /> Réseaux
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-air-surface border border-air-border">
                <ShieldCheck className="w-4 h-4 text-air-cyan" /> Cybersécurité
              </div>
            </div>

            <a
              href="#cours"
              className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-air-cyan text-air-bg font-medium hover:bg-air-cyan/90 transition btn-glow"
            >
              Commencer maintenant <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* COURS PAR MOIS */}
      <section id="cours" className="relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-widest text-air-cyan font-mono mb-2">
                Programme 2026
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-air-text">
                Cours par mois
              </h2>
              <p className="text-air-muted mt-2 max-w-xl">
                De juin à décembre 2026. Chaque mois explore une thématique unique. Chaque
                mois contient quatre semaines de contenu progressif, avec un QCM et un mini-projet.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-stagger">
            {months.map((m) => {
              const isAvailable = m.available;
              const Wrapper: any = isAvailable ? Link : "div";
              const wrapperProps = isAvailable ? { href: `/cours/${m.id}` } : {};

              return (
                <Wrapper
                  key={m.id}
                  {...wrapperProps}
                  className={`group relative overflow-hidden rounded-2xl border bg-air-surface border-air-border p-6 transition-all ${
                    isAvailable
                      ? "hover:border-air-cyan hover:-translate-y-1 hover:glow-cyan cursor-pointer"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  {/* Halo */}
                  {isAvailable && (
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-air-cyan/10 rounded-full blur-3xl group-hover:bg-air-cyan/20 transition" />
                  )}

                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-air-cyan" />
                      <span className="font-mono text-xs uppercase tracking-widest text-air-muted">
                        {m.shortLabel}
                      </span>
                    </div>
                    {!isAvailable && (
                      <div className="flex items-center gap-1 text-xs text-air-muted">
                        <Lock className="w-3 h-3" /> Bientôt
                      </div>
                    )}
                  </div>

                  <h3 className="relative font-display font-bold text-2xl mt-4 text-air-text">
                    {m.label}
                  </h3>
                  <div className="relative text-sm text-air-cyan/90 mt-1 font-medium">{m.theme}</div>
                  <p className="relative text-sm text-air-muted mt-3 leading-relaxed line-clamp-3">
                    {m.description}
                  </p>

                  {isAvailable && (
                    <div className="relative mt-4 flex items-center text-sm text-air-cyan font-medium opacity-0 group-hover:opacity-100 transition">
                      Accéder au mois <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section id="about" className="relative scroll-mt-24 bg-air-surface/30 border-y border-air-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-air-cyan font-mono mb-2">
                Le club
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-air-text">
                ASEBEM Innovation and Research
              </h2>
              <p className="text-air-muted mt-4 leading-relaxed">
                AIR est un club tech regroupant plusieurs pôles. Ce site est dédié au pôle{" "}
                <span className="text-air-cyan font-medium">Réseaux & Cybersécurité</span>. Notre
                mission : transmettre les compétences clés du domaine, du débutant complet à
                l'autonome qui peut faire du pentest dans un lab.
              </p>
              <p className="text-air-muted mt-4 leading-relaxed">
                Le programme est conçu pour être progressif et cohérent. On commence par
                l'informatique de base en juin, on enchaîne sur l'administration système, puis les
                réseaux, la défense, l'offensive, et on termine par un CTF interne en décembre.
              </p>
            </div>
            <div className="bg-air-card border border-air-border rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-air-cyan/10 flex items-center justify-center border border-air-cyan/30">
                  <Cpu className="w-5 h-5 text-air-cyan" />
                </div>
                <div>
                  <div className="font-display font-semibold text-air-text">7 mois de cours</div>
                  <div className="text-sm text-air-muted">
                    Juin à décembre 2026, contenus progressifs.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-air-cyan/10 flex items-center justify-center border border-air-cyan/30">
                  <Network className="w-5 h-5 text-air-cyan" />
                </div>
                <div>
                  <div className="font-display font-semibold text-air-text">4 semaines par mois</div>
                  <div className="text-sm text-air-muted">
                    Un parcours unique par mois, clair et progressif.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-air-cyan/10 flex items-center justify-center border border-air-cyan/30">
                  <ShieldCheck className="w-5 h-5 text-air-cyan" />
                </div>
                <div>
                  <div className="font-display font-semibold text-air-text">Validation continue</div>
                  <div className="text-sm text-air-muted">
                    QCM/QCU + mini-projets pratiques chaque semaine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
