"use client";

import { useMemo, useState } from "react";

import ArticleCard from "./ArticleCard";
import { useLanguage } from "./LanguageProvider";

const ArticleFilters = ({ posts }) => {
  const { t } = useLanguage();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = [
    { label: t.allArticles.all, value: "all" },
    { label: t.topics.technology, value: "technology" },
    { label: t.topics.movies, value: "movies" },
    { label: t.topics.gaming, value: "gaming" },
    { label: t.topics.ai, value: "ai" },
    { label: t.topics.appsMobile, value: "apps-mobile" },
    { label: t.topics.sports, value: "sports" },
    { label: t.topics.internet, value: "internet" },
    { label: t.topics.trending, value: "trending" },
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === "all" || post.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, category]);

  return (
    <div>
      {/* Search + Categories */}
      <div className="mb-8 space-y-5">
        <input
          type="text"
          placeholder={t.allArticles.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-indigo-400/40"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setCategory(item.value)}
              className={`rounded-lg border px-4 py-2 text-sm transition ${
                category === item.value
                  ? "border-indigo-400/30 bg-indigo-500/15 text-indigo-300"
                  : "border-white/10 bg-white/[0.03] text-gray-400 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result Count */}
      <p className="mb-6 text-sm text-gray-500">
        {filteredPosts.length}{" "}
        {filteredPosts.length === 1
          ? t.allArticles.articleFound
          : t.allArticles.articlesFound}
      </p>

      {/* Articles */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
          <p className="text-gray-400">{t.allArticles.noArticles}</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticleFilters