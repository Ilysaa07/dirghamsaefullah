"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Cafe Aesthetic Gading Serpong",
      slug: "renovasi-ruko-gading-serpong",
      category: "Renovasi Komersial",
      location: "Gading Serpong",
      image: "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Gudang Logistik Balaraja 1000m2",
      slug: "bangun-gudang-pabrik-balaraja",
      category: "Konstruksi Baja",
      location: "Balaraja, Banten",
      image: "https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Rumah Mewah Klasik BSD City",
      slug: "rumah-mewah-klasik-bsd",
      category: "Bangun Baru",
      location: "BSD City",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-dirgham-gold font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              Bukti Pengalaman (E-E-A-T)
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold font-heading text-dirgham-dark mb-6"
            >
              Studi Kasus <span className="text-dirgham-gold">Proyek Pilihan</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Setiap proyek adalah cerita tentang bagaimana kami mengatasi tantangan nyata dengan solusi arsitektur dan konstruksi presisi di Tangerang dan sekitarnya.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="#" 
              className="group flex items-center gap-2 text-dirgham-dark font-bold hover:text-dirgham-gold transition-colors"
            >
              Lihat Semua Proyek <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/proyek/${project.slug}`} className="group block h-full">
                <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-dirgham-gold/10 transition-all duration-500 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 bg-dirgham-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm text-dirgham-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold font-heading text-dirgham-dark mb-4 group-hover:text-dirgham-gold transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                        <MapPin size={16} className="text-dirgham-gold" />
                        {project.location}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-dirgham-gold group-hover:text-white transition-colors">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
