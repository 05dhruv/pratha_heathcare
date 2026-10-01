"use client";
import { useEffect, useState } from "react";
import { blessings } from "@/lib/site";

export default function BlessingsCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    function updateVisible() {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 768) setVisibleCount(2);
      else if (window.innerWidth < 1024) setVisibleCount(3);
      else setVisibleCount(4);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, blessings.length - visibleCount);

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="bg-slate-50 py-12 border-t border-slate-200 overflow-hidden">
      <div className="container-x mx-auto px-4" data-aos="fade-up">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-slate-800 md:text-3xl">
              Blessings & Support
            </h2>
            <hr className="mt-2 h-1 w-20 bg-[#f39c12] border-0" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous blessings"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-100"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next blessings"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm hover:bg-slate-100"
            >
              ›
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
          >
            {blessings.map((b, i) => (
              <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2">
                <div className="overflow-hidden rounded-lg bg-white p-3 shadow hover:shadow-md transition">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.image}
                      alt={b.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-center text-xs font-semibold text-slate-700 line-clamp-2 min-h-[32px]">
                    {b.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
