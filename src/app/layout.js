import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "PT. DIRGHAM SAEFULLAH PERKASA - Kontraktor & Supplier Umum",
  description: "Jasa Kontraktor Umum Profesional. Keunggulan konstruksi, renovasi, dan desain oleh PT. DIRGHAM SAEFULLAH PERKASA.",
  openGraph: {
    title: "PT. DIRGHAM SAEFULLAH PERKASA - Kontraktor & Supplier Umum",
    description: "Mitra terpercaya Anda untuk keunggulan konstruksi dan renovasi.",
    url: "https://dirghamsaefullah.com",
    siteName: "PT. DIRGHAM SAEFULLAH PERKASA",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
