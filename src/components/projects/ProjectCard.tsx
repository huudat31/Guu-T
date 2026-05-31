"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  location?: string;
}

const ProjectCard = React.memo(({ project }: { project: Project }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full w-full overflow-hidden block"
    >
      {/* Image with subtle zoom on hover */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Permanent dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

      {/* Always-visible text info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
        <div className="flex-1 min-w-0">
          {/* Category label */}
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-secondary mb-2">
            {project.category}
          </p>
          {/* Project title */}
          <h3 className="font-sans text-base md:text-lg font-semibold text-white uppercase tracking-wide leading-tight">
            {project.title}
          </h3>
          {/* Location if available */}
          {project.location && (
            <p className="font-sans text-[11px] text-white/50 mt-1 tracking-wide">
              {project.location}
            </p>
          )}
        </div>

        {/* Arrow icon — appears on hover */}
        <div className="ml-4 flex-shrink-0 w-9 h-9 flex items-center justify-center border border-white/20 group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={14} className="text-secondary" />
        </div>
      </div>

      {/* Brand watermark — bottom right corner */}
      <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
        <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-white">
          Guu &amp; T
        </span>
      </div>
    </Link>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
