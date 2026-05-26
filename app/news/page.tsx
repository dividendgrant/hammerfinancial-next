import Image from "next/image";
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {posts.map((post) => {
              const formatted = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              });
              return (
                <Link key={post.slug} href={`/news/${post.slug}/`} className="group flex gap-6 border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow bg-white">
                  <div className="relative w-48 sm:w-64 shrink-0">
                    {post.image ? (
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-[#0057AD]/10 flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#0057AD]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="py-6 pr-6 flex flex-col justify-center">
                    <p className="text-xs text-gray-400 mb-2">{formatted}</p>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#0057AD] transition-colors mb-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                    <span className="mt-3 text-sm text-[#0057AD] font-medium">Read more →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
