"use client";

import Link from "next/link";
import { urlFor } from "../lib/sanityClient";
import { useLanguage } from "./LanguageProvider";

const ArticleCard = ({ post }) => {
  const { t } = useLanguage();

  const formatCategory = (category) => {
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
  };

  return (
    <Link
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
            {formatCategory(post.category)}
          </span>
        </div>

        <h2 className="mt-3 line-clamp-2 text-xl font-semibold leading-tight text-white transition group-hover:text-indigo-300">
          {post.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {post.description}
        </p>

        {post.publishedAt && (
          <p className="mt-5 text-xs text-gray-600">
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ArticleCard;
