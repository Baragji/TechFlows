import ClientMarquee from '@/components/sections/ClientMarquee';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import StatsSection from '@/components/sections/StatsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | TechFlow Solutions',
  description:
    'Udforsk vores succeshistorier og se hvordan vi har hjulpet virksomheder med at opnå ekstraordinære resultater gennem innovative digitale løsninger.',
  keywords:
    'case studies, portfolio, succeshistorier, digitale løsninger, app udvikling, hjemmesider, automatisering',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-obsidian-950">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/[.2] to-purple-600/[.2] rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-600/[.2] to-blue-600/[.2] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-white/[.8] mb-8 leading-relaxed">
              Succeshistorier der inspirerer og beviser vores ekspertise
            </p>
            <p className="text-lg text-white/[.7] max-w-3xl mx-auto leading-relaxed">
              Udforsk hvordan vi har hjulpet virksomheder med at transformere deres digitale
              tilstedeværelse og opnå målbare resultater gennem innovative løsninger.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Client Marquee */}
      <ClientMarquee />
    </div>
  );
}
