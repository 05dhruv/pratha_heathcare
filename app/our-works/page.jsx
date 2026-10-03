"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Sidebar data ─────────────────────────────────────────────────────────────
const sidebarItems = [
  { label: "4,200+ Free Eye Surgery", href: "#eye-camp", section: "eye-camp" },
  { label: "325+ Free Camps Conducted In Rural Areas", href: "#eye-camp", section: "eye-camp" },
  { label: "15–20+ Dental Camps Conducted", href: "#dental-camp", section: "dental-camp" },
  { label: "16 General Health Check-up Plan & Camps Conducted", href: "#oracle-camp", section: "oracle-camp" },
  { label: "Associated With Oracle Eye Hospital, Moradabad, Uttar Pradesh", href: "#oracle-camp", section: "oracle-camp" },
  { label: "47+ Oracle Camps Cancer Screening Conducted", href: "#cancer-screening", section: "cancer-screening" },
  { label: "62+ Tobacco & Awareness Campaigns Conducted", href: "#cancer-screening", section: "cancer-screening" },
  { label: "Health Talk & Webinar & Social & Digital Platform Prevention & Awareness Campaigns", href: "#cancer-screening", section: "cancer-screening" },
];

// ─── Sidebar Component ────────────────────────────────────────────────────────
function WorksSidebar({ activeSection }) {
  function handleClick(e, href) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <aside
      className="w-full lg:w-72 flex-shrink-0 lg:sticky self-start overflow-y-auto"
      style={{ top: "100px", maxHeight: "calc(100vh - 120px)" }}
    >
      <div className="rounded-xl border border-slate-200 bg-white shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#122336] px-5 py-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#dc2626] block mb-1">
            Key Highlights
          </span>
          <h2 className="font-display text-lg font-bold text-white uppercase tracking-wide leading-tight">
            What We Provide
          </h2>
        </div>

        {/* Items */}
        <ul className="divide-y divide-slate-100">
          {sidebarItems.map((item, i) => {
            const isActive = activeSection === item.section;
            return (
              <li key={i}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`flex items-start gap-2.5 px-5 py-3 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-red-50 text-[#dc2626] font-semibold border-l-4 border-[#dc2626]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#dc2626] border-l-4 border-transparent"
                  }`}
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#dc2626] font-bold leading-none">›</span>
                  <span className="leading-snug">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Support button */}
        <div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
          <Link
            href="/donate"
            className="btn w-full !py-2.5 text-sm font-bold text-center shadow hover:shadow-md transition"
          >
            Support This Work
          </Link>
        </div>
      </div>
    </aside>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────
function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-[#dc2626] px-6 py-5 text-center shadow-md min-w-[150px]">
      <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">{value}</span>
      <span className="mt-1 text-xs sm:text-sm font-semibold text-red-100 leading-tight">{label}</span>
    </div>
  );
}

function OffersList({ items }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base">
          <span className="mt-0.5 flex-shrink-0 text-[#dc2626] font-bold text-lg leading-none">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionDivider() {
  return <div className="my-12 sm:my-16 border-t border-slate-200" />;
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OurWorksPage() {
  const [activeSection, setActiveSection] = useState("eye-camp");
  const sectionIds = ["eye-camp", "dental-camp", "oracle-camp", "cancer-screening"];

  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Breadcrumb banner ── */}
      <div className="bg-[#122336] py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide">
            Our Works
          </h1>
          <nav className="mt-2 text-sm text-slate-400" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2 text-slate-500">/</span>
            <span className="text-white font-medium">Our Works</span>
          </nav>
        </div>
      </div>

      {/* ── Main layout ── */}
      <main className="bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* On mobile sidebar comes first, on desktop it floats right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">

            {/* Sidebar — top on mobile, right on desktop */}
            <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-24 self-start lg:max-h-[calc(100vh-7rem)] overflow-y-auto">
              <WorksSidebar activeSection={activeSection} />
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">

              {/* ════════════════════════
                  SECTION 1 — EYE CAMP
              ════════════════════════ */}
              <section id="eye-camp" style={{ scrollMarginTop: "96px" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl" aria-hidden>👁️</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#122336]">
                    Eye Camp
                  </h2>
                </div>
                <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-5">
                  Free Eye Surgery &amp; Rural Screening
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Since 2016, Pritha Health Care has been conducting free eye surgery and screening
                  camps across rural Uttar Pradesh in partnership with{" "}
                  <strong className="text-[#122336]">Oracle Eye Hospital, Moradabad</strong>. Our
                  camps bring trained ophthalmologists directly to underserved villages, identifying
                  cataract cases and providing free surgery to those who need it most.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <StatCard value="4,200+" label="Free Eye Surgeries" />
                  <StatCard value="325+" label="Free Camps in Rural Areas" />
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700">
                  <span className="text-amber-500 font-bold">🏥</span>
                  <span>
                    <strong className="text-[#122336]">Associated With:</strong> Oracle Eye Hospital,
                    Moradabad, Uttar Pradesh
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide">
                    What You Get at the Camp
                  </h3>
                  <OffersList
                    items={[
                      "Free comprehensive eye check-up",
                      "Cataract screening and early detection",
                      "Free cataract surgery when required",
                      "Spectacle advice and prescription support",
                      "Post-surgical follow-up care",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <Link href="/contact-us" className="btn !px-6 !py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition">
                    Contact Us to Join a Camp
                  </Link>
                </div>
              </section>

              <SectionDivider />

              {/* ════════════════════════
                  SECTION 2 — DENTAL CAMP
              ════════════════════════ */}
              <section id="dental-camp" style={{ scrollMarginTop: "96px" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl" aria-hidden>🦷</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#122336]">
                    Dental Camp
                  </h2>
                </div>
                <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-5">
                  Oral Health &amp; Awareness
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Pritha Health Care conducts free dental camps to bring basic oral healthcare to
                  communities that have no access to dental clinics. Our qualified dental professionals
                  conduct thorough check-ups, raise hygiene awareness, and screen for early oral
                  diseases.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <StatCard value="15–20+" label="Dental Camps Conducted" />
                </div>

                <div className="mt-8">
                  <h3 className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide">
                    What You Get at the Camp
                  </h3>
                  <OffersList
                    items={[
                      "Free dental check-up by qualified dentists",
                      "Oral hygiene awareness sessions",
                      "Oral health screening and early disease detection",
                      "Guidance on preventive dental care",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <Link href="/contact-us" className="btn !px-6 !py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition">
                    Contact Us to Join a Camp
                  </Link>
                </div>
              </section>

              <SectionDivider />

              {/* ════════════════════════
                  SECTION 3 — ORACLE CAMP
              ════════════════════════ */}
              <section id="oracle-camp" style={{ scrollMarginTop: "96px" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl" aria-hidden>🏥</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#122336]">
                    Oracle Camp
                  </h2>
                </div>
                <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-5">
                  General Health Check-up Plans &amp; Camps
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  In collaboration with{" "}
                  <strong className="text-[#122336]">Oracle Eye Hospital, Moradabad</strong>, we
                  organise general health check-up camps that provide holistic primary healthcare
                  assessments to rural and underserved populations. These camps cover basic
                  diagnostics, doctor consultations, and health counselling — all at zero cost.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <StatCard value="16" label="General Health Check-up Camps Conducted" />
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700">
                  <span className="text-amber-500 font-bold">🏥</span>
                  <span>
                    <strong className="text-[#122336]">Associated With:</strong> Oracle Eye Hospital,
                    Moradabad, Uttar Pradesh
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide">
                    What You Get at the Camp
                  </h3>
                  <OffersList
                    items={[
                      "Comprehensive general health check-up",
                      "Basic diagnostic tests (blood pressure, sugar, etc.)",
                      "Doctor consultation and health counselling",
                      "Free medicines where available",
                      "Referrals for specialist care if needed",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <Link href="/contact-us" className="btn !px-6 !py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition">
                    Contact Us to Join a Camp
                  </Link>
                </div>
              </section>

              <SectionDivider />

              {/* ════════════════════════
                  SECTION 4 — CANCER SCREENING
              ════════════════════════ */}
              <section id="cancer-screening" style={{ scrollMarginTop: "96px" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl" aria-hidden>🎗️</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#122336]">
                    Cancer Screening
                  </h2>
                </div>
                <p className="text-[#dc2626] font-semibold text-sm uppercase tracking-widest mb-5">
                  Early Detection &amp; Awareness Campaigns
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Pritha Health Care conducts cancer screening camps and large-scale tobacco &amp;
                  awareness campaigns to combat the rising burden of cancer in underserved
                  communities. Through health talks, webinars, and social/digital platform
                  campaigns, we spread life-saving knowledge about early detection and prevention.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <StatCard value="47+" label="Cancer Screening Camps Conducted" />
                  <StatCard value="62+" label="Tobacco & Awareness Campaigns" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Health Talks",
                    "Webinars",
                    "Social Media Campaigns",
                    "Digital Platform Awareness",
                    "Prevention Campaigns",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-display font-bold text-lg text-[#122336] uppercase tracking-wide">
                    What You Get at the Camp
                  </h3>
                  <OffersList
                    items={[
                      "Early cancer detection screening",
                      "Tobacco-harm awareness and counselling",
                      "Educational material on cancer prevention",
                      "Referrals for further diagnosis if needed",
                      "Community health talks by medical experts",
                    ]}
                  />
                </div>

                <div className="mt-8">
                  <Link href="/contact-us" className="btn !px-6 !py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition">
                    Contact Us to Join a Camp
                  </Link>
                </div>
              </section>

            </div>
            {/* end main content */}
          </div>
        </div>
      </main>
    </>
  );
}
