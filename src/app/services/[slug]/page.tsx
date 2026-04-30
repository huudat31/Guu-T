"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDbuHKGoPkZnqHN_OQccpU6ZHR_B3IKkCxFE-n8yRYexYUV5qrLJeF-4O_HVGCvdv58-NfVfeKe6re70g3bX3lfe4JdK5r6ONHArV92mSPINqF4D2Sy9u5zujRu0LX-4e743r05UARsa9f9t033xTT0tK7q1S5L4vhMtAY31HZQQvslTVMhKZ4UsPsj3BZEMCYaqes7__X9g5nb3O44c6NqWaSRtGUMWgpikkX9o0CByB3YN1UHUBos5AmVd4LOFIlICZapzEJNCBHB";
const VISION_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCavmk30XC8yGRGgWPEi4JhyIRDt02WAx4kU3HkHIYTh80NT46uYxDILWTOl6pF7MFvWU9zGThcntW8Oogq64OQ8nUO_qn5GAauFsOy2F8t5s3ofCvWleIRhkqHlbSTATW5T21Yv7PPh0FIx7ptf48t9_WKfUPk_Kn3HOldbo09fs3YquRqNWrNeDJO6UBHQrsy2r9w3rYx6u_sSubLc21MV3z3bnVElAtVduI8ERBXBZQIye7wfS0YADG7PnpGHcjEFT4t_s28v9jL";

const STATS = [
  { label: "Dự Án Hoàn Thiện", value: "200+" },
  { label: "Năm Kinh Nghiệm", value: "10+" },
  { label: "Khách Hàng Hài Lòng", value: "500+" },
  { label: "Đối Tác Uy Tín", value: "50+" }
];

const PROCESS_STEPS = [
  { id: "01", title: "KHẢO SÁT & TƯ VẤN", description: "Lắng nghe nhu cầu và phân tích hiện trạng không gian thực tế." },
  { id: "02", title: "THIẾT KẾ SƠ PHÁC", description: "Phát triển ý tưởng mặt bằng và tâm trạng không gian (Moodboard)." },
  { id: "03", title: "PHỐI CẢNH 3D", description: "Trực quan hóa không gian với độ chi tiết vật liệu cao cấp nhất." },
  { id: "04", title: "BÀN GIAO HỒ SƠ", description: "Hoàn thiện bộ bản vẽ kỹ thuật chi tiết phục vụ thi công." }
];

