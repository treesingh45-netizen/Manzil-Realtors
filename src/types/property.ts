export type PropertyPurpose = 'Buy' | 'Rent' | 'Invest';

export type PropertyType = 
  | 'Apartment' 
  | 'House' 
  | 'Commercial' 
  | 'Plot' 
  | 'Office' 
  | 'Shop' 
  | 'Commercial Building';

export type KarachiLocation = 
  | 'Gulshan-e-Iqbal'
  | 'Gulistan-e-Jauhar'
  | 'DHA Karachi'
  | 'PECHS'
  | 'North Nazimabad'
  | 'Clifton'
  | 'Bahria Town Karachi'
  | 'Scheme 33'
  | 'Korangi'
  | 'Federal B Area'
  | 'Other Karachi Areas';

export interface Property {
  id: string; // e.g. "MRB-001"
  title: string;
  type: PropertyType;
  purpose: PropertyPurpose;
  location: string;
  locationArea: KarachiLocation;
  area: string;
  areaSqFt?: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  price: string;
  priceNumeric: number; // in PKR
  status: 'Ready to Move' | 'Investment Plot' | 'Commercial Ready' | 'Tenanted' | 'Shell & Core';
  availability: 'Available' | 'Exclusive' | 'Off-Market';
  featured: boolean;
  shortDescription: string;
  description: string;
  features: string[];
  mainImage: string;
  galleryImages: string[];
  nearby: {
    schools: string;
    hospitals: string;
    shopping: string;
    restaurants: string;
    mainRoads: string;
    publicTransport: string;
  };
}

export interface ViewingRequestData {
  requirement: string;
  propertyId: string;
  propertyName: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  preferredLocation: string;
  budgetRange: string;
  additionalRequirements: string;
}

export interface InquiryData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  preferredLocation: string;
  budget: string;
  message: string;
}
