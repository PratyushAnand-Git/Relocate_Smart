import { CityId, OfficeAnchor, Locality, VerifiedAlert } from '../types';

export interface CityConfig {
  id: CityId;
  name: string;
  state: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  statePortalName: string;
  statePortalUrl: string;
  description: string;
}

export const CITIES: CityConfig[] = [
  {
    id: 'vadodara',
    name: 'Vadodara',
    state: 'Gujarat',
    tier: 'Tier 2',
    statePortalName: 'Gujarat Citizen Portal (Digital Gujarat)',
    statePortalUrl: 'https://www.digitalgujarat.gov.in',
    description: 'Key western industrial & educational corridor, pharmaceutical & engineering hub.'
  },
  {
    id: 'ujjain',
    name: 'Ujjain',
    state: 'Madhya Pradesh',
    tier: 'Tier 3',
    statePortalName: 'CM Helpline 181 (Madhya Pradesh)',
    statePortalUrl: 'http://cmhelpline.mp.gov.in',
    description: 'Historic heritage & rapid commercial expansion corridor with emerging services.'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    tier: 'Tier 1',
    statePortalName: 'e-Janaspandana (Karnataka Public Grievance)',
    statePortalUrl: 'https://ejanaspandana.karnataka.gov.in',
    description: "India's premier IT capital with Outer Ring Road & Manyata tech corridors."
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    tier: 'Tier 1',
    statePortalName: 'Aaple Sarkar (Maharashtra Citizen Grievance)',
    statePortalUrl: 'https://grievances.maharashtra.gov.in',
    description: 'Major automotive & IT hub anchored by Hinjewadi & Kharadi SEZs.'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tier: 'Tier 1',
    statePortalName: 'Prajavani (Telangana Public Grievance)',
    statePortalUrl: 'https://prajavani.telangana.gov.in',
    description: 'Cyberabad technology corridor with Hitec City, Financial District, and Gachibowli.'
  }
];

