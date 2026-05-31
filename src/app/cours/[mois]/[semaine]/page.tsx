import { notFound } from "next/navigation";
import { getMonth, getWeek } from "@/data/months";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WeekClient } from "@/components/WeekClient";
import type { MonthCourse, Week } from "@/lib/types";

export default async function SemainePage({
  params,
}: {
  params: { mois: string; semaine: string };
}) {
  const { mois, semaine } = (await params) as { mois: string; semaine: string };
  const month = getMonth(mois);
  const week = getWeek(mois, semaine);
  
  if (!month || !week) notFound();

  return (
    <>
      <SiteHeader />

      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 bg-air-cyan/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-2">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: month.label, href: `/cours/${month.id}` },
              { label: `Semaine ${week.number}` },
            ]}
          />

          <div className="mt-6 text-xs uppercase tracking-widest text-air-cyan font-mono">
            {month.label} · Semaine {week.number}
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl mt-1 text-air-text">
            {week.title}
          </h1>
          <p className="text-air-muted mt-3 leading-relaxed">{week.description}</p>
        </div>
      </section>

      <WeekClient month={month} week={week} />

      <SiteFooter />
    </>
  );
}
