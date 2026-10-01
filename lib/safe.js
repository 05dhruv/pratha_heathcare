// Lets public pages render (with fallback data) even if the DB is not reachable yet.
export async function safe(fn, fallback) {
  try {
    if (!process.env.DATABASE_URL) return fallback;
    return await fn();
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      // Clean single-line notice instead of blowing up the terminal
      console.warn("[Notice] Database is not connected, using fallback content.");
    }
    return fallback;
  }
}

export function formatDate(d) {
  return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function youtubeId(url = "") {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}
