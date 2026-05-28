"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Plus } from "lucide-react";
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
  // no manual prev/next controls needed; pagination dots handle navigation
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
        pagination={{ clickable: true }}
        loop={true}
        observer={true}
        observeParents={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="absolute inset-0 h-full w-full z-0"
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

            {/* Content Overlay - moved to bottom-right, no description, single-line title */}
            <div className="absolute inset-0 flex items-end justify-end">
              <div className="max-w-2xl mr-4 md:mr-8 lg:mr-12 mb-4 md:mb-8 lg:mb-12 text-right animate-fade-in-up text-white">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight font-sans">
                  {project.title}
                </h2>
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

      {/* Left/right arrow buttons removed — pagination dots are used for navigation */}

      {/* Down arrow removed as requested */}

      <style jsx global>{`
        .swiper-pagination {
          bottom: 28px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          z-index: 30 !important;
          display: flex !important;
          gap: 4px;
          justify-content: center;
          pointer-events: auto !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255,255,255,0.45) !important;
          opacity: 1 !important;
          margin: 0 2px !important;
          border-radius: 9999px !important;
          transition: transform 0.18s ease, background 0.18s ease !important;
          cursor: pointer !important;
          position: relative !important;
        }
        .swiper-pagination-bullet-active {
          background: #b89c8e !important;
        }
      `}</style>
    </section>
  );
}
