"use client";

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { useAppContext } from "@/components/providers/AppProvider";
import Modal from "@/components/ui/Modal";

export default function PopupForm() {
  const { isLoaderFinished } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (isLoaderFinished && !hasShown) {
      const timer = setTimeout(() => {
        console.log("Popup triggered!");
        setIsOpen(true);
        setHasShown(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoaderFinished, hasShown]);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1a1512] text-[#d4c5b9]">
        {/* Left Side: Company Info */}
        <div className="p-8 lg:p-12 space-y-8 border-r border-white/5">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium tracking-wider text-white leading-tight uppercase">
              CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG GUU&T
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold" />
          </div>

          <p className="text-xs leading-relaxed opacity-80 font-light">
            Guu & T là thương hiệu nội thất & không gian sống theo đuổi phong cách Mid century kết hợp Modern Contemporary,với định hướng thiết kế độc bản thể hiện cá tính và triết lý riêng của từng chủ nhân.Kiến tạo nên những không gian sống có chiều sâu,đậm dấu ấn cá nhân và trường tồn cùng thời gian          </p>

          <div className="space-y-4 pt-4 text-[10px] tracking-widest uppercase font-medium">
            <div className="space-y-1">
              <p className="text-white">Trụ sở :</p>
              <p className="opacity-60">P109 Tầng 2 Toà PZ4, KĐT Vinhomes smart city, phường Tây Mỗ, Thành Phố Hà Nội, Việt Nam</p>
            </div>
            <div className="space-y-1">
              <p className="text-white">Thời gian mở cửa:</p>
              <p className="opacity-60">8h15-17h30 từ thứ 2 đến thứ 7</p>
            </div>
            <div className="space-y-1">
              <p className="text-white">Hotline:</p>
              <p className="text-brand-gold">0397163156</p>
            </div>
            <div className="space-y-1">
              <p className="text-white">Email:</p>
              <p className="opacity-60 lowercase">Noithatguut@gmail.com</p>
            </div>
            <div className="space-y-1">
              <p className="text-white">Website:</p>
              <p className="opacity-60 lowercase">guut.com.vn</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-8 lg:p-12 bg-[#120e0c]">
          <h3 className="text-xl tracking-[0.2em] uppercase text-white mb-10 font-light">
            GỬI EMAIL CHO CHÚNG TÔI
          </h3>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full bg-transparent border border-white/10 p-3 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors"
              />
              <input
                type="tel"
                placeholder="Số điện thoại *"
                className="w-full bg-transparent border border-white/10 p-3 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Địa chỉ email *"
                className="w-full bg-transparent border border-white/10 p-3 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors"
              />
            </div>

            <input
              type="text"
              placeholder="Địa chỉ & vị trí dự án"
              className="w-full bg-transparent border border-white/10 p-3 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors"
            />

            <textarea
              rows={4}
              placeholder="Nội dung yêu cầu"
              className="w-full bg-transparent border border-white/10 p-3 text-[10px] uppercase tracking-widest focus:outline-none focus:border-brand-gold transition-colors resize-none"
            />

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" id="terms" className="mt-1 accent-brand-gold" />
              <label htmlFor="terms" className="text-[9px] leading-relaxed opacity-60 uppercase tracking-wider">
                Bằng cách gửi biểu mẫu này, bạn đồng ý với Điều khoản Sử dụng và Chính sách Bảo mật của chúng tôi.
              </label>
            </div>

            <button className="w-full bg-[#f3e3d3] text-[#1a1512] py-4 flex items-center justify-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all group">
              <Send size={14} className="group-hover:-rotate-45 transition-transform" />
              GỬI YÊU CẦU
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
