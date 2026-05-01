import { cachedFetch } from "@/components/sanity-client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = `*[_type == "project" && slug.current == $slug][0]{ title, description }`;
  const project = await cachedFetch(query, { slug });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Guu & T`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const query = `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "category": serviceType,
      location,
      area,
      completionYear,
      "heroImage": heroImage.asset->url,
      "gallery": gallery[].asset->url,
      description,
      "similarProjects": *[_type == "project" && serviceType == ^.serviceType && _id != ^._id][0...3] {
        _id,
        title,
        "slug": slug.current,
        "category": serviceType,
        "image": heroImage.asset->url,
        location
      }
    }
  `;

  const project = await cachedFetch(query, { slug });

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface-dim overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
          <span className="text-secondary font-sans text-[10px] tracking-widest uppercase mb-4 block">
            {project.category} — {project.completionYear}
          </span>
          <h1 className="font-sans font-light text-5xl md:text-7xl text-white max-w-4xl leading-tight tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="font-sans text-on-surface-variant max-w-2xl leading-relaxed">
            {project.location}
          </p>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {[
            { label: "Địa Điểm", value: project.location },
            { label: "Diện Tích", value: project.area },
            { label: "Hoàn Thành", value: project.completionYear },
          ].map((info, idx) => (
            <div key={idx} className="border-t border-white/10 pt-8 animate-fade-in-up">
              <p className="font-sans text-[10px] tracking-widest uppercase text-secondary mb-3">{info.label}</p>
              <p className="font-sans text-xl text-on-surface font-light">{info.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="py-8 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-12 font-light">
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img: string, idx: number) => (
              <div key={idx} className="overflow-hidden aspect-[4/3] group animate-fade-in">
                <Image
                  src={img}
                  alt={`${project.title} gallery ${idx + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Similar Works */}
      {project.similarProjects && project.similarProjects.length > 0 && (
        <section className="py-24 md:py-40 px-6 md:px-20 bg-[#0b0f10]">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-sans text-3xl font-light text-center mb-20 uppercase tracking-[0.3em] text-on-surface">Dự Án Tương Tự</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.similarProjects.map((item: any) => (
                <Link key={item._id} href={`/projects/${item.slug}`} className="glass-card group cursor-pointer overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <Image
                      fill
                      className="object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="p-8">
                    <span className="font-sans text-[10px] text-secondary mb-4 block tracking-widest uppercase">{item.location}</span>
                    <h4 className="font-sans text-xl font-light text-white group-hover:text-secondary transition-colors uppercase tracking-wider">{item.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href="/projects" className="inline-flex items-center gap-4 px-12 py-5 border border-secondary/30 hover:border-secondary text-secondary font-sans text-[10px] tracking-[0.3em] uppercase hover:gap-6 transition-all duration-500">
                Xem Tất Cả Dự Án <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
