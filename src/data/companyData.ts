import { ServiceItem, PropertyItem, OfficeLocation, ArticleItem } from '../types';

export const COMPANY_INFO = {
  name: 'Demola Adetola & Co.',
  shortName: 'DAC',
  tagline: 'Chartered Estate Surveyors + Valuers',
  heroEyebrow: 'Building Value Through Real Estate',
  heroHeadline: 'Professional Real Estate Expertise Built on Trust.',
  heroSubheadline:
    'Demola Adetola & Co. is a firm of Chartered Estate Surveyors and Valuers providing professional real estate services across Nigeria. Helping individuals, businesses, and investors make confident property decisions through professional valuation, real estate advisory, property management, and investment solutions.',
  aboutIntro:
    'Buying, selling or managing property involves important decisions. Good advice can help you understand your options and avoid costly mistakes.',
  aboutMission:
    'The firm provides property valuation, property sales and letting, management and advisory services for individuals, businesses and investors.',
  aboutHistory:
    'The firm was conceived in 1992 and began operations in July 1993.',
  establishedYear: 1993,
  conceivedYear: 1992,
  yearsOfExcellence: '30+',
  email: 'info@demolaadetola.ng',
  secondaryEmails: ['demolaadetolaandco@gmail.com'],
  primaryPhone: '+234 201 227 2520–2',
  secondaryPhones: ['08073772255'],
  telephoneContacts: [
    { label: '+234 201 227 2520–2', href: 'tel:+2342012272520' },
    { label: '08073772255', href: 'tel:08073772255' },
  ],
  whatsappContacts: [
    { label: '08028147070', href: 'https://wa.me/2348028147070' },
    { label: '08098147070', href: 'https://wa.me/2348098147070' },
  ],
  emailContacts: ['info@demolaadetola.ng', 'demolaadetolaandco@gmail.com'],
  website: 'https://demolaadetola.ng',
  callToActionHeadline: 'Ready to Discuss Your Property Needs?',
  callToActionSubtext:
    'Whether you require property valuation, management, investment advisory, or assistance with buying, selling, or leasing property, our team is ready to assist you.',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'estate-agency-brokerage',
    number: '01',
    title: 'Property Sales & Letting',
    shortDesc: 'Support with buying, selling, leasing and letting residential, commercial properties and land.',
    fullDesc:
      'We help clients buy, sell or let property with clear information, practical guidance and support through the transaction.',
    scope: [
      'Sale of land and buildings by direct agreement, bidding or auction',
      'Property searches and purchases on behalf of clients',
      'Letting furnished and unfurnished properties, including lease support',
      'Support for landlords and tenants during property transactions',
    ],
    deliverables: [
      'Property marketing and information documentation',
      'Transaction and due-diligence support',
    ],
    targetClients: 'Property owners, buyers, sellers, landlords, tenants and investors',
    iconName: 'BadgeDollarSign',
  },
  {
    id: 'property-valuation',
    number: '02',
    title: 'Property Valuation',
    shortDesc: 'Reliable property and asset valuations for sales, insurance, loans, accounts, rates and compensation.',
    fullDesc:
      'We assess the value of land, buildings and other assets for a range of personal, business, financial and public-sector needs.',
    scope: [
      'Market valuation to guide property sales, purchases and rental decisions',
      'Insurance valuation to help determine the amount for which property or assets should be insured',
      'Mortgage valuation for property offered as security for a loan or credit facility',
      'Company asset valuation for financial statements and accounts',
      'Rating valuation to help determine property rates payable to the relevant authority',
      'Compensation valuation when property is affected by compulsory government acquisition or damage',
    ],
    deliverables: [
      'Certified property valuation report',
      'Supporting property inventory and valuation calculations',
    ],
    targetClients: 'Financial institutions, corporations, asset owners and private investors',
    iconName: 'Building2',
  },
  {
    id: 'property-facility-management',
    number: '03',
    title: 'Property Management',
    shortDesc: 'Protecting property value through effective administration and tenant-focused management.',
    fullDesc:
      'We support property owners with the day-to-day administration of residential and commercial assets, focusing on tenant relationships, rental administration, financial oversight and the preservation of property value.',
    scope: [
      'Tenant vetting, lease administration and rent collection',
      'Service charge budgeting, accounting and dispute coordination',
      'Property inspections and maintenance coordination',
      'Occupancy oversight and routine property performance reporting',
    ],
    deliverables: [
      'Property management and income-and-expenditure reports',
      'Inspection and maintenance coordination records',
    ],
    targetClients: 'Property owners, landlords, resident associations and institutional asset managers',
    iconName: 'ShieldCheck',
  },
  {
    id: 'facility-management',
    number: '04',
    title: 'Facility Management',
    shortDesc: 'Maintaining safe, efficient and functional buildings and shared facilities.',
    fullDesc:
      'We coordinate building operations and facility services to support the effective use, upkeep and performance of residential, commercial and corporate facilities.',
    scope: [
      'Preventive maintenance coordination for building systems and infrastructure',
      'Mechanical, electrical and plumbing maintenance oversight',
      'Facility security, health and safety coordination',
      'Building condition inspections and maintenance planning',
    ],
    deliverables: [
      'Facility condition and maintenance reports',
      'Preventive maintenance schedules and service records',
    ],
    targetClients: 'Commercial occupiers, property owners, corporate landlords and facility operators',
    iconName: 'Wrench',
  },
  {
    id: 'investment-jv-consultancy',
    number: '05',
    title: 'Investment Advisory',
    shortDesc: 'Research and feasibility advice to help clients assess property opportunities before committing funds.',
    fullDesc:
      'We study property markets and proposed developments to help clients understand demand, likely costs, potential returns and whether an investment is practical.',
    scope: [
      'Property market research and investment analysis',
      'Feasibility studies for proposed property developments',
      'Assessment of market demand, likely development costs and potential returns',
      'Review of investment options and proposed joint venture arrangements',
      'Project planning and coordination support for property development assignments',
    ],
    deliverables: [
      'Feasibility and viability study report',
      'Investment appraisal and joint venture advisory framework',
    ],
    targetClients: 'Property developers, private investors, landowners, financial institutions and joint venture partners',
    iconName: 'Briefcase',
  },
  {
    id: 'real-estate-consultancy',
    number: '06',
    title: 'Real Estate Consultancy',
    shortDesc: 'Professional advice on land use, property matters and development decisions.',
    fullDesc:
      'We help clients understand property issues, possible uses of land and the key considerations involved in property and development decisions.',
    scope: [
      'Advice on suitable uses of land and property assets',
      'Land-use analysis and development considerations',
      'Guidance on planning, zoning and development control matters',
      'Advice on compulsory acquisition and property compensation matters',
      'Coordination of valuation assignments and related professional work',
    ],
    deliverables: [
      'Property consultancy and advisory reports',
      'Planning, land matter and compensation assessment documentation where engaged',
    ],
    targetClients: 'Landowners, developers, businesses, public-sector bodies and private investors',
    iconName: 'Compass',
  },
];

