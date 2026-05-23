"use client";

import React from "react";
import { Globe, Share2, Camera } from "lucide-react";
import { IMAGES } from "@/lib/images";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#080b0c] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="space-y-8">
          <div className="text-[14px] font-black text-brand-gold tracking-[0.3em] uppercase">GUU & T INTERIOR DESIGN STUDIO</div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Guu & T là thương hiệu thiết kế nội thất sáng tạo, lấy nghệ thuật làm trọng tâm và chú trọng cá nhân hóa trong từng không gian.
          </p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" aria-label="Website"><Globe size={18} className="hover:text-white cursor-pointer transition-colors" /></a>
            <a href="#" aria-label="Social"><Share2 size={18} className="hover:text-white cursor-pointer transition-colors" /></a>
            <a href="#" aria-label="Instagram"><Camera size={18} className="hover:text-white cursor-pointer transition-colors" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">KHÁM PHÁ</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              <li><Link href="/projects" className="hover:text-white transition-colors">Dự án</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Dịch vụ</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">Tin tức</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">KẾT NỐI</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>

        <div className="relative group overflow-hidden grayscale border border-white/10 h-64">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkrZbgodpyVbqx3OxY9HYXFDaIKjQKKeBfK5PCg0NlawSv0j4OqvCkvR5pElfglHX59G37mh36LMeUbNpDYKGa7d6JgevCYVqCFhkh_s6--6ucgORXcQC3wxcb85vUxhdf0-G5BzJWotZZbNB-CpazKHNd5JLjM-cLd0iSQaepPWkfguabGYJbISxw6Gil_CWzgZjSVh7vr0pngrfl3plv-WIPrEcvagryfhIGwF7cwjFNbhsKerlUsvyRZTHP-nowvxcvLOsVpAeu"
            alt="Studio Location"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 glass-card px-4 py-2 border-white/20">
            <p className="text-[8px] font-bold tracking-widest text-white uppercase">ĐỊA ĐIỂM STUDIO</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[8px] font-bold tracking-[0.3em] text-slate-600 uppercase">© 2024 GUU & T INTERIOR DESIGN STUDIO. CURATED SPACE.</p>
        <div className="flex gap-8 text-[8px] font-bold tracking-[0.3em] text-slate-600 uppercase">
          <span>Hà Nội</span>
          <span>Sài Gòn</span>
          <span>Đà Nẵng</span>
        </div>
      </div>
    </footer>
  );
}
