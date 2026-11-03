export type CityId = 'vadodara' | 'ujjain' | 'bengaluru' | 'pune' | 'hyderabad';

export type BudgetTier = 'affordable' | 'balanced' | 'executive';

export interface OfficeAnchor {
  id: string;
  name: string;
  cityId: CityId;
  address: string;
  ward: string;
  municipalBody: string;
  mlaConstituency: string;
  mpConstituency: string;
  policeThana: {
    stationName: string;
    landline: string;
    controlRoom: string;
    jurisdictionArea: string;
    emergencyEmail: string;
  };
  infraAgencies: string[];
}

export interface AmenityStats {
  hospitalsWithin3km: number;
  nearestHospital: {
    name: string;
    distanceKm: number;
    hasEmergencyTrauma: boolean;
  };
  policeDeskWikiKm: number;
  metroOrArterialBus: string;
  marketProximityKm: number;
}

export interface CivicTransparencyData {
  openComplaints90Days: number;
  primaryIssues: string[]; // e.g., ["Stormwater Drainage", "Pothole Filling", "Water Tanker Reliance"]
  dataSourceName: string;
  dataSourceUrl: string;
  auditTicketId: string;
  prDiscrepancyLevel: 'Low' | 'Moderate' | 'High';
  prClaimSummary: string;
  groundRealitySummary: string;
  resolutionRatePercent: number;
}

export interface Locality {
  id: string;
  name: string;
  cityId: CityId;
  associatedOfficeId: string;
  estimatedRushHourMinutes: number; // 9:00 AM peak transit
  offPeakMinutes: number;
  budgetTier: BudgetTier;
  approxRentBand: string; // e.g., "₹8,000 - ₹14,000 / mo"
  civicIndexScore: number; // 0 - 10
  amenities: AmenityStats;
  civicData: CivicTransparencyData;
  keyTradeoffs: {
    advantages: string[];
    disadvantages: string[];
  };
  reraDisclaimerRequired: boolean;
}

export interface VerifiedAlert {
  id: string;
  cityId: CityId;
  localityId: string;
  category: 'Road Obstruction' | 'Water Supply Interruption' | 'Streetlight Failure' | 'Traffic Diversion' | 'Flood Waterlogging';
  verifiedEvidenceType: 'Municipal Ticket' | 'CPGRAMS Ticket' | 'Police Advisory' | 'Geotagged Photo';
  proofReference: string; // Ticket number or source link
  dateReported: string;
  verifiedByModerator: boolean;
  description: string;
}

export interface GrievanceDraftPayload {
  officeOrLocality: string;
  category: string;
  targetDepartment: string;
  specificLocationDescription: string;
  issueSummary: string;
  userFullName: string;
  userEmail: string;
}

