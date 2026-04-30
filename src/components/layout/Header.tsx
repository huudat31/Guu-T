"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
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
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
        ? "bg-brand-bg/80 backdrop-blur-md py-4 border-white/10"
        : "bg-transparent py-8 border-transparent"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-light tracking-[0.3em] text-white">
          GUU & T
        </Link>

        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-sans text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 pb-1 ${isActive(link.href)
                  ? "text-brand-gold border-b border-brand-gold"
                  : "text-slate-400 hover:text-brand-gold"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden md:block bg-brand-gold text-brand-bg px-6 py-2.5 font-sans uppercase text-[10px] font-bold tracking-widest hover:bg-[#d4ac5e] transition-colors"
          >
            Enquire Now
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
                className="bg-brand-gold text-brand-bg px-6 py-3 font-sans uppercase text-[10px] font-bold tracking-widest text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
