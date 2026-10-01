"use client";
import { useState } from "react";

const presets = [500, 1000, 2500, 5000];
const purposes = ["Eye Care", "Disability Care"];

export default function DonateForm() {
  const [amount, setAmount] = useState(1000);
  const [state, setState] = useState({ status: "idle", msg: "" });

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "loading", msg: "" });
    try {
      const body = { ...Object.fromEntries(new FormData(form)), amount };
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not record pledge");
      // When a payment gateway is connected, redirect to data.paymentUrl here.
      if (data.paymentUrl) { window.location.href = data.paymentUrl; return; }
      form.reset();
      setState({ status: "ok", msg: `Thank you. Your pledge #${data.id} is recorded. Our team will contact you to complete the payment.` });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <fieldset>
        <legend className="label">Amount (INR)</legend>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button type="button" key={p} onClick={() => setAmount(p)} aria-pressed={amount === p}
              className={`rounded-md border px-4 py-2 font-semibold ${amount === p ? "border-ink bg-ink text-white" : "border-line bg-white"}`}>
              ₹{p.toLocaleString("en-IN")}
            </button>
          ))}
          <input type="number" min={10} value={amount} onChange={(e) => setAmount(Number(e.target.value))} aria-label="Custom amount" className="field !w-32" />
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className="label" htmlFor="d-name">Full name</label><input id="d-name" name="name" required className="field" /></div>
        <div><label className="label" htmlFor="d-email">Email</label><input id="d-email" name="email" type="email" required className="field" /></div>
        <div><label className="label" htmlFor="d-phone">Phone</label><input id="d-phone" name="phone" required className="field" /></div>
        <div><label className="label" htmlFor="d-pan">PAN (for 80G receipt)</label><input id="d-pan" name="pan" maxLength={10} className="field uppercase" /></div>
      </div>
      <div>
        <label className="label" htmlFor="d-purpose">I want to support</label>
        <select id="d-purpose" name="purpose" className="field">{purposes.map((p) => <option key={p}>{p}</option>)}</select>
      </div>
      <button className="btn" disabled={state.status === "loading"}>{state.status === "loading" ? "Please wait..." : `Donate ₹${Number(amount || 0).toLocaleString("en-IN")}`}</button>
      {state.msg && <p role="status" className={state.status === "ok" ? "text-green-700" : "text-red-700"}>{state.msg}</p>}
    </form>
  );
}
