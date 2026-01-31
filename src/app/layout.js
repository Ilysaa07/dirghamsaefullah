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
  metadataBase: new URL('https://dirghamsaefullah.com'),
  title: "PT. DIRGHAM SAEFULLAH PERKASA - Kontraktor & Supplier Umum",
  description: "Jasa Kontraktor Umum Profesional. Keunggulan konstruksi, renovasi, dan desain oleh PT. DIRGHAM SAEFULLAH PERKASA.",
  keywords: ["Kontraktor Umum", "General Contractor", "Konstruksi Rumah", "Renovasi Bangunan", "Desain Interior", "Supplier Material", "Tangerang", "Jakarta", "Indonesia", "PT Dirgham Saefullah Perkasa", "Jasa Bangun Rumah"],
  authors: [{ name: "PT. DIRGHAM SAEFULLAH PERKASA" }],
  creator: "PT. DIRGHAM SAEFULLAH PERKASA",
  publisher: "PT. DIRGHAM SAEFULLAH PERKASA",
  alternates: {
    canonical: '/',
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "PT. DIRGHAM SAEFULLAH PERKASA",
    "image": "https://dirghamsaefullah.com/logo.webp",
    "description": "Jasa Kontraktor Umum Profesional. Keunggulan konstruksi, renovasi, dan desain oleh PT. DIRGHAM SAEFULLAH PERKASA.",
    "url": "https://dirghamsaefullah.com",
    "telephone": "+6289691118807",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Benteng Jaya",
      "addressLocality": "Tangerang",
      "addressCountry": "ID"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
