"use client"

import React from 'react'
import { useLanguage } from './LanguageProvider';
import Link from 'next/link';

const Hero = () => {
    const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080808]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl sm:h-[28rem] sm:w-[28rem]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
          [background-size:60px_60px]
          sm:[background-size:70px_70px]
        "
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center rounded-full border border-indigo-400/15 bg-indigo-500/[0.06] px-4 py-2 text-xs font-medium text-indigo-300">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {t.hero.badge}
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.hero.title1}
            <br />
            <span className="text-indigo-400">{t.hero.title2}</span>
            <br />
            {t.hero.title3}
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/all-articles"
              className="rounded-xl bg-indigo-500 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400"
            >
              {t.hero.exploreArticles} →
            </Link>

            <Link
              href="/all-articles"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-center text-sm font-semibold text-gray-300 transition duration-300 hover:bg-white/[0.07] hover:text-white"
            >
              {t.hero.exploreTopics}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
            <div>
              <p className="text-xl font-semibold text-white">8+</p>
              <p className="mt-1 text-xs text-gray-500">
                {t.hero.topics}
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white">10+</p>
              <p className="mt-1 text-xs text-gray-500">
                {t.hero.articles}
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-white">∞</p>
              <p className="mt-1 text-xs text-gray-500">
                {t.hero.ideas}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero
