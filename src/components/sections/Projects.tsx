"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ChevronDown, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Project {
  _id: string;
  title: string;
  slug: string;
  image: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
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
        className="absolute inset-0 h-full w-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project._id} className="relative h-full w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover brightness-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col justify-center items-end text-right text-white">
              <div className="space-y-4 max-w-2xl animate-fade-in-up">
                <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-tight font-sans">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word.trim()}</span>
                  ))}
                </h2>
                <div className="flex justify-end pt-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-3 bg-white text-black px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-white transition-all"
                  >
                    <Plus size={14} />
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Down Arrow Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.scrollY + window.innerHeight, behavior: "smooth" })}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        <ChevronDown className="text-white/50 animate-bounce" size={24} />
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 40px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
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
