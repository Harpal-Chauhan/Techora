import Link from "next/link";
import { client } from "../lib/sanityClient";
import ArticleFilters from "../components/ArticleFilters";

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    category,
    publishedAt
  }`;

  return client.fetch(query);
}

export default async function AllArticlesPage() {
  const posts = await getPosts();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="
            absolute inset-0 opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
            [background-size:60px_60px]
            sm:[background-size:70px_70px]
          "
        />

        <div className="absolute -left-40 top-[8%] h-80 w-80 rounded-full bg-indigo-500/[0.14] blur-[110px] sm:h-[28rem] sm:w-[28rem]" />

        <div className="absolute -right-40 top-[30%] h-80 w-80 rounded-full bg-purple-500/[0.14] blur-[120px] sm:h-[30rem] sm:w-[30rem]" />

        <div className="absolute left-[35%] top-[55%] h-72 w-72 rounded-full bg-blue-500/[0.08] blur-[120px] sm:h-96 sm:w-96" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-400 transition hover:bg-white/[0.08] hover:text-white sm:text-sm"
            >
              ← Back to Home
            </Link>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Explore
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                All Articles
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Explore all the latest stories, ideas and interesting content
                from the digital world.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-14">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
              <p className="text-gray-400">No articles found.</p>
            </div>
          ) : (
            <ArticleFilters posts={posts} />
          )}
        </section>
      </div>
    </main>
  );
}
