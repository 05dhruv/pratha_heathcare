import PageBanner from "@/components/PageBanner";

export const metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section data-aos="fade-up" className="container-x max-w-3xl space-y-4 py-14 text-lg leading-relaxed text-slate-600">
        <p>Replace this text with the organisation's official Privacy Policy. Have it reviewed by a legal adviser before publishing.</p>
      </section>
    </>
  );
}
