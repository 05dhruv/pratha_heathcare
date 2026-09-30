"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", msg: "" });

  async function submit(e) {
    e.preventDefault();
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not subscribe");
      setEmail("");
      setState({ status: "ok", msg: "You're subscribed." });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <label htmlFor="sub-email" className="sr-only">Email address</label>
      <input id="sub-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="field text-slate-800" />
      <button className="btn w-full" disabled={state.status === "loading"}>{state.status === "loading" ? "Subscribing..." : "Subscribe"}</button>
      {state.msg && <p role="status" className={state.status === "ok" ? "text-green-300" : "text-red-300"}>{state.msg}</p>}
    </form>
  );
}
