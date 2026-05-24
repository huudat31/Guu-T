import { cachedFetch } from "@/components/sanity-client";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectStats from "@/components/projects/ProjectStats";

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  heroImage?: string;
}

export default async function ProjectsPage() {
  const query = `
    *[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      "category": serviceType,
      "image": heroImage.asset->url,
      "heroImage": heroImage.asset->url
    }
  `;

  const projects: Project[] = await cachedFetch(query);
  const heroImages = projects
    .map((project) => project.heroImage || project.image)
    .filter(Boolean) as string[];

  const stats = [
    { label: "Dự Án Hoàn Thiện", value: "150+" },
    { label: "Năm Hoạt Động", value: "10+" },
    { label: "Khách Hàng", value: "500+" },
    { label: "Loại Dịch Vụ", value: "4" },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30 selection:text-white">
      <ProjectHero images={heroImages} />

      <ProjectStats stats={stats} />

      <ProjectGrid projects={projects} />
    </div>
  );
}
