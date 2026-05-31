"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Import Swiper styles
import "swiper/css";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  order: number;
  image: string;
}

export default function TeamSlider({ teamList }: { teamList: TeamMember[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  if (!teamList || teamList.length === 0) return null;

  return (
    <div className="relative w-full">
      {/* Custom Sleek Navigation Buttons */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-2">
            Đội ngũ của Guu & T
          </span>
          <h2 className="font-sans text-3xl md:text-5xl text-on-surface font-light leading-tight">
            Những mảnh ghép sáng tạo
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full border border-secondary/20 hover:border-secondary flex items-center justify-center text-secondary/60 hover:text-secondary transition-all duration-300 hover:scale-105 active:scale-95 bg-surface/40 hover:bg-surface-bright cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full border border-secondary/20 hover:border-secondary flex items-center justify-center text-secondary/60 hover:text-secondary transition-all duration-300 hover:scale-105 active:scale-95 bg-surface/40 hover:bg-surface-bright cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <AnimatedSection direction="up" delay={0.2}>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            550: {
              slidesPerView: 2.2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="team-swiper !overflow-visible"
        >
          {teamList.map((member) => (
            <SwiperSlide key={member._id} className="h-auto">
              <div className="group relative overflow-hidden bg-surface-container-low border border-outline-variant/30 hover:border-secondary/40 transition-all duration-500 rounded-sm h-full flex flex-col justify-between">
                <div>
                  {/* Avatar Frame */}
                  <div className="aspect-[3/4] overflow-hidden transition-all duration-700 relative bg-neutral-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Sleek Golden Accent Overlay */}
                    <div className="absolute inset-0 border border-secondary/0 group-hover:border-secondary/20 transition-all duration-500 pointer-events-none" />
                  </div>
                  
                  {/* Info Box */}
                  <div className="p-6 md:p-8 space-y-2">
                    <span className="font-sans text-secondary uppercase text-[10px] tracking-[0.25em] font-semibold block">
                      {member.position}
                    </span>
                    <h4 className="font-sans text-xl text-on-surface font-light group-hover:text-secondary transition-colors duration-300">
                      {member.name}
                    </h4>
                  </div>
                </div>
                
                {/* Visual Line Accent */}
                <div className="w-full h-[2px] bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedSection>
    </div>
  );
}
