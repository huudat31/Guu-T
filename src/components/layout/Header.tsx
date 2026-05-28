"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Về chúng tôi", href: "/about" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Dự án", href: "/projects" },
    { name: "Tin tức", href: "/news" },
    { name: "Liên hệ", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-brand-bg/80 backdrop-blur-md py-2 border-white/10"
        : "bg-transparent py-4 border-transparent"
        }`}
    >
      <div className="relative w-full px-10 md:px-12 lg:px-18 flex items-center justify-between">
        <Link href="/" className="inline-block">
          <Image
            src="/logo/LOGO2.png"
            alt="GUU & T"
            width={240}
            height={72}
            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8 md:h-10 lg:h-12' : 'h-12 md:h-16 lg:h-18'}`}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-[12px] md:text-[14px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 pb-1 ${isActive(link.href)
                  ? "text-brand-gold border-b border-brand-gold"
                  : "text-slate-400 hover:text-brand-gold"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block bg-[#b89c8e] text-[#171211] px-4 py-2.5 font-sans uppercase text-[10px] font-bold tracking-widest hover:bg-[#c7ad9f] transition-colors mr-6 md:mr-8 lg:mr-10"
          >
            Liên hệ ngay
          </Link>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-bg border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-[10px] tracking-[0.2em] uppercase font-medium transition-colors ${isActive(link.href) ? "text-brand-gold" : "text-slate-400"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#b89c8e] text-[#171211] px-6 py-3 font-sans uppercase text-[10px] font-bold tracking-widest text-center hover:bg-[#c7ad9f] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Liên hệ ngay
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
