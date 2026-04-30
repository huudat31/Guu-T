"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Armchair, Hammer, Compass, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SERVICES = [
  { icon: <Layout />, title: "Architectural Design", desc: "Structural conceptualization and master planning for modern edifices." },
  { icon: <Armchair />, title: "Interior Design", desc: "Bespoke space curation, color palettes, and material selection." },
  { icon: <Hammer />, title: "Construction Management", desc: "End-to-end execution with meticulous attention to structural integrity." },
  { icon: <Compass />, title: "Furniture Production", desc: "Custom artisan furniture designed specifically for your space." }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-20 bg-gradient-to-tr from-brand-bg via-brand-bg to-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <p className="text-[10px] tracking-[0.3em] font-bold text-brand-gold uppercase">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-light text-white">Holistic Design Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <AnimatedSection
              key={idx}
              delay={0.1 * idx}
              className="glass-card p-10 flex flex-col justify-between hover:-translate-y-2 h-[420px]"
            >
              <div>
                <div className="text-brand-gold mb-8">{service.icon}</div>
                <h3 className="text-lg font-medium mb-4 text-white leading-tight">{service.title}</h3>
                <p className="text-sm text-slate-400 mb-10 leading-relaxed">{service.desc}</p>
              </div>
              <a href="#" className="flex items-center gap-2 text-[10px] tracking-widest font-bold text-brand-gold uppercase group">
                Details <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
