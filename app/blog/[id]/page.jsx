import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { prisma } from "@/lib/prisma";
import { safe, formatDate } from "@/lib/safe";
import { defaultPosts } from "@/lib/site";

export const dynamic = "force-dynamic";

async function getPost(id) {
  const n = Number(id);
  if (!Number.isInteger(n)) return null;
  const dbPost = await safe(() => prisma.post.findFirst({ where: { id: n, published: true } }), null);
  if (dbPost) return dbPost;
  return defaultPosts.find((p) => p.id === n) || null;
}

export async function generateMetadata({ params }) {
  const p = await getPost(params.id);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function Post({ params }) {
  const p = await getPost(params.id);
  if (!p) notFound();
  return (
    <>
      <PageBanner title="News" parent="Media" />
      <article className="container-x max-w-3xl py-14">
        <h1 className="font-display text-3xl font-bold leading-tight">{p.title}</h1>
        <time className="mt-2 block text-slate-500">{formatDate(p.postedAt)}</time>
        <Photo src={p.image} alt={p.title} className="mt-8 h-72 w-full rounded-lg md:h-96" />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
          {p.content.split(/\n\s*\n/).map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </article>
    </>
  );
}
