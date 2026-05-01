import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";
import Image from "next/image";

import { SERVICES_DATA } from "./lib/data";

const services = SERVICES_DATA.map(s => ({
  slug: s.slug,
  title: s.title,
  description: s.description,
  image: s.heroImage
}));

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen text-on-background">
      <ServicesHero />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 stagger-children">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group relative aspect-[4/5] overflow-hidden glass-card cursor-pointer animate-fade-in-up"
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
            </article>
          ))}
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-40">
        <div className="w-full py-24 border-y border-white/5 flex flex-col items-center text-center animate-fade-in">
          <h3 className="text-3xl md:text-5xl font-light text-white mb-8">
            Ready to define your space?
          </h3>
          <Link
            href="/contact"
            className="bg-secondary text-on-secondary px-12 py-5 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-500"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
