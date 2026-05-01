"use client";

import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/40 z-10" />
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDduP-QAyuf_x2JI-K5T2lMMwtasDnzgD8sB9FmUzJZUjE2wXfLMs9K9Ek9En8UtE0Tlc9R1yCYf-DZCZguxzFV0MUqejGezlvYM74crHOmw9jO2p0iOlJGQmrXcgXIDmN-Qi_91VD4Z3LR6XO8KMtqc773qhi_zFMq8g6vYgLuWNbAS3-vsMI1FQLwrspBjINIZcw2-R_0oQ6hQgbCQ8IdBV4ccAe-lzffpavIq5c6yHc1cpG-Slw7_YEPQItbRjERY95k6ihw11x4"
          alt="Guu & T Hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative z-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-sans font-light text-white text-6xl md:text-9xl tracking-tighter mb-6 opacity-95"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans text-secondary tracking-[0.4em] uppercase text-xs md:text-sm font-medium"
        >
          Defining Architectural Excellence
        </motion.p>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-secondary opacity-70 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <ChevronsDown size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
