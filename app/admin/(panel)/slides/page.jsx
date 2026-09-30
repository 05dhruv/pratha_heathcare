import { prisma } from "@/lib/prisma";
import { createSlide, deleteSlide } from "../../actions";

export default async function AdminSlides() {
  const slides = await prisma.slide.findMany({ orderBy: { position: "asc" } });
  return (
    <>
      <h1 className="font-display text-2xl font-bold">Home slider</h1>
      <form action={createSlide} className="mt-6 max-w-2xl space-y-4 rounded-lg border border-line p-5">
        <div><label className="label">Heading</label><input name="title" required className="field" /></div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2"><label className="label">Image URL</label><input name="image" className="field" placeholder="/images/slide1.jpg" /></div>
          <div><label className="label">Order</label><input name="position" type="number" defaultValue={slides.length + 1} className="field" /></div>
        </div>
        <div><label className="label">Link (optional)</label><input name="link" className="field" placeholder="/eyecare" /></div>
        <button className="btn-dark">Add slide</button>
      </form>
      <ul className="mt-10 divide-y divide-line">
        {slides.map((s) => (
          <li key={s.id} className="flex items-center justify-between gap-3 py-3">
            <span>{s.position}. {s.title}</span>
            <form action={deleteSlide}><input type="hidden" name="id" value={s.id} /><button className="rounded border border-red-300 px-3 py-1 text-sm text-red-700">Delete</button></form>
          </li>
        ))}
      </ul>
    </>
  );
}
