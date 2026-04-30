"use client";

import React from "react";
import { Globe, Share2, Camera } from "lucide-react";
import { IMAGES } from "@/lib/images";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#080b0c] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="space-y-8">
          <div className="text-[14px] font-black text-brand-gold tracking-[0.3em] uppercase">GUU & T INTERIOR DESIGN STUDIO</div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
            Guu & T is a creative interior brand, putting art at the center and focusing on personalization.
          </p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" aria-label="Website"><Globe size={18} className="hover:text-white cursor-pointer transition-colors" /></a>
            <a href="#" aria-label="Social"><Share2 size={18} className="hover:text-white cursor-pointer transition-colors" /></a>
            <a href="#" aria-label="Instagram"><Camera size={18} className="hover:text-white cursor-pointer transition-colors" /></a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Explore</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Awards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Connect</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="relative group overflow-hidden grayscale border border-white/10 h-64">
          <img
            src={IMAGES.hero[1]}
            alt="Studio Location Map"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 glass-card px-4 py-2 border-white/20">
            <p className="text-[8px] font-bold tracking-widest text-white uppercase">Studio Locations</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-20 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[8px] font-bold tracking-[0.3em] text-slate-600 uppercase">© 2024 GUU & T INTERIOR DESIGN STUDIO. CURATED SPACE.</p>
        <div className="flex gap-8 text-[8px] font-bold tracking-[0.3em] text-slate-600 uppercase">
          <span>London</span>
          <span>New York</span>
          <span>Tokyo</span>
        </div>
      </div>
    </footer>
  );
}