export const OFFICE_ANCHORS: OfficeAnchor[] = [
  // Vadodara
  {
    id: 'vad-rly-stn',
    name: 'Vadodara Railway Station & Sayajiganj Commercial Hub',
    cityId: 'vadodara',
    address: 'Station Road, Sayajiganj, Vadodara, Gujarat 390002',
    ward: 'Ward 8, Central Zone (Vadodara Municipal Corporation)',
    municipalBody: 'Vadodara Municipal Corporation (VMC)',
    mlaConstituency: 'Sayajigunj (Gujarat Legislative Assembly)',
    mpConstituency: 'Vadodara Lok Sabha Constituency',
    policeThana: {
      stationName: 'Sayajigunj Police Station',
      landline: '0265-2792222',
      controlRoom: '112 / 0265-2415111',
      jurisdictionArea: 'Sayajiganj, Station Road, Dairy Den Circle',
      emergencyEmail: 'polstn-sayaji-vad@gujarat.gov.in'
    },
    infraAgencies: ['Vadodara Municipal Corporation (VMC)', 'Western Railway Division Vadodara', 'Gujarat State Road Transport (GSRTC)']
  },

  // Ujjain
  {
    id: 'ujj-admin-belt',
    name: 'Ujjain Administrative & Dewas Road Commercial Complex',
    cityId: 'ujjain',
    address: 'Kothi Palace Administrative Area & Dewas Road, Ujjain, MP 456010',
    ward: 'Ward 28, Ujjain Municipal Corporation',
    municipalBody: 'Ujjain Municipal Corporation (UMC) / Ujjain Development Authority (UDA)',
    mlaConstituency: 'Ujjain Dakshin (MP Legislative Assembly)',
    mpConstituency: 'Ujjain (SC) Lok Sabha Constituency',
    policeThana: {
      stationName: 'Madhav Nagar Police Station',
      landline: '0734-2511414',
      controlRoom: '112 / 0734-2525100',
      jurisdictionArea: 'Dewas Road, Kothi Compound, Rishi Nagar Sector',
      emergencyEmail: 'ps-madhavnagar-ujn@mp.gov.in'
    },
    infraAgencies: ['Ujjain Municipal Corporation (UMC)', 'Madhya Pradesh PWD', 'Ujjain Smart City Ltd']
  },

  // Bengaluru - Manyata
  {
    id: 'blr-manyata',
    name: 'Manyata Tech Park (Hebbal / Nagavara Corridor)',
    cityId: 'bengaluru',
    address: 'Nagavara Outer Ring Road, Hebbal, Bengaluru, Karnataka 560045',
    ward: 'Ward 24 (HBR Layout) & Ward 6 (Thanisandra), BBMP North',
    municipalBody: 'Bruhat Bengaluru Mahanagara Palike (BBMP)',
    mlaConstituency: 'Sarvagnanagar & Byatarayanapura (Karnataka Assembly)',
    mpConstituency: 'Bangalore North Lok Sabha Constituency',
    policeThana: {
      stationName: 'Hennur / Hebbal Police Station',
      landline: '080-22942542',
      controlRoom: '112 (State Control Room) / 080-22942222',
      jurisdictionArea: 'Nagavara Junction, Hennur Ring Road, Manyata Boundary',
      emergencyEmail: 'sho-hebbal-bcp@ksp.gov.in'
    },
    infraAgencies: ['BBMP Major Roads Infrastructure', 'National Highways Authority of India (NHAI)', 'BMRCL (Namma Metro Blue Line Project)']
  },

  // Bengaluru - Outer Ring Road
  {
    id: 'blr-orr',
    name: 'Kadubeesanahalli / Marathahalli ORR IT Corridor',
    cityId: 'bengaluru',
    address: 'Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103',
    ward: 'Ward 150 (Bellandur), BBMP Mahadevapura Zone',
    municipalBody: 'Bruhat Bengaluru Mahanagara Palike (BBMP)',
    mlaConstituency: 'Mahadevapura (Karnataka Assembly)',
    mpConstituency: 'Bangalore Central Lok Sabha Constituency',
    policeThana: {
      stationName: 'Marathahalli / Bellandur Police Station',
      landline: '080-22943468',
      controlRoom: '112 / 080-22942222',
      jurisdictionArea: 'Bellandur EcoSpace to Marathahalli Bridge',
      emergencyEmail: 'sho-marathahalli-bcp@ksp.gov.in'
    },
    infraAgencies: ['BBMP Mahadevapura Division', 'BWSSB (Cauvery Phase V Water Project)', 'BMRCL Phase 2A']
  },

  // Pune - Hinjewadi
  {
    id: 'pun-hinjewadi',
    name: 'Rajiv Gandhi Infotech Park (Phase 1), Hinjewadi',
    cityId: 'pune',
    address: 'Hinjewadi Main Road, Phase 1, Pimpri-Chinchwad / Pune 411057',
    ward: 'Hinjewadi Grampanchayat / PMRDA Jurisdiction',
    municipalBody: 'Pune Metropolitan Region Development Authority (PMRDA)',
    mlaConstituency: 'Bhor / Chinchwad (Maharashtra Assembly)',
    mpConstituency: 'Maval Lok Sabha Constituency',
    policeThana: {
      stationName: 'Hinjewadi Police Station (Pimpri-Chinchwad Police Commissionerate)',
      landline: '020-22934100',
      controlRoom: '112 / 020-27450112',
      jurisdictionArea: 'Hinjewadi Phase 1, 2, 3 and Marunji Road',
      emergencyEmail: 'srpi.hinjawadi.pcpc-mah@gov.in'
    },
    infraAgencies: ['MIDC Infrastructure Division', 'PMRDA Metro Line 3 Authority', 'MSEDCL Pune Rural']
  },

  // Hyderabad - Hitec City
  {
    id: 'hyd-hitec',
    name: 'Cyber Towers / Madhapur IT Belt (HITEC City)',
    cityId: 'hyderabad',
    address: 'Hitec City Main Road, Madhapur, Hyderabad, Telangana 500081',
    ward: 'Ward 107 (Madhapur), GHMC Serilingampally Zone',
    municipalBody: 'Greater Hyderabad Municipal Corporation (GHMC)',
    mlaConstituency: 'Serilingampally (Telangana Assembly)',
    mpConstituency: 'Chevella Lok Sabha Constituency',
    policeThana: {
      stationName: 'Madhapur Police Station (Cyberabad Police Commissionerate)',
      landline: '040-27853580',
      controlRoom: '112 / 040-27853400',
      jurisdictionArea: 'Cyber Towers, Mindspace, Madhapur Metro',
      emergencyEmail: 'sho-mdpr-cyb@tspolice.gov.in'
    },
    infraAgencies: ['GHMC Engineering Wing', 'TSIIC (Telangana State Industrial Infrastructure Corp)', 'Hyderabad Metro Rail (HMRL)']
  }
];

