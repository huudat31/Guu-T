"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWfxDt5kmtATPcoEYOvk-8bnTtt1MkAIjF7-FPGrFc4QrKmIuaTrfPD3D_41oXXfXsdZhYSJbYmIKnUjrJvjDMazLG4Pn9p7x-eFhSK93LbI76XocQbKvCgFAurYrBogaYyRwrppdw0BIhqdMRDB7VFJSDSypVPDGcZUfoyZjPs3ClfB9J8fjL751TfbY3o67zCqISnw36Z4Q1mMyJLwqHkR3yTK5mr0OhALjNknfmpx-UxSlAWx8ouDA2Ya2dGjn9tyaj0unb7RG_"
          alt="Luxury architectural interior"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-sans font-light text-5xl md:text-8xl text-white mb-8 tracking-tight">
          Dịch Vụ
        </h1>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <ChevronDown className="text-secondary w-10 h-10 mx-auto mt-12" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
