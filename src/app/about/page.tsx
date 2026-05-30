import { cachedFetch, fetchSiteSettings } from "@/components/sanity-client";
import AboutHero from "@/components/about/AboutHero";
import { Diamond, Eye, BadgeCheck } from "lucide-react";
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

export default async function AboutPage() {
  const teamQuery = `
    *[_type == "teamMember"] | order(order asc){
      _id,
      name,
      position,
      order,
      "image": photo.asset->url
    }
  `;

  // Run queries in parallel
  const [team, siteSettings] = await Promise.all([
    cachedFetch(teamQuery),
    fetchSiteSettings()
  ]);

  const aboutBanner = siteSettings?.banners?.about || {};
  const teamList: TeamMember[] = team || [];

  const values = [
    {
      icon: <Diamond className="text-secondary" />,
      title: "Sứ mệnh",
      desc: "Kiến tạo những không gian sống mang đậm dấu ấn cá nhân, nơi mỗi chi tiết là một câu chuyện về nghệ thuật và sự tỉ mỉ của bàn tay người thợ Việt.",
    },
    {
      icon: <Eye className="text-secondary" />,
      title: "Tầm nhìn",
      desc: "Trở thành biểu tượng của sự sang trọng tinh giản, kết nối giá trị kiến trúc quốc tế với tinh hoa văn hóa và thủ công bản địa.",
    },
    {
      icon: <BadgeCheck className="text-secondary" />,
      title: "Giá trị cốt lõi",
      desc: "Sự trung thực trong chất liệu, cá nhân hóa trong trải nghiệm và tính nghệ thuật trong mọi giải pháp thiết kế.",
    },
  ];

  const methodology = [
    {
      num: "01",
      title: "Khởi tạo & Tư vấn",
      desc: "Chúng tôi lắng nghe câu chuyện của bạn để thấu hiểu phong cách sống và những mong muốn thầm kín nhất cho không gian tương lai.",
    },
    {
      num: "02",
      title: "Phát triển Thiết kế",
      desc: "Biến ý tưởng thành những bản vẽ kỹ thuật chi tiết và mô phỏng 3D đầy tính nghệ thuật, cân bằng giữa thẩm mỹ và công năng.",
    },
    {
      num: "03",
      title: "Bàn giao & Styling",
      desc: "Thi công chuẩn xác và hoàn thiện không gian bằng những món đồ décor thủ công, mang hơi thở cuộc sống vào tác phẩm kiến trúc.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <AboutHero
        heading={aboutBanner.heading || "Về chúng tôi"}
        subtext={aboutBanner.subtext || "Định nghĩa đẳng cấp kiến trúc"}
        imageUrl={aboutBanner.imageUrl}
      />

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto text-center">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="max-w-5xl mx-auto space-y-12">
            <span className="font-sans text-secondary tracking-widest uppercase text-3xl font-semibold block">
              Triết lý
            </span>
            <h2 className="font-sans text-xl md:text-3xl lg:text-4xl leading-tight text-on-surface font-light">
              " Guu & T là thương hiệu nội thất sáng tạo, là sự kết hợp phong cách Mid-century Modern
              Contemporary, đặt nghệ thuật làm trung tâm, tập trung cá nhân hóa và thủ công Việt Nam "
            </h2>
            <div className="w-24 h-px bg-secondary/30 mx-auto" />
          </div>
        </AnimatedSection>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-40 px-8 md:px-20 bg-surface-container-low/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <AnimatedSection key={idx} direction="up" delay={0.1 * (idx + 1)}>
                <div className="glass-card p-8 flex flex-col items-start space-y-6 group h-full">
                  <div className="w-12 h-12 flex items-center justify-center border border-secondary/20 group-hover:border-secondary transition-colors duration-500">
                    {value.icon}
                  </div>
                  <h3 className="font-sans text-2xl text-on-surface font-light">{value.title}</h3>
                  <p className="font-sans text-on-surface-variant leading-relaxed text-sm md:text-base">
                    {value.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <AnimatedSection direction="up" className="max-w-2xl">
            <div>
              <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-4">
                Phương pháp của chúng tôi
              </span>
              <h2 className="font-sans text-4xl md:text-5xl text-on-surface font-light">
                Từ ý tưởng đến hiện thực hoàn mỹ.
              </h2>
            </div>
          </AnimatedSection>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-secondary/50 to-transparent ml-12 mb-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-16">
          {methodology.map((step, idx) => (
            <AnimatedSection key={idx} direction="up" delay={0.1 * (idx + 1)}>
              <div className="relative group pt-16 md:pr-16 border-t border-white/10 hover:border-secondary transition-colors duration-500 h-full">
                <span className="absolute -top-24 left-0 font-sans text-6xl md:text-8xl text-secondary/10 group-hover:text-secondary/20 transition-colors pointer-events-none">
                  {step.num}
                </span>
                <div className="relative z-10 space-y-4">
                  <h4 className="font-sans text-xl md:text-2xl text-on-surface">{step.title}</h4>
                  <p className="font-sans text-on-surface-variant text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 bg-surface-container-high/30">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection direction="up">
            <div className="text-center mb-24">
              <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-4">
                Những người tiên phong
              </span>
              <h2 className="font-sans text-4xl md:text-5xl text-on-surface font-light">
                Đội ngũ sáng tạo
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamList.map((member, idx) => (
              <AnimatedSection key={member._id} direction="up" delay={0.1 * (idx % 3)}>
                <div className="glass-card overflow-hidden group h-full">
                  <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
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
        </div>
      </section>
    </div>
  );
}
