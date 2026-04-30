"use client";

import { motion } from "framer-motion";
import {
  ChevronsDown,
  Diamond,
  Eye,
  BadgeCheck,
} from "lucide-react";

const fadeInProps = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainerProps = {
  initial: { opacity: 0 } as const,
  whileInView: { opacity: 1 } as const,
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/40 z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDduP-QAyuf_x2JI-K5T2lMMwtasDnzgD8sB9FmUzJZUjE2wXfLMs9K9Ek9En8UtE0Tlc9R1yCYf-DZCZguxzFV0MUqejGezlvYM74crHOmw9jO2p0iOlJGQmrXcgXIDmN-Qi_91VD4Z3LR6XO8KMtqc773qhi_zFMq8g6vYgLuWNbAS3-vsMI1FQLwrspBjINIZcw2-R_0oQ6hQgbCQ8IdBV4ccAe-lzffpavIq5c6yHc1cpG-Slw7_YEPQItbRjERY95k6ihw11x4"
            alt="Guu & T Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-sans font-light text-white text-6xl md:text-9xl tracking-tighter mb-6 opacity-95"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-sans text-secondary tracking-[0.4em] uppercase text-xs md:text-sm font-medium"
          >
            Defining Architectural Excellence
          </motion.p>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-secondary opacity-70"
        >
          <ChevronsDown size={40} strokeWidth={1} />
        </motion.div>
      </header>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto text-center">
        <motion.div {...fadeInProps} className="max-w-4xl mx-auto space-y-12">
          <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block">The Philosophy</span>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl leading-tight text-on-surface font-light">
            Guu & T là thương hiệu nội thất sáng tạo, là sự kết hợp phong cách Mid-century Modern Contemporary, đặt nghệ thuật làm trung tâm, tập trung cá nhân hóa và thủ công Việt Nam.
          </h2>
          <div className="w-24 h-px bg-secondary/30 mx-auto" />
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="py-24 md:py-40 px-8 md:px-20 bg-surface-container-low/50">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Diamond className="text-secondary" />,
                title: "Sứ mệnh",
                desc: "Kiến tạo những không gian sống mang đậm dấu ấn cá nhân, nơi mỗi chi tiết là một câu chuyện về nghệ thuật và sự tỉ mỉ của bàn tay người thợ Việt."
              },
              {
                icon: <Eye className="text-secondary" />,
                title: "Tầm nhìn",
                desc: "Trở thành biểu tượng của sự sang trọng tinh giản, kết nối giá trị kiến trúc quốc tế với tinh hoa văn hóa và thủ công bản địa."
              },
              {
                icon: <BadgeCheck className="text-secondary" />,
                title: "Giá trị cốt lõi",
                desc: "Sự trung thực trong chất liệu, cá nhân hóa trong trải nghiệm và tính nghệ thuật trong mọi giải pháp thiết kế."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                className="glass-card p-8 flex flex-col items-start space-y-6 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-secondary/20 group-hover:border-secondary transition-colors duration-500">
                  {value.icon}
                </div>
                <h3 className="font-sans text-2xl text-on-surface font-light">{value.title}</h3>
                <p className="font-sans text-on-surface-variant leading-relaxed text-sm md:text-base">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div {...fadeInProps} className="max-w-2xl">
            <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-4">Our Methodology</span>
            <h2 className="font-sans text-4xl md:text-5xl text-on-surface font-light">Từ ý tưởng đến hiện thực hoàn mỹ.</h2>
          </motion.div>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-secondary/50 to-transparent ml-12 mb-4" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          {[
            {
              num: "01",
              title: "Khởi tạo & Tư vấn",
              desc: "Chúng tôi lắng nghe câu chuyện của bạn để thấu hiểu phong cách sống và những mong muốn thầm kín nhất cho không gian tương lai."
            },
            {
              num: "02",
              title: "Phát triển Thiết kế",
              desc: "Biến ý tưởng thành những bản vẽ kỹ thuật chi tiết và mô phỏng 3D đầy tính nghệ thuật, cân bằng giữa thẩm mỹ và công năng."
            },
            {
              num: "03",
              title: "Bàn giao & Styling",
              desc: "Thi công chuẩn xác và hoàn thiện không gian bằng những món đồ décor thủ công, mang hơi thở cuộc sống vào tác phẩm kiến trúc."
            }
          ].map((step, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative group pt-12 border-t border-white/10 hover:border-secondary transition-colors duration-500">
              <span className="absolute -top-10 left-0 font-sans text-6xl md:text-8xl text-secondary/10 group-hover:text-secondary/20 transition-colors pointer-events-none">{step.num}</span>
              <div className="relative z-10 space-y-4">
                <h4 className="font-sans text-xl md:text-2xl text-on-surface">{step.title}</h4>
                <p className="font-sans text-on-surface-variant text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-40 px-8 md:px-20 bg-surface-container-high/30">
        <div className="max-w-[1440px] mx-auto">
          <motion.div {...fadeInProps} className="text-center mb-24">
            <span className="font-sans text-secondary tracking-widest uppercase text-xs font-semibold block mb-4">The Visionaries</span>
            <h2 className="font-sans text-4xl md:text-5xl text-on-surface font-light">Đội ngũ sáng tạo</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                role: "Principal Architect",
                name: "Quốc Tùng",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0MEBdeLd0n0jrfIfajky5fXbDJBA-Rv5A7Kw_NQaHkwS986MtMr-j2JN4NGYomWU0q3JC6Jp46Ms6yL-Sl7WYbYst315nSHF8F6Ytnex-HLk5BoVL4xIDy-y4i9z3f6MRDJu_wNzecmYpcJpvT1A1VT6MuK9vKurgFko-ODAtUER43fqr9u6y8XGddWFETCoT2A94NqSLHPijeHzdoXVHBotpHNmAqxQQMuB9mSBjN6uHOQKPdqVPkg5LsbB9f30I3punob89dYkU"
              },
              {
                role: "Lead Designer",
                name: "Thanh Hà",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_OYFY9RlzuI1JUYtlCkqrmsx0v6HD0QCWYyG3o0jrLTAlhpQwws-OozA8FyOcttxWDk6bNlVif3WWS3HoA5nG7-dQH7kRenDNvXUmxP7_1LwXXLdTk5ULoJe6JmcaFgz-rX59uk8uvnbi6kokiAcu7ls6uxmDgVNEgdC6Banzy8S7Tk7e0hdKqLZAICOVzds7JvoTSGpsRSxdi3m4gCwLEfTQFik9h6LUZJ--nhj95iHIGULlo1sykIjHwbdKs6G3P_35tTmfOswz"
              },
              {
                role: "Operations Manager",
                name: "Minh Đức",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSPJu1mSgs_MQ6G4ellTwzVlQybdXk57eiDSeC6vYRm3lJeIZGwWLMOr950jpw4CRNGBlAXtU1-rPU-lGux-hpzRFEU_QKN1I0MubQFjSvTSho5CwTG9T8ubQJimCy9blGyBfJtJwaTfMnZPXpvrT5sxwETaPuynZBoPqkGPDnf9nXhEfmnII-6pYU7qwcNY2YeUU0veEaq3zYWrOCcBpUK6vf4GDzQUJQl3TJdzPwwpGxzpF4TmFsLaK1fTlBl6IqBEGEjCfmegCB"
              }
            ].map((member, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-card overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 space-y-2">
                  <p className="font-sans text-secondary uppercase text-[10px] tracking-[0.3em] font-semibold">{member.role}</p>
                  <h5 className="font-sans text-2xl text-on-surface">{member.name}</h5>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
