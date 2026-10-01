"use client";
import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function MilestonesSection({ stats = [] }) {
  const cataractStat = stats.find(s => s.label.toLowerCase().includes("cataract")) || { value: 172755, label: "Cataract Operation" };
  const assistiveStat = stats.find(s => s.label.toLowerCase().includes("assistive") || s.label.toLowerCase().includes("mobility")) || { value: 89906, label: "Assistive Devices and Mobility Aids" };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const cataractBars = [
    { period: "1981-1990", count: 14385, percent: "17%" },
    { period: "1991-2000", count: 34175, percent: "40%" },
    { period: "2001-2010", count: 30845, percent: "36%" },
    { period: "2011-2020", count: 85168, percent: "100%" },
    { period: "2021-Cont.", count: 8182, percent: "10%" },
  ];

  const assistiveBars = [
    { type: "Wheel Chair", count: 13450, percent: "48%" },
    { type: "Tricycle", count: 15000, percent: "54%" },
    { type: "Calipers", count: 13690, percent: "49%" },
    { type: "Artificial Leg", count: 19850, percent: "71%" },
    { type: "Other", count: 27910, percent: "100%" },
  ];

  return (
    <section id="statics-section3" className="bg-[#2c3e50] py-16 text-white">
      <div className="container-x mx-auto px-4">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
          Milestones Achieved
        </h2>
        <h3 className="mx-auto mt-4 max-w-4xl text-center text-lg leading-relaxed text-[#f39c12] md:text-xl font-body">
          Since 1981, Pratha Healthcare has been fighting to protect vision and helping people with disabilities. As the top charity organisation in Moradabad, it has been transforming the lives of the marginalised communities to better, independent, happy, dignified and self-reliant.
        </h3>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Cataract Chart Box */}
          <div className="rounded-lg bg-white p-6 text-center text-slate-800 shadow-md">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Decadal Cataract Surgeries</h4>
            <div className="flex h-44 items-end justify-between gap-2 border-b border-slate-200 px-2 pb-2">
              {cataractBars.map((b) => (
                <div key={b.period} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[11px] font-semibold text-slate-600">{b.count.toLocaleString("en-IN")}</span>
                  <div
                    className="w-full max-w-[42px] rounded-t bg-[#f39c12] transition-all duration-1000"
                    style={{ height: mounted ? b.percent : "4px" }}
                  />
                  <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">{b.period}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-display text-4xl font-bold text-[#2c3e50]">
                {cataractStat.value.toLocaleString("en-IN")}
              </p>
              <span className="mt-1 block text-base font-bold text-slate-700">{cataractStat.label}</span>
            </div>
          </div>

          {/* Assistive Devices Chart Box */}
          <div className="rounded-lg bg-white p-6 text-center text-slate-800 shadow-md">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Mobility Aids Distribution</h4>
            <div className="flex h-44 items-end justify-between gap-2 border-b border-slate-200 px-2 pb-2">
              {assistiveBars.map((b) => (
                <div key={b.type} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end">
                  <span className="text-[11px] font-semibold text-slate-600">{b.count.toLocaleString("en-IN")}</span>
                  <div
                    className="w-full max-w-[42px] rounded-t bg-[#f39c12] transition-all duration-1000"
                    style={{ height: mounted ? b.percent : "4px" }}
                  />
                  <span className="text-[10px] font-medium text-slate-500 text-center leading-tight line-clamp-1">{b.type}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-display text-4xl font-bold text-[#2c3e50]">
                {assistiveStat.value.toLocaleString("en-IN")}
              </p>
              <span className="mt-1 block text-base font-bold text-slate-700">{assistiveStat.label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
