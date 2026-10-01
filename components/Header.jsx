"use client";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-deep text-xs text-white/90">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-1.5">
          <div className="flex gap-4">
            {site.social.slice(0, 3).map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-marigold">{s.name}</a>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={`mailto:${site.email}?subject=I Want to Support your Organisation`} className="hover:text-marigold">{site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-marigold">{site.phone}</a>
            <Link href="/blog" className="hover:text-marigold">Blog</Link>
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/logo/KalyanamKarotiOfficialLogo.webp"
            alt="Pratha Healthcare Logo"
            className="h-12 w-auto object-contain md:h-14"
            style={{ maxHeight: "56px", width: "auto" }}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="rounded px-3 py-2 font-medium text-slate-700 hover:text-ink" aria-haspopup="true">
                  {item.label} <span aria-hidden>▾</span>
                </button>
                <div className="invisible absolute left-0 top-full min-w-56 rounded-md border border-line bg-white py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block px-4 py-2 text-sm hover:bg-mist hover:text-ink">{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="rounded px-3 py-2 font-medium text-slate-700 hover:text-ink">{item.label}</Link>
            )
          )}
          <Link href="/donate" className="btn ml-3">Donate Now</Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/donate" className="btn !px-3 !py-1.5 text-sm">Donate</Link>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="rounded border border-line px-3 py-1.5 text-ink"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white lg:hidden" aria-label="Mobile">
          <ul className="container-x py-2">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-line/60 last:border-0">
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-3 font-medium"
                      onClick={() => setSub(sub === item.label ? null : item.label)}
                      aria-expanded={sub === item.label}
                    >
                      {item.label} <span aria-hidden>{sub === item.label ? "−" : "+"}</span>
                    </button>
                    {sub === item.label && (
                      <ul className="pb-2 pl-4">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-slate-600">{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 font-medium">{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
