// Lets public pages render (with empty data) even if the DB is not reachable yet.
export async function safe(fn, fallback) {
  try {
    return await fn();
  } catch (e) {
    console.error("[db]", e.message);
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
