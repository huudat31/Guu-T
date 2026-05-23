"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronDown, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  shortDesc?: string;
  slug: string;
  image: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  const swiperRef = React.useRef<SwiperType | null>(null);

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="relative h-screen w-full bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-white !opacity-50 !w-2 !h-2"></span>`;
          },
        }}
        loop={true}
        observer={true}
        observeParents={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="absolute inset-0 h-full w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id} className="relative h-full w-full">
            {/* Background Image */}
            <div className="absolute inset-0 bg-neutral-900">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover brightness-[0.6]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-20 pt-24 md:pt-28 flex flex-col justify-start items-end text-right text-white">
              <div className="space-y-4 max-w-2xl animate-fade-in-up">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight font-sans">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word.trim()}</span>
                  ))}
                </h2>
                {project.shortDesc && (
                  <p className="ml-auto max-w-lg text-sm md:text-base text-white/80 leading-relaxed normal-case tracking-normal">
                    {project.shortDesc}
                  </p>
                )}
                <div className="flex justify-end pt-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2.5 bg-white text-black px-6 py-2.5 text-[9px] font-bold tracking-[0.18em] uppercase hover:bg-brand-gold hover:text-white transition-all"
                  >
                    <Plus size={12} />
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        aria-label="Dự án trước"
        className="projects-prev absolute left-4 md:left-7 top-1/2 -translate-y-1/2 z-30 inline-flex cursor-pointer items-center justify-center text-white/75 transition-all duration-200 hover:-translate-x-1 hover:text-brand-gold"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        type="button"
        aria-label="Dự án tiếp theo"
        className="projects-next absolute right-4 md:right-7 top-1/2 -translate-y-1/2 z-30 inline-flex cursor-pointer items-center justify-center text-white/75 transition-all duration-200 hover:translate-x-1 hover:text-brand-gold"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronRight size={28} />
      </button>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 inline-flex w-fit flex-col items-center gap-0.5">
        <div className="w-[1px] h-5 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
        <button
          type="button"
          aria-label="Cuộn xuống"
          className="inline-flex h-4 w-4 items-center justify-center cursor-s-resize"
          onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: "smooth" })}
        >
          <ChevronDown className="text-white/50 animate-bounce" size={16} />
        </button>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 34px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          z-index: 30 !important;
        }
        .swiper-pagination-bullet-active {
          background: #e9c176 !important;
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: width 0.3s ease !important;
        }
      `}</style>
    </section>
  );
}
