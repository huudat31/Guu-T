"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollArrow() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-white"
      onClick={scrollToNext}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="p-3 rounded-full border border-white/30 glassmorphism hover:bg-white/10 transition-colors"
      >
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  );
}
