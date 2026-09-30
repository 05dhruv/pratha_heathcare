import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/safe";
import { addNotification, deleteNotification } from "../../actions";

export default async function AdminNotifications() {
  const items = await prisma.notification.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <>
      <h1 className="font-display text-2xl font-bold">Notifications</h1>
      <form action={addNotification} className="mt-6 max-w-2xl space-y-4 rounded-lg border border-line p-5">
        <div><label className="label">Title</label><input name="title" required className="field" /></div>
        <div><label className="label">Link (optional, e.g. a PDF)</label><input name="link" className="field" /></div>
        <button className="btn-dark">Add notification</button>
      </form>
      <ul className="mt-10 divide-y divide-line">
        {items.map((n) => (
          <li key={n.id} className="flex items-center justify-between gap-3 py-3">
            <span>{n.title} <span className="text-sm text-slate-500">({formatDate(n.createdAt)})</span></span>
            <form action={deleteNotification}><input type="hidden" name="id" value={n.id} /><button className="rounded border border-red-300 px-3 py-1 text-sm text-red-700">Delete</button></form>
          </li>
        ))}
      </ul>
    </>
  );
}
