import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getMonth, getWeek } from "@/data/months";
import {
  gradeQuiz,
  buildAdminEmail,
  buildStudentEmail,
  type SubmissionIdentity,
  type SubmissionAnswers,
} from "@/lib/quiz";

export const runtime = "nodejs";

interface Payload {
  identity: SubmissionIdentity;
  monthId: string;
  weekId: string;
  answers: SubmissionAnswers;
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const { identity, monthId, weekId, answers } = body || ({} as Payload);

  // Validation
  if (
    !identity ||
    !identity.nom?.trim() ||
    !identity.prenom?.trim() ||
    !identity.telephone?.trim() ||
    !identity.email?.trim() ||
    !isValidEmail(identity.email)
  ) {
    return NextResponse.json({ error: "Identité invalide" }, { status: 400 });
  }

  const month = getMonth(monthId);
  const week = getWeek(monthId, weekId);
  if (!month || !week) {
    return NextResponse.json({ error: "Cours introuvable" }, { status: 404 });
  }

  const result = gradeQuiz(week.questions, answers || {});

  // Envoi des emails (si configuré)
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || "castromadjri@gmail.com";
  const fromEmail = process.env.FROM_EMAIL || "AIR Pôle RC <onboarding@resend.dev>";

  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const adminMail = buildAdminEmail({ identity, month, week, result });
      const studentMail = buildStudentEmail({ identity, month, week, result });

      await Promise.all([
        resend.emails.send({
          from: fromEmail,
          to: [adminEmail],
          replyTo: identity.email,
          subject: adminMail.subject,
          html: adminMail.html,
        }),
        resend.emails.send({
          from: fromEmail,
          to: [identity.email],
          replyTo: adminEmail,
          subject: studentMail.subject,
          html: studentMail.html,
        }),
      ]);
    } catch (e: any) {
      // L'évaluation reste affichée à l'élève même si l'email plante,
      // mais on log pour le dev.
      console.error("[submit-quiz] Erreur Resend :", e?.message || e);
    }
  } else {
    console.warn(
      "[submit-quiz] RESEND_API_KEY absent — emails non envoyés. Ajoute la variable d'env.",
    );
  }

  return NextResponse.json({
    score: result.score,
    total: result.total,
    details: result.details.map((d) => ({
      questionId: d.questionId,
      isCorrect: d.isCorrect,
      correctAnswers: d.correctAnswers,
      userAnswers: d.userAnswers,
    })),
  });
}
