import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan | PT Dirgham Saefullah Perkasa",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://dirghamsaefullah.com/layanan/${slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      }
    }))
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* FAQ Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section for Service */}
      <section className="pt-32 pb-20 bg-dirgham-dark text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/#services" className="inline-flex items-center gap-2 text-dirgham-gold hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Kembali ke Layanan
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
            {service.h1}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div 
            className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h2:text-dirgham-dark prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-a:text-dirgham-gold format"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* FAQs */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold font-heading mb-10 text-dirgham-dark">Tanya Jawab (FAQ)</h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-dirgham-dark mb-3 flex gap-3">
                    <span className="text-dirgham-gold">Q:</span> {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
