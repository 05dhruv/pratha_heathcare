import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { prisma } from "@/lib/prisma";
import { safe, formatDate } from "@/lib/safe";
import { defaultPosts } from "@/lib/site";

export const metadata = { title: "News and Blog" };
export const dynamic = "force-dynamic";

export default async function Blog() {
  const dbPosts = await safe(() => prisma.post.findMany({ where: { published: true }, orderBy: { postedAt: "desc" } }), []);
  const posts = dbPosts && dbPosts.length > 0 ? dbPosts : defaultPosts;
  return (
    <>
      <PageBanner title="News and Blog" parent="Media" />
      <section className="container-x py-14">
        {posts.length === 0 ? <p className="text-slate-600">No posts yet.</p> : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-lg border border-line">
                <Photo src={p.image} alt={p.title} className="h-48 w-full" />
                <div className="p-5">
                  <time className="text-sm text-slate-500">{formatDate(p.postedAt)}</time>
                  <h2 className="mt-1 font-display text-lg font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-2 line-clamp-3 text-slate-600">{p.excerpt}</p>
                  <Link href={`/blog/${p.id}`} className="mt-4 inline-block font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">Read more</Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
