import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Building, DollarSign, CheckCircle2 } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan | PT Dirgham Saefullah Perkasa",
    };
  }

  return {
    title: `Studi Kasus: ${project.title}`,
    description: project.description,
    openGraph: {
      title: `Studi Kasus: ${project.title}`,
      description: project.description,
      url: `https://dirghamsaefullah.com/proyek/${slug}`,
      images: [
        {
          url: project.image,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  // Generate Article Schema for Case Study
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "image": [
      project.image
    ],
    "author": {
      "@type": "Person",
      "name": "Dirgham Saefullah"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PT. DIRGHAM SAEFULLAH PERKASA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dirghamsaefullah.com/favicon.ico"
      }
    },
    "description": project.description
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Project Header */}
      <section className="pt-32 pb-20 bg-dirgham-dark text-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-dirgham-gold hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> Kembali ke Portofolio
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-dirgham-gold text-dirgham-dark px-3 py-1 text-sm font-bold rounded-full uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Details & Case Study */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content: Case Study Format */}
            <div className="lg:col-span-2 space-y-12">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg prose-headings:font-heading prose-headings:font-bold prose-h2:text-3xl prose-h2:mb-6 prose-h2:text-dirgham-dark prose-p:text-gray-600 prose-p:leading-relaxed max-w-none">
                <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-400 mb-10">
                  <h2 className="text-orange-900 mt-0">Tantangan Proyek (Masalah)</h2>
                  <p className="text-orange-800 mb-0">{project.challenge}</p>
                </div>

                <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-400 mb-10">
                  <h2 className="text-blue-900 mt-0">Strategi Eksekusi (Solusi)</h2>
                  <p className="text-blue-800 mb-0">{project.solution}</p>
                </div>

                <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500 mb-10">
                  <h2 className="text-green-900 mt-0 flex items-center gap-3">
                    <CheckCircle2 className="text-green-600" size={28} /> Hasil Akhir
                  </h2>
                  <p className="text-green-800 mb-0">{project.result}</p>
                </div>
              </div>
            </div>

            {/* Sidebar: Meta Data for E-E-A-T */}
            <div className="space-y-8">
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl sticky top-32 shadow-sm">
                <h3 className="text-xl font-bold font-heading mb-6 text-dirgham-dark">Informasi Proyek</h3>
                
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-dirgham-gold/20 rounded-full flex items-center justify-center shrink-0 text-dirgham-gold">
                      <Building size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">Klien</p>
                      <p className="font-bold text-dirgham-dark">{project.client}</p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-dirgham-gold/20 rounded-full flex items-center justify-center shrink-0 text-dirgham-gold">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">Lokasi</p>
                      <p className="font-bold text-dirgham-dark">{project.location}</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-dirgham-gold/20 rounded-full flex items-center justify-center shrink-0 text-dirgham-gold">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">Durasi</p>
                      <p className="font-bold text-dirgham-dark">{project.duration}</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-dirgham-gold/20 rounded-full flex items-center justify-center shrink-0 text-dirgham-gold">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">Nilai Proyek</p>
                      <p className="font-bold text-dirgham-dark">{project.value}</p>
                    </div>
                  </li>
                </ul>

                <hr className="my-8 border-gray-200" />
                
                <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Tim Eksekutor</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Dirgham+S&background=random" alt="Dirgham" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-dirgham-dark">Dirgham Saefullah</p>
                    <p className="text-xs text-gray-500">Project Manager / Ahli K3</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
