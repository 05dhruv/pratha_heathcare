import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

const COOKIE = "kk_admin";
const MAX_AGE = 60 * 60 * 8; // 8 hours

function secret() {
  return process.env.AUTH_SECRET || "dev-secret-change-me";
}
function sign(value) {
  return crypto.createHmac("sha256", secret()).update(value).digest("hex");
}

export function passwordMatches(input) {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export function createSession() {
  const exp = Date.now() + MAX_AGE * 1000;
  const token = `${exp}.${sign(String(exp))}`;
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export function destroySession() {
  cookies().delete(COOKIE);
}

export function isAdmin() {
  const token = cookies().get(COOKIE)?.value;
  if (!token) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const good = sign(exp);
  return sig.length === good.length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(good));
}

export function requireAdmin() {
  if (!isAdmin()) redirect("/admin/login");
}
