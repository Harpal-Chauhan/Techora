"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const topics = [
  {
    key: "technology",
    icon: "💻",
    value: "technology",
  },
  {
    key: "movies",
    icon: "🎬",
    value: "movies",
  },
  {
    key: "gaming",
    icon: "🎮",
    value: "gaming",
  },
  {
    key: "ai",
    icon: "🤖",
    value: "ai",
  },
  {
    key: "appsMobile",
    icon: "📱",
    value: "apps-mobile",
  },
  {
    key: "sports",
    icon: "⚽",
    value: "sports",
  },
  {
    key: "internet",
    icon: "🌐",
    value: "internet",
  },
  {
    key: "trending",
    icon: "🔥",
    value: "trending",
  },
];

const Topics = () => {
  const { t } = useLanguage();

  return (
    <section id="topics" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            {t.hero.exploreTopics}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.topics.technology} & More
          </h2>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={topic.value}
              href={`/all-articles?category=${topic.value}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl transition duration-300 group-hover:border-indigo-400/20 group-hover:bg-indigo-500/10">
                {topic.icon}
              </div>

              <h3 className="mt-4 text-base font-semibold text-white transition group-hover:text-indigo-300">
                {t.topics[topic.key]}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {t.latest.readArticle} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Topics