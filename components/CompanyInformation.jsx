"use client";
import { useState } from "react";

export default function CompanyInformation() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div data-aos="fade-up" className="mt-14 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4 text-left transition hover:bg-slate-100/60"
        aria-expanded={isOpen}
      >
        <h2 className="text-xl font-bold text-slate-800">Company Information</h2>
        <svg
          className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-6 md:p-8 space-y-6 text-sm text-slate-700 leading-relaxed">
          {/* Paragraphs */}
          <div className="space-y-4 text-slate-700">
            <p>
              <strong className="font-semibold text-slate-900">PRITHA HEALTH CARE PRIVATE LIMITED</strong> (CIN: U74999UP2016PTC083288) is a Private company incorporated on 17 May 2016. It is classified as Non-government company and is registered at Registrar of Companies, Kanpur. Its authorized share capital is Rs. 1000000.00 and its paid up capital is Rs. 1000000.00.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">PRITHA HEALTH CARE PRIVATE LIMITED</strong>&apos;s Annual General Meeting (AGM) was last held on 30 Sep 2023, and as per records from Ministry of Corporate Affairs (MCA), its balance sheet was last filed on 2023-03-31. <strong className="font-semibold text-slate-900">PRITHA HEALTH CARE PRIVATE LIMITED</strong>&apos;s NIC code is 7499 (which is part of its CIN). As per the NIC code, it is involved in Other business activities n.e.c.[This class includes service activities generally delivered to commercial clients].
            </p>
            <p>
              Directors of <strong className="font-semibold text-slate-900">PRITHA HEALTH CARE PRIVATE LIMITED</strong> are MEGHA ., GIRJESH KAIN, and RAMESH KUMAR.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">PRITHA HEALTH CARE PRIVATE LIMITED</strong>&apos;s Corporate Identification Number (CIN) is U74999UP2016PTC083288 and its registration number is 83288. Users may contact PRITHA HEALTH CARE PRIVATE LIMITED on its Email address - prithahealthcare@gmail.com. Registered address of PRITHA HEALTH CARE PRIVATE LIMITED is C/O Shri Girjesh Kain,MMIG 181 Ram Ganga ViharPhase-I , Moradabad, Uttar Pradesh, India-244001.
            </p>
            <p>
              Current status of PRITHA HEALTH CARE PRIVATE LIMITED is -<span className="font-semibold text-emerald-600">Active</span>.
            </p>
          </div>

          {/* Basic Information Table */}
          <div className="pt-4">
            <h3 className="text-base font-bold text-slate-900 mb-3">Basic Information</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-xs md:text-sm">
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500 w-1/3">CIN</td>
                    <td className="py-3 px-4 font-bold text-sky-800">U74999UP2016PTC083288</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-500">Name</td>
                    <td className="py-3 px-4 font-bold text-sky-800">PRITHA HEALTH CARE PRIVATE LIMITED</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500">Listed on Stock Exchange</td>
                    <td className="py-3 px-4 font-medium text-sky-800">Unlisted</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-500">Company Status</td>
                    <td className="py-3 px-4 font-semibold text-sky-800">Active</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500">ROC</td>
                    <td className="py-3 px-4 font-medium text-sky-800">ROC Kanpur</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-500">Registration Number</td>
                    <td className="py-3 px-4 font-medium text-sky-800">83288</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500">Company Category</td>
                    <td className="py-3 px-4 font-medium text-sky-800">Company limited by shares</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-500">Company Sub Category</td>
                    <td className="py-3 px-4 font-medium text-sky-800">Non-government company</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500">Class of Company</td>
                    <td className="py-3 px-4 font-medium text-sky-800">Private</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-500">Date of Incorporation</td>
                    <td className="py-3 px-4 font-bold text-sky-800">2016-05-17</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500">Age of Company</td>
                    <td className="py-3 px-4 font-medium text-sky-800">10 years, 2 months, 2 days</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-500">Activity</td>
                    <td className="py-3 px-4 text-slate-700">
                      <strong className="font-semibold text-slate-900">NIC Code: 7499</strong><br />
                      <strong className="font-semibold text-slate-900">NIC Description:</strong> Other business activities n.e.c.[This class includes service activities generally delivered to commercial clients]
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500">Number of Members</td>
                    <td className="py-3 px-4 font-bold text-sky-800">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Annual Compliance Status Table */}
          <div className="pt-2">
            <h3 className="text-base font-bold text-slate-900 mb-3">Annual Compliance Status</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-xs md:text-sm">
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-500 w-1/3">Date of Last Annual General Meeting</td>
                    <td className="py-3 px-4 font-bold text-sky-800">2023-09-30</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-500">Date of Last Filed Balance Sheet</td>
                    <td className="py-3 px-4 font-bold text-sky-800">2023-03-31</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
