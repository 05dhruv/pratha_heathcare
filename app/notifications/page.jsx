import PageBanner from "@/components/PageBanner";
import { prisma } from "@/lib/prisma";
import { safe, formatDate } from "@/lib/safe";

export const metadata = { title: "Notifications" };
export const dynamic = "force-dynamic";

export default async function Notifications() {
  const items = await safe(() => prisma.notification.findMany({ orderBy: { createdAt: "desc" } }), []);
  return (
    <>
      <PageBanner title="Notifications" parent="About" />
      <section className="container-x py-14">
        {items.length === 0 ? <p className="text-slate-600">No notifications right now.</p> : (
          <ul className="max-w-3xl divide-y divide-line">
            {items.map((n, idx) => (
              <li key={n.id} className="flex flex-wrap items-baseline justify-between gap-2 py-4" data-aos="fade-up" data-aos-delay={idx * 80}>
                {n.link ? <a href={n.link} className="font-medium text-[#dc2626] hover:underline" target="_blank" rel="noopener noreferrer">{n.title}</a> : <span className="font-medium">{n.title}</span>}
                <time className="text-sm text-slate-500">{formatDate(n.createdAt)}</time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
