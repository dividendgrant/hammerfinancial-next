import Link from "next/link";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Insights" };

export default function NewsPage() {
  return (
    <>
      <section className="bg-[#0A2279] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-3">Crypto Insights</h1>
          <p className="text-blue-200 text-lg">Analysis, strategy, and market perspectives from the Hammer Financial team.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {posts.map((post) => {
              const formatted = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              });
              return (
                <article key={post.slug} className="border-b border-gray-100 pb-8 last:border-0">
                  <p className="text-xs text-gray-400 mb-2">{formatted}</p>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href={`/news/${post.slug}/`} className="hover:text-[#0057AD] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-3">{post.excerpt}</p>
                  <Link href={`/news/${post.slug}/`} className="text-sm text-[#0057AD] font-medium hover:underline">
                    Read more →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
