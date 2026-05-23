"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Leaf, PenTool, Award, Cpu, Share2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const VALUES = [
  {
    icon: <Users size={32} strokeWidth={1} />,
    title: "Tập trung vào khách hàng",
    desc: "Mỗi khách hàng là một thế giới riêng; chúng tôi kể câu chuyện của họ thông qua ngôn ngữ kiến trúc, nhấn mạnh thiết kế lấy con người làm trung tâm."
  },
  {
    icon: <Leaf size={32} strokeWidth={1} />,
    title: "Thân thiện & Bền vững",
    desc: "Cam kết sử dụng vật liệu xanh, năng lượng mặt trời và mái xanh để bảo vệ môi trường và thúc đẩy lối sống bền vững."
  },
  {
    icon: <PenTool size={32} strokeWidth={1} />,
    title: "Sáng tạo & Thẩm mỹ",
    desc: "Mỗi công trình là một tác phẩm nghệ thuật độc đáo, hòa trộn phong cách hiện đại với ảnh hưởng nhiệt đới, tùy chỉnh theo chủ nhân."
  },
  {
    icon: <Award size={32} strokeWidth={1} />,
    title: "Chất lượng & Sự Hoàn hảo",
    desc: "Tuân thủ tiêu chuẩn quốc tế, chúng tôi duy trì kiểm soát chất lượng nghiêm ngặt trong từng chi tiết thiết kế và thi công."
  },
  {
    icon: <Cpu size={32} strokeWidth={1} />,
    title: "Công nghệ & Trải nghiệm",
    desc: "Ứng dụng VR/AI để tạo trải nghiệm thiết kế chân thực, tích hợp công nghệ thông minh cho không gian sống tiện nghi."
  },
  {
    icon: <Share2 size={32} strokeWidth={1} />,
    title: "Cộng đồng & Kết nối",
    desc: "Xây dựng cộng đồng người yêu Modern Tropical để kết nối, chia sẻ câu chuyện và tôn vinh phong cách sống."
  }
];

export default function Commitment() {
  return (
    <section id="commitment" className="section-padding bg-brand-bg">
        <div className="mb-24 space-y-2">
        <AnimatedSection direction="right">
          <h3 className="text-xl md:text-2xl font-light tracking-[0.3em] text-slate-400 uppercase">
            Giá trị đặc trưng của Guu & T
          </h3>
          <h2 className="mt-1 text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Cam kết với khách hàng
          </h2>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
        {VALUES.map((item, idx) => (
          <AnimatedSection
            key={idx}
            delay={idx * 0.1}
            className="flex items-start gap-6 group"
          >
            <div className="text-brand-gold mt-1 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                  {item.title}
                </h4>
                <div className="w-10 h-[1px] bg-white/20 group-hover:w-full transition-all duration-500" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
