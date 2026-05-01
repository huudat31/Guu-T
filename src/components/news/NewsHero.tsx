"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjabgOgdZZdUxX1CPTC7EHH7nPBBL-_4t3NP7qKZE_ic2j4fXvJa3QPyfm4LG2Ghruy7ZVmmt-dvZEHHffCUIQRBUQvIn0S5jniXcMBQehFscgF3h0j1EIR-CkSKy5aEzI_GAt9YFV1du2n98nza1h0JocqP60lwbZqBq9S59_9cWQuRSUNPzSrBOBMhHfDxznfCPAhyVCUm2ApI5Qz2BxcDy209GRZ0Fu5jxtrQ26-FxTjYIzEYMpuO"
          alt="Luxury Interior"
          fill
          priority
          className="object-cover"
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
          Visions & Narratives
        </motion.p>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-sans font-light text-5xl md:text-7xl text-white mb-8"
        >
          Tin Tức & Sự Kiện
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
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
