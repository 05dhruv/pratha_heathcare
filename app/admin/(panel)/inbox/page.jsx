import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/safe";
import { deleteMessage, setDonationStatus } from "../../actions";

export default async function Inbox() {
  const [messages, donations, subs] = await Promise.all([
    prisma.message.findMany({ orderBy: { createdAt: "desc" }, take: 100 }),
    prisma.donation.findMany({ orderBy: { createdAt: "desc" }, take: 100 }),
    prisma.subscriber.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
  ]);
  return (
    <>
      <h1 className="font-display text-2xl font-bold">Donations</h1>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-line text-slate-500"><tr><th className="py-2">Date</th><th>Donor</th><th>Amount</th><th>For</th><th>Status</th></tr></thead>
          <tbody>
            {donations.map((d) => (
              <tr key={d.id} className="border-b border-line/60 align-top">
                <td className="py-2">{formatDate(d.createdAt)}</td>
                <td>{d.name}<br /><span className="text-slate-500">{d.email} · {d.phone}{d.pan ? ` · ${d.pan}` : ""}</span></td>
                <td>₹{d.amount.toLocaleString("en-IN")}</td>
                <td>{d.purpose}</td>
                <td>
                  <form action={setDonationStatus} className="flex gap-1">
                    <input type="hidden" name="id" value={d.id} />
                    <select name="status" defaultValue={d.status} className="rounded border border-line px-1 py-1"><option>PENDING</option><option>PAID</option><option>FAILED</option></select>
                    <button className="rounded border border-line px-2">Set</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {donations.length === 0 && <p className="py-4 text-slate-500">No donations yet.</p>}
      </div>

      <h2 className="mt-12 font-display text-2xl font-bold">Messages</h2>
      <ul className="mt-4 divide-y divide-line">
        {messages.map((m) => (
          <li key={m.id} className="py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{m.name} <span className="font-normal text-slate-500">· {m.email}{m.phone ? ` · ${m.phone}` : ""} · {formatDate(m.createdAt)}</span></p>
                {m.subject && <p className="text-sm font-medium">{m.subject}</p>}
                <p className="mt-1 whitespace-pre-line text-slate-700">{m.body}</p>
              </div>
              <form action={deleteMessage}><input type="hidden" name="id" value={m.id} /><button className="rounded border border-red-300 px-3 py-1 text-sm text-red-700">Delete</button></form>
            </div>
          </li>
        ))}
        {messages.length === 0 && <li className="py-4 text-slate-500">No messages yet.</li>}
      </ul>

      <h2 className="mt-12 font-display text-2xl font-bold">Subscribers ({subs.length})</h2>
      <p className="mt-3 break-words text-sm text-slate-600">{subs.map((s) => s.email).join(", ") || "None yet."}</p>
    </>
  );
}
