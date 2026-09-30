import PageBanner from "@/components/PageBanner";
import { awards } from "@/lib/site";

export const metadata = { title: "Honors and Awards" };

export default function Honors() {
  return (
    <>
      <PageBanner title="Honors and Awards" parent="About" />
      <section className="container-x py-14">
        <ul className="max-w-3xl divide-y divide-line">
          {awards.map((a) => (
            <li key={a.title} className="py-5">
              <h2 className="font-display text-lg font-semibold">{a.title}</h2>
              <p className="text-slate-600">{a.by}{a.year ? `, ${a.year}` : ""}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-slate-500">Edit the list in <code>lib/site.js</code>.</p>
      </section>
    </>
  );
}
