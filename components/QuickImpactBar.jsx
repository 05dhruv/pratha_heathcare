"use client";
import { useState } from "react";
import Link from "next/link";

const donationOptions = [
  {
    amount: 1000,
    label: "₹1,000",
    title: "Diagnostics & Meds",
    impact: "Sponsors free comprehensive eye examinations, diagnostic tests, and prescription medicines for 2 rural patients.",
  },
  {
    amount: 1500,
    label: "₹1,500",
    title: "1 Cataract Surgery",
    impact: "Covers 1 complete free cataract surgery including intraocular lens (IOL), hospital stay, and post-operative care.",
    recommended: true,
  },
  {
    amount: 2500,
    label: "₹2,500",
    title: "Mobility Aid / Caliper",
    impact: "Provides custom-fit crutches, calipers, or orthotic mobility assistance for an amputee or differently-abled person.",
  },
  {
    amount: 5000,
    label: "₹5,000",
    title: "Rural Health Camp",
    impact: "Funds 1 full-day mobile clinic camp with doctor consultations, BP/sugar checks, and free medicines in a remote village.",
  },
];

export default function QuickImpactBar() {
  const [selected, setSelected] = useState(donationOptions[1]);
  const [customAmount, setCustomAmount] = useState("");

  const activeAmount = customAmount ? Number(customAmount) : selected.amount;

  return (
    <section className="bg-white border-b border-slate-200/90 py-6 sm:py-8 lg:py-9 overflow-hidden" data-aos="fade-up">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-2 w-2 rounded-full bg-[#dc2626] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626]">
                Direct Community Contribution
              </span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#122336]">
              Support Our Healthcare Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-body mt-0.5">
              Every rupee donated directly provides free surgeries, artificial limbs, and rural healthcare.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-center bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2 text-xs text-slate-700">
            <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>50% Tax Exemption</strong> under Section 80G • Instant Receipt
            </span>
          </div>
        </div>

        {/* Donation Selector Grid */}
        <div className="mt-5 sm:mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Preset Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 flex-1">
            {donationOptions.map((opt) => {
              const isSelected = !customAmount && selected.amount === opt.amount;
              return (
                <button
                  key={opt.amount}
                  type="button"
                  onClick={() => {
                    setSelected(opt);
                    setCustomAmount("");
                  }}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                    isSelected
                      ? "bg-[#122336] text-white border-[#122336] shadow-sm ring-2 ring-[#122336]/20"
                      : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base sm:text-xl font-bold">
                      {opt.label}
                    </span>
                    {opt.recommended && (
                      <span
                        className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          isSelected
                            ? "bg-[#dc2626] text-white"
                            : "bg-red-100 text-[#dc2626]"
                        }`}
                      >
                        Popular
                      </span>
                    )}
                  </div>
                  <span
                    className={`block text-[11px] sm:text-xs mt-1 font-medium truncate ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {opt.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom Amount & Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-44">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                ₹
              </span>
              <input
                type="number"
                placeholder="Other Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full pl-8 pr-3 py-2.5 sm:py-3 rounded-xl border border-slate-300 text-sm text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition"
              />
            </div>

            <Link
              href={`/donate?amount=${activeAmount || 1000}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] active:scale-95 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold shadow-md shadow-red-900/20 hover:shadow-red-900/40 transition-all flex-shrink-0"
            >
              <span>Donate ₹{(activeAmount || 1000).toLocaleString("en-IN")}</span>
              <span className="text-base">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Dynamic Impact Note */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="font-bold text-[#122336] flex-shrink-0">
            How your contribution helps:
          </span>
          <span className="font-body text-slate-600">
            {customAmount
              ? `Your contribution of ₹${Number(customAmount).toLocaleString("en-IN")} directly supports ongoing patient surgeries and mobile health camp operations.`
              : selected.impact}
          </span>
        </div>
      </div>
    </section>
  );
}
