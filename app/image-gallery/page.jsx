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
        {items.length === 0 ? (
          <p className="text-slate-600 text-center py-8">No images yet. Add them from the admin panel.</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {items.map((g, idx) => (
              <figure
                key={g.id}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 80}
              >
                <div className="overflow-hidden">
                  <Photo
                    src={g.url}
                    alt={g.caption || "Gallery image"}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {g.caption && (
                  <figcaption className="bg-white px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 border-t border-slate-100">
                    {g.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
