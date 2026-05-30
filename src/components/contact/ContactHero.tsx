"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { BannerItem } from "@/components/sanity-client";

const DEFAULT_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDdMK8kBEk5ftdKOezCFQlG5Sf5IAw_Yr17nhhGyytTxkZeEzXTOAfPZs4b9wSbFpxXTrJ02sMitxE77CUnrNDiJ6NGhaIDZnRViVy2QgX04_cRWi146d_TAd4E0gsjWJvBZLWD7YDtf2fpFRyQ17WXKGFuwe_bLfIwoyAr4svhjfo_Q9RgisoCZB5r0R-TtdvERYj8x4eLBh_HBy_yUhu3ZRZAzqb3pdLuQ59C6eJovHhRqtDzGwzHAJOalDPqjYV8Al5GxnBWo__s";

export default function ContactHero({
  heading = "Liên Hệ",
  subtext = "Kết nối cùng không gian tinh bản",
  imageUrl,
}: BannerItem) {
  const src = imageUrl || DEFAULT_IMAGE;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-neutral-900"
      >
        <Image
          src={src}
          alt={heading || "Contact banner"}
          fill
          priority
          className="object-cover grayscale opacity-40"
        />
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
