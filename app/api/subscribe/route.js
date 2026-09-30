import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const e = String(email || "").trim().toLowerCase().slice(0, 200);
    if (!/^\S+@\S+\.\S+$/.test(e)) return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
    await prisma.subscriber.upsert({ where: { email: e }, update: {}, create: { email: e } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
