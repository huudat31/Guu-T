import { SERVICES_DATA } from "../lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import RemoteImageWithFallback from "@/components/ui/RemoteImageWithFallback";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };
  if (!service) return { title: "Không tìm thấy dịch vụ" };

  return {
    title: `${service.title} | Guu & T`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const SERVICE_PILLS = SERVICES_DATA.map(s => ({ title: s.title, slug: s.slug }));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <RemoteImageWithFallback
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover grayscale opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="text-secondary font-sans mb-6 block tracking-[0.4em] uppercase text-xs">DỊCH VỤ KIẾN TRÚC & NỘI THẤT</span>
            <h1 className="font-sans font-light text-5xl md:text-7xl text-white mb-8">{service.title}</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-secondary to-transparent" />
          </div>
        </div>
      </section>

      {/* Service Pills */}
      <section className="py-12 bg-surface-container-lowest border-y border-white/5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex justify-center gap-6 min-w-max">
            {SERVICE_PILLS.map((item, idx) => (
              <Link
                key={idx}
                href={`/services/${item.slug}`}
                className={`px-8 py-3 rounded-full border font-sans text-xs tracking-widest transition-all ${item.slug === slug ? "border-secondary bg-secondary/10 text-secondary" : "border-white/10 hover:border-secondary/50 text-on-surface-variant"}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-40 px-6 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {service.stats.map((stat, idx) => (
            <div key={idx} className="text-center animate-fade-in-up">
              <span className="font-sans text-4xl md:text-5xl font-light text-secondary block mb-3">{stat.value}</span>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8 animate-fade-in">
            <span className="font-sans text-secondary tracking-widest uppercase text-xs">{service.visionTitle}</span>
            <h2 className="font-sans font-light text-3xl md:text-5xl text-white">Kiến tạo không gian mang tính di sản</h2>
            <p className="font-sans text-on-surface-variant leading-relaxed">{service.visionText}</p>
            <Link href="/contact" className="inline-block px-12 py-4 border border-secondary text-secondary font-sans text-xs tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-500">
              LIÊN HỆ TƯ VẤN
            </Link>
          </div>
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-4 border border-secondary/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <div className="relative z-10 w-full h-[600px] overflow-hidden">
              <RemoteImageWithFallback
                src={service.visionImage}
                alt="Vision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-40 px-6 md:px-20 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 animate-fade-in">
            <span className="font-sans text-secondary tracking-widest uppercase text-xs block mb-4">QUY TRÌNH LÀM VIỆC</span>
            <h2 className="font-sans font-light text-3xl md:text-5xl text-white">Từng bước đến hoàn hảo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {service.process.map((step, idx) => (
              <div key={idx} className="group border-t border-white/10 pt-8 hover:border-secondary transition-colors duration-500 animate-fade-in-up">
                <span className="font-sans text-5xl font-light text-secondary/20 group-hover:text-secondary/40 transition-colors block mb-6">{step.id}</span>
                <h4 className="font-sans text-sm font-bold text-white tracking-widest uppercase mb-4">{step.title}</h4>
                <p className="font-sans text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card max-w-5xl mx-auto p-12 md:p-24 animate-fade-in">
            <div className="text-center mb-16">
              <span className="font-sans text-secondary block mb-4 tracking-widest uppercase text-xs">KẾT NỐI</span>
              <h2 className="font-sans font-light text-3xl md:text-5xl text-white">Bắt Đầu Hành Trình Của Bạn</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <label className="font-sans text-[10px] text-on-surface-variant block mb-2 tracking-widest uppercase">HỌ VÀ TÊN</label>
                <input className="w-full bg-transparent border-0 border-b border-white/20 focus:border-secondary focus:ring-0 text-white py-2 placeholder:text-white/20 transition-all outline-none" placeholder="Nguyễn Văn A" type="text" />
              </div>
              <div>
                <label className="font-sans text-[10px] text-on-surface-variant block mb-2 tracking-widest uppercase">SỐ ĐIỆN THOẠI</label>
                <input className="w-full bg-transparent border-0 border-b border-white/20 focus:border-secondary focus:ring-0 text-white py-2 placeholder:text-white/20 transition-all outline-none" placeholder="090 123 4567" type="tel" />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-secondary text-on-secondary py-5 font-sans text-xs tracking-widest hover:opacity-90 transition-opacity uppercase">
                  Đăng ký nhận tư vấn ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
