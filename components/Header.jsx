"use client";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
      {/* Top bar: Single row with breakers on mobile, separated on desktop */}
      <div className="bg-[#122336] text-[10px] sm:text-xs md:text-sm text-white border-b border-white/10 shadow-inner">
        <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8 flex flex-row items-center justify-start sm:justify-between py-1.5 sm:py-2 overflow-x-auto scrollbar-none whitespace-nowrap gap-2 sm:gap-3">
          {/* Phones */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1 sm:gap-1.5 hover:text-[#dc2626] transition font-medium"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-[#dc2626] flex-shrink-0" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>{site.phone}</span>
            </a>

            <span className="text-white/40 font-light select-none text-[10px] sm:text-xs">|</span>

            <a
              href={`tel:${(site.phone2 || "+91 79003 51111").replace(/\s/g, "")}`}
              className="flex items-center gap-1 sm:gap-1.5 hover:text-[#dc2626] transition font-medium"
            >
              <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-[#dc2626] flex-shrink-0" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>{site.phone2 || "+91 79003 51111"}</span>
            </a>
          </div>

          {/* Breaker visible on mobile */}
          <span className="text-white/40 font-light select-none text-[10px] sm:text-xs flex-shrink-0 sm:hidden">|</span>

          {/* Email */}
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1 sm:gap-1.5 hover:text-[#dc2626] transition font-medium text-white/90 hover:text-white flex-shrink-0"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-[#dc2626] flex-shrink-0" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>{site.email}</span>
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between py-2 sm:py-2.5">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group min-w-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpg"
            alt="Pritha Health Care"
            className="h-10 sm:h-12 md:h-[58px] w-auto object-contain rounded-md shadow-sm border border-slate-200/70 transition-transform group-hover:scale-105 flex-shrink-0"
            style={{ maxHeight: "62px", width: "auto" }}
          />
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-display font-bold text-sm sm:text-lg md:text-2xl text-[#122336] tracking-tight leading-none truncate">
              PRITHA HEALTH CARE
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1.5 lg:flex ml-auto" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="rounded px-3 py-2 font-medium text-slate-700 hover:text-[#dc2626] transition flex items-center gap-1 text-[15px]" aria-haspopup="true">
                  {item.label} <span aria-hidden className="text-xs text-slate-400 group-hover:text-[#dc2626]">▾</span>
                </button>
                <div className="invisible absolute left-0 top-full min-w-56 rounded-md border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block px-4 py-2 text-sm hover:bg-[#f0f8f4] hover:text-[#dc2626] transition">{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="rounded px-3 py-2 font-medium text-slate-700 hover:text-[#dc2626] transition text-[15px]">{item.label}</Link>
            )
          )}
          <Link href="/csr-funding" className="btn ml-3 !px-5 !py-2.5 text-sm shadow-sm hover:shadow transition">CSR Funding</Link>
          <Link href="/donate" className="btn ml-2 !px-5 !py-2.5 text-sm shadow-sm hover:shadow transition">Donate Now</Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden flex-shrink-0">
          <Link href="/csr-funding" className="hidden sm:inline-flex btn !px-2.5 !py-1.5 text-xs">CSR Funding</Link>
          <Link href="/donate" className="btn !px-2.5 sm:!px-3 !py-1.5 text-xs">Donate</Link>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="rounded-md border border-slate-200 p-1.5 sm:p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition focus:outline-none"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden" aria-label="Mobile">
          <ul className="w-full max-w-[1440px] mx-auto px-4 py-2">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-slate-100 last:border-0">
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-3 font-medium text-slate-800 hover:text-[#dc2626]"
                      onClick={() => setSub(sub === item.label ? null : item.label)}
                      aria-expanded={sub === item.label}
                    >
                      {item.label} <span aria-hidden>{sub === item.label ? "−" : "+"}</span>
                    </button>
                    {sub === item.label && (
                      <ul className="pb-2 pl-4 space-y-1">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} onClick={() => setOpen(false)} className="block py-2 text-slate-600 hover:text-[#dc2626] transition">{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-slate-800 hover:text-[#dc2626] transition">{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="p-4 border-t border-slate-100 flex flex-col gap-2 sm:hidden bg-slate-50/70">
            <Link href="/csr-funding" onClick={() => setOpen(false)} className="btn !w-full !py-2 text-center text-xs">
              CSR Funding
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
