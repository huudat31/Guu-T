"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ProjectHero() {
  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background z-10" />
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrcHLOa44Laz0ZxZU7xAbMXgmDoXHSkGkjse_T8seYC_e2em63iPQL36EPhx9xy3clAEndyryOCBfc2ox3p-FFV1QsKFW0q9hmeM_qkT6uFGtaJBIl6r62Tf9L0_HFwrLIVLGZjk2xZ4CfiEG-hTWlRooDktS3qDrNUfI8bNgCXrwzIRe7KR0QOMfP1fXjuyhcVjlRHeuSGKgH5wNkUsOGr2rgkQwXUlfL9bLn6-CDGh2CSdRMDSdagfbA4dBcWtAuIZ_gJoKB0reS"
            alt="Luxury Projects"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="relative z-20 text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-sans text-[10px] font-semibold text-secondary mb-6 tracking-[0.6em] uppercase"
        >
          Kiến Trúc & Nội Thất
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-sans font-light text-5xl md:text-8xl text-white uppercase mb-8 tracking-wider"
        >
          Dự Án
        </motion.h1>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-px bg-gradient-to-b from-secondary to-transparent mx-auto mt-12"
        />
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <ChevronDown className="text-secondary opacity-50" size={32} />
      </motion.div>
    </header>
  );
}
