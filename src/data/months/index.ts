import type { MonthCourse } from "@/lib/types";
import { juin2026 } from "./juin-2026";
import { buildPlaceholderMonth } from "./_placeholder";

export const months: MonthCourse[] = [
  juin2026,
  buildPlaceholderMonth({
    id: "juillet-2026",
    label: "Juillet 2026",
    shortLabel: "Juillet",
    theme: "Administration système Linux & Windows",
    description: "Gestion des utilisateurs, services, permissions, durcissement.",
    monthObjective: "Maîtriser l'administration de base des systèmes Linux et Windows.",
  }),
  buildPlaceholderMonth({
    id: "aout-2026",
    label: "Août 2026",
    shortLabel: "Août",
    theme: "Réseaux avancés et routage",
    description: "Routage statique/dynamique, VLAN, NAT, configuration Cisco.",
    monthObjective: "Comprendre et configurer les réseaux avancés.",
  }),
  buildPlaceholderMonth({
    id: "septembre-2026",
    label: "Septembre 2026",
    shortLabel: "Septembre",
    theme: "Sécurité périmétrique & monitoring",
    description: "Pare-feu (iptables, pfSense), IDS/IPS (Snort, Suricata), SIEM.",
    monthObjective: "Sécuriser et monitorer un périmètre réseau.",
  }),
  buildPlaceholderMonth({
    id: "octobre-2026",
    label: "Octobre 2026",
    shortLabel: "Octobre",
    theme: "Pentest applicatif et exploitation",
    description: "Burp Suite, Metasploit, exploitation web et système.",
    monthObjective: "Débuter les tests de pénétration contrôlés.",
  }),
  buildPlaceholderMonth({
    id: "novembre-2026",
    label: "Novembre 2026",
    shortLabel: "Novembre",
    theme: "Forensique et réponse à incident",
    description: "Analyse post-incident, mémoire, logs, malware analysis.",
    monthObjective: "Analyser et répondre aux incidents de sécurité.",
  }),
  buildPlaceholderMonth({
    id: "decembre-2026",
    label: "Décembre 2026",
    shortLabel: "Décembre",
    theme: "Projet intégrateur et synthèse annuelle",
    description: "Bilan de l'année, projet pratique global.",
    monthObjective: "Consolider et appliquer toutes les compétences acquises.",
  }),
];

export function getMonth(id: string): MonthCourse | undefined {
  return months.find((m) => m.id === id);
}

export function getWeek(monthId: string, weekId: string) {
  const m = getMonth(monthId);
  return m?.weeks.find((w) => w.id === weekId);
}
