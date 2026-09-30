import PageBanner from "@/components/PageBanner";
import Counter from "@/components/Counter";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";

export const metadata = { title: "Impact Report" };
export const dynamic = "force-dynamic";

export default async function Impact() {
  const stats = await safe(() => prisma.stat.findMany({ orderBy: { position: "asc" } }), []);
  return (
    <>
      <PageBanner title="Impact Report" parent="About" />
      <section className="bg-ink py-14">
        <div className="container-x grid gap-10 sm:grid-cols-2">
          {stats.map((s) => <Counter key={s.id} value={s.value} label={s.label} />)}
        </div>
      </section>
      <section className="container-x py-14">
        <p className="max-w-3xl text-lg text-slate-600">
          Annual reports and audited statements can be listed here. Add PDF files to <code>public/reports</code> and link them below.
        </p>
      </section>
    </>
  );
}
