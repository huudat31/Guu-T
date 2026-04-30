"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Camera, ChevronDown } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdMK8kBEk5ftdKOezCFQlG5Sf5IAw_Yr17nhhGyytTxkZeEzXTOAfPZs4b9wSbFpxXTrJ02sMitxE77CUnrNDiJ6NGhaIDZnRViVy2QgX04_cRWi146d_TAd4E0gsjWJvBZLWD7YDtf2fpFRyQ17WXKGFuwe_bLfIwoyAr4svhjfo_Q9RgisoCZB5r0R-TtdvERYj8x4eLBh_HBy_yUhu3ZRZAzqb3pdLuQ59C6eJovHhRqtDzGwzHAJOalDPqjYV8Al5GxnBWo__s"
            alt="Luxury Interior"
            className="w-full h-full object-cover grayscale opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center px-4">
          <h1 className="font-sans font-light text-5xl md:text-7xl uppercase tracking-[0.4em] mb-4 text-white">Liên Hệ</h1>
          <div className="w-24 h-px bg-secondary mx-auto mb-8" />
          <p className="font-sans text-secondary text-[10px] tracking-widest uppercase">Kết nối cùng không gian tinh bản</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 md:px-20 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 space-y-16">
            <div>
              <h2 className="font-sans font-light text-3xl md:text-4xl text-white mb-12">Thông Tin Liên Hệ</h2>
              <div className="space-y-10 font-sans">
                <div className="flex items-start gap-6 group">
                  <MapPin className="text-secondary w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="space-y-1">
                    <p className="font-sans text-secondary text-[10px] tracking-widest uppercase">ĐỊA CHỈ</p>
                    <p className="text-lg leading-relaxed text-on-surface">123 Đường Kiến Trúc, Quận 1,<br />TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <Phone className="text-secondary w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="space-y-1">
                    <p className="font-sans text-secondary text-[10px] tracking-widest uppercase">ĐIỆN THOẠI</p>
                    <p className="text-lg text-on-surface">+84 28 8888 9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <Mail className="text-secondary w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="space-y-1">
                    <p className="font-sans text-secondary text-[10px] tracking-widest uppercase">EMAIL</p>
                    <p className="text-lg text-on-surface">hello@guu-t.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <Clock className="text-secondary w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
                  <div className="space-y-1">
                    <p className="font-sans text-secondary text-[10px] tracking-widest uppercase">GIỜ LÀM VIỆC</p>
                    <p className="text-lg text-on-surface">8:30 - 18:00 (T2 - T7)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <p className="font-sans text-secondary text-[10px] mb-6 tracking-widest uppercase">THEO DÕI CHÚNG TÔI</p>
              <div className="flex gap-8">
                {[MessageSquare, Users, Camera].map((Icon, idx) => (
                  <a key={idx} href="#" className="text-on-surface-variant hover:text-secondary transition-colors">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
            <div className="glass-card p-10 md:p-16">
              <p className="font-sans text-secondary text-[10px] mb-12 tracking-widest uppercase">Gửi Yêu Cầu Tư Vấn</p>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label className="font-sans text-[10px] text-on-surface-variant absolute -top-6 tracking-widest uppercase">HỌ VÀ TÊN</label>
                    <input type="text" placeholder="Nhập tên của bạn" className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors placeholder:text-on-surface-variant/30 text-white" />
                  </div>
                  <div className="relative">
                    <label className="font-sans text-[10px] text-on-surface-variant absolute -top-6 tracking-widest uppercase">SỐ ĐIỆN THOẠI</label>
                    <input type="tel" placeholder="Nhập số điện thoại" className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors placeholder:text-on-surface-variant/30 text-white" />
                  </div>
                </div>
                <div className="relative">
                  <label className="font-sans text-[10px] text-on-surface-variant absolute -top-6 tracking-widest uppercase">EMAIL</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors placeholder:text-on-surface-variant/30 text-white" />
                </div>
                <div className="relative">
                  <label className="font-sans text-[10px] text-on-surface-variant absolute -top-6 tracking-widest uppercase">DỊCH VỤ QUAN TÂM</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer text-white">
                      <option className="bg-surface-container">Thiết kế nội thất</option>
                      <option className="bg-surface-container">Thiết kế kiến trúc</option>
                      <option className="bg-surface-container">Thi công nội thất</option>
                      <option className="bg-surface-container">Xây nhà trọn gói</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />
                  </div>
                </div>
                <div className="relative">
                  <label className="font-sans text-[10px] text-on-surface-variant absolute -top-6 tracking-widest uppercase">LỜI NHẮN</label>
                  <textarea placeholder="Chia sẻ thêm về mong muốn của bạn..." rows={4} className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors resize-none placeholder:text-on-surface-variant/30 text-white" />
                </div>
                <div className="pt-4">
                  <motion.button whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full md:w-auto px-12 py-5 bg-secondary text-on-secondary font-sans text-xs tracking-[0.2em] uppercase font-bold">
                    GỬI THÔNG TIN
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