const SERVICE_PILLS = ["Thiết Kế Nội Thất", "Thiết Kế Kiến Trúc", "Thi Công Trọn Gói", "Cung Cấp Nội Thất"];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src={HERO_IMG} alt="Luxury Interior" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="max-w-3xl">
            <span className="text-secondary font-label-caps mb-6 block tracking-widest uppercase text-xs">ARCHITECTURE & INTERIOR SERVICE</span>
            <h1 className="font-sans font-light text-5xl md:text-7xl text-white mb-8">Thiết Kế Nội Thất</h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 96 }} transition={{ delay: 1, duration: 1 }} className="h-1 bg-gradient-to-r from-secondary to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Service Pills */}
      <section className="py-12 bg-surface-container-lowest border-y border-white/5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex justify-center gap-6 min-w-max">
            {SERVICE_PILLS.map((item, idx) => (
              <button key={idx} className={`px-8 py-3 rounded-full border font-label-caps text-xs tracking-widest transition-all ${idx === 0 ? "border-secondary bg-secondary/10 text-secondary" : "border-white/10 hover:border-secondary/50 text-on-surface-variant"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-40 px-6 md:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="text-center">
              <span className="font-sans text-4xl md:text-5xl font-light text-secondary block mb-3">{stat.value}</span>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <span className="font-label-caps text-secondary tracking-widest uppercase text-xs">TẦM NHÌN KIẾN TRÚC</span>
            <h2 className="font-sans font-light text-3xl md:text-5xl text-white">Kiến tạo không gian mang tính di sản</h2>
            <p className="font-sans text-on-surface-variant leading-relaxed">Tại Guu & T, chúng tôi tin rằng thiết kế nội thất không chỉ đơn thuần là việc sắp đặt vật dụng. Đó là nghệ thuật điều phối ánh sáng, vật liệu và tỷ lệ để tạo nên một thực thể sống động, phản ánh tâm hồn và đẳng cấp của gia chủ.</p>
            <Link href="/contact" className="inline-block px-12 py-4 border border-secondary text-secondary font-label-caps text-xs tracking-widest hover:bg-secondary hover:text-on-secondary transition-all duration-500">
              LIÊN HỆ TƯ VẤN
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative group">
            <div className="absolute -inset-4 border border-secondary/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <img src={VISION_IMG} alt="Material Palette" className="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-40 px-6 md:px-20 bg-surface-container-low/30">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
            <span className="font-label-caps text-secondary tracking-widest uppercase text-xs block mb-4">QUY TRÌNH LÀM VIỆC</span>
            <h2 className="font-sans font-light text-3xl md:text-5xl text-white">Từng bước đến hoàn hảo</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group border-t border-white/10 pt-8 hover:border-secondary transition-colors duration-500">
                <span className="font-sans text-5xl font-light text-secondary/20 group-hover:text-secondary/40 transition-colors block mb-6">{step.id}</span>
                <h4 className="font-sans text-sm font-bold text-white tracking-widest uppercase mb-4">{step.title}</h4>
                <p className="font-sans text-on-surface-variant text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card max-w-5xl mx-auto p-12 md:p-24">
            <div className="text-center mb-16">
              <span className="font-label-caps text-secondary block mb-4 tracking-widest uppercase text-xs">LET&apos;S CONNECT</span>
              <h2 className="font-sans font-light text-3xl md:text-5xl text-white">Bắt Đầu Hành Trình Của Bạn</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 tracking-widest uppercase">HỌ VÀ TÊN</label>
                <input className="w-full bg-transparent border-0 border-b border-white/20 focus:border-secondary focus:ring-0 text-white py-2 placeholder:text-white/20 transition-all outline-none" placeholder="Nguyễn Văn A" type="text" />
              </div>
              <div>
                <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 tracking-widest uppercase">SỐ ĐIỆN THOẠI</label>
                <input className="w-full bg-transparent border-0 border-b border-white/20 focus:border-secondary focus:ring-0 text-white py-2 placeholder:text-white/20 transition-all outline-none" placeholder="090 123 4567" type="tel" />
              </div>
              <div>
                <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 tracking-widest uppercase">DỊCH VỤ QUAN TÂM</label>
                <select className="w-full bg-transparent border-0 border-b border-white/20 focus:border-secondary focus:ring-0 text-white py-2 transition-all appearance-none cursor-pointer outline-none">
                  <option className="bg-slate-900">Thiết Kế Nội Thất</option>
                  <option className="bg-slate-900">Thiết Kế Kiến Trúc</option>
                  <option className="bg-slate-900">Thi Công Trọn Gói</option>
                </select>
              </div>
              <div>
                <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 tracking-widest uppercase">NGÂN SÁCH DỰ KIẾN</label>
                <input className="w-full bg-transparent border-0 border-b border-white/20 focus:border-secondary focus:ring-0 text-white py-2 placeholder:text-white/20 transition-all outline-none" placeholder="Ví dụ: 2 tỷ - 5 tỷ VNĐ" type="text" />
              </div>
              <div className="md:col-span-2">
                <label className="font-label-caps text-[10px] text-on-surface-variant block mb-2 tracking-widest uppercase">GHI CHÚ THÊM</label>
                <textarea className="w-full bg-transparent border-0 border-b border-white/20 focus:border-secondary focus:ring-0 text-white py-2 placeholder:text-white/20 transition-all resize-none outline-none" placeholder="Chia sẻ thêm về ý tưởng của bạn..." rows={4} />
              </div>
              <div className="md:col-span-2 text-center pt-8">
                <button type="submit" className="bg-secondary text-on-secondary px-16 py-5 font-label-caps text-xs tracking-widest hover:opacity-90 transition-opacity">
                  ĐĂNG KÝ TƯ VẤN & BÁO GIÁ
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
