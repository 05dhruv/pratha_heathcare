import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "CSR Funding",
  description: "Corporate Social Responsibility (CSR) Funding details and registration certifications of Pritha Health Care.",
};

const csrCertifications = [
  { title: "12A", status: "Certified / Approved", desc: "Tax exemption registration under Section 12A of the Income Tax Act." },
  { title: "80G", status: "Certified / Approved", desc: "Tax deduction benefit under Section 80G for all corporate & individual donors." },
  { title: "e-CSR Funding", status: "Registered", desc: "Eligible to receive direct Corporate Social Responsibility (CSR) funds under MCA guidelines." },
  { title: "FCRA", status: "Applied", desc: "Foreign Contribution Regulation Act registration application under process." },
];

export default function CsrFundingPage() {
  return (
    <>
      <PageBanner title="CSR Funding" parent="CSR" />
      <section className="container-x py-14">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Header Description */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-3">
              Corporate Social Responsibility (CSR) Funding
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {site.name} is fully compliant and eligible for corporate CSR partnerships. We work closely with organisations to execute impactful health programs, free eye surgery camps, and disability rehabilitation endeavors.
            </p>
          </div>

          {/* Registrations & Compliance Grid */}
          <div>
            <h3 className="text-xl font-bold font-display text-slate-900 mb-6 text-center md:text-left">
              Registrations & Compliance Status
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {csrCertifications.map((item) => (
                <div key={item.title} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between hover:border-slate-300 transition">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold font-display text-slate-900">{item.title}</span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.status.includes("Applied") 
                          ? "bg-amber-100 text-amber-800 border border-amber-200" 
                          : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-lg text-slate-900 font-display mb-1">Have a CSR Inquiry?</h4>
              <p className="text-slate-600 text-sm">Reach out to our CSR coordinator team directly via email or phone.</p>
              <div className="mt-3 text-sm font-medium text-slate-800 space-y-1">
                <p>Email: <a href={`mailto:${site.email}`} className="text-sky-600 hover:underline">{site.email}</a></p>
                <p>Phone: <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sky-600 hover:underline">{site.phone}</a></p>
              </div>
            </div>
            <Link href="/contact-us" className="btn !px-6 !py-2.5 flex-shrink-0">
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
