"use client";

import React from "react";
import { IMAGES } from "@/lib/images";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="bg-white/[0.02] py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <AnimatedSection direction="right" className="relative">
          <div className="absolute -inset-4 border border-brand-gold/20 translate-x-4 translate-y-4" />
          <img
            src={IMAGES.about}
            alt="About Aura"
            className="relative z-10 w-full aspect-[4/5] object-cover"
          />
        </AnimatedSection>

        <div className="space-y-12">
          <AnimatedSection direction="left" className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] font-bold text-brand-gold uppercase">Established 2014</p>
            <h2 className="text-4xl md:text-5xl font-light text-white">Crafting Artistic Narratives</h2>
            <p className="text-lg text-slate-300 font-light leading-loose">
              Guu & T is a creative interior brand, putting art at the center and focusing on personalization and Vietnamese craftsmanship.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <p className="text-4xl font-light text-brand-gold mb-2">Since</p>
              <p className="text-[10px] tracking-widest uppercase text-slate-400">2014</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-4xl font-light text-brand-gold mb-2">Craft</p>
              <p className="text-[10px] tracking-widest uppercase text-slate-400">Artisan Led</p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <a href="/about" className="inline-block border border-brand-gold text-brand-gold px-8 py-4 uppercase text-[10px] font-bold tracking-widest hover:bg-brand-gold hover:text-brand-bg transition-all">
              Discover Our Story
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
