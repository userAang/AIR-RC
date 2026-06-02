"use client";

import { useState } from "react";
import { Markdown } from "@/components/Markdown";
import type { Week, MonthCourse } from "@/lib/types";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FlaskConical,
  Send,
  XCircle,
  Loader2,
  Copy,
  Check,
  Trophy,
} from "lucide-react";

type Props = Readonly<{
  month: MonthCourse;
  week: Week;
}>;

type ResultData = {
  score: number;
  total: number;
  details: Array<{
    questionId: string;
    question: string;
    options: string[];
    explanation: string;
    isCorrect: boolean;
    correctAnswers: number[];
    userAnswers: number[];
  }>;
};

export function WeekClient({ month, week }: Props) {
  const [step, setStep] = useState<"lessons" | "quiz" | "submitted">("lessons");
  const [lessonIdx, setLessonIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number[]>>({});
  const [identity, setIdentity] = useState({ fullName: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);
  const [copied, setCopied] = useState(false);

  const lesson = week.lessons[lessonIdx];
  const isLastLesson = lessonIdx === week.lessons.length - 1;

  function toggleAnswer(qId: string, idx: number, isMulti: boolean) {
    setAnswers((prev) => {
      const current = prev[qId] ?? [];
      if (isMulti) {
        return {
          ...prev,
          [qId]: current.includes(idx) ? current.filter((i) => i !== idx) : [...current, idx],
        };
      }
      return { ...prev, [qId]: [idx] };
    });
  }

  async function submit() {
    setError(null);

    // Validation : champs identité
    if (!identity.fullName.trim()) {
      setError("Merci de renseigner ton nom complet.");
      return;
    }
    // Validation : toutes les questions répondues
    const unanswered = week.questions.filter(
      (q) => !answers[q.id] || answers[q.id].length === 0,
    );
    if (unanswered.length > 0) {
      setError(`Il reste ${unanswered.length} question(s) sans réponse.`);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/submit-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identity,
          monthId: month.id,
          weekId: week.id,
          answers,
        }),
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || "Erreur serveur");
      }
      const data = (await res.json()) as ResultData;
      setResult(data);
      setStep("submitted");
    } catch (e: any) {
      setError(
        e?.message ||
          "Une erreur est survenue lors de l'envoi. Vérifie ta connexion et réessaie.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function copyTemplate() {
    const template = `Sujet : Soumission du mini-projet — ${week.miniProject.title}\n\nBonjour,\n\nJe vous envoie ma réalisation pour le mini-projet de la semaine ${week.number} : ${week.miniProject.title}.\n\nTâche : ${week.miniProject.task}\n\n${week.miniProject.submissionInstructions ?? ""}`;
    try {
      await navigator.clipboard.writeText(template);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback : laisser l'utilisateur copier manuellement
    }
  }

  if (step === "submitted" && result) {
    const percentage = Math.round((result.score / result.total) * 100);
    const success = percentage >= 70;
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-2xl bg-air-surface border border-air-border p-8 text-center">
          <div
            className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
              success ? "bg-emerald-500/20 border border-emerald-500/40" : "bg-amber-500/20 border border-amber-500/40"
            }`}
          >
            {success ? (
              <Trophy className="w-10 h-10 text-emerald-400" />
            ) : (
              <BookOpen className="w-10 h-10 text-amber-400" />
            )}
          </div>
          <h2 className="font-display font-bold text-3xl mt-4 text-air-text">
            {success ? "Bravo, c'est validé !" : "Continue ton effort"}
          </h2>
          <div className="mt-2 text-air-muted">
            Tu as obtenu <span className="text-air-cyan font-bold">{result.score}/{result.total}</span>{" "}
            ({percentage}%)
          </div>

          <div className="mt-8 p-4 rounded-xl bg-air-card border border-air-border text-left">
            <div className="text-sm text-air-muted">
              Voici ton résultat détaillé. Les questions correctes et incorrectes sont listées
              ci-dessous pour t'aider à revoir les notions où des erreurs ont été commises.
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {result.details.map((item, index) => {
              const userTexts =
                item.userAnswers.length > 0
                  ? item.userAnswers.map((idx) => item.options[idx] ?? "?").join(" / ")
                  : "Aucune réponse";
              const correctTexts = item.correctAnswers
                .map((idx) => item.options[idx] ?? "?")
                .join(" / ");

              return (
                <div
                  key={item.questionId}
                  className={`rounded-2xl border p-5 ${
                    item.isCorrect
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-amber-50 border-amber-200"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="text-sm font-medium text-air-text">Question {index + 1}</div>
                    <div className={`text-xs uppercase font-semibold ${item.isCorrect ? "text-emerald-600" : "text-amber-700"}`}>
                      {item.isCorrect ? "Correct" : "Incorrect"}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-air-text font-semibold">{item.question}</div>
                  <div className="mt-3 text-sm text-air-muted">
                    <div>
                      <span className="font-medium text-air-text">Ta réponse :</span> {userTexts}
                    </div>
                    <div className="mt-2">
                      <span className="font-medium text-air-text">Bonne réponse :</span> {correctTexts}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-air-muted">💡 {item.explanation}</div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-left">
            <a
              href={`/cours/${month.id}`}
              className="px-4 py-2.5 rounded-full bg-air-surface border border-air-border hover:border-air-cyan text-air-text text-sm text-center transition"
            >
              Retour au mois
            </a>
            <button
              onClick={() => {
                setStep("lessons");
                setLessonIdx(0);
                setAnswers({});
                setResult(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-2.5 rounded-full bg-air-cyan text-air-bg font-medium text-sm hover:bg-air-cyan/90 transition"
            >
              Recommencer le cours
            </button>
          </div>
        </div>

        {/* Mini-projet à la fin */}
        <MiniProjectBlock week={week} onCopy={copyTemplate} copied={copied} />
      </section>
    );
  }

  return (
    <>
      {/* PROGRESSION */}
      {step === "lessons" && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-2">
          <div className="flex items-center justify-between text-xs text-air-muted font-mono uppercase tracking-widest mb-3">
            <span>
              Leçon {lessonIdx + 1} / {week.lessons.length}
            </span>
            <span>{Math.round(((lessonIdx + 1) / week.lessons.length) * 100)}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-air-surface overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-air-cyan to-air-accent transition-all"
              style={{ width: `${((lessonIdx + 1) / week.lessons.length) * 100}%` }}
            />
          </div>
        </section>
      )}

      {/* LEÇON COURANTE */}
      {step === "lessons" && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="rounded-2xl bg-air-surface border border-air-border p-6 sm:p-8">
            <div className="text-xs uppercase tracking-widest text-air-cyan/80 font-mono">
              {lesson.theme}
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mt-1 text-air-text">
              {lesson.title}
            </h2>
            <div className="mt-6">
              <Markdown source={lesson.content} />
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              onClick={() => {
                setLessonIdx((i) => Math.max(0, i - 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={lessonIdx === 0}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-air-surface border border-air-border hover:border-air-cyan disabled:opacity-40 disabled:cursor-not-allowed text-air-text text-sm transition"
            >
              <ChevronLeft className="w-4 h-4" /> Précédent
            </button>

            {isLastLesson ? (
              <button
                onClick={() => {
                  setStep("quiz");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-air-cyan text-air-bg font-medium hover:bg-air-cyan/90 transition btn-glow text-sm"
              >
                Passer au QCM <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setLessonIdx((i) => Math.min(week.lessons.length - 1, i + 1));
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-air-cyan text-air-bg font-medium hover:bg-air-cyan/90 transition btn-glow text-sm"
              >
                Leçon suivante <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>
      )}

      {/* QCM */}
      {step === "quiz" && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="rounded-2xl bg-air-surface border border-air-border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-air-cyan font-mono">
              <BookOpen className="w-3.5 h-3.5" /> Validation des acquis
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl mt-1 text-air-text">
              QCM — Semaine {week.number}
            </h2>
            <p className="text-air-muted text-sm mt-2">
              Réponds à toutes les questions puis clique sur Voir le résultat pour consulter ton score.
            </p>

            <div className="mt-8 space-y-6">
              {week.questions.map((q, qIdx) => {
                const isMulti = q.type === "qcm";
                const sel = answers[q.id] ?? [];
                return (
                  <div key={q.id} className="rounded-xl bg-air-card border border-air-border p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-xs uppercase tracking-widest text-air-cyan/80 font-mono">
                        Q{qIdx + 1} · {isMulti ? "QCM (plusieurs réponses)" : "QCU (1 réponse)"}
                      </div>
                    </div>
                    <div className="mt-2 font-medium text-air-text">{q.question}</div>
                    <div className="mt-4 space-y-2">
                      {q.options.map((opt, i) => {
                        const checked = sel.includes(i);
                        return (
                          <label
                            key={`${q.id}-${i}`}
                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                              checked
                                ? "bg-air-cyan/10 border-air-cyan/50"
                                : "bg-air-surface border-air-border hover:border-air-cyan/40"
                            }`}
                          >
                            <input
                              type={isMulti ? "checkbox" : "radio"}
                              name={q.id}
                              checked={checked}
                              onChange={() => toggleAnswer(q.id, i, isMulti)}
                              className="accent-air-cyan"
                            />
                            <span className="text-sm text-air-text">{opt}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* IDENTITÉ */}
            <div className="mt-10 pt-6 border-t border-air-border">
              <h3 className="font-display font-semibold text-lg text-air-text">Ton identité</h3>
              <p className="text-air-muted text-xs mt-1">
                Renseigne ton nom complet pour valider le QCM et voir ton résultat.
              </p>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Nom complet"
                  value={identity.fullName}
                  onChange={(e) => setIdentity({ fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-air-card border border-air-border text-air-text text-sm focus:border-air-cyan outline-none"
                />
              </div>
            </div>

            {error && (
              <div className="mt-5 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5 shrink-0" /> {error}
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                onClick={() => {
                  setStep("lessons");
                  setLessonIdx(week.lessons.length - 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-air-surface border border-air-border hover:border-air-cyan text-air-text text-sm transition"
              >
                <ChevronLeft className="w-4 h-4" /> Revoir les leçons
              </button>
              <button
                onClick={submit}
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-air-cyan text-air-bg font-medium hover:bg-air-cyan/90 disabled:opacity-60 transition btn-glow"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Vérification en cours...
                  </>
                ) : (
                  <>
                    Voir le résultat <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* MINI-PROJET : affiché uniquement après soumission du QCM */}
    </>
  );
}

function MiniProjectBlock({
  week,
  onCopy,
  copied,
}: Readonly<{
  week: Week;
  onCopy: () => void;
  copied: boolean;
}>) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 pt-4">
      <div className="rounded-2xl bg-gradient-to-br from-air-card to-air-surface border border-air-cyan/30 p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-air-cyan/10 rounded-full blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-air-cyan font-mono">
            <FlaskConical className="w-4 h-4" /> Mini-projet pratique
          </div>
          <h3 className="font-display font-bold text-2xl mt-1 text-air-text">
            {week.miniProject.title}
          </h3>
          <p className="text-air-muted text-sm mt-2 leading-relaxed">
            {week.miniProject.description}
          </p>

          <div className="mt-7 rounded-xl bg-air-bg border border-air-border p-5">
            <div className="flex flex-col gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-air-cyan/80 font-mono">
                  Tâche du mini-projet
                </div>
                <p className="text-sm text-air-text mt-2 leading-relaxed">{week.miniProject.task}</p>
              </div>

              {week.miniProject.submissionInstructions ? (
                <div>
                  <div className="text-xs uppercase tracking-widest text-air-cyan/80 font-mono">
                    Instructions de soumission
                  </div>
                  <p className="text-sm text-air-text mt-2 leading-relaxed">
                    {week.miniProject.submissionInstructions}
                  </p>
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="text-xs uppercase tracking-widest text-air-cyan/80 font-mono">
                    Envoi du mini-projet par email
                  </div>
                  <div className="text-sm text-air-text font-medium mt-1">
                    Destinataire :{" "}
                    <a
                      href="mailto:castromadjri@gmail.com"
                      className="text-air-cyan hover:underline"
                    >
                      castromadjri@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={onCopy}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-air-surface border border-air-border hover:border-air-cyan text-air-text text-xs transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" /> Copié
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copier le template
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
