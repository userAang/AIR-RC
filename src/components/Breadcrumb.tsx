import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex items-center flex-wrap gap-1.5 text-sm text-air-muted">
      {items.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {c.href ? (
            <Link href={c.href} className="hover:text-air-cyan transition">
              {c.label}
            </Link>
          ) : (
            <span className="text-air-text font-medium">{c.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-air-border" />}
        </span>
      ))}
    </nav>
  );
}
