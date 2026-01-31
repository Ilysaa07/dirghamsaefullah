"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const benefits = [
    "Tim Profesional Tersertifikasi",
    "Material Berkualitas Tinggi",
    "Pengerjaan Tepat Waktu",
    "Harga Transparan"
  ];

  return (
    <section id="about" className="py-24 bg-dirgham-dark relative overflow-hidden">
      {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-dirgham-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
              {/* Using a placeholder image from Pexels */}
              <img 
                src="/logo.webp"
                alt="Construction Team"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-dirgham-gold/30 rounded-2xl z-0 hidden md:block" />
            
            {/* Experience Badge */}
            <div className="absolute bottom-10 -right-4 md:-right-10 bg-dirgham-gold text-dirgham-dark p-6 rounded-lg shadow-xl z-20 max-w-[200px]">
              <span className="text-5xl font-bold font-heading block mb-1">10+</span>
              <span className="text-sm font-semibold leading-tight block">Tahun Pengalaman Konstruksi</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-dirgham-gold font-bold tracking-wider uppercase text-sm mb-4 block">
              Tentang Perusahaan Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight">
              Kami Tidak Hanya Membangun, <br/> Kami Menciptakan <span className="text-dirgham-gold">Warisan</span>.
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              PT. DIRGHAM SAEFULLAH PERKASA lebih dari sekadar kontraktor umum. Kami adalah mitra Anda dalam mengubah visi menjadi kenyataan. Dengan komitmen mendalam terhadap desain yang berpusat pada manusia dan integritas struktural, kami memastikan setiap proyek bertahan lama.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Mulai dari renovasi hunian hingga pengembangan komersial skala besar, tim kami menerapkan standar ketat dan teknik inovatif untuk memberikan hasil yang unggul.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-dirgham-gold shrink-0" size={20} />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="text-dirgham-gold font-bold border-b-2 border-dirgham-gold hover:text-white hover:border-white transition-colors pb-1">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
