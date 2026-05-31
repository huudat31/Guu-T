"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const BENTO_STYLES: React.CSSProperties[] = [
  { gridColumn: "1 / span 2", gridRow: "1" },   // idx 0: wide, top
  { gridColumn: "3", gridRow: "1 / span 2" },    // idx 1: tall right
  { gridColumn: "1", gridRow: "2" },             // idx 2: bottom left
  { gridColumn: "2", gridRow: "2" },             // idx 3: bottom center
];

export default function ServicesBentoGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div
      className="bento-grid"
      style={{ gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "380px" }}
    >
      {services.map((service, idx) => (
        <motion.article
          key={service.slug}
          style={BENTO_STYLES[idx] ?? {}}
          className="group relative overflow-hidden glass-card cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * idx }}
        >
          <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
            <div className="h-1 w-12 bg-secondary mb-6 group-hover:w-24 transition-all duration-500" />
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-wide">
              {service.title}
            </h2>
            <p className="text-sm text-slate-300 mb-8 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
              {service.description}
            </p>
            <Link
              href={`/services/${service.slug}`}
              className="w-fit px-8 py-4 border border-secondary text-secondary font-semibold text-[10px] tracking-[0.2em] uppercase hover:bg-secondary hover:text-on-secondary transition-all duration-300"
            >
              Xem Chi Tiết
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
