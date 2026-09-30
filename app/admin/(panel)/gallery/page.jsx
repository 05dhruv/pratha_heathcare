import { prisma } from "@/lib/prisma";
import { addGallery, deleteGallery } from "../../actions";

export default async function AdminGallery() {
  const items = await prisma.galleryItem.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <>
      <h1 className="font-display text-2xl font-bold">Gallery</h1>
      <form action={addGallery} className="mt-6 max-w-2xl space-y-4 rounded-lg border border-line p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div><label className="label">Type</label><select name="type" className="field"><option value="IMAGE">Image</option><option value="VIDEO">YouTube video</option></select></div>
          <div className="sm:col-span-2"><label className="label">URL</label><input name="url" required className="field" placeholder="Image path or YouTube link" /></div>
        </div>
        <div><label className="label">Caption (optional)</label><input name="caption" className="field" /></div>
        <button className="btn-dark">Add</button>
      </form>
      <ul className="mt-10 divide-y divide-line">
        {items.map((g) => (
          <li key={g.id} className="flex items-center justify-between gap-3 py-3">
            <span className="min-w-0 truncate"><b>{g.type}</b> {g.caption || g.url}</span>
            <form action={deleteGallery}><input type="hidden" name="id" value={g.id} /><button className="rounded border border-red-300 px-3 py-1 text-sm text-red-700">Delete</button></form>
          </li>
        ))}
      </ul>
    </>
  );
}
