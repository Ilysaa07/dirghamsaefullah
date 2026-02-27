"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Send Email via FormSubmit (AJAX)
      await fetch("https://formsubmit.co/ajax/dirghamsaefullahperkasa@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          _subject: "Pesan Baru dari Website Dirgham Saefullah",
          _template: "table"
        })
      });

      // 2. Redirect to WhatsApp
      const waNumber = "6289691118807";
      const text = `Halo, saya ${formData.firstName} ${formData.lastName}.%0AEmail: ${formData.email}%0A%0APesan:%0A${formData.message}`;
      const waUrl = `https://wa.me/${waNumber}?text=${text}`;
      
      window.open(waUrl, '_blank');
      
      // Reset form
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      alert("Pesan berhasil dikirim! Mengalihkan ke WhatsApp...");

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan. Silakan coba lagi atau hubungi via WhatsApp langsung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dirgham-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-dirgham-gold font-bold tracking-wider uppercase text-sm mb-4 block">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Mari Diskusikan <span className="text-dirgham-gold">Proyek Anda</span>
            </h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              Siap untuk memulai proyek konstruksi Anda berikutnya? Hubungi kami hari ini untuk konsultasi dan penawaran. Kami siap menjawab pertanyaan apa pun yang Anda miliki.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dirgham-gold/20 flex items-center justify-center text-dirgham-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Kantor Kami</h4>
                  <p className="text-gray-400">Jalan Benteng Jaya, Tangerang, Indonesia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dirgham-gold/20 flex items-center justify-center text-dirgham-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Nomor Telepon</h4>
                  <p className="text-gray-400">0851 9494 0033</p>
                  <p className="text-sm text-gray-500 mt-1">Sen-Jum dari 8.00 - 17.00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dirgham-gold/20 flex items-center justify-center text-dirgham-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Alamat Email</h4>
                  <p className="text-gray-400">dirghamsaefullahperkasa@gmail.com</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <h4 className="text-white font-bold text-lg mb-4">Media Sosial</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61588597033504" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-dirgham-gold hover:text-dirgham-dark transition-all duration-300">
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.instagram.com/dirghamsaefullah/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-dirgham-gold hover:text-dirgham-dark transition-all duration-300">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nama Depan</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dirgham-gold transition-colors" 
                    placeholder="Budi" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nama Belakang</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dirgham-gold transition-colors" 
                    placeholder="Santoso" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dirgham-gold transition-colors" 
                  placeholder="budi@contoh.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dirgham-gold transition-colors" 
                  placeholder="Ceritakan tentang proyek Anda..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-dirgham-gold text-dirgham-dark py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Mengirim... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Kirim Pesan <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
