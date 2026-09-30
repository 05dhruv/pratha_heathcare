import Link from "next/link";

export default function PageBanner({ title, parent }) {
  return (
    <section className="bg-gradient-to-r from-deep to-ink py-14 text-white">
      <div className="container-x">
        <h1 className="font-display text-3xl font-bold !text-white md:text-4xl">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-3 text-sm text-white/70">
          <Link href="/" className="hover:text-marigold">Home</Link>
          {parent && <> / <span>{parent}</span></>}
          {" / "}<span className="text-white">{title}</span>
        </nav>
      </div>
    </section>
  );
}
