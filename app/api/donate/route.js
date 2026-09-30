import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

// Records a pledge as PENDING. To take real payments, create a Razorpay/PayU/Cashfree order here,
// store its id in gatewayRef, return { paymentUrl }, and mark PAID from the gateway webhook.
export async function POST(req) {
  try {
    const d = await req.json();
    const amount = Math.round(Number(d.amount));
    const name = clip(d.name, 120), email = clip(d.email, 200), phone = clip(d.phone, 20);
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !phone) {
      return NextResponse.json({ error: "Please fill in name, valid email and phone." }, { status: 400 });
    }
    if (!Number.isFinite(amount) || amount < 10 || amount > 10000000) {
      return NextResponse.json({ error: "Enter an amount of at least ₹10." }, { status: 400 });
    }
    const pan = clip(d.pan, 10).toUpperCase();
    if (pan && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
      return NextResponse.json({ error: "PAN format looks wrong." }, { status: 400 });
    }
    const row = await prisma.donation.create({
      data: { name, email, phone, amount, pan: pan || null, purpose: clip(d.purpose, 80) || "Where needed most" },
    });
    return NextResponse.json({ ok: true, id: row.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
