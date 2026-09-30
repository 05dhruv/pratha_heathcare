"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export default function Counter({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl font-bold text-marigold md:text-6xl" aria-label={`${value.toLocaleString("en-IN")} ${label}`}>
        {n.toLocaleString("en-IN")}
      </p>
      <p className="mt-2 text-lg font-medium text-white">{label}</p>
    </div>
  );
}
