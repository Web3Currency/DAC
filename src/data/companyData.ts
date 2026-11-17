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
    'The firm provides property valuation, agency, management and advisory services for individuals, businesses and investors.',
  aboutHistory:
    'The firm was conceived in 1992 and began operations in July 1993.',
  establishedYear: 1993,
  conceivedYear: 1992,
  yearsOfExcellence: '30+',
  email: 'info@demolaadetola.ng',
  primaryPhone: '+234 802 814 7070',
  secondaryPhones: ['+234 809 814 7070', '+234 807 377 5522', '+234 807 377 2255'],
  website: 'https://demolaadetola.ng',
  callToActionHeadline: 'Ready to Discuss Your Property Needs?',
  callToActionSubtext:
    'Whether you require property valuation, management, investment advisory, or assistance with buying, selling, or leasing property, our team is ready to assist you.',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'estate-agency-brokerage',
    number: '01',
    title: 'Property Agency',
    shortDesc: 'Professional support for buying, selling, letting and leasing property.',
    fullDesc:
      'We guide individuals, businesses and investors through property transactions, helping them assess opportunities, carry out appropriate due diligence and progress negotiations with clarity.',
    scope: [
      'Sales and purchase brokerage for residential, commercial and land assets',
      'Property letting, leasing negotiations and tenant vetting',
      'Property inspections and preparation of property information',
      'Transaction coordination and support with title and land registry checks',
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
    shortDesc: 'Independent property valuations for professional, financial and legal purposes.',
    fullDesc:
      'We conduct independent, professionally grounded valuations of land, buildings and other property assets in line with applicable valuation standards and professional requirements.',
    scope: [
      'Commercial, industrial, residential and agricultural property valuation',
      'Plant, machinery, equipment and infrastructure appraisal',
      'Mortgage, debenture and collateral security valuation',
      'Probate, insurance replacement cost, rating and taxation assessments',
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
    shortDesc: 'Evaluating real estate opportunities, development viability and investment structures.',
    fullDesc:
      'We help clients assess real estate investment opportunities through feasibility and viability analysis, financial appraisal and advisory on potential investment and joint venture structures.',
    scope: [
      'Highest and Best Use and development feasibility analysis',
      'Cash-flow projections, sensitivity analysis and investment appraisal',
      'Demand, supply and market assessment for proposed developments',
      'Joint venture structuring advice and review of proposed sharing arrangements',
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
    shortDesc: 'Practical property advice for planning, land matters and informed real estate decisions.',
    fullDesc:
      'We provide professional advice on real estate matters, bringing together market insight, land-use and planning considerations, and specialist property guidance to help clients make informed decisions.',
    scope: [
      'Real estate market research and strategic property advisory',
      'Land-use planning, zoning and development control advisory',
      'Land regularization and statutory property process guidance',
      'Compulsory acquisition, property impact and compensation advisory',
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
    description: 'An integrated firm delivering valuation, brokerage, facility management, and development advisory under one roof.',
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
    description: 'Strategic Lagos Island head offices with nationwide branch networks and regional advisory capabilities.',
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

export const FEATURED_PROPERTIES: PropertyItem[] = [
  {
    id: 'sample-residential-property',
    title: 'Contemporary Residential Property',
    category: 'Residential',
    location: 'Lagos, Nigeria',
    price: 'Sample listing — details to be confirmed',
    status: 'Illustrative Concept',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    specs: {
      area: 'Property specifications to be supplied by the client',
      tenure: 'Title information to be verified before publication',
    },
    summary:
      'Illustrative residential property presentation. Replace this concept with a verified property, approved photographs, confirmed location, specifications, pricing and availability before launch.',
    isReplaceableSample: true,
    sampleTypeBadge: 'Illustrative Concept — Replace Before Launch',
  },
  {
    id: 'sample-commercial-property',
    title: 'Modern Commercial Property',
    category: 'Commercial',
    location: 'Lagos, Nigeria',
    price: 'Sample listing — details to be confirmed',
    status: 'Illustrative Concept',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    specs: {
      area: 'Floor area to be confirmed',
      tenure: 'Title information to be verified before publication',
    },
    summary:
      'Illustrative commercial property presentation. Replace this concept with a verified property, approved photographs, confirmed location, specifications, pricing and availability before launch.',
    isReplaceableSample: true,
    sampleTypeBadge: 'Illustrative Concept — Replace Before Launch',
  },
  {
    id: 'sample-managed-asset',
    title: 'Commercial Property & Asset',
    category: 'Commercial',
    location: 'Lagos, Nigeria',
    price: 'Portfolio information to be confirmed',
    status: 'Illustrative Concept',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    specs: {
      area: 'Property details to be supplied by the client',
      tenure: 'Management status to be confirmed',
    },
    summary:
      'Illustrative managed-asset presentation. Do not imply that this property is owned or managed by the firm unless the client confirms that relationship and approves the supporting details.',
    isReplaceableSample: true,
    sampleTypeBadge: 'Illustrative Concept — Replace Before Launch',
  },
  {
    id: 'sample-development-land',
    title: 'Land & Development Opportunity',
    category: 'Development',
    location: 'Lagos, Nigeria',
    price: 'Project details to be confirmed',
    status: 'Illustrative Concept',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    specs: {
      area: 'Land size to be confirmed',
      tenure: 'Title and planning status to be verified',
    },
    summary:
      'Illustrative land and development presentation. Replace with verified site imagery and client-approved information before presenting this as an available opportunity.',
    isReplaceableSample: true,
    sampleTypeBadge: 'Illustrative Concept — Replace Before Launch',
  },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'force-road',
    name: 'Head Office (Force Road, Onikan)',
    type: 'Head Office',
    address: '3A, Force Road (Opposite TBS / Onikan)',
    landmark: 'Directly Opposite Tafawa Balewa Square (TBS), Onikan, Lagos Island',
    city: 'Lagos Island, Lagos State, Nigeria',
    phones: ['+234 802 814 7070', '+234 809 814 7070'],
    email: 'info@demolaadetola.ng',
    hours: 'Monday – Friday: 8:00 AM – 5:30 PM WAT',
  },
  {
    id: 'campbell-street',
    name: 'Lagos Island Branch (Campbell Street)',
    type: 'Branch Office',
    address: '37, Campbell Street (2nd Floor, Off Joseph Street)',
    landmark: 'Lagos Island Commercial & Legal Hub',
    city: 'Lagos Island, Lagos State, Nigeria',
    phones: ['+234 807 377 5522', '+234 807 377 2255'],
    email: 'info@demolaadetola.ng',
    hours: 'Monday – Friday: 8:30 AM – 5:00 PM WAT',
  },

];
