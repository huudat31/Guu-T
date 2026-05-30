"use client";

import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES_DATA } from "@/app/services/lib/data";

export default function Services() {
  const serviceCards = [
    {
      num: "01",
      title: "Kiến trúc",
      description: "Thiết kế kiến trúc độc bản, tối ưu công năng và thẩm mỹ, hài hòa với cảnh quan và bản sắc riêng của mỗi công trình.",
      bullets: ["Thiết kế kiến trúc", "Thiết kế cảnh quan, sân vườn"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      slug: "architectural-design",
    },
    {
      num: "02",
      title: "Nội thất",
      description: "Thiết kế nội thất độc bản, cá tính, tinh tế và giàu cảm xúc, tạo nên trải nghiệm sống đẳng cấp và khác biệt.",
      bullets: ["Thiết kế nội thất", "Thiết kế chiếu sáng"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000",
      slug: "interior-design",
    },
    {
      num: "03",
      title: "Thi công",
      description: "Thi công trọn gói với quy trình chặt chẽ, đảm bảo chất lượng - tiến độ - an toàn, hiện thực hóa thiết kế đến từng chi tiết.",
      bullets: ["Thi công trọn gói", "Quản lý dự án", "Giám sát chất lượng"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      slug: "interior-construction",
    },
    {
      num: "04",
      title: "Sản xuất",
      description: "Sở hữu xưởng sản xuất 1000m2 chủ động chất lượng, tiến độ. Kiến tạo nên những sản phẩm tinh xảo và bền vững.",
      bullets: ["Sản xuất nội thất", "Sản xuất đồ gỗ bespoke", "Hoàn thiện & lắp đặt"],
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000",
      slug: "turnkey-construction",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#130d0c] overflow-hidden bg-cover bg-center bg-blend-overlay"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(19, 13, 12, 0.97), rgba(26, 18, 16, 0.97)), url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2000')"
      }}
    >
      {/* Concentric organic tree rings SVG decoration */}
      <div className="absolute -bottom-36 -left-36 w-96 h-96 md:w-[600px] md:h-[600px] opacity-10 pointer-events-none z-0 text-[#b89c8e]">
        <svg viewBox="0 0 500 500" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
          <path d="M250,250 C252,248 248,252 250,250 Z" />
          <path d="M250,230 C270,232 268,260 252,270 C234,268 232,242 250,230 Z" />
          <path d="M250,210 C280,212 288,272 254,292 C218,290 212,228 250,210 Z" />
          <path d="M250,190 C290,192 308,284 256,314 C202,312 192,214 250,190 Z" />
          <path d="M250,170 C302,172 328,296 258,336 C186,334 172,200 250,170 Z" />
          <path d="M250,150 C314,152 348,308 260,358 C170,356 152,186 250,150 Z" />
          <path d="M250,130 C326,132 368,320 262,380 C154,378 132,172 250,130 Z" />
          <path d="M250,110 C338,112 388,332 264,402 C138,400 112,158 250,110 Z" />
          <path d="M250,90 C350,92 408,344 266,424 C122,422 92,144 250,90 Z" />
          <path d="M250,70 C362,72 428,356 268,446 C106,444 72,130 250,70 Z" />
          <path d="M250,50 C374,52 448,368 270,468 C90,466 52,116 250,50 Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Responsive Grid Layout: Left 30%, Right 70% */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 lg:gap-12 items-start">

          {/* Cột Trái - Giải Pháp Toàn Diện (30% Width -> 3/10 Columns) */}
          <div className="lg:col-span-3 space-y-8 pr-0 lg:pr-6 lg:sticky lg:top-32">
            <AnimatedSection direction="up">
              <div className="space-y-4">
                <span className="font-sans text-[10px] tracking-[0.4em] font-semibold text-[#b89c8e] uppercase block">
                  Guu&T Interior Design
                </span>
                <div className="h-[1px] w-12 bg-[#b89c8e]/40" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-3">
                <h2 className="font-serif text-5xl md:text-6xl font-light text-white tracking-tight leading-tight uppercase">
                  {"Giải Pháp".normalize("NFC")} <br />
                  <span className="text-[#b89c8e]">{"Toàn Diện".normalize("NFC")}</span>
                </h2>
                <span className="font-serif italic text-lg md:text-xl font-light text-[#b89c8e] mt-4 block leading-relaxed">
                  {"Kiến tạo không gian độc bản & bền vững".normalize("NFC")}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <p className="font-sans text-slate-400 font-light text-sm md:text-base leading-relaxed">
                {"Guu&T cung cấp giải pháp trọn gói từ ý tưởng đến hiện thực, kết hợp giữa tư duy thẩm mỹ, kỹ thuật chính xác và năng lực triển khai mạnh mẽ để kiến tạo những không gian độc bản, tinh tế và trường tồn cùng thời gian.".normalize("NFC")}
              </p>
            </AnimatedSection>
          </div>

          {/* Cột Phải - Dịch Vụ Chính (70% Width -> 7/10 Columns) */}
          <div className="lg:col-span-7 space-y-12">
            <AnimatedSection direction="up">
              <span className="font-sans text-[#b89c8e] text-[12px] md:text-[14px] tracking-[0.35em] font-bold uppercase block text-center">
                {"Dịch vụ chính".normalize("NFC")}
              </span>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
              {serviceCards.map((card, idx) => (
                <AnimatedSection
                  key={card.num}
                  direction="up"
                  delay={0.1 * (idx + 1)}
                  className="h-full"
                >
                  <div className="relative flex flex-col bg-[#1c1311]/50 border border-white/5 backdrop-blur-sm group hover:border-[#b89c8e]/65 hover:bg-[#1c1311]/85 hover:shadow-[0_20px_50px_rgba(184,156,142,0.15)] transition-all duration-500 rounded-none h-full min-h-[500px] shadow-2xl">

                    {/* Top Image area - Enlarged & optimized */}
                    <div className="h-[210px] w-full relative overflow-hidden shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title.normalize("NFC")}
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.75]"
                      />
                      <div className="absolute inset-0 bg-[#130d0c]/30 group-hover:bg-transparent transition-all duration-500" />
                    </div>

                    {/* Content area - Expanded paddings with relative positioning to ensure overlapping badge renders properly on top */}
                    <div className="flex-grow p-8 pt-10 flex flex-col justify-between text-center items-center relative z-10">
                      {/* Round gold overlapping badge number - Positioned inside relative container to overlap the top boundary */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#130d0c] border border-[#b89c8e]/60 flex items-center justify-center z-20 text-[#b89c8e] font-serif text-sm italic group-hover:bg-[#b89c8e] group-hover:text-black group-hover:border-[#b89c8e] transition-colors duration-500 shadow-lg">
                        {card.num}
                      </div>

                      <div className="space-y-4 w-full">
                        <h3 className="font-serif text-white font-normal text-xl tracking-[0.15em] uppercase group-hover:text-[#b89c8e] transition-colors duration-300">
                          {card.title.normalize("NFC")}
                        </h3>
                        <p className="font-sans text-slate-400 text-[12px] leading-relaxed font-light">
                          {card.description.normalize("NFC")}
                        </p>
                      </div>

                      <div className="w-full flex flex-col items-center pt-4">
                        <div className="w-10 h-[1.5px] bg-[#b89c8e]/25 mb-5 group-hover:w-20 transition-all duration-500" />

                        {/* Bullet points */}
                        <ul className="text-left inline-block space-y-2 font-sans font-light text-[11px] text-[#b89c8e]/90 leading-relaxed">
                          {card.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-[#b89c8e] shrink-0 mt-0.5">•</span>
                              <span>{bullet.normalize("NFC")}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Plus Link Button - Full-width, premium alignment */}
                        <Link
                          href={`/services/${card.slug}`}
                          className="mt-8 flex items-center justify-center gap-2 border border-[#b89c8e]/40 hover:border-[#b89c8e] hover:bg-[#b89c8e] hover:text-black text-[#b89c8e] w-full py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-md"
                        >
                          <Plus size={10} />
                          Chi tiết
                        </Link>
                      </div>

                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </div>

        {/* Chân trang phần dịch vụ */}
        <AnimatedSection direction="up" delay={0.6}>
          <span className="text-center text-[9px] md:text-[11px] tracking-[0.3em] font-light text-[#b89c8e]/55 mt-20 uppercase block border-t border-white/5 pt-10">
            {"Từ ý tưởng đến hiện thực • Mỗi không gian là một tác phẩm độc bản".normalize("NFC")}
          </span>
        </AnimatedSection>

      </div>
    </section>
  );
}
