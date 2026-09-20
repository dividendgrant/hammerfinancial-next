import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "Post Not Found" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });

  return (
    <>
      <section className="bg-[#0A2279] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/insights/" className="text-blue-300 text-sm hover:text-white transition-colors mb-4 inline-block">
            ← Back to Insights
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{post.title}</h1>
          <p className="text-blue-300 text-sm">{formatted}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {post.image && (
            <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-gray-100 mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}
          <article className="prose prose-gray max-w-none">
            {post.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-5 text-lg">{p}</p>
            ))}
          </article>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/insights/" className="text-[#0057AD] font-medium hover:underline text-sm">
              ← Back to Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
