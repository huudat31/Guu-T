"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Share2, Mail, ChevronDown } from "lucide-react";
import { client } from "@/components/sanity-client";

const CATEGORIES = ["Tất Cả", "Nội Thất", "Kiến Trúc", "Thi Công", "Xây Dựng"];

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeFilter, setActiveFilter] = useState("Tất Cả");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `
          *[_type == "project"]{
            _id,
            title,
            "slug": slug.current,
            "category": serviceType,
            "image": heroImage.asset->url
          }
        `;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tất Cả") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);


  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30 selection:text-white">
      {/* Hero */}
      <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background z-10" />
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrcHLOa44Laz0ZxZU7xAbMXgmDoXHSkGkjse_T8seYC_e2em63iPQL36EPhx9xy3clAEndyryOCBfc2ox3p-FFV1QsKFW0q9hmeM_qkT6uFGtaJBIl6r62Tf9L0_HFwrLIVLGZjk2xZ4CfiEG-hTWlRooDktS3qDrNUfI8bNgCXrwzIRe7KR0QOMfP1fXjuyhcVjlRHeuSGKgH5wNkUsOGr2rgkQwXUlfL9bLn6-CDGh2CSdRMDSdagfbA4dBcWtAuIZ_gJoKB0reS"
            alt="Luxury Projects"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-sans text-[10px] font-semibold text-secondary mb-6 tracking-[0.6em] uppercase">
            Kiến Trúc & Nội Thất
          </motion.p>
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1 }} className="font-sans font-light text-5xl md:text-8xl text-white uppercase mb-8 tracking-wider">
            Dự Án
          </motion.h1>
          <motion.div initial={{ height: 0 }} animate={{ height: 96 }} transition={{ delay: 1.5, duration: 1 }} className="w-px bg-gradient-to-b from-secondary to-transparent mx-auto mt-12" />
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <ChevronDown className="text-secondary opacity-50" size={32} />
        </motion.div>
      </header>

      {/* Stats */}
      <section className="py-24 md:py-40 px-6 md:px-20 bg-[#0b0f10]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {[{ label: "Dự Án Hoàn Thiện", value: "150+" }, { label: "Năm Hoạt Động", value: "10+" }, { label: "Khách Hàng", value: "500+" }, { label: "Loại Dịch Vụ", value: "4" }].map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col items-center text-center group">
              <span className="font-sans text-4xl md:text-5xl text-secondary mb-3 transition-transform group-hover:scale-110 duration-500">{stat.value}</span>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto mb-20 flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 border-b border-white/5 pb-8">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className={`font-sans text-[10px] tracking-[0.2em] uppercase pb-2 transition-all relative ${activeFilter === cat ? "text-secondary" : "text-slate-500 hover:text-white"}`}>
              {cat}
              {activeFilter === cat && <motion.div layoutId="activeTab" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-secondary" />}
            </button>
          ))}
        </div>

        <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                <div key={`skeleton-${i}`} className="glass-card aspect-[4/5] bg-gray-800 animate-pulse rounded-xl" />
              ))
              : filteredProjects.map((project) => (
                <motion.div key={project._id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5 }} className="group relative overflow-hidden glass-card aspect-[4/5]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
                    <p className="font-sans text-[10px] tracking-widest text-secondary mb-2 uppercase">{project.category}</p>
                    <h3 className="font-sans text-2xl font-light text-white mb-4">{project.title}</h3>
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-secondary font-sans text-[10px] tracking-widest uppercase hover:gap-4 transition-all">
                      Xem Chi Tiết <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

      </section>
    </div>
  );
}
