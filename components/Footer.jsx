"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  async function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not subscribe");
      setStatus({ state: "success", msg: "Thank you for subscribing!" });
      setEmail("");
      setTimeout(() => {
        setModalOpen(false);
        setStatus({ state: "idle", msg: "" });
      }, 2000);
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  }

  return (
    <>
      <footer className="bg-[#2c3e50] text-white pt-10 pb-8" style={{ backgroundColor: "#2c3e50" }}>
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {/* 1. Quick */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <h5 className="font-sans font-bold text-white text-[18px] tracking-normal mb-0">
                Quick
              </h5>
              <div className="h-[1px] w-full bg-[#f39c12] opacity-30 mt-2 mb-3.5" />
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link href="/about" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/honors-and-awards" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    Honors and Awards
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    Impact Reports
                  </Link>
                </li>
                <li>
                  <Link href="/notifications" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    Notifications
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Services */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
              <h5 className="font-sans font-bold text-white text-[18px] tracking-normal mb-0">
                Services
              </h5>
              <div className="h-[1px] w-full bg-[#f39c12] opacity-30 mt-2 mb-3.5" />
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link href="/eyecare" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    Eye Care
                  </Link>
                </li>
                <li>
                  <Link href="/disability-care" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    Artificial Limbs Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/sambal-special-school" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    Special School
                  </Link>
                </li>
                <li>
                  <Link href="/screening-center" className="text-[#f39c12] hover:text-[#d68100] hover:underline transition">
                    Audio and Speech Therapy
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. Follow on Facebook */}
            <div className="col-span-12 sm:col-span-12 lg:col-span-4">
              <h5 className="font-sans font-bold text-white text-[18px] tracking-normal mb-0">
                Follow on Facebook
              </h5>
              <div className="h-[1px] w-full bg-[#f39c12] opacity-30 mt-2 mb-3.5" />
              
              {/* Exact Facebook Page Plugin Card matching the reference screenshot */}
              <div className="w-[340px] max-w-full h-[130px] bg-white p-3.5 rounded-[3px] shadow-sm flex flex-col justify-between select-none">
                <div className="flex items-start gap-3">
                  <div className="w-[50px] h-[50px] border border-[#e5e7eb] bg-[#fbf5eb] p-1 flex items-center justify-center flex-shrink-0 rounded-[2px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/img/logo/kalyanam_Karoti_logo_new_hi.webp"
                      alt={site.name}
                      className="w-[40px] h-[40px] object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <a
                      href="https://www.facebook.com/prathahealthcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#385898] hover:underline font-bold text-[14px] leading-tight block truncate"
                      title={site.name}
                    >
                      {site.name}
                    </a>
                    <span className="text-[#606770] text-[12px] block mt-0.5 font-normal">
                      213,782 followers
                    </span>
                  </div>
                </div>

                <div>
                  <a
                    href="https://www.facebook.com/prathahealthcare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[3px] border border-[#ccd0d5] bg-[#f5f6f7] hover:bg-[#ebedf0] px-2.5 py-1 text-[12px] font-bold text-[#4b4f56] transition"
                  >
                    <svg className="w-3.5 h-3.5 fill-[#1877f2]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Follow Page
                  </a>
                </div>
              </div>
            </div>

            {/* 4. Subscribe */}
            <div className="col-span-12 sm:col-span-12 lg:col-span-3">
              <h5 className="font-sans font-bold text-white text-[18px] tracking-normal mb-0">
                Subscribe
              </h5>
              <div className="h-[1px] w-full bg-[#f39c12] opacity-30 mt-2 mb-3.5" />

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="rounded-[4px] bg-[#f39c12] hover:bg-[#d68100] text-white px-5 py-2.5 text-[15px] font-normal transition shadow-sm active:scale-95 cursor-pointer block"
                style={{ backgroundColor: "#f39c12" }}
              >
                Subscribe To Get Updates
              </button>

              {/* Exact social icon row in pure white with exact spacing */}
              <div className="mt-4 flex items-center gap-4 text-white">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/prathahealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f39c12] transition inline-block"
                  title="Facebook"
                >
                  <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/PrathaHealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f39c12] transition inline-block"
                  title="Twitter"
                >
                  <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/prathahealthcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f39c12] transition inline-block"
                  title="Instagram"
                >
                  <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@PrathaHealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f39c12] transition inline-block"
                  title="YouTube"
                >
                  <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/prathahealthcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f39c12] transition inline-block"
                  title="LinkedIn"
                >
                  <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://in.pinterest.com/prathahealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#f39c12] transition inline-block"
                  title="Pinterest"
                >
                  <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.368-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar matching screenshot exactly */}
          <div className="mt-14 flex flex-col items-center justify-between gap-3 text-[12px] text-white sm:flex-row">
            <p className="text-white text-[12px] m-0">Copyright © 2020. All rights reserved</p>
            <div className="flex flex-wrap items-center gap-6 text-[12px]">
              <Link href="/privacy" className="text-white hover:text-[#f39c12] hover:underline transition">Privacy Policy</Link>
              <Link href="/terms" className="text-white hover:text-[#f39c12] hover:underline transition">Terms of Use</Link>
              <Link href="/refund-policy" className="text-white hover:text-[#f39c12] hover:underline transition">Refund</Link>
              <Link href="/sitemap.xml" className="text-white hover:text-[#f39c12] hover:underline transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Subscription Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl text-slate-800">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h5 className="font-bold text-[18px] text-slate-800">Email Subscription</h5>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="mb-4">
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:border-[#f39c12] focus:outline-none focus:ring-1 focus:ring-[#f39c12]"
                />
              </div>

              {status.msg && (
                <p className={`mb-3 text-sm ${status.state === "success" ? "text-green-600" : "text-red-600"}`}>
                  {status.msg}
                </p>
              )}

              <div className="flex items-center justify-end gap-2 border-t border-slate-200 pt-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded bg-[#6c757d] hover:bg-[#5a6268] px-4 py-1.5 text-sm font-medium text-white transition"
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="rounded bg-[#f39c12] hover:bg-[#d68100] px-4 py-1.5 text-sm font-medium text-white transition disabled:opacity-50"
                  style={{ backgroundColor: "#f39c12" }}
                >
                  {status.state === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
