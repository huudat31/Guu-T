"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  summary: string;
  image: string;
}

const BlogCard = React.memo(({ post }: { post: Post }) => {
  return (
    <article className="glass-card group overflow-hidden flex flex-col gpu-accelerated h-full">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-secondary text-on-secondary px-4 py-1 font-sans text-[10px] tracking-widest uppercase">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <p className="font-sans text-[10px] text-on-surface-variant mb-4 tracking-widest uppercase">
          {new Date(post.publishedAt).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h3 className="font-sans text-xl font-light text-on-surface mb-4 group-hover:text-secondary transition-colors duration-300">
          {post.title}
        </h3>
        <p className="font-sans text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-8">
          {post.summary}
        </p>
        <div className="mt-auto">
          <Link
            href={`/news/${post.slug}`}
            className="inline-flex items-center gap-2 font-sans text-secondary text-[10px] tracking-widest uppercase hover:gap-4 transition-all"
          >
            ĐỌC TIẾP <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;
