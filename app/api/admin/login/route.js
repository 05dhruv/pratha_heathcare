import { NextResponse } from "next/server";
import { passwordMatches, createSession } from "@/lib/auth";

export async function POST(req) {
  const { password } = await req.json().catch(() => ({}));
  if (!passwordMatches(password)) return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  createSession();
  return NextResponse.json({ ok: true });
}
