import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { safe } from "@/lib/safe";
import { defaultSlides, defaultStats, defaultPosts, endeavors, site } from "@/lib/site";
import HeroSlider from "@/components/HeroSlider";
import MilestonesSection from "@/components/MilestonesSection";
import BlessingsCarousel from "@/components/BlessingsCarousel";
import Photo from "@/components/Photo";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [dbSlides, dbStats, dbPosts] = await Promise.all([
    safe(() => prisma.slide.findMany({ where: { active: true }, orderBy: { position: "asc" } }), []),
    safe(() => prisma.stat.findMany({ orderBy: { position: "asc" } }), []),
    safe(() => prisma.post.findMany({ where: { published: true }, orderBy: { postedAt: "desc" }, take: 3 }), []),
  ]);

  const slides = dbSlides && dbSlides.length > 0 ? dbSlides : defaultSlides;
  const stats = dbStats && dbStats.length > 0 ? dbStats : defaultStats;
  const posts = dbPosts && dbPosts.length > 0 ? dbPosts : defaultPosts;

  return (
    <>
      {/* 1. Hero Carousel */}
      <HeroSlider slides={slides} />

      {/* 2. About & Services Section */}
      <section id="about-section2" className="py-14 bg-white">
        <div className="container-x mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-4xl font-bold tracking-wide text-[#2c3e50] md:text-5xl uppercase">
              Pratha Healthcare
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700 font-body">
              Pratha Healthcare is one of the most trusted NGOs in India situated in Moradabad district of Uttar Pradesh. This is a National Awarded top charity organisation devoted for improving the ‘quality of life’ of the marginalised through its services in the domains of:
            </p>
          </div>
          <hr className="my-10 border-slate-200" />

          <div className="grid gap-8 md:grid-cols-2">
            {/* Eye Care */}
            <div className="flex gap-5 items-start">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center text-4xl text-[#2c3e50]">
                👁️
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#2c3e50]">Eye Care</h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Aiming to eradicate curable blindness and providing best eye care solutions by Restoring Gift of Vision to the communities in need.
                </p>
                <Link href="/eyecare" className="mt-2 inline-block text-sm font-semibold text-[#f39c12] hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            </div>

            {/* Rehabilitation of the Disabled */}
            <div className="flex gap-5 items-start">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center text-4xl text-[#2c3e50]">
                ♿
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#2c3e50]">Rehabilitation of the Disabled</h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Providing free Prosthetic and orthotic services including assistive devices to the amputees and disabled.
                </p>
                <Link href="/disability-care" className="mt-2 inline-block text-sm font-semibold text-[#f39c12] hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            </div>

            {/* Education for Children with Special Needs (CWSN) */}
            <div className="flex gap-5 items-start">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center text-4xl text-[#2c3e50]">
                🧒
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#2c3e50]">Education for Children with Special Needs (CWSN)</h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Special School for intellectual/developmental disabled, hearing and visually impaired children.
                </p>
                <Link href="/sambal-special-school" className="mt-2 inline-block text-sm font-semibold text-[#f39c12] hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Milestones Achieved Bar Charts */}
      <MilestonesSection stats={stats} />

      {/* 4. Our Endeavors */}
      <section id="project-section4" className="py-16 bg-white">
        <div className="container-x mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-[#2c3e50] md:text-4xl">
              OUR ENDEAVORS
            </h2>
            <h3 className="mt-3 text-base md:text-lg text-slate-600 font-body">
              Pratha Healthcare is the Best charity organisation in Moradabad operates in diverse thematic domains transforming the life of the marginalized people.
            </h3>
            <div className="mx-auto mt-4 h-1.5 w-32 bg-[#f39c12]" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {endeavors.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                className="group relative block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition"
              >
                <Photo
                  src={e.image}
                  alt={e.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Activities (News / Blogs) */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="container-x mx-auto px-4">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-[#2c3e50]">
              Activities
            </h2>
            <hr className="mt-2 h-1 w-20 bg-[#f39c12] border-0" />
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-600">No posts yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => {
                const dateObj = new Date(p.postedAt);
                const day = dateObj.getDate();
                const monthYear = dateObj.toLocaleDateString("en-IN", { month: "short", year: "2-digit" });

                return (
                  <article key={p.id} className="relative overflow-hidden rounded-lg bg-white shadow hover:shadow-md transition flex flex-col">
                    <div className="absolute top-3 left-3 z-10 rounded bg-[#2c3e50] px-3 py-1.5 text-center text-white shadow">
                      <h3 className="text-xl font-bold leading-none">{day}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider">{monthYear}</span>
                    </div>

                    <div className="h-56 w-full overflow-hidden bg-slate-200">
                      <Photo src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-display text-lg font-bold leading-snug text-[#2c3e50] line-clamp-2">
                          {p.title}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 line-clamp-3 font-body">
                          {p.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <Link
                          href={`/blog/${p.id}`}
                          className="text-sm font-semibold text-[#f39c12] hover:underline"
                        >
                          Read more...
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 6. Blessings & Support */}
      <BlessingsCarousel />
    </>
  );
}

