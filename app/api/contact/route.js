import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

export async function POST(req) {
  try {
    const d = await req.json();
    const name = clip(d.name, 120), email = clip(d.email, 200), body = clip(d.body, 5000);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !body) {
      return NextResponse.json({ error: "Please fill in name, a valid email and message." }, { status: 400 });
    }
    await prisma.message.create({ data: { name, email, body, phone: clip(d.phone, 30) || null, subject: clip(d.subject, 200) || null } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
