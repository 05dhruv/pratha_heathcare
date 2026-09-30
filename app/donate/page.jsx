import PageBanner from "@/components/PageBanner";
import DonateForm from "@/components/DonateForm";

export const metadata = { title: "Donate" };

export default function Donate() {
  return (
    <>
      <PageBanner title="Donate Now" />
      <section className="container-x grid gap-12 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-2 font-display text-2xl font-bold">Make a difference today</h2>
          <p className="mb-8 text-slate-600">Your contribution funds cataract surgeries, artificial limbs and special education.</p>
          <DonateForm />
        </div>
        <aside className="h-fit rounded-lg bg-mist p-6 text-slate-600">
          <h3 className="font-display text-lg font-semibold text-deep">Good to know</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Add your 80G / tax-exemption details here.</li>
            <li>Add bank transfer / UPI details here.</li>
          </ul>
        </aside>
      </section>
    </>
  );
}
