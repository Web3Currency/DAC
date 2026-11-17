import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProfessionalCredentialsSection } from './components/ProfessionalCredentialsSection';
import { AboutDACIntroduction } from './components/AboutDACIntroduction';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { AddressSection } from './components/AddressSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { PropertyDetailPage } from './components/PropertyModal';
import { ScrollAnimations } from './components/ScrollAnimations';
import { WhatsAppFloat } from './components/WhatsAppFloat';
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
    setIntakeData({ assetType: property.category, purpose: `Inquiry regarding ${property.title} (${property.status})`, location: property.location });
    setSelectedServiceId('estate-agency-brokerage');
    setConsultationOpen(true);
  };

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
        ) : currentPath === '/properties' ? (
          <PropertiesPage onSelectProperty={handleSelectProperty} onRequestViewing={handleRequestViewing} />
        ) : currentPath === '/contact' ? (
          <><ContactSection preselectedServiceId={selectedServiceId} /><AddressSection /></>
        ) : (
          <>
            <Hero onOpenConsultation={handleOpenConsultation} />
            <ProfessionalCredentialsSection />
            <AboutDACIntroduction />
            <IndustriesSection onOpenConsultation={() => handleOpenConsultation()} />
            <WhyChooseUs onOpenConsultation={() => handleOpenConsultation()} />
            <ProcessSection onOpenConsultation={() => handleOpenConsultation('property-valuation')} />
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
