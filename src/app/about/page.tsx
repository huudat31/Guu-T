import { cachedFetch, fetchSiteSettings } from "@/components/sanity-client";
import AboutHero from "@/components/about/AboutHero";
import { Compass, Eye, Sparkles, MessageSquare, Layers, FileText, Hammer } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TeamSlider from "@/components/about/TeamSlider";

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
      icon: <Compass className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Sứ mệnh",
      desc: "Kiến tạo những không gian sống mang đậm dấu ấn cá nhân, nơi mỗi chi tiết là một câu chuyện về nghệ thuật và sự tỉ mỉ của bàn tay người thợ Việt.",
      moreText: "Chúng tôi tin rằng ngôi nhà không chỉ là nơi sinh hoạt, mà là tổ ấm đích thực phản chiếu thế giới quan và gu thẩm mỹ của gia chủ. Bằng việc tôn vinh nghề thủ công truyền thống kết hợp tư duy thiết kế đương đại, Guu & T mang lại những trải nghiệm độc bản, kiến tạo các giá trị nghệ thuật trường tồn."
    },
    {
      icon: <Eye className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Tầm nhìn",
      desc: "Trở thành biểu tượng của sự sang trọng tinh giản, kết nối giá trị kiến trúc quốc tế với tinh hoa văn hóa và thủ công bản địa.",
      moreText: "Không ngừng nỗ lực để tái định nghĩa chuẩn mực thiết kế nội thất cao cấp tại Việt Nam. Chúng tôi kết hợp các xu hướng thiết kế toàn cầu tinh tế với kỹ nghệ làm gỗ tinh xảo bản địa, hướng tới sự phát triển bền vững và đưa thương hiệu nội thất Việt vươn tầm thế giới."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Giá trị cốt lõi",
      desc: "Sự trung thực trong chất liệu, cá nhân hóa trong trải nghiệm và tính nghệ thuật trong mọi giải pháp thiết kế.",
      moreText: "Cam kết tuyệt đối về chất lượng vật liệu tự nhiên tinh tuyển, sự trung thực trong thi công kỹ thuật và tư duy sáng tạo nghệ thuật không giới hạn. Chúng tôi may đo riêng từng giải pháp, đặt khách hàng và nhu cầu cảm xúc của họ làm trung tâm của mọi quá trình sáng tạo."
    },
  ];

  const methodology = [
    {
      num: "01",
      icon: <MessageSquare className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Tư vấn & Thấu hiểu",
      desc: "Lắng nghe câu chuyện, thấu hiểu phong cách sống và phân tích thói quen sinh hoạt để định hình mong muốn thiết kế ban đầu.",
      moreText: "Chúng tôi bắt đầu bằng đối thoại cởi mở để thấu hiểu chiều sâu phong cách sống và mong muốn của gia chủ nhằm định hình giải pháp không gian tối ưu nhất.",
      details: ["Lắng nghe mong muốn", "Phân tích thói quen sống", "Tư vấn định hướng ban đầu"]
    },
    {
      num: "02",
      icon: <Compass className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Khảo sát & Ý tưởng sơ bộ",
      desc: "Đo đạc hiện trạng thực tế, nghiên cứu tâm lý học không gian để đề xuất định hướng phong cách (moodboard) độc bản.",
      moreText: "Khảo sát thực địa đo đạc hiện trạng tỉ mỉ, phân tích hướng nắng, gió và ứng dụng tâm lý học không gian để đưa ra phương án bố trí công năng tối ưu.",
      details: ["Khảo sát thực địa đo đạc", "Phân tích tâm lý không gian", "Trình bày moodboard & mặt bằng"]
    },
    {
      num: "03",
      icon: <Layers className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Ký hợp đồng & Thiết kế 3D",
      desc: "Hợp tác chính thức và thiết lập bản dựng phối cảnh 3D sắc nét, mô phỏng ánh sáng, vật liệu chân thực nhất.",
      moreText: "Chính thức hợp tác thiết kế. Dựng phối cảnh 3D chi tiết từng góc phòng, mô phỏng chuẩn xác hiệu ứng ánh sáng tự nhiên và chất cảm bề mặt vật liệu thực tế.",
      details: ["Hoàn tất hợp đồng thiết kế", "Dựng phối cảnh 3D chi tiết", "Tối ưu hóa thẩm mỹ & công năng"]
    },
    {
      num: "04",
      icon: <FileText className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Bản vẽ 2D & Vật liệu thực tế",
      desc: "Triển khai hồ sơ kỹ thuật thi công 2D chi tiết, lập danh mục mẫu vật liệu thực tế và dự toán chi phí minh bạch.",
      moreText: "Hoàn thiện hồ sơ kỹ thuật thi công 2D chuẩn xác, duyệt bảng vật liệu trực tiếp tại showroom và cung cấp dự toán chi phí minh bạch, cam kết không phát sinh.",
      details: ["Hồ sơ kỹ thuật thi công 2D", "Duyệt bảng mẫu vật liệu thực", "Dự toán chi tiết & rõ ràng"]
    },
    {
      num: "05",
      icon: <Hammer className="w-5 h-5 text-secondary group-hover:text-background transition-colors duration-500" />,
      title: "Thi công & Styling hoàn mỹ",
      desc: "Chế tác thủ công tinh xảo, thi công thực địa chuẩn xác đến từng chi tiết, hoàn thiện decor bàn giao chìa khóa trao tay.",
      moreText: "Đội ngũ thợ gỗ lành nghệ gia công tinh xảo tại xưởng, thi công lắp ráp hiện trường chuẩn xác và styling decor nghệ thuật trước khi bàn giao chìa khóa trao tay.",
      details: ["Sản xuất nội thất thủ công", "Giám sát & Thi công chuẩn xác", "Styling hoàn thiện & Bàn giao"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <AboutHero
        heading={aboutBanner.heading || "Về chúng tôi"}
        subtext={aboutBanner.subtext || "Định nghĩa đẳng cấp kiến trúc"}
        imageUrl={aboutBanner.imageUrl}
      />

      {/* Philosophy Section */}
      <section className="py-24 md:py-36 px-8 md:px-20 max-w-[1440px] mx-auto text-center">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="max-w-5xl mx-auto space-y-12">
            <span className="font-sans text-secondary tracking-widest uppercase text-3xl font-semibold block">
              Triết lý
            </span>
            <h2 className="noto-serif text-2xl md:text-4xl lg:text-5xl leading-tight text-on-surface font-light italic">
              " Guu & T là thương hiệu nội thất sáng tạo, là sự kết hợp phong cách Mid-century Modern
              Contemporary, đặt nghệ thuật làm trung tâm, tập trung cá nhân hóa và thủ công Việt Nam "
            </h2>
            <div className="w-24 h-px bg-secondary/35 mx-auto" />
          </div>
        </AnimatedSection>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-36 px-8 md:px-20 bg-surface-container-lowest relative overflow-hidden">
        {/* Ambient glow decoration */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <AnimatedSection key={idx} direction="up" delay={0.15 * (idx + 1)} className="h-full">
                <div className="glassmorphism py-16 md:py-24 px-8 md:px-10 flex flex-col justify-between items-start group h-full min-h-[500px] md:min-h-[580px] w-full relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(184,156,142,0.12)] hover:border-secondary/40 hover:bg-surface-bright/20 rounded-sm">
                  {/* Top row with Number and Icon */}
                  <div className="w-full flex justify-between items-center mb-10">
                    <div className="w-12 h-12 flex items-center justify-center border border-secondary/20 group-hover:border-secondary group-hover:bg-secondary group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 rounded-sm bg-surface/50">
                      {value.icon}
                    </div>
                    <span className="noto-serif text-5xl font-light text-secondary/15 tracking-tight group-hover:text-secondary group-hover:scale-105 transition-all duration-500 select-none">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  {/* Text content - pushed down to create negative space */}
                  <div className="space-y-6 flex-1 flex flex-col justify-center w-full">
                    <h3 className="font-sans text-2xl md:text-3xl text-on-surface font-light group-hover:text-secondary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="font-sans text-on-surface-variant leading-relaxed text-sm md:text-base font-light tracking-wide">
                      {value.desc}
                    </p>
                    {/* Expanded details text to reduce blank space */}
                    <p className="font-sans text-on-surface-variant/70 leading-relaxed text-xs md:text-sm font-light tracking-wide border-t border-white/5 pt-5 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {value.moreText}
                    </p>
                  </div>
                  
                  {/* Visual glowing border accent */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-36 px-8 md:px-20 bg-background relative overflow-hidden">
        {/* Ambient light */}
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <AnimatedSection direction="up" className="max-w-2xl">
              <div>
                <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-4">
                  Phương pháp làm việc
                </span>
                <h2 className="font-sans text-4xl md:text-5xl text-on-surface font-light leading-tight">
                  Từ ý tưởng đến hiện thực hoàn mỹ
                </h2>
              </div>
            </AnimatedSection>
            <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-secondary/40 to-transparent ml-12 mb-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {methodology.map((step, idx) => (
              <AnimatedSection key={idx} direction="up" delay={0.1 * (idx + 1)} className="h-full">
                <div className="relative group pt-12 px-6 pb-10 border-t border-secondary/15 hover:border-secondary transition-all duration-500 h-full min-h-[500px] md:min-h-[540px] w-full flex flex-col justify-between bg-surface-container-low/10 hover:bg-surface-container-low/30 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(184,156,142,0.1)] rounded-sm">
                  <div>
                    {/* Top row: Icon and Step Number side by side, below the border line */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-10 h-10 flex items-center justify-center border border-secondary/10 bg-surface/80 group-hover:border-secondary group-hover:bg-secondary group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 rounded-sm">
                        {step.icon}
                      </div>
                      <span className="noto-serif text-4xl font-light text-secondary/20 group-hover:text-secondary group-hover:scale-105 transition-all duration-500 select-none">
                        0{idx + 1}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h4 className="font-sans text-lg md:text-xl text-on-surface font-medium group-hover:text-secondary transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="font-sans text-on-surface-variant text-sm leading-relaxed font-light tracking-wide">
                        {step.desc}
                      </p>
                      {/* Expanded details text to reduce blank space */}
                      <p className="font-sans text-on-surface-variant/65 leading-relaxed text-xs font-light tracking-wide opacity-50 group-hover:opacity-100 transition-opacity duration-500 pt-2 border-t border-white/5">
                        {step.moreText}
                      </p>
                    </div>
                  </div>
                  
                  {/* Detailed bullet points pushed to the bottom */}
                  <div className="mt-8 pt-6 border-t border-white/5 space-y-2.5">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary/45 mt-1.5 shrink-0" />
                        <span className="font-sans text-xs text-on-surface-variant/80 font-light">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-36 px-8 md:px-20 bg-surface-container-high/20 relative overflow-hidden">
        {/* Ambient decoration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto">
          <TeamSlider teamList={teamList} />
        </div>
      </section>
    </div>
  );
}


