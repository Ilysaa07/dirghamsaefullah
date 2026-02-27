"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Proyek", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar - Hidden on Mobile and when Scrolled */}
      <div 
        className={`bg-dirgham-dark text-gray-300 text-xs transition-all duration-300 overflow-hidden ${
          scrolled ? "h-0 opacity-0 py-0" : "h-auto opacity-100 py-2 border-b border-white/10"
        } hidden md:block`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-dirgham-gold" />
              <span>dirghamsaefullahperkasa@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-dirgham-gold" />
              <span>0851 9494 0033</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-dirgham-gold" />
              <span>Senin - Jumat: 08.00 - 17.00 WIB</span>
            </div>
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <a href="https://www.facebook.com/profile.php?id=61588597033504" target="_blank" rel="noopener noreferrer" className="hover:text-dirgham-gold transition-colors">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/dirghamsaefullah/" target="_blank" rel="noopener noreferrer" className="hover:text-dirgham-gold transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-dirgham-dark/95 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold font-heading text-white">
              PT. <span className="text-dirgham-gold">DIRGHAM</span> SAEFULLAH
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-dirgham-gold transition-colors font-medium text-sm tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/6289691118807"
              className="flex items-center gap-2 bg-dirgham-gold text-dirgham-dark px-5 py-2.5 rounded-full font-bold text-sm tracking-wide hover:bg-white transition-all transform hover:scale-105 shadow-lg shadow-dirgham-gold/20"
            >
              <Phone size={16} />
              <span>Hubungi Kami</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dirgham-dark border-t border-dirgham-gold/20 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-dirgham-gold text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Contact Info in Menu */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-dirgham-gold" />
                    <span className="truncate">dirghamsaefullahperkasa@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-dirgham-gold" />
                    <span>0851 9494 0033</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Clock size={16} className="text-dirgham-gold" />
                    <span>Sen - Jum: 08.00 - 17.00</span>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <a href="https://www.facebook.com/profile.php?id=61588597033504" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dirgham-gold transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="https://www.instagram.com/dirghamsaefullah/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-dirgham-gold transition-colors">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>

                <Link
                    href="https://wa.me/6285194940033"
                    onClick={() => setIsOpen(false)}
                    className="bg-dirgham-gold text-dirgham-dark px-5 py-3 rounded-md font-bold text-center mt-2"
                  >
                    Hubungi Kami
                  </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
