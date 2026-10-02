"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const tiers = [
  {
    level: "Level 1 • Base Care",
    badgeColor: "text-emerald-600",
    borderTop: "border-emerald-500",
    title: "Primary Care Health Clinic",
    desc: "Established at every 5,000 rural population to deliver 24/7 first-aid, essential medicines, outpatient consultation, and emergency diagnostic triage.",
    footer: "1 Clinic : 5,000 Rural Residents",
    footerColor: "text-emerald-700",
    delay: 100,
  },
  {
    level: "Level 2 • Intermediate Care",
    badgeColor: "text-blue-600",
    borderTop: "border-blue-600",
    title: "Community Health Care Centre",
    desc: "Established for every 100,000 rural population, equipped with specialized dental care, eye care units, maternal wards, and day-care surgical facilities.",
    footer: "1 Centre : 100,000 Rural Residents",
    footerColor: "text-blue-700",
    delay: 200,
  },
  {
    level: "Level 3 • Super Specialty",
    badgeColor: "text-[#dc2626]",
    borderTop: "border-[#dc2626]",
    title: "Tertiary Health Care Centre",
    desc: "State-of-the-art super-specialty hospital for every 1,000,000 population, performing advanced cataract microsurgeries, prosthetic fittings, and complex inpatient rehabilitation.",
    footer: "1 Centre : 1,000,000 Population",
    footerColor: "text-[#dc2626]",
    delay: 300,
  },
];

export default function PyramidalModelSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-swipe every 3.5 seconds
  useEffect(() => {
    if (!emblaApi || paused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);
    return () => clearInterval(timer);
  }, [emblaApi, paused]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div
      className="mt-20 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-3xl">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full mb-2">
          Sustainable Infrastructure Vision
        </span>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#122336]">
          The Pyramidal Model of Rural Healthcare
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-body">
          While temporary health camps are efficient for initial screening, they cannot deliver lasting preventive and curative solutions on their own. Therefore, <strong>Pritha Health Care Charitable Trust is determined to develop permanent healthcare infrastructure</strong> across rural India through a structured pyramidal model:
        </p>
      </div>

      {/* Desktop View: Clean 3-column Grid (as requested: desktop aiasde hii) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mt-8">
        {tiers.map((t) => (
          <div
            key={t.level}
            data-aos="fade-up"
            data-aos-delay={t.delay}
            className={`rounded-2xl bg-white p-6 border-t-4 ${t.borderTop} shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition`}
          >
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${t.badgeColor}`}>
                {t.level}
              </span>
              <h3 className="font-display text-xl font-bold text-[#122336] mt-1">
                {t.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-body">
                {t.desc}
              </p>
            </div>
            <div className={`mt-5 pt-3 border-t border-slate-100 text-xs font-semibold ${t.footerColor}`}>
              {t.footer}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View: Single Card (100% width) with Auto-Swipe Carousel */}
      <div
        className="block md:hidden mt-6"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Top Counter Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-3 px-1">
          <span className="font-bold text-[#122336] text-xs">
            {tiers[selectedIndex]?.level || "Pyramidal Level"}
          </span>
          <span className="text-[11px] text-slate-400 font-bold bg-white px-2 py-0.5 rounded-full border border-slate-200">
            {selectedIndex + 1} / {tiers.length}
          </span>
        </div>

        {/* Embla Viewport - Exactly 1 card visible */}
        <div className="overflow-hidden w-full rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {tiers.map((t) => (
              <div
                key={t.level}
                className="flex-[0_0_100%] min-w-0"
              >
                <div
                  className={`h-full rounded-2xl bg-white p-6 border-t-4 ${t.borderTop} shadow-sm border border-slate-200/80 flex flex-col justify-between`}
                >
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${t.badgeColor}`}>
                      {t.level}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[#122336] mt-1">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed font-body">
                      {t.desc}
                    </p>
                  </div>
                  <div className={`mt-6 pt-3 border-t border-slate-100 text-xs font-bold ${t.footerColor}`}>
                    {t.footer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embla Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-[#122336]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
