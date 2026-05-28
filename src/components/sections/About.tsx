"use client";

import React from "react";
import { IMAGES } from "@/lib/images";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="relative bg-white/[0.02] overflow-hidden lg:min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
        <div className="px-6 md:px-20 lg:pl-20 lg:pr-12 py-32 lg:py-40 space-y-12 flex flex-col justify-center relative z-10">
          <AnimatedSection direction="left" className="space-y-6">
            <p className="text-[10px] tracking-[0.3em] font-bold text-brand-gold uppercase">Thành lập 2014</p>
            <h2 className="text-4xl md:text-5xl font-light text-white">Tạo nên câu chuyện nghệ thuật</h2>
            <p className="text-lg text-on-surface-variant font-light leading-loose">
              Guu & T là thương hiệu nội thất sáng tạo, đặt nghệ thuật ở trung tâm và chú trọng cá nhân hóa cùng tinh hoa thủ công Việt Nam.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <p className="text-4xl font-light text-brand-gold mb-2">Kể từ</p>
              <p className="text-[10px] tracking-widest uppercase text-on-surface-variant">2014</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-4xl font-light text-brand-gold mb-2">Thủ công</p>
              <p className="text-[10px] tracking-widest uppercase text-on-surface-variant">Nghệ nhân thực hiện</p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <a href="/about" className="inline-block border border-brand-gold text-brand-gold px-8 py-4 uppercase text-[10px] font-bold tracking-widest hover:bg-brand-gold hover:text-brand-bg transition-all">
              Tìm hiểu về chúng tôi
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="right" className="relative w-full min-h-[70vh] lg:min-h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src={IMAGES.about}
            alt="About Aura"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
