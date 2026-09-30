import PageBanner from "@/components/PageBanner";
import { prisma } from "@/lib/prisma";
import { safe, youtubeId } from "@/lib/safe";

export const metadata = { title: "Video Gallery" };
export const dynamic = "force-dynamic";

export default async function VideoGallery() {
  const items = await safe(() => prisma.galleryItem.findMany({ where: { type: "VIDEO" }, orderBy: { createdAt: "desc" } }), []);
  const videos = items.map((v) => ({ ...v, yt: youtubeId(v.url) })).filter((v) => v.yt);
  return (
    <>
      <PageBanner title="Video Gallery" parent="Media" />
      <section className="container-x py-14">
        {videos.length === 0 ? <p className="text-slate-600">No videos yet. Add YouTube links from the admin panel.</p> : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <figure key={v.id}>
                <div className="aspect-video overflow-hidden rounded-lg bg-black">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.yt}`}
                    title={v.caption || "Video"}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {v.caption && <figcaption className="mt-2 text-slate-600">{v.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
