import { notFound } from "next/navigation";
import { getMonth, getLevel } from "@/data/months";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LevelClient } from "@/components/LevelClient";

export default async function NiveauPage({ params }: { params: { mois: string; niveau: string } }) {
  const { mois, niveau } = (await params) as { mois: string; niveau: string };
  const month = getMonth(mois);
  const level = getLevel(mois, niveau);
  if (!month || !level) notFound();

  return (
    <>
      <SiteHeader />

      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-gradient-to-br ${level.color}`} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumb
            items={[{ label: "Accueil", href: "/" }, { label: month.label, href: `/cours/${month.id}` }, { label: `Cours ${level.label}` }]}
          />

          <div className="mt-8 flex items-center gap-3 text-air-muted font-mono text-xs uppercase tracking-widest">
            <div className="w-4 h-4" /> {month.label} · Niveau
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-air-text">
            Cours <span className="text-air-cyan">{level.label}</span>
          </h1>
          <p className="text-air-muted mt-4 max-w-2xl leading-relaxed">{level.description}</p>

          <div className="mt-6 text-sm text-air-muted">Clique sur une semaine pour voir son contenu, puis lance le cours.</div>
        </div>
      </section>

      <LevelClient month={month} level={level} />

      <SiteFooter />
    </>
  );
}
