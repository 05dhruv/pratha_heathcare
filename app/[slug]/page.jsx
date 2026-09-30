import { notFound } from "next/navigation";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const s = services[params.slug];
  return s ? { title: s.title, description: s.lead } : {};
}

export default function ServicePage({ params }) {
  const s = services[params.slug];
  if (!s) notFound();
  return (
    <>
      <PageBanner title={s.title} parent="Our Services" />
      <section className="container-x grid gap-10 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Photo src={s.image} alt={s.title} className="h-72 w-full rounded-lg md:h-96" />
          <p className="mt-8 font-display text-xl font-semibold leading-relaxed">{s.lead}</p>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-600">
            {s.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <aside className="h-fit rounded-lg border border-line p-6">
          <h2 className="font-display text-lg font-semibold">What we provide</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            {s.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <Link href="/donate" className="btn mt-6 w-full">Support this work</Link>
        </aside>
      </section>
    </>
  );
}
