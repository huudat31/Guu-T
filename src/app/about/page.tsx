import { cachedFetch } from "@/components/sanity-client";
import AboutHero from "@/components/about/AboutHero";
import { Diamond, Eye, BadgeCheck } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  order: number;
  image: string;
}

export default async function AboutPage() {
  const query = `
    *[_type == "teamMember"] | order(order asc){
      _id,
      name,
      position,
      order,
      "image": photo.asset->url
    }
  `;

  const team: TeamMember[] = await cachedFetch(query);

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
      <AboutHero />

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
          <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block">
            The Philosophy
          </span>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-tight text-on-surface font-light">
            Guu & T là thương hiệu nội thất sáng tạo, là sự kết hợp phong cách Mid-century Modern
            Contemporary, đặt nghệ thuật làm trung tâm, tập trung cá nhân hóa và thủ công Việt Nam.
          </h2>
          <div className="w-24 h-px bg-secondary/30 mx-auto" />
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-40 px-8 md:px-20 bg-surface-container-low/50">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="glass-card p-8 flex flex-col items-start space-y-6 group animate-fade-in-up"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-secondary/20 group-hover:border-secondary transition-colors duration-500">
                  {value.icon}
                </div>
                <h3 className="font-sans text-2xl text-on-surface font-light">{value.title}</h3>
                <p className="font-sans text-on-surface-variant leading-relaxed text-sm md:text-base">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl animate-fade-in">
            <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-4">
              Our Methodology
            </span>
            <h2 className="font-sans text-4xl md:text-5xl text-on-surface font-light">
              Từ ý tưởng đến hiện thực hoàn mỹ.
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-secondary/50 to-transparent ml-12 mb-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-16 stagger-children">
          {methodology.map((step, idx) => (
            <div
              key={idx}
              className="relative group pt-16 md:pr-16 border-t border-white/10 hover:border-secondary transition-colors duration-500 animate-fade-in-up"
            >
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
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 bg-surface-container-high/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-24 animate-fade-in">
            <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-4">
              The Visionaries
            </span>
            <h2 className="font-sans text-4xl md:text-5xl text-on-surface font-light">
              Đội ngũ sáng tạo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {team.map((member) => (
              <div key={member._id} className="glass-card overflow-hidden group animate-fade-in-up">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
