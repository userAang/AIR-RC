"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { MonthCourse, Level, Week } from "@/lib/types";
import { ChevronDown, BookOpen, FlaskConical, FileQuestion, ArrowRight } from "lucide-react";

export function LevelClient({ month, level }: { month: MonthCourse; level: Level }) {
  const [openWeek, setOpenWeek] = useState<string | null>(level.weeks[0]?.id ?? null);

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
      <div className="space-y-3">
        {level.weeks.map((week: Week) => {
          const isOpen = openWeek === week.id;
          return (
            <div
              key={week.id}
              className="rounded-2xl bg-air-surface border border-air-border overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenWeek(isOpen ? null : week.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-air-card transition"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center font-display font-bold text-white text-xl shrink-0`}
                  >
                    {week.number}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-air-cyan/80 font-mono">
                      Semaine {week.number}
                    </div>
                    <div className="font-display font-bold text-lg sm:text-xl text-air-text mt-0.5">{week.title}</div>
                    <div className="text-sm text-air-muted mt-1 hidden sm:block">{week.description}</div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-air-cyan transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-air-border bg-air-bg/30">
                  <div className="text-sm text-air-muted sm:hidden mb-4">{week.description}</div>

                  <div className="grid sm:grid-cols-3 gap-3 mb-5">
                    <div className="rounded-xl bg-air-card border border-air-border p-4">
                      <div className="flex items-center gap-2 text-xs text-air-muted font-mono uppercase tracking-wider">
                        <BookOpen className="w-3.5 h-3.5 text-air-cyan" />
                        Leçons
                      </div>
                      <div className="font-display font-bold text-2xl mt-1 text-air-text">{week.lessons.length}</div>
                    </div>
                    <div className="rounded-xl bg-air-card border border-air-border p-4">
                      <div className="flex items-center gap-2 text-xs text-air-muted font-mono uppercase tracking-wider">
                        <FileQuestion className="w-3.5 h-3.5 text-air-cyan" />
                        Questions
                      </div>
                      <div className="font-display font-bold text-2xl mt-1 text-air-text">{week.questions.length}</div>
                    </div>
                    <div className="rounded-xl bg-air-card border border-air-border p-4">
                      <div className="flex items-center gap-2 text-xs text-air-muted font-mono uppercase tracking-wider">
                        <FlaskConical className="w-3.5 h-3.5 text-air-cyan" />
                        Mini-projet
                      </div>
                      <div className="font-display font-bold text-sm mt-1 text-air-text leading-tight line-clamp-2">
                        {week.miniProject.title.replace(/^Mini-projet[^:]*:\s*/, "")}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/cours/${month.id}/${level.id}/${week.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-air-cyan text-air-bg font-medium hover:bg-air-cyan/90 transition btn-glow text-sm"
                  >
                    Démarrer la semaine {week.number} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
