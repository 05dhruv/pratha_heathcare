"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ status: "idle", msg: "" });

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ status: "loading", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send message");
      form.reset();
      setState({ status: "ok", msg: "Thank you. We'll get back to you soon." });
    } catch (err) {
      setState({ status: "error", msg: err.message });
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className="label" htmlFor="c-name">Name</label><input id="c-name" name="name" required className="field" /></div>
        <div><label className="label" htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" required className="field" /></div>
        <div><label className="label" htmlFor="c-phone">Phone</label><input id="c-phone" name="phone" className="field" /></div>
        <div><label className="label" htmlFor="c-subject">Subject</label><input id="c-subject" name="subject" className="field" /></div>
      </div>
      <div><label className="label" htmlFor="c-body">Message</label><textarea id="c-body" name="body" rows={5} required className="field" /></div>
      <button className="btn" disabled={state.status === "loading"}>{state.status === "loading" ? "Sending..." : "Send message"}</button>
      {state.msg && <p role="status" className={state.status === "ok" ? "text-green-700" : "text-red-700"}>{state.msg}</p>}
    </form>
  );
}
