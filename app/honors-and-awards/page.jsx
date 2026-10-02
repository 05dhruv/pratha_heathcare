import PageBanner from "@/components/PageBanner";
import { awards } from "@/lib/site";

export const metadata = { title: "Honors and Awards" };

export default function Honors() {
  return (
    <>
      <PageBanner title="Honors and Awards" parent="About" />
      <section className="container-x py-14">
        <ul className="max-w-3xl divide-y divide-slate-100">
          {awards.map((a, idx) => (
            <li key={a.title} className="py-6 flex items-start gap-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#dc2626]/10 text-2xl text-[#dc2626] border border-[#dc2626]/20">
                🏆
              </span>
              <div>
                <h2 className="font-display text-xl font-bold text-[#122336]">{a.title}</h2>
                <p className="mt-1 text-slate-600">{a.by}{a.year ? `, ${a.year}` : ""}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
