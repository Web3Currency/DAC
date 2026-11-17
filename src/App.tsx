import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyFinderSection } from './components/PropertyFinderSection';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AddressSection } from './components/AddressSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { PropertyDetailPage } from './components/PropertyModal';
import { ArticleModal } from './components/ArticleModal';
import { ScrollAnimations } from './components/ScrollAnimations';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ServiceItem, PropertyItem, ArticleItem } from './types';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [intakeData, setIntakeData] = useState<{ assetType?: string; purpose?: string; location?: string } | undefined>(undefined);
  const [activeServiceForModal, setActiveServiceForModal] = useState<ServiceItem | null>(null);
  const [activePropertyForModal, setActivePropertyForModal] = useState<PropertyItem | null>(null);
  const [propertyReturnScroll, setPropertyReturnScroll] = useState(0);
  useEffect(() => { if (!activePropertyForModal) window.scrollTo({ top: propertyReturnScroll, behavior: 'instant' }); }, [activePropertyForModal, propertyReturnScroll]);
  const [activeArticleForModal, setActiveArticleForModal] = useState<ArticleItem | null>(null);
  const [propertyFilter, setPropertyFilter] = useState<{ location: string; category: string; price: string } | undefined>(undefined);

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIntakeData(undefined);
    setConsultationOpen(true);
  };
  const handleSearchProperties = (filters: { location: string; category: string; price: string }) => setPropertyFilter(filters);
  const handleViewService = (service: ServiceItem) => setActiveServiceForModal(service);
  const handleSelectProperty = (property: PropertyItem) => {
    setPropertyReturnScroll(window.scrollY);
    setActivePropertyForModal(property);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const handleRequestViewing = (property: PropertyItem) => {
    setIntakeData({ assetType: property.category, purpose: `Inquiry regarding ${property.title} (${property.status})`, location: property.location });
    setSelectedServiceId('estate-agency-brokerage');
    setConsultationOpen(true);
  };
  const handleReadArticle = (article: ArticleItem) => setActiveArticleForModal(article);

  if (activePropertyForModal) return <div className="min-h-screen w-full bg-white text-[#252223] antialiased"><PropertyDetailPage property={activePropertyForModal} onClose={() => setActivePropertyForModal(null)} onInquire={handleRequestViewing} /></div>;

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-white text-[#252223] antialiased selection:bg-[#8ABE4B] selection:text-[#252223]">
      <Header onOpenConsultation={handleOpenConsultation} />
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {currentPath === '/services' ? (
          <ServicesPage onOpenConsultation={handleOpenConsultation} onViewServiceDetail={handleViewService} />
        ) : currentPath === '/about' ? (
          <AboutPage onOpenConsultation={() => handleOpenConsultation()} />
        ) : currentPath === '/contact' ? (
          <><ContactSection preselectedServiceId={selectedServiceId} /><AddressSection /></>
        ) : (
          <>
            <Hero onOpenConsultation={handleOpenConsultation} />
            <PropertyFinderSection onSearchProperties={handleSearchProperties} />
            <IndustriesSection onOpenConsultation={() => handleOpenConsultation()} />
            <WhyChooseUs onOpenConsultation={() => handleOpenConsultation()} />
            <ProjectsSection onSelectProperty={handleSelectProperty} onRequestViewing={handleRequestViewing} filterCriteria={propertyFilter} />
            <ProcessSection onOpenConsultation={() => handleOpenConsultation('property-valuation')} />
            <ArticlesSection onReadArticle={handleReadArticle} />
          </>
        )}
      </main>
      <Footer />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} defaultServiceId={selectedServiceId} initialData={intakeData} />
      <ServiceModal service={activeServiceForModal} onClose={() => setActiveServiceForModal(null)} onInquire={handleOpenConsultation} />
      <ArticleModal article={activeArticleForModal} onClose={() => setActiveArticleForModal(null)} onConsult={() => handleOpenConsultation('property-valuation')} />
      <ScrollAnimations />
      <WhatsAppFloat />
    </div>
  );
}
