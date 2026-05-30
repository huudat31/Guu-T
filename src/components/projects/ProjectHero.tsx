"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectHeroProps {
  images: string[];
  staticImage?: string;
  heading?: string;
  subtext?: string;
}

export default function ProjectHero({
  images,
  staticImage,
  heading = "Dự Án",
  subtext = "Kiến Trúc & Nội Thất"
}: ProjectHeroProps) {
  const heroImages = staticImage
    ? [staticImage]
    : images.length > 0
      ? images
      : [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDrcHLOa44Laz0ZxZU7xAbMXgmDoXHSkGkjse_T8seYC_e2em63iPQL36EPhx9xy3clAEndyryOCBfc2ox3p-FFV1QsKFW0q9hmeM_qkT6uFGtaJBIl6r62Tf9L0_HFwrLIVLGZjk2xZ4CfiEG-hTWlRooDktS3qDrNUfI8bNgCXrwzIRe7KR0QOMfP1fXjuyhcVjlRHeuSGKgH5wNkUsOGr2rgkQwXUlfL9bLn6-CDGh2CSdRMDSdagfbA4dBcWtAuIZ_gJoKB0reS",
      ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [heroImages.length]);

  const activeImage = heroImages[activeIndex];

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background z-10" />
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1.05 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative w-full h-full"
            >
              <Image
                src={activeImage}
                alt="Luxury Projects"
                fill
                priority={activeIndex === 0}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-20 text-center px-8 max-w-4xl mx-auto">
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
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
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
