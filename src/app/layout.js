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
  title: {
    default: "🏆 PT Dirgham Saefullah Perkasa | Jasa Kontraktor Tangerang Terpercaya",
    template: "%s | PT Dirgham Saefullah Perkasa"
  },
  description: "Mencari kontraktor di Tangerang/Banten? PT Dirgham Saefullah Perkasa siap bantu bangun/renovasi dengan RAB transparan & tukang berpengalaman. Konsultasi GRATIS sekarang!",
  keywords: ["Jasa Kontraktor Tangerang", "Kontraktor Banten", "General Contractor", "Bangun Bangunan", "Renovasi Rumah Tangerang", "Desain Interior", "PT Dirgham Saefullah Perkasa", "Kontraktor Terpercaya"],
  authors: [{ name: "Dirgham Saefullah" }],
  creator: "PT. DIRGHAM SAEFULLAH PERKASA",
  publisher: "PT. DIRGHAM SAEFULLAH PERKASA",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "🏆 PT Dirgham Saefullah Perkasa | Jasa Kontraktor Tangerang Terpercaya",
    description: "Mencari kontraktor di Tangerang/Banten? PT Dirgham Saefullah Perkasa siap bantu bangun/renovasi dengan RAB transparan & tukang berpengalaman. Konsultasi GRATIS sekarang!",
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
    "description": "Jasa kontraktor umum profesional, renovasi, dan bangun rumah di Tangerang dan Banten.",
    "url": "https://dirghamsaefullah.com",
    "telephone": "+6285194940033",
    "priceRange": "Rp1.000.000 - Rp10.000.000+",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Benteng Jaya",
      "addressLocality": "Tangerang",
      "addressRegion": "Banten",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.178306,
      "longitude": 106.631889
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Tangerang"
      },
      {
        "@type": "City",
        "name": "Tangerang Selatan"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Banten"
      }
    ],
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
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61588597033504",
      "https://www.instagram.com/dirghamsaefullah/"
    ]
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
