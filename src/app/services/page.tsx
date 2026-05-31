import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";
import { fetchSiteSettings } from "@/components/sanity-client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServicesBentoGrid from "@/components/services/ServicesBentoGrid";

import { SERVICES_DATA } from "./lib/data";

const services = SERVICES_DATA.map(s => ({
  slug: s.slug,
  title: s.title,
  description: s.description,
  image: s.heroImage
}));

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const siteSettings = await fetchSiteSettings();
  const servicesBanner = siteSettings?.banners?.services || siteSettings?.banners?.project || {};

  return (
    <div className="bg-background min-h-screen text-on-background">
      <ServicesHero
        heading={servicesBanner.heading || "Dịch Vụ"}
        subtext={servicesBanner.subtext || "Giải pháp kiến trúc & nội thất"}
        imageUrl={servicesBanner.imageUrl}
      />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <ServicesBentoGrid services={services} />
      </main>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-40">
        <AnimatedSection direction="up">
          <div className="w-full py-24 border-y border-white/5 flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-5xl font-light text-white mb-8">
              Sẵn sàng định hình không gian của bạn?
            </h3>
            <Link
              href="/contact"
              className="bg-secondary text-on-secondary px-12 py-5 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-500"
            >
              Bắt đầu trao đổi
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
