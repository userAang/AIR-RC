export type QuestionType = "qcm" | "qcu";

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options: string[];
  correctAnswers: number[]; // indices des bonnes réponses
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  theme: string;
  content: string; // markdown
}

export interface MiniProject {
  title: string;
  description: string;
  task: string; // Une seule tâche simple, A-to-B
  submissionInstructions?: string;
}

export interface Week {
  id: string; // ex: "semaine-1"
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
  questions: Question[];
  miniProject: MiniProject;
}

export interface MonthCourse {
  id: string; // ex: "juin-2026"
  label: string; // ex: "Juin 2026"
  shortLabel: string;
  theme: string;
  description: string;
  monthObjective: string; // L'objectif pédagogique du mois
  available: boolean;
  weeks: Week[];
}
