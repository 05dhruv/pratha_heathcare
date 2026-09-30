"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true); setErr("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: new FormData(e.currentTarget).get("password") }),
    });
    setBusy(false);
    if (res.ok) { router.push("/admin"); router.refresh(); }
    else setErr("Wrong password.");
  }

  return (
    <div className="container-x flex min-h-[60vh] items-center justify-center py-16">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4 rounded-lg border border-line p-8">
        <h1 className="font-display text-2xl font-bold">Admin login</h1>
        <div>
          <label htmlFor="pw" className="label">Password</label>
          <input id="pw" name="password" type="password" required autoFocus className="field" />
        </div>
        <button className="btn-dark w-full" disabled={busy}>{busy ? "Checking..." : "Log in"}</button>
        {err && <p role="alert" className="text-red-700">{err}</p>}
      </form>
    </div>
  );
}
