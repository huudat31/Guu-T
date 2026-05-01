import { cachedFetch } from "@/components/sanity-client";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { ChevronDown } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
}

export default async function ProjectsPage() {
  const query = `
    *[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      "category": serviceType,
      "image": heroImage.asset->url
    }
  `;

  const projects: Project[] = await cachedFetch(query);

  const stats = [
    { label: "Dự Án Hoàn Thiện", value: "150+" },
    { label: "Năm Hoạt Động", value: "10+" },
    { label: "Khách Hàng", value: "500+" },
    { label: "Loại Dịch Vụ", value: "4" },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30 selection:text-white">
      <ProjectHero />

      {/* Stats */}
      <section className="py-24 md:py-40 px-6 md:px-20 bg-[#0b0f10]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 stagger-children">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group animate-fade-in-up"
            >
              <span className="font-sans text-4xl md:text-5xl text-secondary mb-3 transition-transform group-hover:scale-110 duration-500">
                {stat.value}
              </span>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ProjectGrid projects={projects} />
    </div>
  );
}
