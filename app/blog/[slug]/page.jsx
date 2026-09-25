"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { client, urlFor } from "@/app/lib/sanityClient";

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    description,
    image,
    content,
    publishedAt,
    category
  }`;

  return client.fetch(query, { slug });
}

function formatCategory(category, t) {
  if (!category) {
    return "General";
  }

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

  return categories[category] || category;
}

export default function Page() {
  const params = useParams();
  const { t, language } = useLanguage();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const slug = params?.slug;

  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        return;
      }

      try {
        setLoading(true);

        const data = await getPost(slug);

        setPost(data);
      } catch (error) {
        console.error("Failed to load article:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="
              absolute inset-0
              opacity-[0.06]
              [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
              [background-size:60px_60px]
              sm:[background-size:70px_70px]
            "
          />

          <div className="absolute -left-40 top-[8%] h-80 w-80 rounded-full bg-indigo-500/[0.14] blur-[110px] sm:h-[28rem] sm:w-[28rem]" />

          <div className="absolute -right-40 top-[30%] h-80 w-80 rounded-full bg-purple-500/[0.14] blur-[120px] sm:h-[30rem] sm:w-[30rem]" />

          <div className="absolute left-[35%] top-[55%] h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[120px] sm:h-96 sm:w-96" />

          <div className="absolute right-[20%] bottom-[-10%] h-80 w-80 rounded-full bg-purple-600/[0.08] blur-[120px]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-indigo-400" />

            <p className="mt-4 text-sm text-gray-500">Loading article...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="
              absolute inset-0
              opacity-[0.06]
              [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
              [background-size:60px_60px]
              sm:[background-size:70px_70px]
            "
          />

          <div className="absolute -left-40 top-[8%] h-80 w-80 rounded-full bg-indigo-500/[0.14] blur-[110px] sm:h-[28rem] sm:w-[28rem]" />

          <div className="absolute -right-40 top-[30%] h-80 w-80 rounded-full bg-purple-500/[0.14] blur-[120px] sm:h-[30rem] sm:w-[30rem]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
          <div className="max-w-md text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              404
            </p>

            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Article Not Found
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              The article you are looking for could not be found.
            </p>

            <Link
              href="/"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-indigo-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-indigo-400
              "
            >
              {t.nav.home}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const categoryName = formatCategory(post.category, t);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString(
        language === "gu" ? "gu-IN" : language === "hi" ? "hi-IN" : "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        },
      )
    : null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:60px_60px]
            sm:[background-size:70px_70px]
          "
        />

        {/* Indigo / Blue Glow */}
        <div
          className="
            absolute
            -left-40
            top-[8%]
            h-80
            w-80
            rounded-full
            bg-indigo-500/[0.14]
            blur-[110px]
            sm:h-[28rem]
            sm:w-[28rem]
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            -right-40
            top-[30%]
            h-80
            w-80
            rounded-full
            bg-purple-500/[0.14]
            blur-[120px]
            sm:h-[30rem]
            sm:w-[30rem]
          "
        />

        {/* Blue Middle Glow */}
        <div
          className="
            absolute
            left-[35%]
            top-[55%]
            h-72
            w-72
            rounded-full
            bg-blue-500/[0.08]
            blur-[120px]
            sm:h-96
            sm:w-96
          "
        />

        {/* Bottom Purple Glow */}
        <div
          className="
            absolute
            right-[20%]
            bottom-[-10%]
            h-80
            w-80
            rounded-full
            bg-purple-600/[0.08]
            blur-[120px]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">
        {/* =====================================================
            ARTICLE HERO
        ===================================================== */}

        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="
              mx-auto
              max-w-5xl
              px-5
              pb-16
              pt-7
              sm:px-6
              sm:pb-20
              sm:pt-10
              lg:pb-24
              lg:pt-12
            "
          >
            {/* Back Button */}
            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-xs
                font-medium
                text-gray-400
                backdrop-blur
                transition
                duration-300
                hover:border-white/20
                hover:bg-white/[0.08]
                hover:text-white
                sm:text-sm
              "
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              {t.nav.home}
            </Link>

            {/* Category */}
            <div className="mt-10 flex items-center gap-3 sm:mt-14">
              <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_14px_rgba(129,140,248,0.8)]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
                {categoryName}
              </p>
            </div>

            {/* Title */}
            <h1
              className="
                mt-5
                max-w-4xl
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.035em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              {post.title}
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-3xl
                text-sm
                leading-7
                text-gray-400
                sm:mt-7
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              {post.description}
            </p>

            {/* Date */}
            {formattedDate && (
              <div className="mt-7 flex items-center gap-3 text-xs text-gray-600 sm:mt-8 sm:text-sm">
                <span className="h-px w-7 bg-gray-700 sm:w-8" />

                <span>
                  {language === "gu"
                    ? "પ્રકાશિત"
                    : language === "hi"
                      ? "प्रकाशित"
                      : "Published on"}{" "}
                  {formattedDate}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            FEATURE IMAGE
        ===================================================== */}

        {post.image && (
          <section className="relative mx-auto max-w-6xl px-5 sm:px-6">
            <div
              className="
                relative
                -mt-6
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#111]
                shadow-2xl
                shadow-black/40
                sm:-mt-10
                sm:rounded-3xl
              "
            >
              <img
                src={urlFor(post.image).width(1600).height(900).url()}
                alt={post.title}
                className="
                  aspect-[16/9]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-[1.02]
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.03]" />
            </div>
          </section>
        )}

        {/* =====================================================
            ARTICLE CONTENT
        ===================================================== */}

        <article
          className="
            mx-auto
            max-w-3xl
            px-5
            pb-16
            pt-14
            sm:px-6
            sm:pb-24
            sm:pt-20
          "
        >
          {/* Article Label */}
          <div className="mb-10 flex items-center gap-3">
            <span className="h-8 w-1 rounded-full bg-white/80" />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 sm:text-xs">
                {categoryName}{" "}
                {language === "gu"
                  ? "લેખ"
                  : language === "hi"
                    ? "लेख"
                    : "Article"}
              </p>

              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                {language === "gu"
                  ? "સંપૂર્ણ સ્ટોરી જુઓ"
                  : language === "hi"
                    ? "पूरी स्टोरी देखें"
                    : "Explore the complete story"}
              </p>
            </div>
          </div>

          {/* Sanity Content */}
          {post.content && (
            <div
              className="
                prose
                prose-invert
                max-w-none

                prose-headings:font-bold
                prose-headings:tracking-tight
                prose-headings:text-white

                prose-h2:mt-12
                prose-h2:text-2xl
                sm:prose-h2:text-3xl

                prose-h3:mt-10
                prose-h3:text-xl
                sm:prose-h3:text-2xl

                prose-p:text-gray-400
                prose-p:leading-8

                prose-a:font-semibold
                prose-a:text-white
                prose-a:no-underline
                hover:prose-a:text-gray-300

                prose-strong:text-white

                prose-li:text-gray-400
                prose-li:leading-7

                prose-blockquote:border-l-white/30
                prose-blockquote:text-gray-400
              "
            >
              <PortableText value={post.content} />
            </div>
          )}
        </article>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="relative overflow-hidden border-t border-white/10">
          {/* CTA Glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-indigo-500/[0.10]
              blur-3xl
              sm:h-80
              sm:w-80
            "
          />

          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-[#0d0d0d]/90
                px-6
                py-12
                text-center
                shadow-2xl
                shadow-black/30
                backdrop-blur
                sm:px-10
                sm:py-16
              "
            >
              {/* Small Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-48
                  w-48
                  -translate-x-1/2
                  rounded-full
                  bg-purple-500/[0.10]
                  blur-3xl
                "
              />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 sm:text-xs">
                  {language === "gu"
                    ? "વધુ એક્સપ્લોર કરો"
                    : language === "hi"
                      ? "एक्सप्लोर करते रहें"
                      : "Keep Exploring"}
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {language === "gu"
                    ? "આ લેખ ગમ્યો?"
                    : language === "hi"
                      ? "यह लेख पसंद आया?"
                      : "Enjoyed this article?"}
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                  {language === "gu"
                    ? "ડિજિટલ દુનિયામાં થઈ રહેલી ટેક્નોલોજી, ગેમિંગ, મૂવીઝ, AI અને અન્ય રસપ્રદ સ્ટોરીઝ શોધો."
                    : language === "hi"
                      ? "डिजिटल दुनिया में हो रही टेक्नोलॉजी, गेमिंग, मूवीज़, AI और अन्य दिलचस्प स्टोरीज़ खोजें।"
                      : "Discover more stories, ideas, technology, gaming, movies, AI and everything happening in the digital world."}
                </p>

                <Link
                  href="/#latest"
                  className="
                    mt-8
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-black
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:bg-gray-200
                    sm:w-auto
                  "
                >
                  {language === "gu"
                    ? "વધુ લેખો જુઓ"
                    : language === "hi"
                      ? "और लेख देखें"
                      : "Explore More Articles"}

                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
