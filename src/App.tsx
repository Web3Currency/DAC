import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyFinderSection } from './components/PropertyFinderSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { PropertyModal } from './components/PropertyModal';
import { ArticleModal } from './components/ArticleModal';
import { ScrollAnimations } from './components/ScrollAnimations';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { PrototypeInteractionLock } from './components/PrototypeInteractionLock';
import { ServiceItem, PropertyItem, ArticleItem } from './types';

export default function App() {
  // Modal states
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [intakeData, setIntakeData] = useState<{
    assetType?: string;
    purpose?: string;
    location?: string;
  } | undefined>(undefined);

  const [activeServiceForModal, setActiveServiceForModal] = useState<ServiceItem | null>(null);
  const [activePropertyForModal, setActivePropertyForModal] = useState<PropertyItem | null>(null);
  const [activeArticleForModal, setActiveArticleForModal] = useState<ArticleItem | null>(null);

  // Search filter state from hero
  const [propertyFilter, setPropertyFilter] = useState<{
    location: string;
    category: string;
    price: string;
  } | undefined>(undefined);

  // Handlers
  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIntakeData(undefined);
    setConsultationOpen(true);
  };

  const handleSearchProperties = (filters: { location: string; category: string; price: string }) => {
    setPropertyFilter(filters);
  };

  const handleViewService = (service: ServiceItem) => {
    setActiveServiceForModal(service);
  };

  const handleSelectProperty = (property: PropertyItem) => {
    setActivePropertyForModal(property);
  };

  const handleRequestViewing = (property: PropertyItem) => {
    setIntakeData({
      assetType: property.category,
      purpose: `Inquiry regarding ${property.title} (${property.status})`,
      location: property.location,
    });
    setSelectedServiceId('estate-agency-brokerage');
    setConsultationOpen(true);
  };

  const handleReadArticle = (article: ArticleItem) => {
    setActiveArticleForModal(article);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#252223] antialiased selection:bg-[#8ABE4B] selection:text-[#252223]">
      {/* 1. Header (Mirrors Samson Agbato: Real Logo | Navigation | Phone Box + Book Consultation CTA) */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2b. Standalone Property Finder Section */}
        <PropertyFinderSection onSearchProperties={handleSearchProperties} />

        {/* 3. About Section */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 4. Services Section (Mirrors Samson Agbato: 01-09 Numbered Cards with Gold Accents) */}
        <ServicesSection
          onSelectServiceForConsultation={handleOpenConsultation}
          onViewServiceDetail={handleViewService}
        />

        {/* 5. Industries We Serve (Direct from Samson Agbato: Supporting Diverse Clients Across Nigeria) */}
        <IndustriesSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 6. Why Choose Us (Mirrors Samson Agbato: Experience That Delivers Confidence) */}
        <WhyChooseUs onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. Our Projects & Featured Listings (Mirrors Samson Agbato: Delivering Real Estate Excellence) */}
        <ProjectsSection
          onSelectProperty={handleSelectProperty}
          onRequestViewing={handleRequestViewing}
          filterCriteria={propertyFilter}
        />

        {/* 8. Our Process (Mirrors Samson Agbato: A Proven Approach to Successful Property Solutions) */}
        <ProcessSection onOpenConsultation={() => handleOpenConsultation('property-valuation')} />

        {/* 9. Expert Perspectives (Demola Adetola's 4 Real Published Articles) */}
        <ArticlesSection onReadArticle={handleReadArticle} />

        {/* 10. Contact Us (Mirrors Samson Agbato: Have A Project In Mind? Let's Make It Happen) */}
        <ContactSection preselectedServiceId={selectedServiceId} />
      </main>

      {/* 11. Footer with Real Logo, Verified Offices, Legal Notices, and Copyright */}
      <Footer />

      {/* Interactive Modal Dialogs */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultServiceId={selectedServiceId}
        initialData={intakeData}
      />

      <ServiceModal
        service={activeServiceForModal}
        onClose={() => setActiveServiceForModal(null)}
        onInquire={handleOpenConsultation}
      />

      <PropertyModal
        property={activePropertyForModal}
        onClose={() => setActivePropertyForModal(null)}
        onInquire={handleRequestViewing}
      />

      <ArticleModal
        article={activeArticleForModal}
        onClose={() => setActiveArticleForModal(null)}
        onConsult={() => handleOpenConsultation('property-valuation')}
      />

      <ScrollAnimations />
      <WhatsAppFloat />
      <PrototypeInteractionLock />
    </div>
  );
}
