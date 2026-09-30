"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Photo from "./Photo";

export default function HeroSlider({ slides }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  if (!slides.length) return null;
  const s = slides[i];

  return (
    <section
      className="relative h-[420px] overflow-hidden bg-deep md:h-[560px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Photo src={s.image} alt={s.title} className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
          <div className="container-x absolute inset-x-0 bottom-0 pb-16">
            <h2 className="max-w-3xl font-display text-3xl font-bold !text-white md:text-5xl">{s.title}</h2>
            {s.link && <Link href={s.link} className="btn mt-6">Learn more</Link>}
          </div>
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
          {slides.map((sl, n) => (
            <button
              key={sl.id}
              onClick={() => setI(n)}
              aria-label={`Show slide ${n + 1}`}
              aria-current={n === i}
              className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-marigold" : "w-2.5 bg-white/60"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
