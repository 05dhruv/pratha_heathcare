import Link from "next/link";

export default function PageBanner({ title, parent }) {
  return (
    <section className="bg-gradient-to-r from-[#122336] via-[#16324a] to-[#122336] py-14 text-white border-b-2 border-[#dc2626]/40 overflow-hidden">
      <div className="container-x">
        <h1 data-aos="fade-right" data-aos-duration="600" className="font-display text-3xl font-bold !text-white md:text-4xl">{title}</h1>
        <nav data-aos="fade-left" data-aos-duration="600" aria-label="Breadcrumb" className="mt-3 text-sm text-white/70">
          <Link href="/" className="hover:text-[#dc2626] transition">Home</Link>
          {parent && <> / <span>{parent}</span></>}
          {" / "}<span className="text-white font-medium">{title}</span>
        </nav>
      </div>
    </section>
  );
}
