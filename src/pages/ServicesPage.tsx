import React from 'react';
import { ServicesSection } from '../components/ServicesSection';

interface ServicesPageProps {
  onOpenConsultation: (serviceId?: string) => void;
  onViewServiceDetail: (service: import('../types').ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation, onViewServiceDetail }) => (
  <div className="w-full">
      <ServicesSection
        onSelectServiceForConsultation={onOpenConsultation}
        onViewServiceDetail={onViewServiceDetail}
      />
  </div>
);
