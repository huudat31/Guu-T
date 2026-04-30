"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    slug: "interior-design",
    title: "Interior Design",
    description: "Kiến tạo không gian sống nghệ thuật, kết hợp hoàn hảo giữa công năng sử dụng và thẩm mỹ đương đại.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAymWmkCzWsGPAG21BUiQ1yVoEBf3leVSRMXA_tnk8vUPa9UQNL3NR27OtzlPXp0DACPmCFU_wsrmnU517uUfUeXLt7kgzXbltwOvDPzcofBjhY9g_AwBrm_m9fpbbouYGasjWodGBVP46kSNIeIlnKjlyMwlF-mGQVEts2-YPxupeKpEjCd4mxgE0oUFXmup-flbDH3jZ3bwFOemlB7WAlwZVbaqW8z3zb9wD-GXUVqOmhzdXJpZtgfOPZJZmnQhLPaZA38SzycIch"
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    description: "Giải pháp kiến trúc đột phá, định hình phong cách sống thượng lưu qua những khối hình tinh xảo.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCee_QX4MovFTG2chxJjE91QIkuZ7fsWg0kz7zMK-aZSNc3MvGUL8qseYCJeWeo3dorYaZOU1eG6_DsmnSdey9f7IxGvfzzdaA_tnGLGFDIAxbO0s7m1FiPIDfsTix98o_qVCh7VwFoRseC66GmkfpzhvrgKgDvtRYJOy6FTTA0Xn7x0VRKn3HoMlzkHL1PA_RQ1Y3l_F6ePZTNLWyUsBVmVmfq_8_G51feOUa7AdRml7pNkNJl1QGlK9hWdZ3-op1rMnrv3Lvf29XQ"
  },
  {
    slug: "interior-construction",
    title: "Interior Construction",
    description: "Đội ngũ thi công tay nghề cao, đảm bảo độ chính xác tuyệt đối trong từng chi tiết vật liệu nhỏ nhất.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGMdTmk3mPYM8IB8Vd4Nh9VWOuGyT37iPUG9y64COIJkI57dEnRbrmuiKgexy4hzDwnkaqnsfZOYu1rhEeVuSwwgI_8bf8UgO7MUwDnS8F9rLgeCq-U_mUSXm_msvLr8x3dHSSMxoJP1IE23EQGwjnSKT8Vs9EDgvRUVHk6MAB2TVQiVrqtFhqcemTnW_eo3wP_CN9v7jvhOjhN41YD486XQDAQy7tMZxQSK4EEcoQvguLBqZLIsD42ta_IJRxL5IF3iPNyFkYnSU"
  },
  {
    slug: "turnkey-construction",
    title: "Turnkey House Construction",
    description: "Dịch vụ chìa khóa trao tay toàn diện, từ ý tưởng sơ phác đến khi bàn giao công trình hoàn mỹ.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu_C4vyCrOgnVv-pmzNfJ78VMUoCOJj0CG2SUG_BEHXaTLz6cq4oO7oJI3jsjz5Q--CxNF2Ljrc1gpg7tkORuUPg7vXcCmwtDjBoHRsnfuDy2Cjw8km-ymuf6sxihALjGQ6WgUl6UmpEcWXoIH8nJGQanc3EhqbugmrmQ7uIXaAtmEciyetrdmu6vahLZP_vHk3pwbcEzDyjSXC9lSv__fAZuJDpZM1Mjf3iLG0e3hYa9wsBii9_sVFX9PWeTfUfoCGJHBpAuRlSrE"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen text-on-background">
      <header className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWfxDt5kmtATPcoEYOvk-8bnTtt1MkAIjF7-FPGrFc4QrKmIuaTrfPD3D_41oXXfXsdZhYSJbYmIKnUjrJvjDMazLG4Pn9p7x-eFhSK93LbI76XocQbKvCgFAurYrBogaYyRwrppdw0BIhqdMRDB7VFJSDSypVPDGcZUfoyZjPs3ClfB9J8fjL751TfbY3o67zCqISnw36Z4Q1mMyJLwqHkR3yTK5mr0OhALjNknfmpx-UxSlAWx8ouDA2Ya2dGjn9tyaj0unb7RG_"
            alt="Luxury architectural interior"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-sans font-light text-5xl md:text-8xl text-white mb-8 tracking-tight">Dịch Vụ</h1>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="text-secondary w-10 h-10 mx-auto mt-12" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden glass-card cursor-pointer"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src={service.image} alt={service.title} referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                <div className="h-1 w-12 bg-secondary mb-6 group-hover:w-24 transition-all duration-500" />
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-wide">{service.title}</h2>
                <p className="text-sm text-slate-300 mb-8 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">{service.description}</p>
                <Link href={`/services/${service.slug}`} className="w-fit px-8 py-4 border border-secondary text-secondary font-semibold text-[10px] tracking-[0.2em] uppercase hover:bg-secondary hover:text-on-secondary transition-all duration-300">
                  Xem Chi Tiết
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-40">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full py-24 border-y border-white/5 flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-5xl font-light text-white mb-8">Ready to define your space?</h3>
          <Link href="/contact" className="bg-secondary text-on-secondary px-12 py-5 font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-500">
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
