"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="w-full">
      <h3 className="text-xl tracking-[0.2em] uppercase text-white mb-10 font-light">
        {"GỬI EMAIL CHO CHÚNG TÔI".normalize("NFC")}
      </h3>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full bg-transparent border border-white/10 p-3.5 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors text-white"
          />
          <input
            type="tel"
            placeholder="Số điện thoại *"
            className="w-full bg-transparent border border-white/10 p-3.5 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors text-white"
          />
          <input
            type="email"
            placeholder="Địa chỉ email *"
            className="w-full bg-transparent border border-white/10 p-3.5 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors text-white"
          />
        </div>

        <input
          type="text"
          placeholder="Địa chỉ & vị trí dự án"
          className="w-full bg-transparent border border-white/10 p-3.5 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors text-white"
        />

        <textarea
          rows={4}
          placeholder="Nội dung yêu cầu"
          className="w-full bg-transparent border border-white/10 p-3.5 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors resize-none text-white"
        />

        <div className="flex items-start gap-3 pt-2">
          <input type="checkbox" id="terms" className="mt-1 accent-brand-gold" />
          <label htmlFor="terms" className="text-[9px] leading-relaxed opacity-60 uppercase tracking-wider text-slate-300">
            {"Bằng cách gửi biểu mẫu này, bạn đồng ý với Điều khoản Sử dụng và Chính sách Bảo mật của chúng tôi.".normalize("NFC")}
          </label>
        </div>

        <button className="w-full bg-[#f3e3d3] text-[#1a1512] py-4 flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all group">
          <Send size={14} className="group-hover:-rotate-45 transition-transform" />
          {"GỬI YÊU CẦU".normalize("NFC")}
        </button>
      </form>
    </div>
  );
}
