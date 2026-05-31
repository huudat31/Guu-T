import { cachedFetch, fetchSiteSettings } from "@/components/sanity-client";
import TeamHero from "@/components/team/TeamHero";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  order: number;
  image: string;
}

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  const teamQuery = `
    *[_type == "teamMember"] | order(order asc){
      _id,
      name,
      position,
      order,
      "image": photo.asset->url
    }
  `;

  const [team, siteSettings] = await Promise.all([
    cachedFetch(teamQuery),
    fetchSiteSettings()
  ]);

  const teamList: TeamMember[] = team || [];
  const teamBanner = siteSettings?.banners?.team || siteSettings?.banners?.about || {};

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/30 selection:text-white">
      <TeamHero
        heading={teamBanner.heading || "Đội Ngũ Sáng Tạo"}
        subtext={teamBanner.subtext || "Những người tiên phong"}
        imageUrl={teamBanner.imageUrl}
      />

      {/* Team Grid */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamList.map((member, idx) => (
            <AnimatedSection key={member._id} direction="up" delay={0.1 * (idx % 3)}>
              <div className="glass-card overflow-hidden group h-full">
                <div className="aspect-[3/4] overflow-hidden transition-all duration-700 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-2">
                  <p className="font-sans text-secondary uppercase text-[10px] tracking-[0.3em] font-semibold">
                    {member.position}
                  </p>
                  <h5 className="font-sans text-2xl text-on-surface">{member.name}</h5>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
