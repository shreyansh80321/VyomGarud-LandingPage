export function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function blocksToHtml(blocks) {
  if (!blocks) return "";
  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        const text = (block.children || []).map((c) => c.text || "").join("");
        return `<p>${escapeHtml(text)}</p>`;
      }
      if (block.type === "heading") {
        const level = block.level || 2;
        const text = (block.children || []).map((c) => c.text || "").join("");
        return `<h${level}>${escapeHtml(text)}</h${level}>`;
      }
      return "";
    })
    .join("");
}
