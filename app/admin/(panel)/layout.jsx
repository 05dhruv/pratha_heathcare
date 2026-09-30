import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin", robots: { index: false, follow: false } };

const links = [
  ["/admin", "Dashboard"],
  ["/admin/posts", "Posts"],
  ["/admin/slides", "Slider"],
  ["/admin/gallery", "Gallery"],
  ["/admin/notifications", "Notifications"],
  ["/admin/inbox", "Inbox and donations"],
];

export default function PanelLayout({ children }) {
  requireAdmin();
  return (
    <div className="container-x py-8">
      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line pb-4">
        {links.map(([href, label]) => <Link key={href} href={href} className="font-medium text-ink hover:underline">{label}</Link>)}
        <span className="ml-auto"><LogoutButton /></span>
      </div>
      {children}
    </div>
  );
}
