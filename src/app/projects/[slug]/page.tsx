"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PORTFOLIO_IMAGES = [
  { id: 1, title: "The Obsidian Sky", location: "PENTHOUSE • HÀ NỘI", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWlUH2uHLgK5lEjlUS6N4DHyWUHjmOQsNJ9Sxn92LS2SJU9CtxINo-uOXnsRsfEO1GWBYabxy0UtjZAeXT5_t_SC_LosIBQRxNdlNLcRez1z1z85uRcuvP1ZLj-8PiRaWSlakqbrSKLZiST8bOmCHJAZ4duRYTBdHqfSBaS-y0pulxFvwMd2cmow1MWhAAblo2WGzkPqnzb94ueKwDbpg9eKbyvlSde2b9M5v_bi2RtPAMG39ZuKMCnY9MEr79BrckjObP0WJafSUs" },
  { id: 2, title: "Silent Monolith Residence", location: "VILLA • SAIGON", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkHVsjObJcVRfbrM09bmdvT1qlLR_y3mM4EkuzzIEXJoQ0DQHuXbvHd3OBPV5UY56I2ghFQnkN9PTedNmV0gU-s5DhKf_Y2Hqv69CR8mtctU2Ot9rbZv5PZOtds6AxDUgDwEzoJLaxfdKks5_qMJkGEaMmOTdYrYXGxKl4rctnNiXh5Xg63bVAZHwcFpFW-oRaomYxYLm88y-jtBX9DHJHkvKbBQDW8VRZMlV0G8COl_FmgMIV-cIKtFFo7Lrf44hSvTJanqR3W3NK" },
  { id: 3, title: "Azure Horizon Duplex", location: "DUPLEX • ĐÀ NẴNG", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA94E5upk4kbuy4FCyPmwAsYYmL2rmBxgjamv9at3H428bjGZ3c_FIXPwIuYiDBVcvOwJ7JG8_p1qDVlZjaAnUReT0qyde4mWSHdvYAGnZZkACDLaBLiZzfrlBOb338a6T0hBZKZN6DWNpPeHGUgOTty3-uY6w1lTiNrPKtIi5QLF_xZEvWSrzLiEEXrbL8HUccMssabsXYpEOwLMVrGY5qAom43W0htEeobRS2WIWOHeyduwmyBlUrXzZWSuHHUvUwdQI47FsjXiF_" },
  { id: 4, title: "Aetheria Creative Atelier", location: "OFFICE • GLOBAL", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg3KC5ojRV8IoD-pI03UflzMbq_UYiQcAi4aXD4iad5aVABk0eEiuwjPvLcu_X_rCvYF1ZESPiUGUChcapWvMGrT79UOhq5fao3k7UXlIjJdGvfsTIFjA8_CUANiGn4xz8puf45pe6Lrfv5cLKv8GQ_Ttyakja66SEgUHGvwnnoiqDgrRTNpHKn7olGGZKdCZ0fneQR2ejKEccS1GShehLMAz6sxtXhe-UHNZvq0ofPJUif2uv8HwR-hAcByl5C3HMrQ1x02KtNDVu" },
];

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-surface-dim overflow-x-hidden">
      {/* Hero */}
      <header className="relative h-screen w-full overflow-hidden">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.7 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover" src={PORTFOLIO_IMAGES[0].url} alt="Project" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
          <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-secondary font-sans text-[10px] tracking-widest uppercase mb-4 block">
            KIẾN TRÚC & NỘI THẤT — 2024
          </motion.span>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }} className="font-sans font-light text-5xl md:text-7xl text-white max-w-4xl leading-tight tracking-tight mb-6">
            Villa Riverside
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9 }} className="font-sans text-on-surface-variant max-w-2xl leading-relaxed">
            Một công trình kiến trúc đỉnh cao, nơi ranh giới giữa thiên nhiên và không gian sống tan biến vào nhau.
          </motion.p>
        </div>
      </header>

      {/* Project Info */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {[
            { label: "Địa Điểm", value: "Hà Nội, Việt Nam" },
            { label: "Diện Tích", value: "450 m²" },
            { label: "Hoàn Thành", value: "2024" },
          ].map((info, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="border-t border-white/10 pt-8">
              <p className="font-sans text-[10px] tracking-widest uppercase text-secondary mb-3">{info.label}</p>
              <p className="font-sans text-xl text-on-surface font-light">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative */}
      <section className="py-8 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-12 font-light">
            Dự án Villa Riverside là một tác phẩm kiến trúc tinh tế, kết hợp hài hòa giữa phong cách Mid-century Modern và những yếu tố đương đại, tạo nên một không gian sống đẳng cấp và bền vững với thời gian.
          </motion.p>
          <h2 className="font-sans text-3xl md:text-4xl font-light text-white mb-8 mt-24">Triết Lý Thiết Kế</h2>
          <p className="font-sans text-on-surface-variant leading-[1.8] mb-12">
            Mỗi góc nhìn trong Villa Riverside được tính toán tỉ mỉ để tối ưu hóa ánh sáng tự nhiên và tầm nhìn ra thiên nhiên. Vật liệu tự nhiên như đá travertine, gỗ sồi khói và đá vôi thủ công tạo nên bề mặt xúc giác phong phú mà không cạnh tranh thị giác.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_IMAGES.map((img, idx) => (
            <motion.div key={img.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="overflow-hidden aspect-[4/3] group">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Similar Works */}
      <section className="py-24 md:py-40 px-6 md:px-20 bg-[#0b0f10]">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-sans text-3xl font-light text-center mb-20 uppercase tracking-[0.3em] text-on-surface">Dự Án Tương Tự</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_IMAGES.slice(1, 4).map((img) => (
              <Link key={img.id} href={`/projects/${img.title.toLowerCase().replace(/\s+/g, "-")}`} className="glass-card group cursor-pointer overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-1000" src={img.url} alt={img.title} referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <span className="font-sans text-[10px] text-secondary mb-4 block tracking-widest uppercase">{img.location}</span>
                  <h4 className="font-sans text-xl font-light text-white group-hover:text-secondary transition-colors uppercase tracking-wider">{img.title}</h4>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/projects" className="inline-flex items-center gap-4 px-12 py-5 border border-secondary/30 hover:border-secondary text-secondary font-sans text-[10px] tracking-[0.3em] uppercase hover:gap-6 transition-all duration-500">
              Xem Tất Cả Dự Án <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
