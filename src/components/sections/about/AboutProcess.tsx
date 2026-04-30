"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Gem, Search, PenTool, ClipboardCheck, Hammer, Sparkles } from "lucide-react";

export function AboutVision() {
  const data = [
    {
      title: "Our Mission",
      icon: <Target size={32} strokeWidth={1} />,
      desc: "To elevate living standards through architectural precision and emotional resonance."
    },
    {
      title: "Our Vision",
      icon: <Eye size={32} strokeWidth={1} />,
      desc: "To become the global benchmark for Vietnamese craftsmanship and contemporary luxury."
    },
    {
      title: "Core Values",
      icon: <Gem size={32} strokeWidth={1} />,
      desc: "Integrity, innovation, and a relentless pursuit of perfection in every detail."
    }
  ];

  return (
    <section className="section-padding bg-[#0d1112]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="space-y-6 group"
          >
            <div className="text-brand-gold group-hover:scale-110 transition-transform duration-500">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white tracking-widest uppercase">{item.title}</h3>
            <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function AboutWorkflow() {
  const steps = [
    {
      num: "01",
      title: "Survey & Concept",
      icon: <Search size={20} />,
      desc: "Understanding client needs, lifestyle, and site potential."
    },
    {
      num: "02",
      title: "Detailed Design",
      icon: <PenTool size={20} />,
      desc: "3D visualization, technical drawings, and material selection."
    },
    {
      num: "03",
      title: "Project Management",
      icon: <ClipboardCheck size={20} />,
      desc: "Timeline coordination and rigorous quality control."
    },
    {
      num: "04",
      title: "Execution",
      icon: <Hammer size={20} />,
      desc: "Meticulous construction and bespoke furniture production."
    },
    {
      num: "05",
      title: "Handover",
      icon: <Sparkles size={20} />,
      desc: "Final touches and a seamless transition to your new space."
    }
  ];

  return (
    <section className="section-padding bg-brand-bg overflow-hidden">
      <div className="space-y-4 mb-20 text-center lg:text-left">
        <p className="text-brand-gold tracking-[0.3em] uppercase text-xs font-medium">The Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Our Workflow</h2>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="space-y-8"
            >
              <div className="relative flex flex-col items-center lg:items-start group">
                <div className="w-20 h-20 bg-white/5 border border-white/10 flex items-center justify-center relative group-hover:border-brand-gold transition-colors duration-500">
                  <span className="absolute -top-3 -right-3 text-[10px] font-bold text-brand-gold tracking-widest">{step.num}</span>
                  <div className="text-white/40 group-hover:text-brand-gold transition-colors duration-500">
                    {step.icon}
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <h4 className="text-white font-bold tracking-wider uppercase text-sm">{step.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-light">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
