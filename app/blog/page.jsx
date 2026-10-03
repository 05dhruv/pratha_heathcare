"use client";

import { useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Photo from "@/components/Photo";
import { blogs, blogCategories } from "@/data/blogs";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((b) => {
    const matchesCategory =
      selectedCategory === "All" || b.category === selectedCategory;
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs[0];

  return (
    <>
      <PageBanner title="News & Articles" parent="Media" />

      {/* Main Blog Section */}
      <section className="bg-slate-50 py-12 md:py-16 overflow-hidden">
        <div className="container-x mx-auto px-4">
          
          {/* Section Heading & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
            <span className="inline-block px-3 py-1 bg-[#dc2626]/10 text-[#dc2626] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              Insights & Field Stories
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-[#122336] tracking-tight">
              Stories of Hope & Healing
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 font-body leading-relaxed">
              Explore the latest updates on free eye surgeries, disability rehabilitation camps, and community initiatives by Pritha Health Care.
            </p>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="mb-12 space-y-4" data-aos="fade-up" data-aos-delay="100">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-11 pr-4 text-sm text-slate-700 shadow-sm focus:border-[#dc2626] focus:outline-none focus:ring-2 focus:ring-[#dc2626]/20 transition"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Pills */}
            <div className="flex flex-nowrap sm:flex-wrap items-center sm:justify-center gap-2 overflow-x-auto scrollbar-none py-1 px-1">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer flex-shrink-0 active:scale-95 ${
                    selectedCategory === cat
                      ? "bg-[#dc2626] text-white shadow-md shadow-red-900/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#dc2626] hover:text-[#dc2626]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post (only show if 'All' category and no active search) */}
          {selectedCategory === "All" && !searchQuery && featuredBlog && (
            <div className="mb-14" data-aos="fade-up" data-aos-delay="150">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200/80 transition hover:shadow-xl lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-slate-100">
                  <Photo
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-[#dc2626] px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow">
                    Featured Story
                  </span>
                </div>
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-[#dc2626]">{featuredBlog.category}</span>
                      <span>•</span>
                      <span>{featuredBlog.readTime}</span>
                      <span>•</span>
                      <span>{featuredBlog.date}</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold leading-snug text-[#122336] hover:text-[#dc2626] transition">
                      <Link href={`/blog/${featuredBlog.id}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 line-clamp-3 font-body">
                      {featuredBlog.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-[#122336] text-white flex items-center justify-center font-bold text-sm">
                        {featuredBlog.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-none">{featuredBlog.author.name}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{featuredBlog.author.role}</p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredBlog.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#dc2626] hover:text-[#b91c1c] transition group"
                    >
                      Read Story
                      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Cards Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8 max-w-lg mx-auto">
              <span className="text-4xl">🔍</span>
              <h3 className="mt-3 font-display text-xl font-bold text-slate-800">No articles found</h3>
              <p className="mt-1 text-sm text-slate-500">
                Try searching with different keywords or switch the category filter.
              </p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 rounded-full bg-[#dc2626] px-4 py-2 text-xs font-bold text-white hover:bg-[#b91c1c] transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((b, idx) => (
                <article
                  key={b.id}
                  data-aos="fade-up"
                  data-aos-delay={(idx % 3) * 120}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Card Thumbnail */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Photo
                      src={b.image}
                      alt={b.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="rounded bg-[#122336]/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow backdrop-blur-sm">
                        {b.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      {/* Meta info */}
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                        <span>{b.date}</span>
                        <span>•</span>
                        <span>{b.readTime}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg font-bold leading-snug text-[#122336] group-hover:text-[#dc2626] transition line-clamp-2">
                        <Link href={`/blog/${b.id}`}>
                          {b.title}
                        </Link>
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-2 text-sm text-slate-600 line-clamp-3 font-body leading-relaxed">
                        {b.excerpt}
                      </p>
                    </div>

                    {/* Author & Read More Link */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="h-7 w-7 rounded-full bg-[#dc2626]/10 text-[#dc2626] flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {b.author.name.charAt(0)}
                        </div>
                        <span className="text-xs text-slate-600 truncate">{b.author.name}</span>
                      </div>
                      <Link
                        href={`/blog/${b.id}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] transition group-hover:underline flex-shrink-0"
                      >
                        Read more
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom Donate Banner */}
          <div
            className="mt-16 rounded-2xl bg-gradient-to-r from-[#122336] to-[#1e3a5f] p-8 md:p-12 text-center text-white shadow-lg"
            data-aos="fade-up"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wider">
              Want to support our healthcare missions?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-slate-300 font-body leading-relaxed">
              Every donation funds life-changing eye surgeries, prosthetics, and mobile healthcare clinics for families in need.
            </p>
            <div className="mt-6">
              <Link href="/donate" className="btn !px-8 !py-3 text-base shadow-md hover:scale-105 transition">
                Donate Now &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