export const LOCALITIES: Locality[] = [
  // --- VADODARA LOCALITIES (Office: vad-rly-stn) ---
  {
    id: 'vad-manjalpur',
    name: 'Manjalpur Zone',
    cityId: 'vadodara',
    associatedOfficeId: 'vad-rly-stn',
    estimatedRushHourMinutes: 22,
    offPeakMinutes: 14,
    budgetTier: 'balanced',
    approxRentBand: '₹10,000 - ₹17,000 / mo',
    civicIndexScore: 7.4,
    amenities: {
      hospitalsWithin3km: 3,
      nearestHospital: {
        name: 'Spandan Multi-Speciality Hospital & Trauma Care',
        distanceKm: 1.2,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 1.5,
      metroOrArterialBus: 'Direct GSRTC & Vinayak City Bus connectivity to Station',
      marketProximityKm: 0.8
    },
    civicData: {
      openComplaints90Days: 34,
      primaryIssues: ['Low water pressure during summer', 'Monsoon storm water line desilting'],
      dataSourceName: 'VMC Open Public Grievance Portal',
      dataSourceUrl: 'https://vmc.gov.in/PublicGrievance.aspx',
      auditTicketId: 'VMC-GRV-2026-9912',
      prDiscrepancyLevel: 'Low',
      prClaimSummary: 'Promoted as tranquil middle-class residential paradise.',
      groundRealitySummary: 'Good roads, but occasional localized drainage overflow in low-lying pockets during heavy cloudbursts.',
      resolutionRatePercent: 82
    },
    keyTradeoffs: {
      advantages: [
        'Affordable rental yields with family-friendly gated colonies',
        'Quick access to schools, vegetable mandis, and sports complexes',
        '22-minute reliable commute to Station during peak hours'
      ],
      disadvantages: [
        'Peak hour congestion at Pratapnagar flyover bottleneck',
        'Borewell water blending required in certain peripheral sub-blocks'
      ]
    },
    reraDisclaimerRequired: true
  },
  {
    id: 'vad-alkapuri',
    name: 'Alkapuri Residential & Commercial Corridor',
    cityId: 'vadodara',
    associatedOfficeId: 'vad-rly-stn',
    estimatedRushHourMinutes: 10,
    offPeakMinutes: 6,
    budgetTier: 'executive',
    approxRentBand: '₹22,000 - ₹40,000 / mo',
    civicIndexScore: 8.8,
    amenities: {
      hospitalsWithin3km: 5,
      nearestHospital: {
        name: 'Sterling Hospitals (NABH Accredited Tertiary Center)',
        distanceKm: 1.8,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 0.9,
      metroOrArterialBus: 'Within walking distance / rapid auto frequency to Station',
      marketProximityKm: 0.3
    },
    civicData: {
      openComplaints90Days: 12,
      primaryIssues: ['Peak hour curbside parking overflow', 'Tree trimming along old avenues'],
      dataSourceName: 'VMC Ward 8 Engineering Logs',
      dataSourceUrl: 'https://vmc.gov.in',
      auditTicketId: 'VMC-W8-ENG-2026',
      prDiscrepancyLevel: 'Low',
      prClaimSummary: 'Premier upscale downtown living with lush green canopy.',
      groundRealitySummary: 'Municipal infrastructure is exceptionally well-maintained, minimal water or power interruptions.',
      resolutionRatePercent: 94
    },
    keyTradeoffs: {
      advantages: [
        'Minimal 10-minute commute to Railway Station',
        'Highest density of pharmacies, banks, and cafes',
        'Robust 24/7 municipal water supply pipeline'
      ],
      disadvantages: [
        'Higher rental expenditure tier (2.5x compared to peripheral zones)',
        'Heavy weekend evening commercial traffic along RC Dutt Road'
      ]
    },
    reraDisclaimerRequired: true
  },
  {
    id: 'vad-gotri',
    name: 'Gotri - Sevasi Green Sector',
    cityId: 'vadodara',
    associatedOfficeId: 'vad-rly-stn',
    estimatedRushHourMinutes: 26,
    offPeakMinutes: 16,
    budgetTier: 'balanced',
    approxRentBand: '₹12,000 - ₹21,000 / mo',
    civicIndexScore: 7.9,
    amenities: {
      hospitalsWithin3km: 4,
      nearestHospital: {
        name: 'GMERS Medical College & Civil Hospital Gotri',
        distanceKm: 1.4,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 2.1,
      metroOrArterialBus: 'Gotri Road City Bus Feeder every 15 minutes',
      marketProximityKm: 1.1
    },
    civicData: {
      openComplaints90Days: 28,
      primaryIssues: ['Streetlight repair on upcoming Sevasi bypass', 'Construction dust mitigation'],
      dataSourceName: 'Vadodara Urban Development Authority (VUDA)',
      dataSourceUrl: 'https://vuda.gujarat.gov.in',
      auditTicketId: 'VUDA-MON-819',
      prDiscrepancyLevel: 'Moderate',
      prClaimSummary: 'Ad campaigns label it as the fastest growing green enclave.',
      groundRealitySummary: 'Solid healthcare access via GMERS; rapid construction currently causes seasonal road dust.',
      resolutionRatePercent: 78
    },
    keyTradeoffs: {
      advantages: [
        'Direct proximity to premier government medical facility (GMERS)',
        'Spacious modern apartment complexes with ample parking',
        'Lower noise pollution compared to central railway zone'
      ],
      disadvantages: [
        'Commute crosses 25 mins if Gotri crossroads signal is congested',
        'Active real estate construction on perimeter roads'
      ]
    },
    reraDisclaimerRequired: true
  },

  // --- UJJAIN LOCALITIES (Office: ujj-admin-belt) ---
  {
    id: 'ujj-dewas-rd',
    name: 'Dewas Road (Rishi Nagar / Sethi Nagar Belt)',
    cityId: 'ujjain',
    associatedOfficeId: 'ujj-admin-belt',
    estimatedRushHourMinutes: 12,
    offPeakMinutes: 7,
    budgetTier: 'balanced',
    approxRentBand: '₹7,500 - ₹13,000 / mo',
    civicIndexScore: 8.2,
    amenities: {
      hospitalsWithin3km: 3,
      nearestHospital: {
        name: 'District Civil Hospital Ujjain (Madhya Pradesh Health Dept)',
        distanceKm: 1.6,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 1.1,
      metroOrArterialBus: 'E-rickshaws & UMC City Bus line along Dewas Highway',
      marketProximityKm: 0.6
    },
    civicData: {
      openComplaints90Days: 19,
      primaryIssues: ['Garbage collection timing synchronization', 'Secondary road paver block leveling'],
      dataSourceName: 'UMC Swachhata & Grievance Portal',
      dataSourceUrl: 'http://nagarnigamujjain.com',
      auditTicketId: 'UMC-SWA-2026-302',
      prDiscrepancyLevel: 'Low',
      prClaimSummary: 'Peaceful residential heartland of Ujjain with broad avenues.',
      groundRealitySummary: 'Reliable Narmada water pipeline supply; minimal water-logging due to natural elevation.',
      resolutionRatePercent: 88
    },
    keyTradeoffs: {
      advantages: [
        'Swift 12-minute commute to Kothi Administrative area',
        'Proximity to Vikram University campus and academic serenity',
        'Active police patrolling via Madhav Nagar Police Desk'
      ],
      disadvantages: [
        'Intermittent traffic surge during pilgrimage festive months (Simhastha transit corridors)',
        'Fewer high-rise societies with dedicated gym/pool amenities'
      ]
    },
    reraDisclaimerRequired: true
  },
  {
    id: 'ujj-freeganj',
    name: 'Freeganj Central Zone',
    cityId: 'ujjain',
    associatedOfficeId: 'ujj-admin-belt',
    estimatedRushHourMinutes: 8,
    offPeakMinutes: 5,
    budgetTier: 'affordable',
    approxRentBand: '₹6,000 - ₹11,000 / mo',
    civicIndexScore: 7.1,
    amenities: {
      hospitalsWithin3km: 6,
      nearestHospital: {
        name: 'CHL Medical Center & Sanjeevani Hospital',
        distanceKm: 0.7,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 0.6,
      metroOrArterialBus: 'Central auto and e-rickshaw terminal at Tower Chowk',
      marketProximityKm: 0.1
    },
    civicData: {
      openComplaints90Days: 48,
      primaryIssues: ['Encroachment of pedestrian walkways', 'High commercial vehicle noise'],
      dataSourceName: 'UMC Traffic & Enforcement Wing',
      dataSourceUrl: 'http://nagarnigamujjain.com',
      auditTicketId: 'UMC-TRF-2026-81',
      prDiscrepancyLevel: 'Moderate',
      prClaimSummary: 'The undisputed commercial lifeline where everything is at your doorstep.',
      groundRealitySummary: 'Incredible convenience for groceries and medicines, but high acoustic levels and tight parking.',
      resolutionRatePercent: 75
    },
    keyTradeoffs: {
      advantages: [
        'Walkable distance to offices on Dewas / Freeganj stretch',
        'Pharmacies and emergency doctor clinics open past midnight',
        'Very economical rental rates for independent floors'
      ],
      disadvantages: [
        'Challenging two-wheeler and four-wheeler parking availability',
        'Peak hours see chaotic pedestrian and market movement'
      ]
    },
    reraDisclaimerRequired: true
  },
  {
    id: 'ujj-nanakheda',
    name: 'Nanakheda Bus Stand & Mahakal Bypass Belt',
    cityId: 'ujjain',
    associatedOfficeId: 'ujj-admin-belt',
    estimatedRushHourMinutes: 18,
    offPeakMinutes: 11,
    budgetTier: 'balanced',
    approxRentBand: '₹8,000 - ₹14,000 / mo',
    civicIndexScore: 7.8,
    amenities: {
      hospitalsWithin3km: 2,
      nearestHospital: {
        name: 'Patidar Hospital & Research Center',
        distanceKm: 2.2,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 1.8,
      metroOrArterialBus: 'Adjacent to Inter-State Bus Terminal (ISBT Nanakheda)',
      marketProximityKm: 0.9
    },
    civicData: {
      openComplaints90Days: 24,
      primaryIssues: ['Terminal road asphalt wear-and-tear', 'Bypass street lighting maintenance'],
      dataSourceName: 'UDA Infrastructure Registry',
      dataSourceUrl: 'http://udaujjain.org',
      auditTicketId: 'UDA-INFRA-4412',
      prDiscrepancyLevel: 'Low',
      prClaimSummary: 'Modern bypass enclave connecting Ujjain to Indore four-lane.',
      groundRealitySummary: 'Excellent for professionals commuting intermittently between Ujjain and Indore.',
      resolutionRatePercent: 80
    },
    keyTradeoffs: {
      advantages: [
        'Unmatched inter-city transit connectivity (direct buses to Indore, Bhopal)',
        'Planned layouts by Ujjain Development Authority with broad streets',
        'Clean air buffer away from old city core'
      ],
      disadvantages: [
        'Heavy intercity bus traffic noise on the arterial ring road',
        'Hospital options fewer than Freeganj cluster'
      ]
    },
    reraDisclaimerRequired: true
  },

  // --- BENGALURU LOCALITIES (Office: blr-manyata & blr-orr) ---
  {
    id: 'blr-hbr-kalyannagar',
    name: 'HBR Layout & Kalyan Nagar Enclave',
    cityId: 'bengaluru',
    associatedOfficeId: 'blr-manyata',
    estimatedRushHourMinutes: 18,
    offPeakMinutes: 10,
    budgetTier: 'balanced',
    approxRentBand: '₹18,000 - ₹32,000 / mo',
    civicIndexScore: 7.7,
    amenities: {
      hospitalsWithin3km: 4,
      nearestHospital: {
        name: 'Aster CMI Hospital (Hebbal Flyover)',
        distanceKm: 2.4,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 1.2,
      metroOrArterialBus: 'Outer Ring Road BMTC Volvo bus corridors 500-Series',
      marketProximityKm: 0.5
    },
    civicData: {
      openComplaints90Days: 78,
      primaryIssues: ['Service lane pothole clusters near Nagavara junction', 'BWSSB pipeline digging delays'],
      dataSourceName: 'OpenCity Bengaluru & BBMP Sahaaya Logs',
      dataSourceUrl: 'https://data.opencity.in',
      auditTicketId: 'OC-BLR-BBMP-2026-1189',
      prDiscrepancyLevel: 'High',
      prClaimSummary: 'Brochures claim 5-minute effortless zip to Manyata Tech Park.',
      groundRealitySummary: 'Nagavara metro construction adds 12-18 mins bottleneck during 9:00 AM rush hour.',
      resolutionRatePercent: 64
    },
    keyTradeoffs: {
      advantages: [
        'Cosmopolitan food street and social infrastructure in CMR Road / HRBR 2nd Block',
        'Active citizen groups (HBR RWA) holding ward officers accountable',
        'Cauvery water piped connection active in Blocks 1-4'
      ],
      disadvantages: [
        'Nagavara metro civil work currently causes localized traffic crawl',
        'Higher commercial rent hikes during appraisal cycles'
      ]
    },
    reraDisclaimerRequired: true
  },
  {
    id: 'blr-kaggadasapura',
    name: 'Kaggadasapura & CV Raman Nagar',
    cityId: 'bengaluru',
    associatedOfficeId: 'blr-orr',
    estimatedRushHourMinutes: 28,
    offPeakMinutes: 16,
    budgetTier: 'balanced',
    approxRentBand: '₹16,000 - ₹28,000 / mo',
    civicIndexScore: 6.9,
    amenities: {
      hospitalsWithin3km: 3,
      nearestHospital: {
        name: 'Manipal Hospital (Old Airport Road)',
        distanceKm: 2.8,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 1.4,
      metroOrArterialBus: 'Feeder buses to Byappanahalli Purple Line Metro Station',
      marketProximityKm: 0.6
    },
    civicData: {
      openComplaints90Days: 92,
      primaryIssues: ['Water tanker dependence in non-Cauvery sectors', 'Narrow railway crossing underpass congestion'],
      dataSourceName: 'BBMP Mahadevapura Open Portal',
      dataSourceUrl: 'https://bbmp.gov.in',
      auditTicketId: 'BBMP-MAH-2026-4401',
      prDiscrepancyLevel: 'High',
      prClaimSummary: 'Affordable oasis right between Indiranagar and Outer Ring Road tech offices.',
      groundRealitySummary: 'Significant private tanker reliance and bottleneck at Kaggadasapura railway gate.',
      resolutionRatePercent: 58
    },
    keyTradeoffs: {
      advantages: [
        '30% lower rent compared to Indiranagar and Bellandur gated societies',
        'Direct access to DRDO / ISRO scientific township green buffers',
        'Solid neighborhood grocery and South Indian mess options'
      ],
      disadvantages: [
        'Tanker water bills add ₹2,000 - ₹3,500/month to apartment maintenance',
        'Railway underpass floods during severe monsoon thunderstorms'
      ]
    },
    reraDisclaimerRequired: true
  },

  // --- PUNE LOCALITY (Office: pun-hinjewadi) ---
  {
    id: 'pun-wakad',
    name: 'Wakad & Datta Mandir Road',
    cityId: 'pune',
    associatedOfficeId: 'pun-hinjewadi',
    estimatedRushHourMinutes: 20,
    offPeakMinutes: 12,
    budgetTier: 'balanced',
    approxRentBand: '₹16,000 - ₹26,000 / mo',
    civicIndexScore: 7.6,
    amenities: {
      hospitalsWithin3km: 4,
      nearestHospital: {
        name: 'Lifepoint Multi-Specialty Hospital',
        distanceKm: 1.5,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 1.9,
      metroOrArterialBus: 'PMPML AC Hinjewadi shuttle buses every 10 mins',
      marketProximityKm: 0.7
    },
    civicData: {
      openComplaints90Days: 61,
      primaryIssues: ['Bhumkar Chowk flyover bottleneck', 'MSEDCL summer load fluctuations'],
      dataSourceName: 'PCMC Smart Sarathi Citizen Logs',
      dataSourceUrl: 'https://pcmcindia.gov.in',
      auditTicketId: 'PCMC-SS-2026-901',
      prDiscrepancyLevel: 'Moderate',
      prClaimSummary: 'Instant bridge into Hinjewadi Tech Park with luxury highrises.',
      groundRealitySummary: 'Bhumkar Chowk traffic signal requires 12 minutes alone during 9:00 AM surge.',
      resolutionRatePercent: 71
    },
    keyTradeoffs: {
      advantages: [
        'Direct connection into Hinjewadi without crossing national highway toll gates',
        'High percentage of young IT professionals and shared carpools',
        'Strong PCMC municipal garbage collection system'
      ],
      disadvantages: [
        'Bhumkar Chowk traffic crawl during morning and evening shifts',
        'High water tanker reliance in peripheral societies along Datta Mandir road'
      ]
    },
    reraDisclaimerRequired: true
  },

  // --- HYDERABAD LOCALITY (Office: hyd-hitec) ---
  {
    id: 'hyd-kondapur',
    name: 'Kondapur & Botanical Garden Belt',
    cityId: 'hyderabad',
    associatedOfficeId: 'hyd-hitec',
    estimatedRushHourMinutes: 18,
    offPeakMinutes: 10,
    budgetTier: 'balanced',
    approxRentBand: '₹18,000 - ₹34,000 / mo',
    civicIndexScore: 8.0,
    amenities: {
      hospitalsWithin3km: 5,
      nearestHospital: {
        name: 'KIMS Cuddles & Aster Prime Kondapur',
        distanceKm: 1.3,
        hasEmergencyTrauma: true
      },
      policeDeskWikiKm: 1.6,
      metroOrArterialBus: 'TSRTC Vajra AC buses & Raidurg Metro feeder auto services',
      marketProximityKm: 0.5
    },
    civicData: {
      openComplaints90Days: 45,
      primaryIssues: ['Kothaguda flyover under-deck traffic flow', 'Stormwater channel cleaning'],
      dataSourceName: 'GHMC Citizen Grievance Portal',
      dataSourceUrl: 'https://ghmc.gov.in',
      auditTicketId: 'GHMC-SERI-2026-554',
      prDiscrepancyLevel: 'Low',
      prClaimSummary: 'Prime residential hotspot right next to Cyber Towers and Financial District.',
      groundRealitySummary: 'Well-connected with new Kothaguda multi-level flyovers, reliable Mission Bhagiratha municipal water.',
      resolutionRatePercent: 86
    },
    keyTradeoffs: {
      advantages: [
        'Under 20 minutes to Cyber Towers / Mindspace even in peak morning hours',
        'Direct access to Kotla Vijayabhaskara Reddy Botanical Garden for fitness',
        'Excellent high-street dining, hospitals, and child daycares'
      ],
      disadvantages: [
        'Spike in rents over the last two financial quarters',
        'Pedestrian crossing challenges near busy crossroads'
      ]
    },
    reraDisclaimerRequired: true
  }
];

export const INITIAL_ALERTS: VerifiedAlert[] = [
  {
    id: 'alt-01',
    cityId: 'vadodara',
    localityId: 'vad-manjalpur',
    category: 'Water Supply Interruption',
    verifiedEvidenceType: 'Municipal Ticket',
    proofReference: 'VMC-W12-WTR-8812',
    dateReported: '02 Nov 2026',
    verifiedByModerator: true,
    description: 'Scheduled maintenance of main pipeline feeder in Manjalpur Sector 3 between 10 AM - 4 PM.'
  },
  {
    id: 'alt-02',
    cityId: 'ujjain',
    localityId: 'ujj-freeganj',
    category: 'Traffic Diversion',
    verifiedEvidenceType: 'Police Advisory',
    proofReference: 'Ujjain Traffic Police Advisory #TRF-902',
    dateReported: '01 Nov 2026',
    verifiedByModerator: true,
    description: 'Tower Chowk to Overbridge one-way diversion due to storm drain culvert reconstruction.'
  },
  {
    id: 'alt-03',
    cityId: 'bengaluru',
    localityId: 'blr-hbr-kalyannagar',
    category: 'Road Obstruction',
    verifiedEvidenceType: 'CPGRAMS Ticket',
    proofReference: 'CPGRAMS-KA-2026-44109',
    dateReported: '28 Oct 2026',
    verifiedByModerator: true,
    description: 'Nagavara service road barricaded for Metro Blue Line girder placement during night hours (11 PM - 5 AM).'
  }
];

