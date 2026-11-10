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
    'Real estate is one of the most significant investments you’ll ever make. Every decision, from purchasing land and valuing assets to managing facilities and developing new projects, has a lasting financial impact. That’s why having the right professional partner is essential.',
  aboutMission:
    'Demola Adetola & Co. is a firm of Chartered Estate Surveyors and Valuers providing professional real estate services across Nigeria. Our expertise covers property valuation, agency, management, and advisory services, with a focus on clear advice, careful assessment and practical support for property owners, buyers, businesses and investors.',
  aboutHistory:
    'The firm was conceived in 1992 and began operations in July 1993. Its experience in the Nigerian property sector is part of the story we want visitors to understand. Professional registration and corporate details can be added here once confirmed by the firm.',
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
    id: 'property-valuation',
    number: '01',
    title: 'Property Valuation',
    shortDesc: 'Get accurate, independent property valuations for all professional, financial, and legal needs.',
    fullDesc:
      'We conduct independent, scientifically grounded valuations of land, commercial edifices, industrial plants, machinery, and residential portfolios adhering strictly to the valuation standards of NIESV and ESVARBON.',
    scope: [
      'Commercial, industrial, residential & agricultural property valuation',
      'Plant, machinery, equipment & infrastructure appraisal',
      'Mortgage, debenture, and collateral security valuation for commercial banks',
      'Balance sheet asset revaluation for corporate audit compliance (IFRS)',
      'Probate, insurance replacement cost, rating, and taxation assessments',
    ],
    deliverables: [
      'Comprehensive Certified Valuation Report with photographic inventory',
      'Statutory ESVARBON Seal & Chartered Surveyor Stamp',
      'Comparative Market Analysis (CMA) & replacement cost calculations',
    ],
    targetClients: 'Commercial Banks, Asset Management Corporations, Pension Funds, Corporate CFOs, Private Investors',
    iconName: 'Building2',
  },
  {
    id: 'estate-agency-brokerage',
    number: '02',
    title: 'Estate Agency & Property Brokerage',
    shortDesc: 'Expert guidance for seamless, transparent property transactions whether buying, selling, or leasing.',
    fullDesc:
      'Guiding corporate occupiers, institutional investors, and private individuals through secure property transactions with thorough due diligence, Governor’s Consent validation, and confidential negotiations.',
    scope: [
      'Sales brokerage for prime commercial buildings, land, and luxury residential estates',
      'Commercial letting, leasing negotiations, and tenant vetting',
      'Title verification, land registry searches & encumbrance checks',
      'Closing management, contract drafting & escrow transaction support',
    ],
    deliverables: [
      'Verified Property Information Memorandum (PIM)',
      'Title search certification & land registry extract report',
    ],
    targetClients: 'High-Net-Worth Individuals (HNWIs), Diaspora Investors, Corporate Occupiers, Real Estate Developers',
    iconName: 'BadgeDollarSign',
  },
  {
    id: 'property-facility-management',
    number: '03',
    title: 'Property & Facility Management',
    shortDesc: 'Maximize your returns with proactive property management that boosts efficiency, occupancy, and asset value.',
    fullDesc:
      'Comprehensive management of commercial complexes, residential estates, and corporate facilities. We manage tenant relationships, optimize operational costs, and execute preventative maintenance schedules.',
    scope: [
      'Tenant vetting, lease administration, and timely rent collection',
      'Service charge budgeting, accounting, and dispute mitigation',
      'Preventative mechanical, electrical, and plumbing (MEP) maintenance',
      'Facility security, health and safety statutory compliance',
    ],
    deliverables: [
      'Quarterly Financial Statement of Income and Expenditure',
      'Routine Facility Audit & Preventative Maintenance Logs',
    ],
    targetClients: 'Property Owners, Resident Associations, Corporate Landlords, Institutional Asset Managers',
    iconName: 'ShieldCheck',
  },
  {
    id: 'real-estate-consultancy',
    number: '04',
    title: 'Real Estate Consultancy & Advisory',
    shortDesc: 'Our advisory services deliver the market intelligence and analysis you need to make smarter real estate decisions.',
    fullDesc:
      'Providing institutional and private landowners with strategic advisory on asset repositioning, lease renegotiations, market intelligence, and risk mitigation across Nigerian real estate cycles.',
    scope: [
      'Strategic portfolio performance audits and yield optimization',
      'Macroeconomic real estate market research & trend analysis',
      'Lease advisory, tenant covenant assessment & rent renegotiation',
      'Corporate real estate restructuring and asset disposal planning',
    ],
    deliverables: [
      'Executive Advisory Dossier with yield forecasts',
      'Market benchmark study and risk assessment matrices',
    ],
    targetClients: 'Family Offices, Corporate Boards, Real Estate Holding Firms, Sovereign Funds',
    iconName: 'Compass',
  },
  {
    id: 'feasibility-viability-studies',
    number: '05',
    title: 'Feasibility & Viability Studies',
    shortDesc: 'Quantitative appraisals, cash-flow modeling, and highest-and-best-use studies before committing capital.',
    fullDesc:
      'Before breaking ground or acquiring substantial landholdings, our rigorous feasibility models calculate internal rate of return (IRR), net present value (NPV), and sensitivity margins to safeguard capital.',
    scope: [
      'Highest and Best Use (HBU) physical and financial analysis',
      'Cash flow projections, sensitivity analysis, and stress testing',
      'Demand/supply absorption modeling for proposed developments',
      'Financing structure advisory & debt-equity ratio planning',
    ],
    deliverables: [
      'Bankable Feasibility & Viability Report for lender syndication',
      'Detailed discounted cash flow (DCF) model and sensitivity tables',
    ],
    targetClients: 'Property Developers, Private Equity Syndicates, Commercial Banks, Joint Venture Partners',
    iconName: 'BarChart3',
  },
  {
    id: 'land-use-planning',
    number: '06',
    title: 'Land Use Planning & Advisory',
    shortDesc: 'Navigating statutory zoning, master plans, environmental regulations, and land regularization.',
    fullDesc:
      'Guiding landowners and developers through complex urban planning regulations, change of use approvals, density allowances, and title regularizations across state land registries.',
    scope: [
      'Zoning law conformity and density enhancement analysis',
      'Statutory title regularization, Governor’s Consent & C of O processing',
      'Master plan alignment and physical planning advisory',
      'Liaison with state physical planning and urban development authorities',
    ],
    deliverables: [
      'Regulatory Planning Compliance Brief',
      'Land title regularization roadmap & timeline matrix',
    ],
    targetClients: 'Master Developers, Industrialists, Institutional Landowners, Agro-Allied Firms',
    iconName: 'MapPin',
  },
  {
    id: 'compulsory-acquisition',
    number: '07',
    title: 'Compulsory Acquisition Advisory & Compensation',
    shortDesc: 'Protecting claimant rights and statutory compensation assessment during government public infrastructure acquisitions.',
    fullDesc:
      'When private lands or commercial buildings are affected by public infrastructure projects (roads, rail, ports, right-of-way), we calculate equitable statutory compensation in accordance with the Land Use Act.',
    scope: [
      'Valuation of unexhausted improvements, crops, economic trees, and structures',
      'Computation of disturbance allowances, severance, and injurious affection',
      'Representation of affected landowners in negotiations with government agencies',
      'Expert witness testimony in tribunals and court dispute proceedings',
    ],
    deliverables: [
      'Statutory Claim for Compensation Valuation Dossier',
      'Photogrammetric asset evidence catalogue & negotiation support',
    ],
    targetClients: 'Affected Landowners, Corporate Entities, Community Delegations, Legal Counsel',
    iconName: 'Scale',
  },
  {
    id: 'investment-jv-consultancy',
    number: '08',
    title: 'Real Estate Investment & Joint Venture Consultancy',
    shortDesc: 'Structuring equity partnerships, landowner-developer agreements, and commercial risk-sharing structures.',
    fullDesc:
      'We bridge capital providers and prime landowners to structure transparent Joint Venture (JV) vehicles, establishing sharing ratios, developer milestones, and exit protocols.',
    scope: [
      'Site equity valuation and equitable sharing ratio determination',
      'Joint Venture Agreement (JVA) structuring and terms review',
      'Developer track record assessment and financial vetting',
      'Escrow supervision and dispute prevention protocols',
    ],
    deliverables: [
      'JV Structuring & Equity Allocation Framework',
      'Comprehensive Risk Mitigation & Milestone Schedule',
    ],
    targetClients: 'Landowners with Idle Acreage, Capital Allocators, Construction Developers',
    iconName: 'Briefcase',
  },
  {
    id: 'project-management',
    number: '09',
    title: 'Project Management & Supervision',
    shortDesc: 'We manage your development from planning to delivery, ensuring efficiency, budget adherence, and on-time completion.',
    fullDesc:
      'Acting as the client’s independent supervisor on site, monitoring contractor performance, verifying milestone claims, and certifying valuations for interim progress payments.',
    scope: [
      'Site inspection and contractor quality compliance audits',
      'Interim valuation certification for bank fund disbursement',
      'Bill of quantities adherence and cost-overrun prevention',
      'Snagging list compilation and practical completion handover',
    ],
    deliverables: [
      'Monthly Independent Supervision & Milestone Certification Reports',
      'Payment Certificate Recommendations for Financial Lenders',
    ],
    targetClients: 'Lending Institutions, Diaspora Clients, Corporate Project Sponsors, Board Committees',
    iconName: 'CheckCircle2',
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
