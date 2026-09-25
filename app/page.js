import { client, urlFor } from "./lib/sanityClient";
import Hero from "./components/Hero";
import FeaturedArticle from "./components/FeaturedArticle";
import LatestArticles from "./components/LatestArticles";
import CTA from "./components/CTA";
import Topics from "./components/Topics";

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    description,
    image,
    publishedAt,
    slug,
    category
  }`;

  return await client.fetch(query);
}

export default async function Home() {
  const posts = await getPosts();

  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Grid - Same style as Hero */}
        <div
          className="
            absolute inset-0
            opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:60px_60px]
            sm:[background-size:70px_70px]
          "
        />

        {/* Blue / Indigo Glow - Left */}
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

        {/* Purple Glow - Right */}
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

        {/* Blue Glow - Middle */}
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

        {/* Purple Glow - Bottom */}
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
          ALL WEBSITE CONTENT
      ===================================================== */}

      <div className="relative z-10">
        {/* =====================================================
            HERO
        ===================================================== */}

        <Hero />

        {/* =====================================================
            FEATURED ARTICLE
        ===================================================== */}

        <FeaturedArticle post={featuredPost} />

        {/* =====================================================
            LATEST ARTICLES
        ===================================================== */}

        <LatestArticles posts={latestPosts} />

        {/* =====================================================
            TOPICS
        ===================================================== */}

        <Topics />

        {/* =====================================================
            CTA
        ===================================================== */}

        <CTA />
      </div>
    </main>
  );
}
