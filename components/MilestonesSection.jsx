"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MilestonesSection({ stats = [] }) {
  // Card 1: Free Eye Surgery — year-wise data (2016–2026)
  const eyeBars = [
    { label: "2016", count: 200 },
    { label: "2017", count: 300 },
    { label: "2018", count: 450 },
    { label: "2019", count: 250 },
    { label: "2020", count: 300 },
    { label: "2021", count: 200 },
    { label: "2022", count: 400 },
    { label: "2023", count: 450 },
    { label: "2024", count: 550 },
    { label: "2025", count: 500 },
    { label: "2026", count: 600 },
  ];

  // Card 2: Camps & Campaigns (linear scale)
  const campBars = [
    { label: "Rural Camps", count: 325 },
    { label: "Dental Camps", count: 18 },
    { label: "Cancer Screening", count: 47 },
    { label: "Tobacco Awareness", count: 62 },
    { label: "Health Check-up", count: 16 },
  ];

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const maxEye = Math.max(...eyeBars.map((b) => b.count));
  const maxCamp = Math.max(...campBars.map((b) => b.count));

  return (
    <section id="statics-section3" className="bg-[#2c3e50] py-16 text-white overflow-hidden">
      <div className="container-x mx-auto px-4">
        <h2
          className="text-center font-display text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          data-aos="fade-up"
        >
          Milestones Achieved
        </h2>
        <h3
          className="mx-auto mt-4 max-w-4xl text-center text-lg leading-relaxed text-[#f39c12] md:text-xl font-body"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Since 2016, Pritha Health Care has been fighting to protect vision and helping people with
          disabilities. As the top charity organisation in Moradabad, it has been transforming the
          lives of the marginalised communities to better, independent, happy, dignified and
          self-reliant.
        </h3>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Card 1: Free Eye Surgery (Year-wise) */}
          <div
            className="rounded-lg bg-white p-4 sm:p-6 text-center text-slate-800 shadow-md"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Free Eye Surgery &amp; Camps
            </h4>
            <div className="flex h-44 items-end justify-between gap-1 border-b border-slate-200 px-1 pb-2">
              {eyeBars.map((b) => (
                <div key={b.label} className="flex flex-1 flex-col items-center gap-1 h-full justify-end min-w-0">
                  <span className="text-[8px] font-semibold text-slate-600 truncate">
                    {b.count}
                  </span>
                  <div
                    className="w-full max-w-[28px] rounded-t bg-[#f39c12] transition-all duration-1000"
                    style={{ height: mounted ? `${Math.round((b.count / maxEye) * 100)}%` : "4px" }}
                  />
                  <span className="text-[8px] font-medium text-slate-500 text-center leading-tight">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#2c3e50]">4,200</p>
              <span className="mt-1 block text-sm sm:text-base font-bold text-slate-700">
                Free Eye Surgeries
              </span>
            </div>
          </div>

          {/* Card 2: Camps & Campaigns Conducted */}
          <div
            className="rounded-lg bg-white p-4 sm:p-6 text-center text-slate-800 shadow-md"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
              Camps &amp; Campaigns Conducted
            </h4>
            <div className="flex h-44 items-end justify-between gap-1 sm:gap-2 border-b border-slate-200 px-1 sm:px-2 pb-2">
              {campBars.map((b) => (
                <div key={b.label} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 truncate">
                    {b.count}
                  </span>
                  <div
                    className="w-full max-w-[42px] rounded-t bg-[#f39c12] transition-all duration-1000"
                    style={{ height: mounted ? `${Math.round((b.count / maxCamp) * 100)}%` : "4px" }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 text-center leading-tight line-clamp-2">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#2c3e50]">465</p>
              <span className="mt-1 block text-sm sm:text-base font-bold text-slate-700">
                Camps &amp; Campaigns
              </span>
            </div>
          </div>
        </div>

        {/* Support This Work button */}
        <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="300">
          <Link href="/donate" className="btn !px-8 !py-3 text-base font-bold shadow-lg hover:shadow-xl transition">
            Support This Work
          </Link>
        </div>
      </div>
    </section>
  );
}
