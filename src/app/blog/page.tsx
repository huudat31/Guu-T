"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { client } from "@/components/sanity-client";

interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  publishedAt: string;
  summary: string;
  image: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          *[_type == "post"] | order(publishedAt desc){
            _id,
            title,
            "slug": slug.current,
            category,
            publishedAt,
            "summary": coalesce(summary, description),
            "image": heroImage.asset->url
          }
        `;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjabgOgdZZdUxX1CPTC7EHH7nPBBL-_4t3NP7qKZE_ic2j4fXvJa3QPyfm4LG2Ghruy7ZVmmt-dvZEHHffCUIQRBUQvIn0S5jniXcMBQehFscgF3h0j1EIR-CkSKy5aEzI_GAt9YFV1du2n98nza1h0JocqP60lwbZqBq9S59_9cWQuRSUNPzSrBOBMhHfDxznfCPAhyVCUm2ApI5Qz2BxcDy209GRZ0Fu5jxtrQ26-FxTjYIzEYMpuO" alt="Luxury Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/40" />
        </motion.div>
        <div className="relative z-10 text-center max-w-4xl px-8">
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="font-sans text-secondary mb-6 tracking-[0.4em] text-xs uppercase">
            Visions & Narratives
          </motion.p>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="font-sans font-light text-5xl md:text-7xl text-white mb-8">
            Blog & Tin Tức
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1 }} className="w-24 h-px bg-secondary mx-auto" />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-slate-400 opacity-60">Khám Phá</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="text-secondary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Articles */}
      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="wait">
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={`skeleton-${i}`} className="h-[450px] bg-gray-800 rounded-xl animate-pulse" />
              ))
            ) : (
              posts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="glass-card group overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-secondary text-on-secondary px-4 py-1 font-sans text-[10px] tracking-widest uppercase">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <p className="font-sans text-[10px] text-on-surface-variant mb-4 tracking-widest uppercase">
                      {new Date(post.publishedAt).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                    <h3 className="font-sans text-xl font-light text-on-surface mb-4 group-hover:text-secondary transition-colors duration-300">{post.title}</h3>
                    <p className="font-sans text-on-surface-variant text-sm leading-relaxed line-clamp-3 mb-8">{post.summary}</p>
                    <div className="mt-auto">
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 font-sans text-secondary text-[10px] tracking-widest uppercase hover:gap-4 transition-all">
                        ĐỌC TIẾP <MoveRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Pagination (Static for now) */}
        {!loading && posts.length > 6 && (
          <div className="mt-20 md:mt-32 flex justify-center items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface hover:border-secondary transition-colors"><ChevronLeft size={18} /></button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 flex items-center justify-center bg-secondary text-on-secondary font-sans text-xs">1</button>
            </div>
            <button className="w-12 h-12 flex items-center justify-center border border-white/10 text-on-surface hover:border-secondary transition-colors"><ChevronRight size={18} /></button>
          </div>
        )}
      </main>

      {/* Newsletter */}
      <section className="bg-surface-container-low py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-sans font-light text-3xl md:text-5xl text-on-surface mb-8">Đăng Ký Nhận Bản Tin</h2>
            <p className="font-sans text-on-surface-variant mb-12">Cập nhật những xu hướng thiết kế mới nhất và các sự kiện độc quyền dành riêng cho giới thượng lưu.</p>
            <form className="flex flex-col md:flex-row gap-6 md:gap-0" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-1 border-b border-white/20 focus-within:border-secondary transition-colors pb-1">
                <input className="w-full bg-transparent border-none py-4 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-0 font-sans" placeholder="Địa chỉ email của bạn" type="email" />
              </div>
              <button className="bg-secondary text-on-secondary px-12 py-4 font-sans text-[10px] tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all whitespace-nowrap">
                ĐĂNG KÝ
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
