"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

export default function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let handleResize = null;

    import("aos").then((AOS) => {
      const aos = AOS.default || AOS;
      aos.init({
        duration: 650,
        easing: "ease-out-cubic",
        once: true, // Prevents repeat animations that cause layout jumps on mobile
        offset: 25,
        delay: 50,
        disable: false,
      });

      handleResize = () => {
        aos.refresh();
      };

      window.addEventListener("resize", handleResize, { passive: true });
      window.addEventListener("orientationchange", handleResize, { passive: true });
    });

    return () => {
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    import("aos").then((AOS) => {
      const aos = AOS.default || AOS;
      aos.refresh();
    });
  }, [pathname]);

  return null;
}

