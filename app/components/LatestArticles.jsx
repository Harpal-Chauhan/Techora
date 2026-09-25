"use client";

import Link from "next/link";
import { urlFor } from "../lib/sanityClient";
import { useLanguage } from "./LanguageProvider";

const formatCategory = (category, t) => {
  const categories = {
    technology: t.topics.technology,
    movies: t.topics.movies,
    gaming: t.topics.gaming,
    ai: t.topics.ai,
    "apps-mobile": t.topics.appsMobile,
    sports: t.topics.sports,
    internet: t.topics.internet,
    trending: t.topics.trending,
  };

  return categories[category] || "General";
}

const LatestArticles = ({ posts }) => {
  const { t } = useLanguage();

  return (
    <section id="latest" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              {t.latest.label}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.latest.title}
            </h2>
          </div>

          <Link
            href="/all-articles"
            className="text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
          >
            {t.latest.viewAll} →
          </Link>
        </div>

        {/* Articles */}
        {posts.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <p className="text-gray-400">{t.latest.noArticles}</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.055]"
              >
                {/* Image */}
                {post.image ? (
                  <div className="overflow-hidden">
                    <img
                      src={urlFor(post.image).width(800).height(450).url()}
                      alt={post.title}
                      className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-white/[0.04] text-sm text-gray-600">
                    No Image
                  </div>
                )}

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500">
                      {formatCategory(post.category, t)}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-xl font-semibold leading-tight text-white transition group-hover:text-indigo-300">
                    {post.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {post.description}
                  </p>

                  <div className="mt-5">
                    <span className="text-sm font-semibold text-indigo-400 transition group-hover:translate-x-1">
                      {t.latest.readArticle} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default LatestArticles