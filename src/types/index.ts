export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  deliverables: string[];
  targetClients: string;
  iconName: string;
}

export interface PropertyItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Vacant Land' | 'Warehouses';
  portfolioLocation?: 'Lagos Mainland' | 'Ikoyi' | 'Victoria Island' | 'Lekki' | 'Lagos Island' | null;
  location: string;
  price: string;
  status: 'For Sale' | 'To Let' | 'Under Management' | 'Advisory Completed' | 'Under Offer' | 'Sold' | 'Let' | 'Off Market';
  image: string;
  images?: string[];
  specs: {
    area?: string;
    bedrooms?: string;
    bathrooms?: string;
    tenure?: string;
    parking?: string;
    units?: string;
  };
  description: string;
  isReplaceableSample: boolean;
  sampleTypeBadge: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
}

export interface OfficeLocation {
  id: string;
  name: string;
  type: 'Head Office' | 'Regional Network';
  address: string;
  landmark: string;
  city: string;
  phones: string[];
  email: string;
  hours: string;
}
