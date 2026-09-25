"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/75 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2.5"
        >
          <div className="group inline-block overflow-hidden rounded-2xl shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40">
            <img
              src="/techOra.png"
              alt="Techora"
              className="h-10 w-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Tech<span className="text-indigo-400">ora</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            {t.nav.home}
          </Link>

          <Link
            href="/#latest"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            {t.nav.latest}
          </Link>

          <Link
            href="/#topics"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            {t.nav.explore}
          </Link>

          <LanguageSwitcher />
        </div>

        {/* DESKTOP CTA */}
        <Link
          href="/all-articles"
          className="hidden rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 md:block"
        >
          {t.hero.exploreArticles} →
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#080808]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-2 px-5 py-4 sm:px-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            {t.nav.home}
          </Link>

          <Link
            href="/#latest"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            {t.nav.latest}
          </Link>

          <Link
            href="/#topics"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            {t.nav.explore}
          </Link>

          <Link
            href="/#featured"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition hover:bg-white/[0.06] hover:text-white"
          >
            {t.featured.label}
          </Link>

          <div className="pt-2">
            <LanguageSwitcher />
          </div>

          <Link
            href="/all-articles"
            onClick={() => setMenuOpen(false)}
            className="block rounded-xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            {t.hero.exploreArticles} →
          </Link>
        </div>
      </div>
    </header>
  );
}
