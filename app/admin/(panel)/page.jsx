import { prisma } from "@/lib/prisma";
import { updateStat } from "../actions";

export default async function Dashboard() {
  const [posts, messages, subs, donations, stats] = await Promise.all([
    prisma.post.count(), prisma.message.count(), prisma.subscriber.count(),
    prisma.donation.aggregate({ _count: true, _sum: { amount: true }, where: { status: "PAID" } }),
    prisma.stat.findMany({ orderBy: { position: "asc" } }),
  ]);
  const cards = [
    ["Posts", posts],
    ["Messages", messages],
    ["Subscribers", subs],
    ["Paid donations", `${donations._count} (₹${(donations._sum.amount || 0).toLocaleString("en-IN")})`],
  ];
  return (
    <>
      <h1 className="font-display text-2xl font-bold">Dashboard</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([k, v]) => (
          <div key={k} className="rounded-lg bg-mist p-5"><p className="text-sm text-slate-500">{k}</p><p className="mt-1 font-display text-2xl font-bold">{v}</p></div>
        ))}
      </div>

      <h2 className="mt-12 font-display text-xl font-bold">Milestones (home page counters)</h2>
      <div className="mt-4 space-y-3">
        {stats.map((s) => (
          <form key={s.id} action={updateStat} className="flex flex-wrap items-end gap-3">
            <input type="hidden" name="id" value={s.id} />
            <div className="grow"><label className="label">Label</label><input name="label" defaultValue={s.label} className="field" /></div>
            <div><label className="label">Value</label><input name="value" type="number" min={0} defaultValue={s.value} className="field !w-40" /></div>
            <button className="btn-dark">Save</button>
          </form>
        ))}
      </div>
    </>
  );
}
