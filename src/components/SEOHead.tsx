import React, { useEffect } from 'react';

const SITE_URL = 'https://demolaadetola.ng';
const DEFAULT_TITLE = 'Demola Adetola & Co. | Chartered Estate Surveyors & Valuers';
const DEFAULT_DESCRIPTION = 'Demola Adetola & Co. is a firm of Chartered Estate Surveyors and Valuers providing property valuation, property management, property sales and letting, and real estate advisory services across Nigeria.';

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
  '/about': { title: 'About Us | Demola Adetola & Co.', description: 'Learn about Demola Adetola & Co., a professional practice of Chartered Estate Surveyors and Valuers established in 1993.' },
  '/services': { title: 'Real Estate Services | Demola Adetola & Co.', description: 'Explore property valuation, property management, facility management, property sales and letting, investment advisory and real estate consultancy.' },
  '/properties': { title: 'Properties for Sale & To Let | Demola Adetola & Co.', description: 'Explore property listings for sale and to let from Demola Adetola & Co. across Lagos and Nigeria.' },
  '/contact': { title: 'Contact Demola Adetola & Co. | Property Professionals', description: 'Contact Demola Adetola & Co. for professional property valuation, management, sales, letting and real estate advisory enquiries.' },
  '/insights': { title: 'Property Insights & Publications | Demola Adetola & Co.', description: 'Read property market insights, valuation guidance, investment perspectives and real estate publications from Demola Adetola & Co.' },
  '/insights/property-valuation': { title: 'Understanding Property Valuation | Demola Adetola & Co.', description: 'Understand the importance of professional property valuation for real estate transactions, investment decisions and financial planning.' },
  '/insights/property-management': { title: 'Property Management: Protecting Investment Value | Demola Adetola & Co.', description: 'Learn how professional property management supports rental administration, maintenance and long-term asset value.' },
  '/insights/buying-property-in-nigeria': { title: '7 Things to Check Before Buying Property in Nigeria | Demola Adetola & Co.', description: 'Key property title, survey, planning and due diligence checks to consider before buying real estate in Nigeria.' },
  '/insights/real-estate-investment-2026': { title: 'Real Estate Investment Opportunities in Nigeria | Demola Adetola & Co.', description: 'Explore real estate investment sectors and considerations in Nigeria with professional insight from Demola Adetola & Co.' },
};

function setMeta(selector: string, attribute: 'name' | 'property', key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

export function updatePageMetadata(title: string, description: string, pathname: string) {
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
  document.title = title;
  setMeta('meta[name="description"]', 'name', 'description', description);
  setMeta('meta[name="robots"]', 'name', 'robots', pathname.startsWith('/admin') ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMeta('meta[property="og:title"]', 'property', 'og:title', title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
}

export const SEOHead: React.FC<{ pathname: string }> = ({ pathname }) => {
  useEffect(() => {
    const metadata = routeMetadata[pathname] || {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    };
    updatePageMetadata(metadata.title, metadata.description, pathname);
  }, [pathname]);

  return null;
};
