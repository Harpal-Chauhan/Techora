"use client";

import Link from "next/link";
import { urlFor } from "../lib/sanityClient";
import { useLanguage } from "./LanguageProvider";

const formatCategory = (category) => {
  const categories = {
    technology: "Technology",
    movies: "Movies",
    gaming: "Gaming",
    ai: "AI",
    "apps-mobile": "Apps & Mobile",
    sports: "Sports",
    internet: "Internet",
    trending: "Trending",
  };

  return categories[category] || "General";
};

const FeaturedArticle = ({ post }) => {
  const { t } = useLanguage();

  if (!post) {
    return null;
  }

  return (
    <section id="featured" className="relative border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Section Heading */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            {t.featured.label}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.featured.title}
          </h2>
        </div>

        {/* Featured Card */}
        <Link
          href={`/blog/${post.slug.current}`}
          className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:border-indigo-400/30 hover:bg-white/[0.05] lg:grid-cols-2"
        >
          {/* Image */}
          {post.image ? (
            <div className="overflow-hidden">
              <img
                src={urlFor(post.image).width(1200).height(700).url()}
                alt={post.title}
                className="h-full min-h-[280px] w-full object-cover transition duration-500 group-hover:scale-105 sm:min-h-[360px]"
              />
            </div>
          ) : (
            <div className="flex min-h-[280px] items-center justify-center bg-white/[0.04] text-sm text-gray-600 sm:min-h-[360px]">
              No Image
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                {formatCategory(post.category)}
              </span>

              <span className="text-xs text-gray-600">•</span>

              <span className="text-xs text-gray-600">
                {t.featured.latestStory}
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold leading-tight text-white transition group-hover:text-indigo-300 sm:text-3xl lg:text-4xl">
              {post.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              {post.description}
            </p>

            <div className="mt-7">
              <span className="inline-flex items-center text-sm font-semibold text-indigo-400 transition group-hover:translate-x-1">
                {t.featured.readArticle} →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticle;
