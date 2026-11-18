import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProfessionalCredentialsSection } from './components/ProfessionalCredentialsSection';
import { AboutDACIntroduction } from './components/AboutDACIntroduction';
import { HomeServicesGallery } from './components/HomeServicesGallery';
import { ProjectsSection } from './components/ProjectsSection';
import { GeographicalReachSection } from './components/GeographicalReachSection';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyValuationArticlePage } from './pages/PropertyValuationArticlePage';
import { PropertyManagementArticlePage } from './pages/PropertyManagementArticlePage';
import { BuyingPropertyArticlePage } from './pages/BuyingPropertyArticlePage';
import { RealEstateInvestmentArticlePage } from './pages/RealEstateInvestmentArticlePage';
import CmsArticlePage from './pages/CmsArticlePage';
import { AddressSection } from './components/AddressSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { PropertyDetailPage } from './components/PropertyModal';
import { ScrollAnimations } from './components/ScrollAnimations';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ExpertPerspectivesSection } from './components/ExpertPerspectivesSection';
import { ClientTestimonialsSection } from './components/ClientTestimonialsSection';
import { FinalContactCTA } from './components/FinalContactCTA';
import { ServiceItem, PropertyItem } from './types';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [intakeData, setIntakeData] = useState<{ assetType?: string; purpose?: string; location?: string } | undefined>(undefined);
  const [activeServiceForModal, setActiveServiceForModal] = useState<ServiceItem | null>(null);
  const [activePropertyForModal, setActivePropertyForModal] = useState<PropertyItem | null>(null);
  const [propertyReturnScroll, setPropertyReturnScroll] = useState(0);
  useEffect(() => { if (!activePropertyForModal) window.scrollTo({ top: propertyReturnScroll, behavior: 'instant' }); }, [activePropertyForModal, propertyReturnScroll]);

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIntakeData(undefined);
    setConsultationOpen(true);
  };
  const handleViewService = (service: ServiceItem) => setActiveServiceForModal(service);
  const handleSelectProperty = (property: PropertyItem) => {
    setPropertyReturnScroll(window.scrollY);
    setActivePropertyForModal(property);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  const handleRequestViewing = (property: PropertyItem) => {
    const params = new URLSearchParams({
      service: 'estate-agency-brokerage',
      message: ['I would like to book a private inspection / valuation for this property.','Property: ' + property.title,'Property category: ' + property.category,'Listing status: ' + property.status,'Location: ' + property.location,'Price: ' + property.price,'','Please contact me to arrange the next steps.'].join('\n'),
    });
    window.location.assign('/contact?' + params.toString() + '#contact');
  };

  if (activePropertyForModal) return <div className="min-h-screen w-full bg-white text-[#252223] antialiased"><PropertyDetailPage property={activePropertyForModal} onClose={() => setActivePropertyForModal(null)} onInquire={handleRequestViewing} /></div>;

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isValuationArticle = currentPath === '/insights/property-valuation';
  const isPropertyManagementArticle = currentPath === '/insights/property-management';
  const isBuyingPropertyArticle = currentPath === '/insights/buying-property-in-nigeria';
  const isRealEstateInvestmentArticle = currentPath === '/insights/real-estate-investment-2026';
  const isCmsArticle = currentPath.startsWith('/insights/') && !isValuationArticle && !isPropertyManagementArticle && !isBuyingPropertyArticle && !isRealEstateInvestmentArticle;
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-white text-[#252223] antialiased selection:bg-[#8ABE4B] selection:text-[#252223]">
      <Header onOpenConsultation={handleOpenConsultation} />
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {isCmsArticle ? (
          <CmsArticlePage slug={currentPath.slice('/insights/'.length)} />
        ) : isValuationArticle ? (
          <PropertyValuationArticlePage />
        ) : isPropertyManagementArticle ? (
          <PropertyManagementArticlePage />
        ) : isBuyingPropertyArticle ? (
          <BuyingPropertyArticlePage />
        ) : isRealEstateInvestmentArticle ? (
          <RealEstateInvestmentArticlePage />
        ) : currentPath === '/services' ? (
          <ServicesPage onOpenConsultation={handleOpenConsultation} onViewServiceDetail={handleViewService} />
        ) : currentPath === '/about' ? (
          <AboutPage onOpenConsultation={() => handleOpenConsultation()} />
        ) : currentPath === '/properties' ? (
          <PropertiesPage onSelectProperty={handleSelectProperty} onRequestViewing={handleRequestViewing} />
        ) : currentPath === '/contact' ? (
          <><ContactSection preselectedServiceId={selectedServiceId} /><AddressSection /></>
        ) : (
          <>
            <Hero onOpenConsultation={handleOpenConsultation} />
            <ProfessionalCredentialsSection />
            <AboutDACIntroduction />
            <HomeServicesGallery />
            <ProjectsSection onSelectProperty={handleSelectProperty} onRequestViewing={handleRequestViewing} homepagePreview />
            <GeographicalReachSection />
            <WhyChooseUs onOpenConsultation={() => handleOpenConsultation()} />
            <IndustriesSection onOpenConsultation={() => handleOpenConsultation()} />
            <ExpertPerspectivesSection />
            <ClientTestimonialsSection />
            <FinalContactCTA />
          </>
        )}
      </main>
      <Footer />
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} defaultServiceId={selectedServiceId} initialData={intakeData} />
      <ServiceModal service={activeServiceForModal} onClose={() => setActiveServiceForModal(null)} onInquire={handleOpenConsultation} />
      <ScrollAnimations />
      <WhatsAppFloat />
    </div>
  );
}
