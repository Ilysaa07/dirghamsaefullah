import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dirgham-dark text-white pt-20 pb-8 border-t border-dirgham-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-heading mb-6">
              PT. <span className="text-dirgham-gold">DIRGHAM</span> SAEFULLAH PERKASA
            </h3>
            <p className="text-dirgham-neutral max-w-md mb-8 leading-relaxed">
              Kami adalah kontraktor umum terkemuka yang berdedikasi untuk memberikan keunggulan dalam konstruksi, renovasi, dan desain. Membangun masa depan Anda dengan presisi dan integritas.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588597033504" },
                { icon: Instagram, href: "https://www.instagram.com/dirghamsaefullah/" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : "_self"}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-dirgham-gold hover:text-dirgham-dark transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-dirgham-gold">Tautan Cepat</h4>
            <ul className="space-y-4">
              {[
                { name: 'Beranda', href: '/' },
                { name: 'Tentang Kami', href: '#about' },
                { name: 'Layanan', href: '#services' },
                { name: 'Proyek', href: '#projects' },
                { name: 'Kontak', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-dirgham-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 text-dirgham-gold">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-dirgham-gold shrink-0 mt-1" />
                <span>Jalan Benteng Jaya, Tangerang, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-dirgham-gold shrink-0" />
                <span>0851 9494 0033</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-dirgham-gold shrink-0" />
                <span>dirghamsaefullahperkasa@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PT. Dirgham Saefullah Perkasa. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-dirgham-gold">Kebijakan Privasi</a>
            <a href="#" className="hover:text-dirgham-gold">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
