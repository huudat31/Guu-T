"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Leaf, PenTool, Award, Cpu, Share2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const VALUES = [
  {
    icon: <Users size={32} strokeWidth={1} />,
    title: "Client-Centric Approach",
    desc: "Every client is a unique world; we narrate their story through the language of architecture, emphasizing 'human-centric design'."
  },
  {
    icon: <Leaf size={32} strokeWidth={1} />,
    title: "Sustainability & Ecology",
    desc: "We commit to using green materials, solar energy, and green roofs to protect the environment and promote sustainable living."
  },
  {
    icon: <PenTool size={32} strokeWidth={1} />,
    title: "Creativity & Aesthetics",
    desc: "Each villa is a unique work of art, blending modern style with tropical influences, custom-tailored to the owner's preferences."
  },
  {
    icon: <Award size={32} strokeWidth={1} />,
    title: "Quality & Perfection",
    desc: "Adhering to international standards, we maintain rigorous quality control in every detail of design and construction."
  },
  {
    icon: <Cpu size={32} strokeWidth={1} />,
    title: "Technology & Experience",
    desc: "Utilizing VR/AI to create realistic design experiences, integrating smart technology for a convenient living space."
  },
  {
    icon: <Share2 size={32} strokeWidth={1} />,
    title: "Community & Connection",
    desc: "Building a community of Modern Tropical enthusiasts where they can connect, share stories, and celebrate lifestyle."
  }
];

export default function Commitment() {
  return (
    <section id="commitment" className="section-padding bg-brand-bg">
      <div className="mb-24 space-y-2">
        <AnimatedSection direction="right">
          <h3 className="text-xl md:text-2xl font-light tracking-[0.3em] text-slate-400 uppercase">
            Guu & T Signature Values
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Delivering to our clients
          </h2>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
        {VALUES.map((item, idx) => (
          <AnimatedSection
            key={idx}
            delay={idx * 0.1}
            className="flex items-start gap-6 group"
          >
            <div className="text-brand-gold mt-1 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h4>
                <div className="w-10 h-[1px] bg-white/20 group-hover:w-full transition-all duration-500" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
