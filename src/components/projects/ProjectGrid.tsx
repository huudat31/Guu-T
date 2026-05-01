"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const CATEGORIES = ["Tất Cả", "Nội Thất", "Kiến Trúc", "Thi Công", "Xây Dựng"];

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("Tất Cả");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tất Cả") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <section className="py-24 md:py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto mb-20 flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4 border-b border-white/5 pb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`font-sans text-[10px] tracking-[0.2em] uppercase pb-2 transition-all relative ${
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
