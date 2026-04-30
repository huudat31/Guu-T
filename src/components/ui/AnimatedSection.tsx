"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "down" | "none";
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 50 };
      case "down": return { opacity: 0, y: -50 };
      case "left": return { opacity: 0, x: 50 };
      case "right": return { opacity: 0, x: -50 };
      case "none": return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom ease for smooth, premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
