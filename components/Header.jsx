"use client";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Top bar: Left Phone, Right Email (single line on all screens, mobile responsive) */}
      <div className="bg-deep text-xs sm:text-[13.5px] md:text-sm text-white border-b border-white/10 shadow-inner">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between py-2.5 sm:py-3 whitespace-nowrap overflow-x-auto no-scrollbar sm:overflow-visible gap-3 sm:gap-6">
          {/* Left: Phones */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[#f39c12] transition font-medium flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#f39c12] flex-shrink-0" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>{site.phone}</span>
            </a>

            <span className="text-white/40 font-light select-none text-xs sm:text-sm">|</span>

            <a
              href={`tel:${(site.phone2 || "+91 79003 51111").replace(/\s/g, "")}`}
              className="hover:text-[#f39c12] transition font-medium flex-shrink-0"
            >
              <span>{site.phone2 || "+91 79003 51111"}</span>
            </a>
          </div>

          {/* Right: Email */}
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#f39c12] transition font-medium flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#f39c12] flex-shrink-0" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="truncate">{site.email}</span>
          </a>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
        <Link href="/" className="flex items-center flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/ifqavhnr/image/upload/v1790839383/ChatGPT_Image_Oct_1_2026_12_47_11_PM.png"
            alt="Pritha Health Care Logo"
            className="h-14 sm:h-16 md:h-[72px] lg:h-[76px] w-auto object-contain transition-all"
            style={{ maxHeight: "78px", width: "auto" }}
          />
        </Link>

        <nav className="hidden items-center gap-1.5 lg:flex ml-auto" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="rounded px-3 py-2 font-medium text-slate-700 hover:text-ink transition flex items-center gap-1 text-[15px]" aria-haspopup="true">
                  {item.label} <span aria-hidden className="text-xs text-slate-400 group-hover:text-ink">▾</span>
                </button>
                <div className="invisible absolute left-0 top-full min-w-56 rounded-md border border-line bg-white py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href} className="block px-4 py-2 text-sm hover:bg-mist hover:text-ink transition">{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="rounded px-3 py-2 font-medium text-slate-700 hover:text-ink transition text-[15px]">{item.label}</Link>
            )
          )}
          <Link href="/donate" className="btn ml-4 !px-6 !py-2.5 shadow-sm hover:shadow transition">Donate Now</Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/blog" className="rounded-md border border-[#f39c12] text-[#f39c12] hover:bg-[#f39c12] hover:text-white px-2.5 py-1 text-xs sm:text-sm font-semibold transition">Blog</Link>
          <Link href="/donate" className="btn !px-3.5 !py-1.5 text-xs sm:text-sm">Donate</Link>
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="rounded-md border border-line p-2 text-slate-700 hover:text-ink hover:bg-slate-100 transition focus:outline-none"
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
        <nav className="border-t border-line bg-white lg:hidden" aria-label="Mobile">
          <ul className="w-full max-w-[1440px] mx-auto px-4 py-2">
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
