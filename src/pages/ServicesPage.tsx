import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServicesSection } from '../components/ServicesSection';

interface ServicesPageProps {
  onOpenConsultation: (serviceId?: string) => void;
  onViewServiceDetail: (service: import('../types').ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation, onViewServiceDetail }) => (
  <div className="min-h-screen w-full flex flex-col bg-white text-[#252223] antialiased selection:bg-[#8ABE4B] selection:text-[#252223]">
    <Header onOpenConsultation={onOpenConsultation} />
    <main className="flex-1 w-full">
      <ServicesSection
        onSelectServiceForConsultation={onOpenConsultation}
        onViewServiceDetail={onViewServiceDetail}
      />
    </main>
    <Footer />
  </div>
);
