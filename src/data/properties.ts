import { Property, KarachiLocation } from '../types/property';

import imgHero from '../assets/images/hero_karachi_residence_1791363799769.jpg';
import imgEditorial from '../assets/images/editorial_karachi_architecture_1791363836706.jpg';
import imgContemporary from '../assets/images/contemporary_family_residence_1791363862175.jpg';
import imgExecutiveApt from '../assets/images/executive_apartment_residence_1791363885579.jpg';
import imgCommercial from '../assets/images/pechs_commercial_office_1791363941062.jpg';

export const PROPERTIES: Property[] = [
  {
    id: 'MRB-001',
    title: 'Contemporary Family Residence',
    type: 'House',
    purpose: 'Buy',
    location: 'Gulshan-e-Iqbal, Karachi',
    locationArea: 'Gulshan-e-Iqbal',
    area: '350 Sq. Yd.',
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 2,
    price: 'PKR 68,000,000',
    priceNumeric: 68000000,
    status: 'Ready to Move',
    availability: 'Available',
    featured: true,
    shortDescription: 'Contemporary family home with thoughtful proportions, solid teak fixtures, and secure private courtyard.',
    description: 'A well-planned family residence designed around practical living, generous proportions, and everyday comfort. The property features spacious living areas, modern bedrooms, multiple bathrooms, dedicated parking, and a location with convenient access to major commercial and residential destinations.',
    features: [
      'Spacious living and dining areas',
      'Modern kitchen with pantry',
      'Large bedrooms with en-suite baths',
      'Dedicated two-vehicle parking',
      'Secure entrance with guard counter',
      'Family-oriented dual level layout',
      'Underground and overhead water storage',
      'Convenient access to University Road'
    ],
    mainImage: imgContemporary,
    galleryImages: [
      imgContemporary,
      imgHero,
      imgEditorial,
      imgExecutiveApt
    ],
    nearby: {
      schools: 'Beaconhouse School System (450m), The City School (1.1 km)',
      hospitals: 'Aga Khan University Hospital (1.8 km), Liaquat National (2.2 km)',
      shopping: 'LuckyOne Mall (3.5 km), Millennium Mall (2.8 km)',
      restaurants: 'Gulshan Food Street (800m), Chai Shai & Cafes (500m)',
      mainRoads: 'University Road (300m), Rashid Minhas Road (1.5 km)',
      publicTransport: 'NIPA Metrobus Station (900m)'
    }
  },
  {
    id: 'MRB-002',
    title: 'Executive Apartment Residence',
    type: 'Apartment',
    purpose: 'Buy',
    location: 'DHA Phase 6, Karachi',
    locationArea: 'DHA Karachi',
    area: '2,400 Sq. Ft.',
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 2,
    price: 'PKR 42,500,000',
    priceNumeric: 42500000,
    status: 'Ready to Move',
    availability: 'Available',
    featured: true,
    shortDescription: 'Elevated corner apartment with sweeping views, imported porcelain finishes, and dedicated basement parking.',
    description: 'A refined high-rise residential apartment combining quiet privacy with rapid access to DHA commercial avenues. Offers seamless open-plan living, generous ceiling heights, curated kitchen joinery, and 24/7 building management.',
    features: [
      'Floor-to-ceiling double-glazed windows',
      'Imported Italian porcelain tiles',
      'Modular chef kitchen with island',
      '2 Reserved basement parking slots',
      'High-speed Otis passenger elevators',
      '100% Standby power generator backup',
      'Gymnasium & resident lounge',
      'Surveillance and access control'
    ],
    mainImage: imgExecutiveApt,
    galleryImages: [
      imgExecutiveApt,
      imgHero,
      imgEditorial,
      imgContemporary
    ],
    nearby: {
      schools: 'CAS School (1.4 km), Haque Academy (2.0 km)',
      hospitals: 'South City Hospital (3.2 km), Medwin Medical (1.0 km)',
      shopping: 'Bukhari Commercial (600m), Ittehad Commercial (900m)',
      restaurants: 'Saba Avenue Dining Precinct (400m), Cafe Flo (3.8 km)',
      mainRoads: 'Khayaban-e-Ittehad (300m), Saba Avenue (250m)',
      publicTransport: 'DHA feeder coach stops'
    }
  },
  {
    id: 'MRB-003',
    title: 'Modern Family Home',
    type: 'House',
    purpose: 'Buy',
    location: 'Gulistan-e-Jauhar, Karachi',
    locationArea: 'Gulistan-e-Jauhar',
    area: '300 Sq. Yd.',
    bedrooms: 5,
    bathrooms: 5,
    parkingSpaces: 2,
    price: 'PKR 52,000,000',
    priceNumeric: 52000000,
    status: 'Ready to Move',
    availability: 'Available',
    featured: true,
    shortDescription: 'Well-proportioned multi-generational home in Block 14, featuring independent upper floor access.',
    description: 'Constructed with enduring materials and practical family zoning. Features separate drawing and dining lounges, expansive rooftop terrace, dual utilities connections, and proximity to reputable institutions.',
    features: [
      'Dual utility meters (gas & electricity)',
      'Independent external staircase access',
      'Five generous ensuite bedrooms',
      'Solid deodar woodwork and framing',
      'Open terrace with evening cross-breeze',
      'Covered car porch for 2 SUVs',
      'Secured boundary wall and CCTV',
      'Wide front carpeted road'
    ],
    mainImage: imgEditorial,
    galleryImages: [
      imgEditorial,
      imgHero,
      imgContemporary,
      imgExecutiveApt
    ],
    nearby: {
      schools: 'Army Public School Jauhar (1.2 km), Karachi University (2.6 km)',
      hospitals: 'Darul Sehat Hospital (1.5 km), Dow University Hospital (3.5 km)',
      shopping: 'Samama Shopping Complex (1.8 km), Bin Hashim Supermarket (900m)',
      restaurants: 'Jauhar Chowrangi Food Corridor (1.1 km)',
      mainRoads: 'Kamran Chowrangi (800m), University Road (1.5 km)',
      publicTransport: 'Jauhar Mor Stop (1.3 km)'
    }
  },
  {
    id: 'MRB-004',
    title: 'Premium Commercial Office',
    type: 'Office',
    purpose: 'Invest',
    location: 'PECHS Block 6, Karachi',
    locationArea: 'PECHS',
    area: '1,850 Sq. Ft.',
    parkingSpaces: 3,
    price: 'PKR 38,000,000',
    priceNumeric: 38000000,
    status: 'Commercial Ready',
    availability: 'Exclusive',
    featured: true,
    shortDescription: 'Grade-A corporate floor on Shahrah-e-Faisal artery, leased to multinational enterprise.',
    description: 'A high-yield corporate asset located inside one of PECHS premier office buildings. Features an efficient open floor plate, executive suites, conference facilities, central HVAC, and strong historical tenant retention.',
    features: [
      'Shahrah-e-Faisal arterial access',
      'Central VRF climate control system',
      'Acoustic ceiling grids & LED panels',
      'Three dedicated basement parking bays',
      'Fiber optic redundant internet trunk',
      'Turnstile access with biometric security',
      'Fire suppression & alarm compliance',
      'Currently producing consistent rental yield'
    ],
    mainImage: imgCommercial,
    galleryImages: [
      imgCommercial,
      imgHero,
      imgExecutiveApt,
      imgEditorial
    ],
    nearby: {
      schools: 'PAF KIET City Campus (1.2 km)',
      hospitals: 'Aga Khan Diagnostic PECHS (800m)',
      shopping: 'Tariq Road Retail Strip (1.4 km)',
      restaurants: 'Sindhi Muslim Society Food Hub (1.0 km)',
      mainRoads: 'Shahrah-e-Faisal (200m), Sharea Quaideen (700m)',
      publicTransport: 'Nursery Metrobus Station (400m)'
    }
  },
  {
    id: 'MRB-005',
    title: 'Clifton Executive Residence',
    type: 'House',
    purpose: 'Buy',
    location: 'Clifton Block 5, Karachi',
    locationArea: 'Clifton',
    area: '320 Sq. Yd.',
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 2,
    price: 'PKR 89,000,000',
    priceNumeric: 89000000,
    status: 'Ready to Move',
    availability: 'Exclusive',
    featured: true,
    shortDescription: 'Distinguished Clifton address near foreign consulates, tailored for diplomatic or executive residences.',
    description: 'An architectural private villa offering serene coastal breezes, clean modernist massing, private internal patio, and maximum security parameters. Meticulously maintained and situated on an exceptionally quiet residential lane.',
    features: [
      'High-security embassy zone proximity',
      'Architectural travertine and marble finishes',
      'Custom imported German sanitary fixtures',
      'Private internal courtyard garden',
      'Servant quarter with separate washroom',
      'Heavy-gauge aluminum window frames',
      'Solid teakwood exterior main gate',
      'High water pressure solar pumping system'
    ],
    mainImage: imgHero,
    galleryImages: [
      imgHero,
      imgEditorial,
      imgContemporary,
      imgExecutiveApt
    ],
    nearby: {
      schools: 'Karachi Grammar School Middle (1.5 km), Convent of Jesus & Mary (2.1 km)',
      hospitals: 'South City Hospital (1.6 km), Clifton Hospital (900m)',
      shopping: 'Ocean Mall (1.2 km), Dolmen Mall Clifton (2.4 km)',
      restaurants: 'Boat Basin Food Strip (800m), Cafe Aylanto (1.7 km)',
      mainRoads: 'Khayaban-e-Roomi (400m), Schon Circle (900m)',
      publicTransport: 'Boat Basin Terminal (800m)'
    }
  },
  {
    id: 'MRB-006',
    title: 'Bahria Town Investment Plot',
    type: 'Plot',
    purpose: 'Invest',
    location: 'Bahria Town Karachi, Precinct 10',
    locationArea: 'Bahria Town Karachi',
    area: '250 Sq. Yd.',
    price: 'PKR 12,500,000',
    priceNumeric: 12500000,
    status: 'Investment Plot',
    availability: 'Available',
    featured: true,
    shortDescription: 'Direct-transfer residential plot situated on an elevated ridge opposite planned neighborhood park.',
    description: 'An authentic development plot ideal for immediate construction or mid-term capital appreciation. Fully demarcated, with comprehensive underground utilities already live and possession letters issued.',
    features: [
      'Direct owner transfer with clear title',
      'Underground electricity, gas & sewerage',
      'Elevated ridge facing north-east breeze',
      'Walking distance to Central Mosque',
      'Immediate construction authorization',
      '24/7 Bahria security patrols & gated entrance',
      'Rapid access to Jinnah Avenue artery',
      'High long-term investment liquidity'
    ],
    mainImage: imgEditorial,
    galleryImages: [
      imgEditorial,
      imgContemporary,
      imgHero,
      imgCommercial
    ],
    nearby: {
      schools: 'Roots Millennium Bahria (1.4 km)',
      hospitals: 'Bahria International Hospital (2.8 km)',
      shopping: 'Midway Commercial (2.2 km), Imtiaz Super Market (3.5 km)',
      restaurants: 'Carnival Bahria (4.0 km), Danzoo Cafes (3.1 km)',
      mainRoads: 'Jinnah Avenue 400ft boulevard (1.1 km)',
      publicTransport: 'Bahria internal shuttle route'
    }
  },
  {
    id: 'MRB-007',
    title: 'North Nazimabad Family Home',
    type: 'House',
    purpose: 'Buy',
    location: 'North Nazimabad Block B, Karachi',
    locationArea: 'North Nazimabad',
    area: '240 Sq. Yd.',
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 2,
    price: 'PKR 44,000,000',
    priceNumeric: 44000000,
    status: 'Ready to Move',
    availability: 'Available',
    featured: false,
    shortDescription: 'Renovated corner home with wide road frontage and solid brick construction.',
    description: 'Situated in the established central enclave of North Nazimabad Block B. Offers well-ventilated cross rooms, renewed copper plumbing, and close proximity to premier commercial markets and schools.',
    features: [
      'Corner location with two-sided open road',
      'Freshly updated bathrooms & kitchen',
      'Independent servant quarters',
      'Rooftop water proofing and heat insulation',
      'Quiet cul-de-sac residential street',
      'Gas connection with dependable pressure'
    ],
    mainImage: imgContemporary,
    galleryImages: [imgContemporary, imgHero, imgEditorial],
    nearby: {
      schools: 'St. Jude High School (800m), Usman Institute (1.8 km)',
      hospitals: 'Ziauddin Hospital North Nazimabad (1.5 km)',
      shopping: 'Hyderi Market (1.2 km), Dolmen Mall Hyderi (1.6 km)',
      restaurants: 'Five Star Chowrangi Food Street (900m)',
      mainRoads: 'Shahrah-e-Humayun (400m), Allama Rasheed Turabi Road (700m)',
      publicTransport: 'Green Line Bus Rapid Transit (600m)'
    }
  },
  {
    id: 'MRB-008',
    title: 'DHA Modern Apartment',
    type: 'Apartment',
    purpose: 'Buy',
    location: 'DHA Phase 8, Karachi',
    locationArea: 'DHA Karachi',
    area: '1,750 Sq. Ft.',
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 1,
    price: 'PKR 36,500,000',
    priceNumeric: 36500000,
    status: 'Ready to Move',
    availability: 'Available',
    featured: false,
    shortDescription: 'Boutique waterfront-adjacent apartment with private balconies and scenic sunset orientation.',
    description: 'An elegant residential unit in a low-density DHA Phase 8 building. Features airy modern open-plan living, tailored built-in wardrobes, and dedicated basement parking with round-the-clock security.',
    features: [
      'Low-density boutique residential building',
      'Sea breeze western orientation',
      'Floor plan engineered for zero wasted hallway space',
      'Branded Kohler fixtures in all bathrooms',
      'Designated covered car parking space',
      'Standby power generation for common areas and apartments'
    ],
    mainImage: imgExecutiveApt,
    galleryImages: [imgExecutiveApt, imgEditorial, imgHero],
    nearby: {
      schools: 'Haig Academy (2.2 km)',
      hospitals: 'South City Phase 8 clinic (1.8 km)',
      shopping: 'Zone A Commercial (900m), Creek Marina Strip (2.5 km)',
      restaurants: 'Do Darya Coastal Dining (2.8 km), Emaar Promenade (3.0 km)',
      mainRoads: 'Khayaban-e-Faisal (600m), Abdul Sattar Edhi Avenue (1.2 km)',
      publicTransport: 'Private cab & feeder services'
    }
  },
  {
    id: 'MRB-009',
    title: 'Commercial Retail Opportunity',
    type: 'Shop',
    purpose: 'Rent',
    location: 'Gulshan-e-Iqbal Block 13-D, Karachi',
    locationArea: 'Gulshan-e-Iqbal',
    area: '1,200 Sq. Ft.',
    parkingSpaces: 4,
    price: 'PKR 31,000,000',
    priceNumeric: 31000000,
    status: 'Commercial Ready',
    availability: 'Available',
    featured: false,
    shortDescription: 'Ground-floor prime retail showroom with maximum vehicular visibility along main commercial boulevard.',
    description: 'A rare street-level commercial retail unit suited for banks, flagship pharmaceutical stores, or established retail brands. Features double-height glass frontage, 3-phase electricity, and dedicated street customer parking.',
    features: [
      'Direct ground floor street frontage with high footfall',
      'Double-height ceiling suitable for mezzanine installation',
      'High-amperage dedicated 3-phase commercial meter',
      'Approved municipal commercial usage status',
      'Wide front setback for customer parking'
    ],
    mainImage: imgCommercial,
    galleryImages: [imgCommercial, imgEditorial, imgHero],
    nearby: {
      schools: 'Sir Syed University (1.4 km)',
      hospitals: 'Patel Hospital (2.0 km)',
      shopping: 'Gulshan Block 13 Commercial Center (adjacent)',
      restaurants: 'Hassan Square Food Street (1.1 km)',
      mainRoads: 'University Road (400m), Sir Shah Muhammad Suleman Road (700m)',
      publicTransport: 'Hassan Square Metro Stop (800m)'
    }
  },
  {
    id: 'MRB-010',
    title: 'Scheme 33 Residential Plot',
    type: 'Plot',
    purpose: 'Invest',
    location: 'Scheme 33, Sector 17-A, Karachi',
    locationArea: 'Scheme 33',
    area: '400 Sq. Yd.',
    price: 'PKR 18,500,000',
    priceNumeric: 18500000,
    status: 'Investment Plot',
    availability: 'Available',
    featured: false,
    shortDescription: 'Spacious 400 Sq. Yd. residential plot in established society with asphalt roads and operational electricity.',
    description: 'An authenticated, unencumbered 400 square yard residential plot in an established sector of Scheme 33. Outstanding growth corridor along the Northern Bypass and Super Highway link roads.',
    features: [
      'Clear title verified with Karachi Development Authority (KDA)',
      'Rectangular shape with 60-foot front road',
      'Direct connection to primary society main gate',
      'Rapidly densifying neighborhood with newly built homes',
      'Ideal for custom family villa construction'
    ],
    mainImage: imgEditorial,
    galleryImages: [imgEditorial, imgHero, imgContemporary],
    nearby: {
      schools: 'Kiran Foundation School (1.9 km)',
      hospitals: 'Dow International Hospital (3.4 km)',
      shopping: 'Al-Jannat Mall Scheme 33 (1.5 km)',
      restaurants: 'Super Highway Highway Dining (2.2 km)',
      mainRoads: 'University Road Extension (1.0 km), Karachi-Hyderabad M-9 (2.5 km)',
      publicTransport: 'Sohrab Goth Transit (4.2 km)'
    }
  },
  {
    id: 'MRB-011',
    title: 'PECHS Commercial Building',
    type: 'Commercial Building',
    purpose: 'Invest',
    location: 'PECHS Block 2, Karachi',
    locationArea: 'PECHS',
    area: '3,500 Sq. Ft.',
    parkingSpaces: 6,
    price: 'PKR 95,000,000',
    priceNumeric: 95000000,
    status: 'Tenanted',
    availability: 'Off-Market',
    featured: false,
    shortDescription: 'Free-standing corporate commercial building with ground plus three floors, yielding consistent institutional lease.',
    description: 'An exceptional commercial real estate acquisition in PECHS Block 2. Currently leased to an established professional services consultancy on a long-term commercial lease contract.',
    features: [
      'Ground plus three floors with internal elevator shaft',
      'Dedicated transformer with full industrial load sanction',
      'Basement plus front courtyard executive vehicle parking',
      'Substantial corporate lease agreement with institutional tenant',
      'Complete building ownership with verified commercial registry'
    ],
    mainImage: imgCommercial,
    galleryImages: [imgCommercial, imgHero, imgExecutiveApt],
    nearby: {
      schools: 'St. Patrick College (2.5 km)',
      hospitals: 'Holy Family Hospital (3.1 km), Medicare Cardiac (1.8 km)',
      shopping: 'Tariq Road Center (800m), Dolmen Center Tariq Rd (900m)',
      restaurants: 'Sindhi Muslim Housing Society Dining (1.2 km)',
      mainRoads: 'Shahrah-e-Quaideen (300m), Khalid Bin Waleed Road (400m)',
      publicTransport: 'Tariq Road Main Stop (500m)'
    }
  },
  {
    id: 'MRB-012',
    title: 'Luxury DHA Residence',
    type: 'House',
    purpose: 'Buy',
    location: 'DHA Phase 6, Karachi',
    locationArea: 'DHA Karachi',
    area: '500 Sq. Yd.',
    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 3,
    price: 'PKR 145,000,000',
    priceNumeric: 14500000,
    status: 'Ready to Move',
    availability: 'Exclusive',
    featured: false,
    shortDescription: 'Signature custom villa on 500 Sq. Yd. with internal plunge pool, elevator, and smart automation.',
    description: 'A bespoke architectural residence executed to international luxury standards. Features double-height foyer, floor-to-ceiling glass pavilions, Italian designer kitchen, private rooftop lounge with sea horizon glimpses, and advanced home automation.',
    features: [
      '500 Sq. Yd. prime south-facing DHA Phase 6 plot',
      'Private internal climate-controlled plunge pool',
      'Hydraulic residential glass elevator servicing all floors',
      'Italian imported Poliform-style cabinetry & SubZero cooling',
      'Triple-car covered automated garage with EV charging conduit',
      'Comprehensive Schneider smart lighting & HVAC automation',
      'Private dual servant quarters with dedicated rear access',
      'German Schuco soundproof acoustic glazing throughout'
    ],
    mainImage: imgHero,
    galleryImages: [imgHero, imgContemporary, imgEditorial, imgExecutiveApt],
    nearby: {
      schools: 'CAS School (1.2 km), Defence Authority Creek Club (2.5 km)',
      hospitals: 'South City Hospital (2.8 km)',
      shopping: 'Bukhari Commercial (400m), Ittehad Commercial (700m)',
      restaurants: 'Xanders Bukhari (500m), Okra Clifton (3.2 km)',
      mainRoads: 'Khayaban-e-Bukhari (200m), Khayaban-e-Shujaat (600m)',
      publicTransport: 'Private chauffeured access'
    }
  }
];

export const KARACHI_LOCATIONS_LIST: KarachiLocation[] = [
  'Gulshan-e-Iqbal',
  'DHA Karachi',
  'Clifton',
  'Gulistan-e-Jauhar',
  'PECHS',
  'North Nazimabad',
  'Bahria Town Karachi',
  'Scheme 33',
  'Korangi',
  'Federal B Area'
];

export const PROPERTY_TYPES_LIST: string[] = [
  'Apartment',
  'House',
  'Commercial',
  'Plot',
  'Office',
  'Shop',
  'Commercial Building'
];

export const BUDGET_RANGES = [
  { label: 'All Budgets', min: 0, max: Infinity },
  { label: 'Under PKR 10M', min: 0, max: 10000000 },
  { label: 'PKR 10M–25M', min: 10000000, max: 25000000 },
  { label: 'PKR 25M–50M', min: 25000000, max: 50000000 },
  { label: 'PKR 50M+', min: 50000000, max: Infinity }
];
