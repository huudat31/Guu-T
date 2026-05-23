"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { IMAGES } from "@/lib/images";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero[0]}
          alt="Luxury Interior"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/80" />
      </div>

      <div className="relative z-10 space-y-8 px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-light tracking-tight text-white max-w-4xl mx-auto"
        >
          Thiết kế không gian vượt thời gian
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Nâng tầm trải nghiệm con người thông qua sự chính xác kiến trúc và câu chuyện nội thất được tuyển chọn.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 z-20 text-brand-gold cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <ChevronsDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
