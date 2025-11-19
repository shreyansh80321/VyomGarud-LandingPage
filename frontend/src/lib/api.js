const API = import.meta.env.VITE_API_URL || "http://localhost:1337";

// fetch helper
export async function fetchAPI(path) {
  const prefix = path.startsWith("/") ? "" : "/";
  const url = `${API}${prefix}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API ${res.status}: ${text}`);
  }
  return res.json();
}

export function getFullMediaUrl(relative) {
  if (!relative) return null;
  if (relative.startsWith("http")) return relative;
  return `${API}${relative}`;
}
