import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section className="container-x grid gap-12 py-14 lg:grid-cols-3 overflow-hidden">
        <div className="lg:col-span-2" data-aos="fade-right">
          <h2 className="mb-6 font-display text-2xl font-bold">Send us a message</h2>
          <ContactForm />
        </div>
        <aside className="h-fit rounded-lg bg-mist p-6" data-aos="fade-left">
          <h2 className="font-display text-lg font-semibold">{site.name}</h2>
          <p className="mt-3 text-slate-600">{site.address}</p>
          <p className="mt-3"><a className="text-ink underline" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><a className="text-ink underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
          <p><a className="text-ink underline" href={`https://wa.me/${(site.phone2 || "917900351111").replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay || "+91 79003 51111 (Whatsapp)"}</a></p>
        </aside>
      </section>
    </>
  );
}
