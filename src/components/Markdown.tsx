// Mini-renderer Markdown sans dépendance externe
// Supporte : titres, gras, italique, code inline, blocs de code, listes, liens, tableaux, retours à la ligne.

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function processInline(text: string): string {
  let out = escapeHtml(text);
  // code inline
  out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
  // bold
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // italic (avoid clashing with bold)
  out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  // links [txt](url)
  out = out.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  );
  return out;
}

export function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  const out: string[] = [];
  let inCode = false;
  let codeBuf: string[] = [];
  let inList = false;
  let listType: "ul" | "ol" | null = null;
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = () => {
    if (inList && listType) {
      out.push(`</${listType}>`);
      inList = false;
      listType = null;
    }
  };

  const flushTable = () => {
    if (inTable && tableRows.length > 0) {
      const [header, _sep, ...body] = tableRows;
      out.push("<table>");
      if (header) {
        out.push("<thead><tr>");
        for (const cell of header) out.push(`<th>${processInline(cell.trim())}</th>`);
        out.push("</tr></thead>");
      }
      if (body.length > 0) {
        out.push("<tbody>");
        for (const row of body) {
          out.push("<tr>");
          for (const cell of row) out.push(`<td>${processInline(cell.trim())}</td>`);
          out.push("</tr>");
        }
        out.push("</tbody>");
      }
      out.push("</table>");
      inTable = false;
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Bloc de code
    if (line.startsWith("```")) {
      if (inCode) {
        out.push(`<pre><code>${escapeHtml(codeBuf.join("\n"))}</code></pre>`);
        codeBuf = [];
        inCode = false;
      } else {
        flushList();
        flushTable();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeBuf.push(line);
      continue;
    }

    // Tableaux
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      flushList();
      const cells = line.trim().slice(1, -1).split("|");
      tableRows.push(cells);
      inTable = true;
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Titres
    if (line.startsWith("### ")) {
      flushList();
      out.push(`<h3>${processInline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      out.push(`<h2>${processInline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flushList();
      out.push(`<h1>${processInline(line.slice(2))}</h1>`);
      continue;
    }

    // Listes non ordonnées
    const ulMatch = line.match(/^(\s*)[-*] (.+)$/);
    if (ulMatch) {
      if (!inList || listType !== "ul") {
        flushList();
        out.push("<ul>");
        inList = true;
        listType = "ul";
      }
      out.push(`<li>${processInline(ulMatch[2])}</li>`);
      continue;
    }

    // Listes numérotées
    const olMatch = line.match(/^(\s*)\d+\. (.+)$/);
    if (olMatch) {
      if (!inList || listType !== "ol") {
        flushList();
        out.push("<ol>");
        inList = true;
        listType = "ol";
      }
      out.push(`<li>${processInline(olMatch[2])}</li>`);
      continue;
    }

    // Ligne vide → fermer la liste
    if (line.trim() === "") {
      flushList();
      out.push("");
      continue;
    }

    // Paragraphe
    flushList();
    out.push(`<p>${processInline(line)}</p>`);
  }

  flushList();
  flushTable();
  if (inCode && codeBuf.length > 0) {
    out.push(`<pre><code>${escapeHtml(codeBuf.join("\n"))}</code></pre>`);
  }

  return out.join("\n");
}

export function Markdown({ source }: { source: string }) {
  const html = renderMarkdown(source);
  return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
