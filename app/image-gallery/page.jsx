import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";

export const metadata = { title: "Image Gallery" };
export const dynamic = "force-dynamic";

export default async function ImageGallery() {
  const items = await safe(() => prisma.galleryItem.findMany({ where: { type: "IMAGE" }, orderBy: { createdAt: "desc" } }), []);
  return (
    <>
      <PageBanner title="Image Gallery" parent="Media" />
      <section className="container-x py-14">
        {items.length === 0 ? <p className="text-slate-600">No images yet. Add them from the admin panel.</p> : (
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {items.map((g, idx) => (
              <figure key={g.id} className="mb-4 break-inside-avoid overflow-hidden rounded-lg" data-aos="zoom-in" data-aos-delay={(idx % 4) * 100}>
                <Photo src={g.url} alt={g.caption || "Gallery image"} className="w-full" />
                {g.caption && <figcaption className="bg-mist px-3 py-2 text-sm text-slate-600">{g.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
