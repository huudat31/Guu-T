"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { BannerItem } from "@/components/sanity-client";

export default function AboutHero({
  heading = "Về chúng tôi",
  subtext = "Định nghĩa đẳng cấp kiến trúc",
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDduP-QAyuf_x2JI-K5T2lMMwtasDnzgD8sB9FmUzJZUjE2wXfLMs9K9Ek9En8UtE0Tlc9R1yCYf-DZCZguxzFV0MUqejGezlvYM74crHOmw9jO2p0iOlJGQmrXcgXIDmN-Qi_91VD4Z3LR6XO8KMtqc773qhi_zFMq8g6vYgLuWNbAS3-vsMI1FQLwrspBjINIZcw2-R_0oQ6hQgbCQ8IdBV4ccAe-lzffpavIq5c6yHc1cpG-Slw7_YEPQItbRjERY95k6ihw11x4"
}: BannerItem) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-neutral-900"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={heading || "Banner ảnh"}
            fill
            priority
            className="object-cover brightness-50"
          />
        )}
        <div className="absolute inset-0 bg-slate-950/40" />
      </motion.div>
      <div className="relative z-10 text-center max-w-4xl px-8">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans text-secondary mb-6 tracking-[0.4em] text-xs uppercase"
        >
          {subtext}
        </motion.p>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-sans font-light text-5xl md:text-7xl text-white mb-8"
        >
          {heading}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-24 h-px bg-secondary mx-auto"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-slate-400 opacity-60">
          Khám Phá
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
