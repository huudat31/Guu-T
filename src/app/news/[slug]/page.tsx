import { cachedFetch } from "@/components/sanity-client";
import RichText from "@/components/blog/RichText";
import Link from "next/link";
import { Share2, Bookmark } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = `*[_type == "post" && slug.current == $slug][0]{ title, excerpt }`;
  const post = await cachedFetch(query, { slug });

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Guu & T`,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const query = `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "category": coalesce(category->title, categories[0]->title),
      publishedAt,
      "image": coalesce(heroImage.asset->url, mainImage.asset->url),
      body,
      excerpt
    }
  `;

  const post = await cachedFetch(query, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-neutral-900 flex flex-col">
        <div className="absolute inset-0 z-0">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale brightness-50"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        <div className="relative z-10 flex-grow flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <span className="text-secondary font-sans text-[10px] tracking-widest uppercase mb-6 block">
            {post.category || "Tin tức"} — {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("vi-VN", { month: "long", year: "numeric" }) : "Đang cập nhật"}
          </span>
          <h1 className="font-sans font-light text-5xl md:text-7xl text-white max-w-4xl leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="w-24 h-px bg-secondary mt-12 origin-left" />
        </div>
      </section>

      {/* Article */}
      <article className="relative py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {post.excerpt && (
            <p className="font-sans text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-16 font-light italic border-l-2 border-secondary/30 pl-8">
              {post.excerpt}
            </p>
          )}

          <div className="prose prose-invert max-w-none">
            <RichText value={post.body} />
          </div>

          <div className="flex justify-between items-center mt-32 pt-12 border-t border-white/5">
            <div className="flex items-center gap-6">
              <span className="font-sans text-secondary text-[10px] tracking-widest uppercase">SHARE</span>
              <Share2 size={14} className="text-slate-500 cursor-pointer hover:text-white transition-colors" />
              <Bookmark size={14} className="text-slate-500 cursor-pointer hover:text-white transition-colors" />
            </div>
            <span className="font-sans text-[10px] text-slate-500 tracking-widest uppercase">
              {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
            </span>
          </div>
        </div>
      </article>

      {/* Back to News */}
      <div className="text-center py-16 pb-32">
        <Link href="/news" className="inline-flex items-center gap-3 font-sans text-[10px] tracking-widest uppercase text-secondary border border-secondary/30 px-10 py-4 hover:border-secondary transition-colors">
          ← Quay Lại Tin Tức
        </Link>
      </div>
    </div>
  );
}