export const INDUSTRIES_WE_SERVE = [
  {
    title: 'Commercial Property Owners',
    description: 'Portfolio valuations, lease structuring, and asset optimization for multi-tenanted commercial properties.',
  },
  {
    title: 'Property Developers',
    description: 'End-to-end viability studies, site acquisition, Joint Venture advisory, and project certification.',
  },
  {
    title: 'Financial Institutions & Banks',
    description: 'Rigorous collateral appraisals, mortgage security valuations, and foreclosure asset assessments.',
  },
  {
    title: 'Corporate Organizations',
    description: 'Corporate real estate strategy, lease renewals, balance sheet asset revaluations, and facility audits.',
  },
  {
    title: 'Government Agencies & Public Sector',
    description: 'Compulsory acquisition compensation appraisals, rating valuation, and public infrastructure advisory.',
  },
  {
    title: 'Educational & Health Institutions',
    description: 'Specialized facility appraisals, master plan consulting, and expansion land acquisition.',
  },
  {
    title: 'Private Investors & Family Offices',
    description: 'Discreet luxury acquisitions, estate planning valuations, and wealth-preserving real estate management.',
  },
];

export const OUR_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consult & Define',
    description: 'We begin by listening to your goals and requirements to gain a clear understanding of your specific project needs.',
  },
  {
    number: '02',
    title: 'Research & Evaluate',
    description: 'Our team performs thorough inspections, market analysis, and feasibility studies to build a data-driven foundation for your project.',
  },
  {
    number: '03',
    title: 'Strategy & Solution',
    description: 'We develop customized, actionable recommendations based on reliable market intelligence and statutory standards.',
  },
  {
    number: '04',
    title: 'Execute & Deliver',
    description: 'We implement your solution with precision and transparency, providing ongoing support to ensure long-term value.',
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Industry Expertise',
    description: 'Over 30 years of continuous practice in the Nigerian real estate and valuation landscape since 1993.',
  },
  {
    title: 'Comprehensive Property Solutions',
    description: 'An integrated firm delivering property valuation, property sales and letting, facility management, and development advisory under one roof.',
  },
  {
    title: 'Trusted Professional Standards',
    description: 'Fully licensed by ESVARBON, governed by NIESV regulations, and compliant with Corporate Affairs Commission (CAC).',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Independent, scientifically grounded methodologies that provide defensible reports recognized by banks and courts.',
  },
  {
    title: 'Client-Focused Service',
    description: 'Tailored advisory built around protecting your capital, securing land tenure, and optimizing investment returns.',
  },
  {
    title: 'Nationwide Reach',
    description: 'Lagos-based professional practice with nationwide service and advisory coverage.',
  },
];

