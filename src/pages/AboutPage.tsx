import React from 'react';
import { AboutSection } from '../components/AboutSection';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => (
  <div className="w-full">
    <AboutSection onOpenConsultation={onOpenConsultation} />
  </div>
);
