"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

function useInView({ threshold = 0.1, rootMargin = "0px 0px -20px 0px" } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if already in viewport on mount (e.g. mobile reload or above fold)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsInView(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin]);

  return [ref, isInView];
}

function AnimatedCounter({ value, isVisible, duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    let startTime = null;
    let frameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic curve for smooth realistic deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [value, isVisible, duration]);

  return <>{count.toLocaleString("en-IN")}</>;
}

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

  // Independent in-view observers for each card so on mobile each card animates right when scrolled to!
  const [card1Ref, card1Visible] = useInView({ threshold: 0.1 });
  const [card2Ref, card2Visible] = useInView({ threshold: 0.1 });

  const maxEye = Math.max(...eyeBars.map((b) => b.count));
  const maxCamp = Math.max(...campBars.map((b) => b.count));

  return (
    <section
      id="statics-section3"
      className="bg-[#122336] py-16 text-white overflow-hidden border-y border-white/10"
    >
      <div className="container-x mx-auto px-4">
        <h2
          className="text-center font-display text-3xl font-bold uppercase tracking-wider text-white md:text-4xl"
          data-aos="fade-up"
        >
          Milestones Achieved
        </h2>
        <h3
          className="mx-auto mt-4 max-w-4xl text-center text-lg leading-relaxed text-[#9ecbb7] md:text-xl font-body"
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
            ref={card1Ref}
            className="rounded-xl bg-white p-4 sm:p-7 text-center text-slate-800 shadow-xl border border-slate-100 flex flex-col justify-between"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              <h4 className="mb-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                Free Eye Surgery &amp; Camps
              </h4>
              <div className="flex h-44 sm:h-48 items-end justify-between gap-1 sm:gap-1.5 border-b border-slate-200 px-1 pb-2">
                {eyeBars.map((b, idx) => {
                  const targetHeight = Math.round((b.count / maxEye) * 100);
                  const delayMs = idx * 50 + 100;
                  return (
                    <div
                      key={b.label}
                      className="flex flex-1 flex-col items-center gap-1 h-full justify-end min-w-0"
                    >
                      {/* Count label above bar */}
                      <span
                        className="text-[8px] sm:text-[10px] font-bold text-slate-700 truncate transition-all duration-700"
                        style={{
                          opacity: card1Visible ? 1 : 0,
                          transform: card1Visible ? "translateY(0)" : "translateY(6px)",
                          transitionDelay: `${delayMs + 250}ms`,
                        }}
                      >
                        {b.count}
                      </span>
                      {/* Animated bottom-to-up bar */}
                      <div
                        className="w-full max-w-[28px] rounded-t-md bg-[#dc2626] shadow-sm hover:brightness-110 will-change-[height]"
                        style={{
                          height: card1Visible ? `${targetHeight}%` : "0%",
                          transition: `height 850ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
                        }}
                      />
                      {/* Year label below bar */}
                      <span className="text-[8px] sm:text-[10px] font-semibold text-slate-500 text-center leading-tight mt-1">
                        {b.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Number Counter */}
            <div className="mt-6 sm:mt-7 pt-4 border-t border-slate-100">
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#dc2626] tracking-tight">
                <AnimatedCounter value={4200} isVisible={card1Visible} duration={1800} />
              </p>
              <span className="mt-1 block text-sm sm:text-base font-bold text-slate-700">
                Free Eye Surgeries
              </span>
            </div>
          </div>

          {/* Card 2: Camps & Campaigns Conducted */}
          <div
            ref={card2Ref}
            className="rounded-xl bg-white p-4 sm:p-7 text-center text-slate-800 shadow-xl border border-slate-100 flex flex-col justify-between"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div>
              <h4 className="mb-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                Camps &amp; Campaigns Conducted
              </h4>
              <div className="flex h-44 sm:h-48 items-end justify-between gap-1 sm:gap-3 border-b border-slate-200 px-1 sm:px-3 pb-2">
                {campBars.map((b, idx) => {
                  const targetHeight = Math.round((b.count / maxCamp) * 100);
                  const delayMs = idx * 80 + 100;
                  return (
                    <div
                      key={b.label}
                      className="flex flex-1 flex-col items-center gap-1.5 h-full justify-end min-w-0"
                    >
                      {/* Count label above bar */}
                      <span
                        className="text-[10px] sm:text-xs font-bold text-slate-700 truncate transition-all duration-700"
                        style={{
                          opacity: card2Visible ? 1 : 0,
                          transform: card2Visible ? "translateY(0)" : "translateY(6px)",
                          transitionDelay: `${delayMs + 250}ms`,
                        }}
                      >
                        {b.count}
                      </span>
                      {/* Animated bottom-to-up bar */}
                      <div
                        className="w-full max-w-[44px] rounded-t-md bg-[#dc2626] shadow-sm hover:brightness-110 will-change-[height]"
                        style={{
                          height: card2Visible ? `${targetHeight}%` : "0%",
                          transition: `height 900ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
                        }}
                      />
                      {/* Camp type label below bar */}
                      <span
                        title={b.label}
                        className="text-[9px] sm:text-[11px] font-semibold text-slate-600 text-center leading-tight line-clamp-2 mt-1"
                      >
                        {b.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Number Counter */}
            <div className="mt-6 sm:mt-7 pt-4 border-t border-slate-100">
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#dc2626] tracking-tight">
                <AnimatedCounter value={465} isVisible={card2Visible} duration={1800} />
              </p>
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
