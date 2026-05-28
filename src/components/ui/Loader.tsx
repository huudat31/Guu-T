"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass } from "lucide-react";
import { useAppContext } from "@/components/providers/AppProvider";
import { useScrollLock } from "@/hooks/useScrollLock";

export default function Loader() {
  const { isLoaderFinished } = useAppContext();

  // Lock scroll while loader is active
  useScrollLock(!isLoaderFinished);

  console.log("Loader state - isLoaderFinished:", isLoaderFinished);

  return (
    <AnimatePresence mode="wait">
      {!isLoaderFinished && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-gradient-to-br from-[#2a1e1a] via-[#171211] to-[#100d0c] overflow-hidden"
        >
          {/* Background Texture Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url('https://www.transparenttextures.com/patterns/dark-matter.png')`,
              backgroundSize: '200px'
            }}
          />

          {/* Animated Light Beams (Subtle) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 3 }}
              className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] rotate-45 bg-[radial-gradient(circle,rgba(233,193,118,0.1)_0%,transparent_70%)]"
            />
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute inset-20 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10"
            />
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-0"
            >
              <img
                src="/logo/LOGO5sloadtrang.png"
                alt="Logo GUU & T"
                style={{ width: "920px", height: "450px" }}
                className="select-none logo-glow"
              />

              <div className="relative -top-[100px] flex flex-col items-center gap-0 -mt-6 md:-mt-8">
                

                {/* Shimmering Loading Line */}
                <div className="w-48 md:w-68 h-[1.5px] bg-white/5 relative overflow-hidden mt-2">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Floating Pill */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-16 flex justify-center"
          >
          <div className="glass-edge px-6 py-2.5 rounded-full flex items-center gap-3">
            <Compass className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/70">
              Tạo dựng không gian vượt thời gian
            </span>
          </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
