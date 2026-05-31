import { notFound } from "next/navigation";
import Link from "next/link";
import { months, getMonth } from "@/data/months";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

export function generateStaticParams() {
  return months.map((m) => ({ mois: m.id }));
}

export default async function MoisPage({ params }: { params: { mois: string } }) {
  const { mois } = (await params) as { mois: string };
  const month = getMonth(mois);
  if (!month) notFound();

  return (
    <>
      <SiteHeader />

      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-air-cyan/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: month.label }]} />

          <div className="mt-8 flex items-center gap-3 text-air-muted font-mono text-xs uppercase tracking-widest">
            <Calendar className="w-4 h-4 text-air-cyan" /> {month.label}
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl mt-2 text-air-text">
            {month.theme}
          </h1>
          <p className="text-air-cyan text-lg mt-2 font-medium">{month.monthObjective}</p>
          <p className="text-air-muted mt-4 max-w-2xl leading-relaxed">{month.description}</p>

          {!month.available && (
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
              ⚠️ Le contenu de ce mois est en préparation.
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-air-text mb-4">Les 4 semaines</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-stagger">
          {month.weeks.map((week) => (
            <Link
              key={week.id}
              href={`/cours/${month.id}/${week.id}`}
              className="group relative overflow-hidden rounded-2xl bg-air-surface border border-air-border p-6 hover:border-air-cyan hover:-translate-y-1 transition-all"
            >
              {/* Gradient overlay */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl bg-air-cyan/10 opacity-20 group-hover:opacity-40 transition" />

              <div className="relative">
                <div className="inline-flex w-12 h-12 rounded-xl items-center justify-center bg-air-cyan/20 border border-air-cyan/40">
                  <span className="font-display font-bold text-air-cyan text-lg">{week.number}</span>
                </div>

                <h3 className="font-display font-bold text-xl mt-4 text-air-text">
                  Semaine {week.number}
                </h3>
                <p className="text-air-muted mt-2 text-sm leading-relaxed line-clamp-3">
                  {week.description}
                </p>

                <div className="mt-5 flex items-center text-sm text-air-cyan font-medium opacity-0 group-hover:opacity-100 transition">
                  Commencer <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
