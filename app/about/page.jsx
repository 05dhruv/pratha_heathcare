import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { objectives, site } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "About Us" };

const programs = [
  { title: "Community Eye Program", text: "By creating awareness among underprivileged communities, we bring patients to our base hospital and save them from curable blindness." },
  { title: "Disability Program", text: "We reach beneficiaries from weaker economic sections who have lost a limb and provide customised prosthetics and orthotics so they can live with dignity." },
  { title: "Special Education Program", text: "Free education, vocational training, physiotherapy and occupational therapy for children with special needs." },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" parent="About" />
      <section className="container-x py-14 overflow-hidden">
        <div data-aos="fade-up">
          <h2 className="font-display text-2xl font-bold">{site.name}</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
            <p>{site.name} is a national award-winning social organisation devoted to preventing and curing avoidable blindness and serving people with disabilities. It has worked in Moradabad, Uttar Pradesh since 1981, and is registered as a non-profit society under the Societies Registration Act, 1860.</p>
            <p>Pritha Health Care is devoted to holistic welfare, rehabilitation, and medical care for the underserved.</p>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {programs.map((p, i) => (
            <div
              key={p.title}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <Photo src="" alt={p.title} className="h-64 w-full rounded-lg" />
              <div>
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-slate-600">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-16">
          <h2 className="font-display text-2xl font-bold">Objectives</h2>
          <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-5 text-slate-600">
            {objectives.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>

        <div className="mt-12" data-aos="zoom-in">
          <Link href="/donate" className="btn">Donate to {site.name}</Link>
        </div>
      </section>
    </>
  );
}
