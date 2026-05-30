"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CATEGORIES = ["Tất Cả", "Nội Thất", "Kiến Trúc", "Thi Công", "Xây Dựng"];
const ITEMS_PER_PAGE = 6;

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("Tất Cả");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tất Cả") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  function handleFilterChange(cat: string) {
    setActiveFilter(cat);
    setVisibleCount(ITEMS_PER_PAGE); // reset khi đổi filter
  }

  function handleLoadMore() {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  }

  return (
    <section className="pt-8 pb-24 md:pb-40 px-6 md:px-20">
      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 border-b border-white/5 pb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`font-sans text-sm tracking-widest uppercase pb-3 px-2 transition-all relative ${
              activeFilter === cat ? "text-secondary" : "text-slate-500 hover:text-white"
            }`}
          >
            {cat}
            {activeFilter === cat && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-secondary"
              />
            )}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, idx) => (
            <AnimatedSection key={project._id} direction="up" delay={0.05 * (idx % 3)}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </AnimatePresence>
      </div>

      {/* Load more button — luôn hiển thị bên dưới */}
      <div className="flex justify-center mt-20">
        <motion.button
          onClick={hasMore ? handleLoadMore : undefined}
          whileHover={hasMore ? { scale: 1.03 } : {}}
          whileTap={hasMore ? { scale: 0.97 } : {}}
          disabled={!hasMore}
          className={`group flex items-center gap-3 border px-12 py-4 font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
            hasMore
              ? "border-white/20 hover:border-secondary text-white/70 hover:text-secondary cursor-pointer"
              : "border-white/5 text-white/20 cursor-default"
          }`}
        >
          {hasMore ? (
            <>
              <span className="text-secondary group-hover:rotate-90 transition-transform duration-300 text-base leading-none">+</span>
              Xem Thêm
              <span className="text-white/30 text-[10px]">({filteredProjects.length - visibleCount} còn lại)</span>
            </>
          ) : (
            <span className="tracking-[0.3em]">— Đã hiển thị tất cả {filteredProjects.length} dự án —</span>
          )}
        </motion.button>
      </div>
    </section>
  );
}

