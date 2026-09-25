"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  const topics = [
    { name: t.topics.technology, href: "/#topics" },
    { name: t.topics.ai, href: "/#topics" },
    { name: t.topics.gaming, href: "/#topics" },
    { name: t.topics.movies, href: "/#topics" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-indigo-500/10 bg-black text-white backdrop-blur-xl">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 py-14 sm:py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="group inline-block overflow-hidden rounded-2xl shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40">
                <img
                  src="/techOra.png"
                  alt="Techora"
                  className="h-10 w-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <span className="text-xl font-bold tracking-tight">
                Tech<span className="text-indigo-400">ora</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              {t.footer.description}
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/10 bg-indigo-500/5 px-3.5 py-2 text-xs text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              {t.hero.badge}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm font-semibold text-white">
              {t.footer.explore}
            </p>

            <div className="mt-5 space-y-3.5">
              <Link
                href="/"
                className="block text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-indigo-300"
              >
                {t.nav.home}
              </Link>

              <Link
                href="/#latest"
                className="block text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-indigo-300"
              >
                {t.footer.latestArticles}
              </Link>

              <Link
                href="/#topics"
                className="block text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-indigo-300"
              >
                {t.hero.exploreTopics}
              </Link>
            </div>
          </div>

          {/* Popular Topics */}
          <div>
            <p className="text-sm font-semibold text-white">
              {t.footer.popularTopics}
            </p>

            <div className="mt-5 space-y-3.5">
              {topics.map((topic) => (
                <Link
                  key={topic.name}
                  href={topic.href}
                  className="block text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-indigo-300"
                >
                  {topic.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Techora. {t.footer.allRightsReserved}
          </p>

          <div className="flex items-center gap-3">
            <span>{t.footer.builtWith}</span>
            <span className="text-indigo-300">Next.js</span>
            <span className="text-indigo-500/40">×</span>
            <span className="text-indigo-300">Sanity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
