import { notFound } from "next/navigation";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { getBlogBySlug, getRecentBlogs, blogs } from "@/data/blogs";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return blogs.map((b) => ({ id: String(b.id) }));
}

export async function generateMetadata({ params }) {
  const p = getBlogBySlug(params.id);
  return p
    ? {
        title: `${p.title} | Pritha Health Care`,
        description: p.excerpt,
      }
    : {};
}

export default function BlogDetailPage({ params }) {
  const p = getBlogBySlug(params.id);
  if (!p) notFound();

  const recentBlogs = getRecentBlogs(p.id, 3);

  return (
    <>
      <PageBanner title="News & Articles" parent="Media" />

      <section className="bg-slate-50 py-12 md:py-16 overflow-hidden">
        <div className="container-x mx-auto px-4">
          
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium" data-aos="fade-up">
            <Link href="/" className="hover:text-[#dc2626] transition">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#dc2626] transition">Blog</Link>
            <span>/</span>
            <span className="text-slate-800 truncate max-w-xs">{p.title}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Main Article Content */}
            <article data-aos="fade-up" className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
              
              {/* Category & Date Header */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                <span className="rounded-full bg-[#dc2626]/10 px-3 py-1 font-bold text-[#dc2626] uppercase tracking-wider">
                  {p.category}
                </span>
                <span>•</span>
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-2xl sm:text-4xl font-bold leading-tight text-[#122336]">
                {p.title}
              </h1>

              {/* Author Info Bar */}
              <div className="my-6 flex items-center gap-3.5 border-y border-slate-100 py-3.5">
                <div className="h-11 w-11 rounded-full bg-[#122336] text-white flex items-center justify-center font-bold text-base shadow-sm">
                  {p.author.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-tight">{p.author.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{p.author.role}</p>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative my-8 overflow-hidden rounded-xl bg-slate-100 shadow-sm max-h-[460px]">
                <Photo
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lead Excerpt Callout */}
              <div className="mb-8 rounded-xl border-l-4 border-[#dc2626] bg-[#fef2f2] p-5 text-base sm:text-lg italic text-slate-700 leading-relaxed font-body">
                "{p.excerpt}"
              </div>

              {/* Article Paragraphs */}
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-slate-700 font-body">
                {p.content.split(/\n\s*\n/).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Tags Section */}
              {p.tags && p.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-slate-200">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 hover:bg-[#dc2626]/10 hover:text-[#dc2626] transition"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blogs Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 text-sm font-bold text-slate-700 hover:border-[#dc2626] hover:text-[#dc2626] transition"
                >
                  &larr; Back to all articles
                </Link>
                <Link
                  href="/donate"
                  className="btn !px-5 !py-2 text-sm"
                >
                  Support This Cause &rarr;
                </Link>
              </div>

            </article>

            {/* Sidebar */}
            <aside data-aos="fade-left" className="lg:col-span-4 space-y-8">
              
              {/* Mission Support Card */}
              <div className="rounded-2xl bg-[#122336] p-6 text-white shadow-md">
                <span className="rounded bg-[#dc2626] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Get Involved
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">
                  Help Us Restore Smiles & Vision
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                  Your tax-exempt contribution directly sponsors life-changing surgeries and prosthetic aids for rural patients in Moradabad.
                </p>
                <Link
                  href="/donate"
                  className="mt-5 block w-full rounded-full bg-[#dc2626] py-2.5 text-center text-sm font-bold text-white shadow hover:bg-[#b91c1c] transition"
                >
                  Donate Today &rarr;
                </Link>
              </div>

              {/* Recent Articles Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h3 className="font-display text-lg font-bold text-[#122336] border-b border-slate-100 pb-3">
                  Recent Stories
                </h3>
                <div className="mt-4 space-y-5">
                  {recentBlogs.map((item) => (
                    <article key={item.id} className="flex gap-3.5 items-start group">
                      <div className="h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                        <Photo
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#dc2626] uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h4 className="font-display text-xs sm:text-sm font-bold leading-snug text-[#122336] group-hover:text-[#dc2626] transition line-clamp-2 mt-0.5">
                          <Link href={`/blog/${item.id}`}>
                            {item.title}
                          </Link>
                        </h4>
                        <time className="text-[10px] text-slate-400 mt-1 block">{item.date}</time>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

            </aside>

          </div>

        </div>
      </section>
    </>
  );
}
