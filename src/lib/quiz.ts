import type { Question, Week, MonthCourse } from "./types";

export type SubmissionAnswers = Record<string, number[]>;

export interface SubmissionIdentity {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
}

export interface GradedQuestion {
  questionId: string;
  question: string;
  type: "qcm" | "qcu";
  options: string[];
  userAnswers: number[];
  correctAnswers: number[];
  isCorrect: boolean;
  explanation: string;
}

export interface QuizResult {
  score: number;
  total: number;
  details: GradedQuestion[];
}

function arraysEqualAsSets(a: number[], b: number[]) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort().join(",");
  const sb = [...b].sort().join(",");
  return sa === sb;
}

export function gradeQuiz(questions: Question[], answers: SubmissionAnswers): QuizResult {
  const details: GradedQuestion[] = questions.map((q) => {
    const userAnswers = answers[q.id] ?? [];
    const isCorrect = arraysEqualAsSets(userAnswers, q.correctAnswers);
    return {
      questionId: q.id,
      question: q.question,
      type: q.type,
      options: q.options,
      userAnswers,
      correctAnswers: q.correctAnswers,
      isCorrect,
      explanation: q.explanation,
    };
  });
  const score = details.filter((d) => d.isCorrect).length;
  return { score, total: questions.length, details };
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildAdminEmail(params: {
  identity: SubmissionIdentity;
  month: MonthCourse;
  week: Week;
  result: QuizResult;
}): { subject: string; html: string } {
  const { identity, month, week, result } = params;
  const percentage = Math.round((result.score / result.total) * 100);
  const success = percentage >= 70;

  const subject = `[AIR Pôle RC] Réponses QCM - ${identity.prenom} ${identity.nom} - ${month.label} S${week.number} - ${result.score}/${result.total}`;

  const detailsHtml = result.details
    .map((d, i) => {
      const userTexts =
        d.userAnswers.length > 0
          ? d.userAnswers.map((idx) => `<li>${escapeHtml(d.options[idx] ?? "?")}</li>`).join("")
          : "<li><em>aucune réponse</em></li>";
      const correctTexts = d.correctAnswers
        .map((idx) => `<li>${escapeHtml(d.options[idx] ?? "?")}</li>`)
        .join("");
      return `
        <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px;margin:10px 0;background:${d.isCorrect ? "#ecfdf5" : "#fef2f2"};">
          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">Q${i + 1} · ${d.type.toUpperCase()} · ${d.isCorrect ? "✅ Correct" : "❌ Incorrect"}</div>
          <div style="font-weight:600;color:#0f172a;">${escapeHtml(d.question)}</div>
          <div style="margin-top:8px;font-size:13px;color:#334155;"><strong>Réponse(s) de l'élève :</strong><ul style="margin:4px 0 0 0;padding-left:20px;">${userTexts}</ul></div>
          <div style="margin-top:6px;font-size:13px;color:#334155;"><strong>Bonne(s) réponse(s) :</strong><ul style="margin:4px 0 0 0;padding-left:20px;">${correctTexts}</ul></div>
          <div style="margin-top:8px;font-size:13px;color:#475569;font-style:italic;">💡 ${escapeHtml(d.explanation)}</div>
        </div>
      `;
    })
    .join("");

  const html = `
  <!DOCTYPE html>
  <html lang="fr">
    <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:20px;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
        <div style="background:linear-gradient(135deg,#0F1A2E 0%,#1B2A47 100%);padding:24px;color:#ffffff;">
          <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#22D3EE;">AIR · Pôle RC</div>
          <h1 style="margin:6px 0 0 0;font-size:22px;">Nouvelle soumission de QCM</h1>
        </div>
        <div style="padding:24px;">
          <h2 style="font-size:16px;margin:0 0 12px 0;color:#0f172a;">Identité de l'élève</h2>
          <table style="width:100%;font-size:14px;color:#334155;border-collapse:collapse;">
            <tr><td style="padding:6px 0;width:140px;color:#64748b;">Nom</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(identity.nom)}</td></tr>
            <tr><td style="padding:6px 0;color:#64748b;">Prénom</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(identity.prenom)}</td></tr>
            <tr><td style="padding:6px 0;color:#64748b;">Téléphone</td><td style="padding:6px 0;">${escapeHtml(identity.telephone)}</td></tr>
            <tr><td style="padding:6px 0;color:#64748b;">Email</td><td style="padding:6px 0;">${escapeHtml(identity.email)}</td></tr>
          </table>

          <h2 style="font-size:16px;margin:22px 0 12px 0;color:#0f172a;">Cours</h2>
          <table style="width:100%;font-size:14px;color:#334155;border-collapse:collapse;">
            <tr><td style="padding:6px 0;width:140px;color:#64748b;">Mois</td><td style="padding:6px 0;font-weight:600;">${escapeHtml(month.label)} — ${escapeHtml(month.theme)}</td></tr>
            <tr><td style="padding:6px 0;color:#64748b;">Semaine</td><td style="padding:6px 0;font-weight:600;">Semaine ${week.number} — ${escapeHtml(week.title)}</td></tr>
          </table>

          <div style="margin-top:22px;padding:16px;border-radius:10px;background:${success ? "#ecfdf5" : "#fef3c7"};border:1px solid ${success ? "#10b981" : "#f59e0b"};">
            <div style="font-size:13px;color:#475569;">Score obtenu</div>
            <div style="font-size:28px;font-weight:700;color:${success ? "#047857" : "#b45309"};">${result.score} / ${result.total} <span style="font-size:14px;font-weight:500;color:#64748b;">(${percentage}%)</span></div>
          </div>

          <h2 style="font-size:16px;margin:22px 0 4px 0;color:#0f172a;">Détail des réponses</h2>
          ${detailsHtml}

          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center;">
            AIR · ASEBEM Innovation and Research · Pôle Réseaux & Cybersécurité
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

  return { subject, html };
}

export function buildStudentEmail(params: {
  identity: SubmissionIdentity;
  month: MonthCourse;
  week: Week;
  result: QuizResult;
}): { subject: string; html: string } {
  const { identity, month, week, result } = params;
  const percentage = Math.round((result.score / result.total) * 100);
  const success = percentage >= 70;

  const subject = `[AIR Pôle RC] Tes résultats - ${month.label} S${week.number} - ${result.score}/${result.total}`;

  const detailsHtml = result.details
    .map((d, i) => {
      const userTexts =
        d.userAnswers.length > 0
          ? d.userAnswers.map((idx) => `<li>${escapeHtml(d.options[idx] ?? "?")}</li>`).join("")
          : "<li><em>aucune réponse</em></li>";
      const correctTexts = d.correctAnswers
        .map((idx) => `<li>${escapeHtml(d.options[idx] ?? "?")}</li>`)
        .join("");
      return `
        <div style="border:1px solid #e2e8f0;border-radius:8px;padding:14px;margin:10px 0;background:${d.isCorrect ? "#ecfdf5" : "#fef2f2"};">
          <div style="font-size:12px;color:#64748b;margin-bottom:6px;">Question ${i + 1} · ${d.isCorrect ? "✅ Bonne réponse" : "❌ À revoir"}</div>
          <div style="font-weight:600;color:#0f172a;">${escapeHtml(d.question)}</div>
          <div style="margin-top:8px;font-size:13px;color:#334155;"><strong>Ta réponse :</strong><ul style="margin:4px 0 0 0;padding-left:20px;">${userTexts}</ul></div>
          ${!d.isCorrect ? `<div style="margin-top:6px;font-size:13px;color:#334155;"><strong>La bonne réponse :</strong><ul style="margin:4px 0 0 0;padding-left:20px;">${correctTexts}</ul></div>` : ""}
          <div style="margin-top:8px;font-size:13px;color:#475569;font-style:italic;background:#f1f5f9;padding:8px;border-radius:6px;">💡 ${escapeHtml(d.explanation)}</div>
        </div>
      `;
    })
    .join("");

  const html = `
  <!DOCTYPE html>
  <html lang="fr">
    <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f8fafc;padding:20px;color:#0f172a;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
        <div style="background:linear-gradient(135deg,#0F1A2E 0%,#1B2A47 100%);padding:24px;color:#ffffff;text-align:center;">
          <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#22D3EE;">AIR · Pôle RC</div>
          <h1 style="margin:6px 0 0 0;font-size:22px;">Tes résultats</h1>
        </div>
        <div style="padding:24px;">
          <p style="font-size:15px;color:#334155;">Bonjour <strong>${escapeHtml(identity.prenom)}</strong>,</p>
          <p style="font-size:14px;color:#475569;line-height:1.6;">
            Voici le récap de tes réponses au QCM de la <strong>Semaine ${week.number}</strong> de <strong>${escapeHtml(month.label)}</strong>
            (${escapeHtml(week.title)}).
          </p>

          <div style="margin-top:16px;padding:18px;border-radius:10px;background:${success ? "#ecfdf5" : "#fef3c7"};border:1px solid ${success ? "#10b981" : "#f59e0b"};text-align:center;">
            <div style="font-size:13px;color:#475569;">Score</div>
            <div style="font-size:32px;font-weight:700;color:${success ? "#047857" : "#b45309"};margin-top:4px;">${result.score} / ${result.total}</div>
            <div style="font-size:14px;color:#64748b;margin-top:4px;">(${percentage}%)</div>
            <div style="margin-top:10px;font-size:14px;color:${success ? "#047857" : "#b45309"};font-weight:600;">
              ${success ? "🎉 Bravo, c'est validé !" : "💪 Continue d'apprendre, tu y arriveras"}
            </div>
          </div>

          <h2 style="font-size:16px;margin:24px 0 8px 0;color:#0f172a;">Corrigé détaillé</h2>
          ${detailsHtml}

          <div style="margin-top:24px;padding:16px;border-radius:10px;background:#f1f5f9;">
            <div style="font-weight:600;color:#0f172a;font-size:14px;">📦 Et le mini-projet ?</div>
            <div style="font-size:13px;color:#475569;margin-top:6px;line-height:1.5;">
              N'oublie pas d'envoyer le mini-projet de cette semaine par email à
              <a href="mailto:castromadjri@gmail.com" style="color:#0891b2;">castromadjri@gmail.com</a>.
              Le template est disponible sur la page du cours.
            </div>
          </div>

          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;text-align:center;">
            AIR · ASEBEM Innovation and Research · Pôle Réseaux & Cybersécurité<br/>
            Une question ? <a href="mailto:castromadjri@gmail.com" style="color:#0891b2;">castromadjri@gmail.com</a>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

  return { subject, html };
}
