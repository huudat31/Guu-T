"use client";

import React from "react";
import { motion } from "framer-motion";

const TEAM = [
  { name: "Jess Thái", role: "CEO & Design Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
  { name: "LB", role: "Creative Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
  { name: "Bonne", role: "Senior Interior Architect", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" },
  { name: "TaTa", role: "Senior Designer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" },
  { name: "Long Phụng", role: "Project Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
  { name: "Thành Long", role: "Architectural Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
  { name: "Trâm Nguyễn", role: "Furniture Specialist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600" },
];

export function AboutTeam() {
  return (
    <section className="section-padding bg-[#0d1112]">
      <div className="space-y-4 mb-20 text-center">
        <p className="text-brand-gold tracking-[0.3em] uppercase text-xs font-medium">The Visionaries</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Our Team</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM.map((person, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="mt-6 space-y-1">
              <h4 className="text-white font-bold tracking-widest uppercase text-sm group-hover:text-brand-gold transition-colors">{person.name}</h4>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-medium">{person.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
