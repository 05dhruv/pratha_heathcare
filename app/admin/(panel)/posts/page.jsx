import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/safe";
import { createPost, deletePost, togglePost } from "../../actions";

export default async function AdminPosts() {
  const posts = await prisma.post.findMany({ orderBy: { postedAt: "desc" } });
  return (
    <>
      <h1 className="font-display text-2xl font-bold">Posts</h1>
      <form action={createPost} className="mt-6 max-w-2xl space-y-4 rounded-lg border border-line p-5">
        <h2 className="font-display text-lg font-semibold">New post</h2>
        <div><label className="label">Title</label><input name="title" required className="field" /></div>
        <div><label className="label">Short summary</label><input name="excerpt" required className="field" /></div>
        <div><label className="label">Content (blank line between paragraphs)</label><textarea name="content" rows={8} required className="field" /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label className="label">Image URL (optional)</label><input name="image" className="field" placeholder="/images/camp.jpg or https://..." /></div>
          <div><label className="label">Date</label><input name="postedAt" type="date" className="field" /></div>
        </div>
        <button className="btn-dark">Publish post</button>
      </form>

      <ul className="mt-10 divide-y divide-line">
        {posts.map((p) => (
          <li key={p.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
            <div>
              <p className="font-medium">{p.title} {!p.published && <span className="ml-2 rounded bg-slate-200 px-2 py-0.5 text-xs">Hidden</span>}</p>
              <p className="text-sm text-slate-500">{formatDate(p.postedAt)}</p>
            </div>
            <div className="flex gap-2">
              <form action={togglePost}><input type="hidden" name="id" value={p.id} /><button className="rounded border border-line px-3 py-1 text-sm">{p.published ? "Hide" : "Show"}</button></form>
              <form action={deletePost}><input type="hidden" name="id" value={p.id} /><button className="rounded border border-red-300 px-3 py-1 text-sm text-red-700">Delete</button></form>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
