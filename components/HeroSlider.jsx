"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSlider({ slides = [] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        const aos = AOS.default || AOS;
        aos.refresh();
      });
    }
  }, [i]);

  if (!slides || !slides.length) return null;
  const current = slides[i];

  const prev = () => setI((n) => (n === 0 ? slides.length - 1 : n - 1));
  const next = () => setI((n) => (n + 1) % slides.length);

  return (
    <section
      id="carousel-section1"
      className="relative w-full bg-[#0b1624] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Pratha Healthcare Mission Hero Banner"
    >
      <div className="relative w-full h-[420px] sm:h-[520px] md:h-[620px] lg:h-[700px] select-none">
        {/* Background Image Carousel with smooth fade */}
        <div className="absolute inset-0" data-aos="fade" data-aos-duration="900">
          {slides.map((sl, index) => {
            const isActive = index === i;
            return (
              <div
                key={sl.id || index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sl.image}
                  alt={sl.title}
                  className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                {/* Cinematic Dual Gradient Overlay: Clear top on mobile to show faces, rich dark bottom for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1624] via-[#0b1624]/85 via-50% to-transparent sm:via-[#0b1624]/65 sm:to-black/30 lg:bg-gradient-to-r lg:from-[#0b1624]/95 lg:via-[#0b1624]/80 lg:to-black/30" />
              </div>
            );
          })}
        </div>

        {/* Hero Content Overlay: Placed at the bottom on mobile (justify-end) */}
        {/* Animated: Image appears first (0ms), then Text glides in with staggered delay */}
        <div className="relative z-20 h-full w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end sm:justify-center pb-9 sm:pb-0 pointer-events-none">
          <div
            key={i}
            className="max-w-2xl lg:max-w-3xl pointer-events-auto"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            {/* Live Trust Pill */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="hero-animate-badge inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/15 px-2.5 sm:px-3.5 py-0.5 sm:py-1.5 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-medium mb-2 sm:mb-4 shadow-sm max-w-full"
            >
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#10b981] animate-pulse flex-shrink-0" />
              <span className="text-[#34d399] font-bold tracking-wide uppercase truncate">
                {current.badge || "Healthcare NGO"}
              </span>
              <span className="text-white/40 hidden sm:inline">|</span>
              <span className="text-white/90 hidden sm:inline">
                80G Tax Exempted
              </span>
            </div>

            {/* Main Headline (Clean bottom aligned) */}
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="hero-animate-title font-display text-lg sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight drop-shadow-md line-clamp-2 sm:line-clamp-none"
            >
              {current.title}
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="680"
              className="hero-animate-sub mt-1.5 sm:mt-4 text-xs sm:text-base md:text-lg text-slate-200/90 leading-relaxed font-body max-w-2xl drop-shadow line-clamp-2 sm:line-clamp-none"
            >
              {current.subtitle ||
                "Devoted to improving the quality of life of marginalized communities in Moradabad & Western UP through compassionate eye care, disability rehabilitation, and rural outreach."}
            </p>

            {/* Call To Action Buttons (Donate is HIDDEN on mobile) */}
            <div
              data-aos="fade-up"
              data-aos-delay="850"
              className="hero-animate-actions mt-3 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Desktop-only Donate Button */}
              <Link
                href="/donate"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white px-5 sm:px-7 py-3 text-sm sm:text-base font-bold shadow-lg shadow-red-900/40 hover:shadow-red-900/60 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>Support A Life (Donate)</span>
              </Link>

              {/* Learn More Button (Visible on both Mobile & Desktop) */}
              <Link
                href={current.link || "/eyecare"}
                className="inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 px-3.5 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold transition-all duration-200 hover:border-white/50 shadow-sm"
              >
                <span>{current.cta || "Learn More"}</span>
                <span className="text-sm sm:text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Prev/Next Buttons (Positioned at upper 35% on mobile to never touch text) */}
        <button
          onClick={prev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-6 top-[32%] sm:top-1/2 -translate-y-1/2 z-30 flex h-7 w-7 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-[#dc2626] text-white backdrop-blur-md border border-white/20 transition-all duration-200 shadow-xl focus:outline-none"
        >
          <svg className="h-3.5 w-3.5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-6 top-[32%] sm:top-1/2 -translate-y-1/2 z-30 flex h-7 w-7 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/40 hover:bg-[#dc2626] text-white backdrop-blur-md border border-white/20 transition-all duration-200 shadow-xl focus:outline-none"
        >
          <svg className="h-3.5 w-3.5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-2.5 sm:bottom-6 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 z-30 flex items-center gap-1.5 sm:gap-2">
          {slides.map((sl, index) => (
            <button
              key={sl.id || index}
              onClick={() => setI(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === i
                  ? "w-6 sm:w-10 bg-[#dc2626]"
                  : "w-2 sm:w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
