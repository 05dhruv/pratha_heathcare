"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

export default function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let aosInstance = null;

    import("aos").then((AOS) => {
      const aos = AOS.default || AOS;
      aosInstance = aos;
      aos.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: false,
        offset: 30,
        delay: 50,
        disable: false,
      });

      const handleResize = () => {
        aos.refresh();
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);
    });

    return () => {
      if (aosInstance) {
        window.removeEventListener("resize", () => {});
        window.removeEventListener("orientationchange", () => {});
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

