import type { MonthCourse, Week } from "@/lib/types";

/**
 * Génère un mois avec une structure pré-remplie mais des contenus "à venir".
 * Permet d'afficher la structure complète du site dès maintenant,
 * et de remplir les contenus mois par mois ensuite.
 */
export function buildPlaceholderMonth(params: {
  id: string;
  label: string;
  shortLabel: string;
  theme: string;
  description: string;
  monthObjective?: string;
  available?: boolean;
}): MonthCourse {
  const weeks: Week[] = [1, 2, 3, 4].map((n) => ({
    id: `semaine-${n}`,
    number: n,
    title: `Cours Semaine ${n} - ${params.label}`,
    description: "Contenu à venir.",
    lessons: [
      {
        id: "l1",
        title: "Contenu en préparation",
        theme: `Notion 1 - ${params.theme}`,
        content:
          "Le contenu détaillé de cette semaine sera publié prochainement. Le chef de pôle réseau et cybersécurité finalise les supports pédagogiques.",
      },
    ],
    questions: [
      {
        id: "q1",
        type: "qcu",
        question: "Ce cours est-il disponible ?",
        options: ["Oui, complet", "Pas encore, en préparation"],
        correctAnswers: [1],
        explanation: "Le contenu sera publié bientôt. Reste à l'affût !",
      },
    ],
    miniProject: {
      title: `Mini-projet ${params.label} - Semaine ${n}`,
      description: "À venir avec le contenu complet.",
      task: "À définir une fois le contenu publié",
    },
  }));

  return {
    id: params.id,
    label: params.label,
    shortLabel: params.shortLabel,
    theme: params.theme,
    description: params.description,
    monthObjective: params.monthObjective ?? "À définir",
    available: params.available ?? false,
    weeks,
  };
}
