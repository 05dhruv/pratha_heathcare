import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { safe, formatDate } from "@/lib/safe";
import { programmes, endeavors, blessings, site } from "@/lib/site";
import HeroSlider from "@/components/HeroSlider";
import Counter from "@/components/Counter";
import Photo from "@/components/Photo";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [slides, stats, posts] = await Promise.all([
    safe(() => prisma.slide.findMany({ where: { active: true }, orderBy: { position: "asc" } }), []),
    safe(() => prisma.stat.findMany({ orderBy: { position: "asc" } }), []),
    safe(() => prisma.post.findMany({ where: { published: true }, orderBy: { postedAt: "desc" }, take: 3 }), []),
  ]);

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="container-x py-16">
        <h1 className="font-display text-3xl font-bold md:text-4xl">{site.name}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          {site.name} is one of the most trusted NGOs in India, based in Mathura district of Uttar Pradesh. A national-award-winning charity devoted to improving the quality of life of the marginalised through services in these areas:
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((p) => (
            <article key={p.title} className="flex flex-col rounded-lg border border-line p-6">
              <h2 className="font-display text-lg font-semibold">{p.title}</h2>
              <p className="mt-3 flex-1 text-slate-600">{p.text}</p>
              <Link href={p.href} className="mt-5 font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">Learn more</Link>
            </article>
          ))}
        </div>
      </section>

      {stats.length > 0 && (
        <section className="bg-ink py-16">
          <div className="container-x">
            <h2 className="mx-auto max-w-3xl text-center font-display text-xl font-semibold leading-relaxed !text-white md:text-2xl">
              Since 1981, {site.name} has been fighting to protect vision and helping people with disabilities live independent, dignified and self-reliant lives.
            </h2>
            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              {stats.map((s) => <Counter key={s.id} value={s.value} label={s.label} />)}
            </div>
          </div>
        </section>
      )}

      <section className="container-x py-16">
        <h2 className="font-display text-3xl font-bold">Our Endeavors</h2>
        <p className="mt-3 max-w-3xl text-slate-600">Working across several domains to change the lives of marginalised people.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {endeavors.map((e) => (
            <Link key={e.title} href={e.href} className="group relative block overflow-hidden rounded-lg">
              <Photo src={e.image} alt={e.title} className="h-56 w-full transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/90 to-transparent p-4 font-display text-lg font-semibold text-white">{e.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-bold">Activities</h2>
            <Link href="/blog" className="font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">All news</Link>
          </div>
          {posts.length === 0 ? (
            <p className="mt-6 text-slate-600">No posts yet. Add one from the admin panel.</p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {posts.map((p) => (
                <article key={p.id} className="overflow-hidden rounded-lg bg-white">
                  <Photo src={p.image} alt={p.title} className="h-44 w-full" />
                  <div className="p-5">
                    <time className="text-sm text-slate-500">{formatDate(p.postedAt)}</time>
                    <h3 className="mt-1 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-2 line-clamp-3 text-slate-600">{p.excerpt}</p>
                    <Link href={`/blog/${p.id}`} className="mt-4 inline-block font-semibold text-ink underline decoration-marigold decoration-2 underline-offset-4">Read more</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="font-display text-3xl font-bold">Blessings and support</h2>
        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
          {blessings.map((b) => (
            <figure key={b} className="w-56 shrink-0 snap-start">
              <Photo src="" alt={b} className="h-56 w-56 rounded-lg" />
              <figcaption className="mt-2 text-sm text-slate-600">{b}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-x pb-4">
        <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-marigold p-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">Your gift restores sight and mobility.</h2>
            <p className="mt-1 text-deep/80">Every donation goes directly to surgeries, prosthetics and special education.</p>
          </div>
          <Link href="/donate" className="btn-dark">Donate now</Link>
        </div>
      </section>
    </>
  );
}
