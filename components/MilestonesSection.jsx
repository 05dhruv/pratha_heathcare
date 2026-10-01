"use client";
import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function MilestonesSection({ stats = [] }) {
  const cataractBars = [
    { period: "2016-1990", count: 16520 },
    { period: "1991-2000", count: 38940 },
    { period: "2001-2010", count: 45310 },
    { period: "2011-2020", count: 92680 },
    { period: "2021-Cont.", count: 18750 },
  ];

  const assistiveBars = [
    { type: "Wheel Chair", count: 16850 },
    { type: "Tricycle", count: 19400 },
    { type: "Calipers", count: 15920 },
    { type: "Artificial Leg", count: 24780 },
    { type: "Other", count: 33250 },
  ];

  const totalCataract = cataractBars.reduce((sum, b) => sum + b.count, 0);
  const totalAssistive = assistiveBars.reduce((sum, b) => sum + b.count, 0);

  const cataractStat = stats.find(s => s.label.toLowerCase().includes("cataract")) || { value: totalCataract, label: "Cataract Operation" };
  const assistiveStat = stats.find(s => s.label.toLowerCase().includes("assistive") || s.label.toLowerCase().includes("mobility")) || { value: totalAssistive, label: "Assistive Devices and Mobility Aids" };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const maxCataract = Math.max(...cataractBars.map((b) => b.count));
  const maxAssistive = Math.max(...assistiveBars.map((b) => b.count));

  return (
    <section id="statics-section3" className="bg-[#2c3e50] py-16 text-white overflow-hidden">
      <div className="container-x mx-auto px-4">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-white md:text-4xl" data-aos="fade-up">
          Milestones Achieved
        </h2>
        <h3 className="mx-auto mt-4 max-w-4xl text-center text-lg leading-relaxed text-[#f39c12] md:text-xl font-body" data-aos="fade-up" data-aos-delay="100">
          Since 2016, Pritha Health Care has been fighting to protect vision and helping people with disabilities. As the top charity organisation in Moradabad, it has been transforming the lives of the marginalised communities to better, independent, happy, dignified and self-reliant.
        </h3>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Cataract Chart Box */}
          <div className="rounded-lg bg-white p-4 sm:p-6 text-center text-slate-800 shadow-md" data-aos="fade-right" data-aos-delay="200">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Decadal Cataract Surgeries</h4>
            <div className="flex h-44 items-end justify-between gap-1 sm:gap-2 border-b border-slate-200 px-1 sm:px-2 pb-2">
              {cataractBars.map((b) => (
                <div key={b.period} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 truncate">{b.count.toLocaleString("en-IN")}</span>
                  <div
                    className="w-full max-w-[42px] rounded-t bg-[#f39c12] transition-all duration-1000"
                    style={{ height: mounted ? `${Math.round((b.count / maxCataract) * 100)}%` : "4px" }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 whitespace-nowrap">{b.period}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#2c3e50]">
                {cataractStat.value.toLocaleString("en-IN")}
              </p>
              <span className="mt-1 block text-sm sm:text-base font-bold text-slate-700">{cataractStat.label}</span>
            </div>
          </div>

          {/* Assistive Devices Chart Box */}
          <div className="rounded-lg bg-white p-4 sm:p-6 text-center text-slate-800 shadow-md" data-aos="fade-left" data-aos-delay="200">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">Mobility Aids Distribution</h4>
            <div className="flex h-44 items-end justify-between gap-1 sm:gap-2 border-b border-slate-200 px-1 sm:px-2 pb-2">
              {assistiveBars.map((b) => (
                <div key={b.type} className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 truncate">{b.count.toLocaleString("en-IN")}</span>
                  <div
                    className="w-full max-w-[42px] rounded-t bg-[#f39c12] transition-all duration-1000"
                    style={{ height: mounted ? `${Math.round((b.count / maxAssistive) * 100)}%` : "4px" }}
                  />
                  <span className="text-[9px] sm:text-[10px] font-medium text-slate-500 text-center leading-tight line-clamp-1">{b.type}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#2c3e50]">
                {assistiveStat.value.toLocaleString("en-IN")}
              </p>
              <span className="mt-1 block text-sm sm:text-base font-bold text-slate-700">{assistiveStat.label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
