import { fetchSiteSettings } from "@/components/sanity-client";
import ContactHero from "@/components/contact/ContactHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const siteSettings = await fetchSiteSettings();
  const contactBanner = siteSettings?.banners?.contact || {};

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <ContactHero
        heading={contactBanner.heading || "Liên Hệ"}
        subtext={contactBanner.subtext || "Kết nối cùng không gian tinh bản"}
        imageUrl={contactBanner.imageUrl}
      />

      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 w-full mx-auto z-10 relative">
        <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 bg-[#1a1512] border border-white/5 shadow-2xl overflow-hidden">

          <AnimatedSection
            direction="right"
            className="bg-[#1a1512] text-[#d4c5b9] p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center border-r border-white/5"
            delay={0.1}
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-medium tracking-wider text-white leading-tight uppercase font-serif">
                  {"CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG GUU&T".normalize("NFC")}
                </h2>
                <div className="w-12 h-[1px] bg-brand-gold" />
              </div>

              <p className="text-xs leading-relaxed opacity-85 font-light">
                {"Guu & T là thương hiệu nội thất & không gian sống theo đuổi phong cách Mid century kết hợp Modern Contemporary, với định hướng thiết kế độc bản thể hiện cá tính và triết lý riêng của từng chủ nhân. Kiến tạo nên những không gian sống có chiều sâu, đậm dấu ấn cá nhân và trường tồn cùng thời gian.".normalize("NFC")}
              </p>

              <div className="space-y-5 pt-4 text-[10px] tracking-widest uppercase font-medium">
                <div className="space-y-1">
                  <p className="text-white">{"Trụ sở :".normalize("NFC")}</p>
                  <p className="opacity-60 text-slate-300">{"P109 Tầng 2 Toà PZ4, KĐT Vinhomes Smart City, Phường Tây Mỗ, Thành Phố Hà Nội, Việt Nam".normalize("NFC")}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white">{"Thời gian mở cửa:".normalize("NFC")}</p>
                  <p className="opacity-60 text-slate-300">{"8h15 - 17h30 từ thứ 2 đến thứ 7".normalize("NFC")}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white">{"Hotline:".normalize("NFC")}</p>
                  <p className="text-brand-gold font-semibold text-xs">0397163156</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white">Email:</p>
                  <p className="opacity-60 text-slate-300 lowercase">noithatguut@gmail.com</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white">Website:</p>
                  <p className="opacity-60 text-slate-300 lowercase">guut.com.vn</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="left"
            className="bg-[#120e0c] p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center"
            delay={0.2}
          >
            <ContactForm />
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
