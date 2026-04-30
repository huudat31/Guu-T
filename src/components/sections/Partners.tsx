"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PARTNERS = ["BOSCH", "HAFELE", "TOTO", "KOHLER", "GROHE", "DULUX", "VICOSTONE", "MALLOCA", "AN CUONG"];

export default function Partners() {
  return (
    <section className="py-20 border-y border-white/5 opacity-40 grayscale overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="partner-swiper"
      >
        {PARTNERS.map((name, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <span className="text-xl md:text-2xl font-light tracking-[0.4em] italic text-white whitespace-nowrap">
                {name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .partner-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
