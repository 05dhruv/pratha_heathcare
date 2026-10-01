"use client";
import { useEffect, useState } from "react";

export default function HeroSlider({ slides = [] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  if (!slides || !slides.length) return null;
  const current = slides[i];

  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n + 1) % slides.length);

  return (
    <section
      id="carousel-section1"
      className="relative w-full bg-[#1a252f] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Home Banner Carousel"
    >
      <div className="relative w-full overflow-hidden select-none">
        {/* Aspect ratio banner container matching kkm.org.in */}
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[640px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current.id || i}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />

          {/* Bottom Title Caption Bar (exact matching kkm.org.in .titlecaption) */}
          <div className="absolute inset-x-0 bottom-0 bg-[#2c3e50]/80 py-3.5 px-6 backdrop-blur-[2px] transition-all">
            <div className="container-x mx-auto">
              <h4 className="font-display text-white text-base sm:text-lg md:text-xl font-medium tracking-wide">
                {current.title}
              </h4>
            </div>
          </div>
        </div>

        {/* Carousel Controls: Prev / Next buttons matching kkm.org.in */}
        <button
          onClick={prev}
          aria-label="Previous Slide"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition shadow-lg focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next Slide"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition shadow-lg focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators at bottom matching kkm.org.in */}
        <div className="absolute bottom-14 inset-x-0 flex justify-center gap-2 z-10">
          {slides.map((sl, index) => (
            <button
              key={sl.id || index}
              onClick={() => setI(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === i ? "w-8 bg-[#f39c12]" : "w-3 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

