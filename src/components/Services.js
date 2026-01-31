"use client";

import { motion } from "framer-motion";
import { Hammer, PencilRuler, HardHat, Warehouse, Key, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Hammer,
      title: "Konstruksi Umum",
      desc: "Layanan konstruksi komprehensif mulai dari pondasi hingga finishing, memastikan ketahanan struktural."
    },
    {
      icon: PencilRuler,
      title: "Desain & Perencanaan",
      desc: "Desain arsitektur dan perencanaan ruang untuk mengoptimalkan estetika dan fungsionalitas."
    },
    {
      icon: HardHat,
      title: "Layanan Renovasi",
      desc: "Mengubah ruang yang ada dengan peningkatan modern dan sentuhan akhir premium."
    },
    {
      icon: Warehouse,
      title: "Suplier Material",
      desc: "Menyediakan material konstruksi berkualitas tinggi yang dapat diandalkan untuk setiap skala proyek."
    },
    {
      icon: Key,
      title: "Proyek Terima Jadi",
      desc: "Manajemen proyek menyeluruh (Turnkey Project), menyerahkan kunci properti yang siap huni sepenuhnya kepada Anda."
    },
    {
      icon: ShieldCheck,
      title: "Pemeliharaan & Perbaikan",
      desc: "Layanan pemeliharaan berkelanjutan untuk menjaga properti Anda dalam kondisi prima."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#1a1816] relative text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-dirgham-gold font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Keahlian Kami
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6"
          >
            Solusi Bangunan <span className="text-dirgham-gold">Komprehensif</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Kami menggabungkan keahlian teknis dengan pemecahan masalah yang kreatif untuk menghasilkan proyek yang melampaui harapan di semua sektor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 hover:border-dirgham-gold/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-dirgham-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-dirgham-gold group-hover:text-dirgham-dark transition-colors text-dirgham-gold">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-dirgham-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
