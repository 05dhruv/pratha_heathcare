import PageBanner from "@/components/PageBanner";
import DonateForm from "@/components/DonateForm";

export const metadata = { title: "Donate" };

export default function Donate() {
  return (
    <>
      <PageBanner title="Donate Now" />
      <section className="container-x grid gap-12 py-14 lg:grid-cols-3 overflow-hidden">
        <div className="lg:col-span-2" data-aos="fade-right">
          <h2 className="mb-2 font-display text-2xl font-bold">Make a difference today</h2>
          <p className="mb-8 text-slate-600">Your contribution funds cataract surgeries, artificial limbs and mobile healthcare clinics.</p>
          <DonateForm />
        </div>
        <aside className="h-fit rounded-2xl border border-[#c2e6d6] bg-[#f0f8f4]/60 p-6 text-slate-700 shadow-sm" data-aos="fade-left">
          <span className="inline-block px-2.5 py-0.5 bg-[#dc2626]/10 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider rounded mb-2">
            Tax Benefits &amp; Transparency
          </span>
          <h3 className="font-display text-lg font-bold text-[#122336]">80G Tax Exemption</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            All donations to Pritha Health Care (&ldquo;The Breath of Life&rdquo;) are eligible for 50% tax deduction under Section 80G of the Income Tax Act.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-xs text-slate-600">
            <li>Instant 80G tax receipt on successful pledge</li>
            <li>100% transparent and audited operations</li>
            <li>Direct sponsor updates regarding beneficiaries</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