export const REAL_ARTICLES: ArticleItem[] = [
  {
    id: 'understanding-property-valuation',
    title: 'Understanding Property Valuation: Why Every Property Owner Needs It',
    category: 'Property Valuation',
    date: 'March 2026',
    excerpt:
      'Property valuation plays a critical role in real estate transactions, investment decisions, and financial planning. Learn why professional valuation is essential for property owners and investors.',
    content: [
      'Property valuation is the process of estimating the economic worth of real estate under prevailing market conditions. Whether you own commercial real estate, industrial infrastructure, or residential holdings, an objective valuation is an indispensable financial instrument.',
      'For lending institutions, certified valuation reports provide the statutory basis for determining loan-to-value (LTV) security ratios. For corporate entities, annual balance sheet revaluations under International Financial Reporting Standards (IFRS) reflect true asset value.',
      'At Demola Adetola & Co., our valuation reports adhere strictly to the guidelines prescribed by the Estate Surveyors and Valuers Registration Board of Nigeria (ESVARBON) and the Nigerian Institution of Estate Surveyors and Valuers (NIESV).',
    ],
  },
  {
    id: '7-things-before-buying-property',
    title: '7 Things to Check Before Buying Property in Nigeria',
    category: 'Real Estate Advisory',
    date: 'February 2026',
    excerpt:
      'Buying property is one of the most significant investments you will ever make. Discover the key checks every buyer should perform before committing funds.',
    content: [
      'Purchasing real estate in Nigeria offers tremendous capital appreciation, but it requires rigorous due diligence to avoid defective titles, encumbrances, and regulatory pitfalls.',
      'Key checks include: 1. Title verification at the State Land Registry; 2. Survey plan verification and beacon coordinate charting; 3. Inspection of physical possession and boundary confirmation; 4. Checking planning zoning conformity; 5. Outstanding land charges and capital gains liabilities; 6. Verification of family head or corporate seller authorizations; 7. Governor’s Consent and C of O validation.',
      'Engaging an accredited firm of Chartered Estate Surveyors ensures your acquisition is safe, legally binding, and commercially viable.',
    ],
  },
  {
    id: 'property-management-protecting-value',
    title: 'Property Management: Protecting the Value of Your Investment',
    category: 'Property Management',
    date: 'January 2026',
    excerpt:
      'Effective property management ensures your asset remains profitable, well-maintained, and attractive to tenants. Learn the benefits of professional management services.',
    content: [
      'A real estate asset only yields optimal returns when managed proactively. Without diligent oversight, properties suffer from deferred maintenance, declining tenant quality, and protracted service charge disputes.',
      'Professional property management encompasses tenant screening, lease administration, timely rent collection, transparent service charge accounting, and scheduled preventative maintenance of electrical, plumbing, and mechanical systems.',
      'Demola Adetola & Co. manages high-value commercial buildings and residential estates across Lagos, maintaining high occupancy rates and protecting capital appreciation.',
    ],
  },
  {
    id: 'investment-opportunities-2026',
    title: 'Real Estate Investment Opportunities in Nigeria in 2026',
    category: 'Market Insights',
    date: '2026 Insights',
    excerpt:
      'Nigeria’s property market continues to offer promising opportunities for investors. Explore emerging trends and sectors with strong growth potential.',
    content: [
      'Despite macroeconomic adjustments, Nigeria’s real estate sector presents resilient opportunities for discerning investors. Urbanization, population expansion, and industrial logistics drive steady rental yields and capital gains.',
      'Key growth sectors include prime commercial office spaces in core business districts, multi-unit residential developments in emerging transit corridors, and specialized warehousing facilities supporting e-commerce and manufacturing.',
      'Our advisory practice provides comprehensive feasibility models and market intelligence to guide investors into high-yield, risk-mitigated positions.',
    ],
  },
];

export const FEATURED_PROPERTIES: PropertyItem[] = [];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'force-road',
    name: 'Head Office',
    type: 'Head Office',
    address: '3A, Force Road ( Pent Floor Suite) opposite TBS, Onikan Lagos',
    landmark: '',
    city: '',
    phones: ['+234 201 227 2520–2', '08073772255'],
    email: 'info@demolaadetola.ng',
    hours: 'Monday – Friday: 8:00 AM – 6:00 PM',
  },
];
