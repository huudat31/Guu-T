"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
}

const ProjectCard = React.memo(({ project }: { project: Project }) => {
  return (
    <div className="group relative overflow-hidden glass-card aspect-[4/5] gpu-accelerated">
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
        <p className="font-sans text-[10px] tracking-widest text-secondary mb-2 uppercase">
          {project.category}
        </p>
        <h3 className="font-sans text-2xl font-light text-white mb-4">
          {project.title}
        </h3>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-secondary font-sans text-[10px] tracking-widest uppercase hover:gap-4 transition-all"
        >
          Xem Chi Tiết <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
