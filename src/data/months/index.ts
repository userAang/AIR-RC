import type { MonthCourse } from "@/lib/types";
import { juin2026 } from "./juin-2026";
import { juillet2026 } from "./juillet-2026";
import { aout2026 } from "./aout-2026";
import { septembre2026 } from "./septembre-2026";
import { octobre2026 } from "./octobre-2026";
import { novembre2026 } from "./novembre-2026";
import { decembre2026 } from "./decembre-2026";

export const months: MonthCourse[] = [
  juin2026,
  juillet2026,
  aout2026,
  septembre2026,
  octobre2026,
  novembre2026,
  decembre2026,
];

export function getMonth(id: string): MonthCourse | undefined {
  return months.find((m) => m.id === id);
}

export function getWeek(monthId: string, weekId: string) {
  const m = getMonth(monthId);
  return m?.weeks.find((w) => w.id === weekId);
}
