"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.08] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            {t.cta.label}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.cta.title1}
            <br />
            <span className="text-indigo-400">{t.cta.title2}</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            {t.cta.description}
          </p>

          <Link
            href="/all-articles"
            className="mt-8 inline-flex rounded-xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400"
          >
            {t.cta.button} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
