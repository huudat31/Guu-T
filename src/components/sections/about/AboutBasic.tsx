"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function AboutBanner() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Studio Banner"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand-bg" />
      </div>

      <div className="relative z-10 text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-brand-gold tracking-[0.4em] uppercase text-xs md:text-sm font-medium"
        >
          Established 2014
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-light text-white tracking-tighter"
        >
          ABOUT US
        </motion.h1>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}

export function AboutIntro() {
  return (
    <section className="section-padding bg-brand-bg">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-8" />
          <p className="text-2xl md:text-4xl font-light leading-relaxed text-white">
            “Guu & T is a creative interior brand, a combination of Mid-century Modern Contemporary style, putting art at the center, focusing on personalization and Vietnamese craftsmanship.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
