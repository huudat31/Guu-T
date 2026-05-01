"use client";

import BlogCard from "./BlogCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  summary: string;
  image: string;
}

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 stagger-children">
        {posts.map((post) => (
          <div key={post._id} className="animate-fade-in-up">
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {/* Pagination (Static for now) */}
      {posts.length > 6 && (
        <div className="mt-20 md:mt-32 flex justify-center items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface hover:border-secondary transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            <button className="w-12 h-12 flex items-center justify-center bg-secondary text-on-secondary font-sans text-xs">
              1
            </button>
          </div>
          <button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface hover:border-secondary transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </main>
  );
}
