"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image (Placeholder until user updates) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1920')", // High quality construction placeholder
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-dirgham-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 border border-dirgham-gold/30 rounded-full text-dirgham-gold text-sm font-semibold tracking-wider uppercase mb-6 bg-black/30 backdrop-blur-sm">
            PT. Dirgham Saefullah Perkasa
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight">
            Jasa Kontraktor Tangerang <br />
            <span className="text-dirgham-gold">Terpercaya & Berpengalaman</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Solusi konstruksi, bangun rumah, dan renovasi bangunan premium yang disesuaikan dengan kebutuhan unik Anda di wilayah Tangerang dan Banten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/6289691118807"
              className="px-8 py-4 bg-dirgham-gold text-dirgham-dark rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-dirgham-gold/25"
            >
              Mulai Proyek Anda <ArrowRight size={20} />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Lihat Layanan
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-dirgham-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
