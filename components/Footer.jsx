import Link from "next/link";
import { site } from "@/lib/site";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer className="mt-20 bg-deep text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <h4 className="mb-3 font-display text-lg text-white">Quick</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-marigold">About</Link></li>
            <li><Link href="/honors-and-awards" className="hover:text-marigold">Honors and Awards</Link></li>
            <li><Link href="/impact" className="hover:text-marigold">Impact Reports</Link></li>
            <li><Link href="/notifications" className="hover:text-marigold">Notifications</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-lg text-white">Services</h4>
          <ul className="space-y-2">
            <li><Link href="/eyecare" className="hover:text-marigold">Eye Care</Link></li>
            <li><Link href="/disability-care" className="hover:text-marigold">Artificial Limbs Manufacturing</Link></li>
            <li><Link href="/sambal-special-school" className="hover:text-marigold">Special School</Link></li>
            <li><Link href="/screening-center" className="hover:text-marigold">Audio and Speech Therapy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-lg text-white">Contact</h4>
          <p>{site.address}</p>
          <p className="mt-2"><a href={`mailto:${site.email}`} className="hover:text-marigold">{site.email}</a></p>
          <p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-marigold">{site.phone}</a></p>
        </div>
        <div>
          <h4 className="mb-3 font-display text-lg text-white">Get updates</h4>
          <SubscribeForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-4 py-5 text-sm">
          <div className="flex flex-wrap gap-4">
            {site.social.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-marigold">{s.name}</a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-marigold">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-marigold">Terms of Use</Link>
            <Link href="/refund-policy" className="hover:text-marigold">Refund</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
