import React from 'react';
import { PageId } from '../components/Navbar';
import { 
  Home, 
  TrendingUp, 
  Building2, 
  Briefcase, 
  KeyRound, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      number: '01',
      title: 'Property Buying',
      tagline: 'Residential and commercial acquisition aligned with your lifestyle and capital goals.',
      icon: Home,
      description:
        'From initial requirements to final keys, we help buyers identify verified properties across Karachi that align with their location preferences, spatial criteria, and budget expectations.',
      points: [
        'Requirement Assessment & Spatial Criteria',
        'Curated Property Shortlisting & Pre-screening',
        'Comparative Market Valuation Analysis',
        'Private Escorted Property Viewings',
        'Purchase Support, Due Diligence & Registry Coordination'
      ]
    },
    {
      number: '02',
      title: 'Property Selling',
      tagline: 'Position your property professionally and connect with qualified, serious purchasers.',
      icon: TrendingUp,
      description:
        'We help owners present their Karachi assets with high editorial fidelity, price them accurately based on empirical local comps, and coordinate discreetly with genuine buyers.',
      points: [
        'Objective Property Assessment & Valuation',
        'Listing Documentation & Title Preparation',
        'Professional Photography Direction',
        'Targeted Direct Network & Marketing Support',
        'Pre-Screened Buyer Coordination & Negotiation'
      ]
    },
    {
      number: '03',
      title: 'Property Investment',
      tagline: 'Capital growth and steady rental yield identification across Karachi sectors.',
      icon: Briefcase,
      description:
        'Explore authenticated real estate opportunities evaluated for micro-market demand dynamics, infrastructure progression, and realistic risk-adjusted returns.',
      points: [
        'Rigorous Investment Screening & Cash Flow Modeling',
        'Corridor & Micro-Location Analysis (DHA, Clifton, Gulshan, Scheme 33)',
        'Off-Market Property Comparison',
        'Opportunity Review & Exit Strategy Planning',
        'Multi-Year Portfolio Investment Roadmapping'
      ]
    },
    {
      number: '04',
      title: 'Commercial Real Estate',
      tagline: 'Specialized enterprise corporate spaces, high-street retail, and freehold buildings.',
      icon: Building2,
      description:
        'Helping corporations, medical practices, retail brands, and family offices identify high-utility corporate headquarters, commercial floors, and revenue-generating retail outlets.',
      points: [
        'High-Street Retail Units & Showroom Locations',
        'Corporate Grade-A Office Spaces (PECHS, Shahrah-e-Faisal, Clifton)',
        'Full Commercial Buildings & Mixed-Use Parcels',
        'Institutional Investment Properties',
        'Strategic Business Expansion Locations'
      ]
    },
    {
      number: '05',
      title: 'Property Management',
      tagline: 'Comprehensive asset stewardship for resident and overseas Pakistani landlords.',
      icon: KeyRound,
      description:
        'Practical, hands-on management for owners seeking seamless oversight of residential villas, multi-tenant apartment blocks, and commercial retail units across Karachi.',
      points: [
        'Tenant Sourcing, Vetting & Lease Coordination',
        'Routine Property Monitoring & Structural Inspection',
        'Direct Transparent Owner Financial Reporting',
        'Rapid Maintenance Coordination & Vendor Management',
        'Timely Rental Collection & Contract Renewals'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#FCFCFA]">
      {/* Hero */}
      <section className="bg-[#FAF8F5] border-b border-[#EAE5DC] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
                Comprehensive Practice
              </span>
              <span className="h-[1px] w-8 bg-[#C5A059]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-heading text-[#191B1F] tracking-tight leading-[1.12]">
              Real Estate Services That Move With You.
            </h1>

            <p className="text-base sm:text-lg text-[#555C68] mt-6 leading-relaxed font-light">
              Structured advisory, acquisitions, and asset stewardship tailored specifically to the nuances of the Karachi property market.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Premium Service Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.number}
                className="bg-white border border-[#E9E4DC] p-8 sm:p-12 rounded-[2px] transition-all hover:border-[#C5A059] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Number + Title */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#9C772F] tracking-wider px-2 py-0.5 bg-[#FAF5EB] rounded-[1px]">
                        {svc.number}
                      </span>
                      <Icon className="w-5 h-5 text-[#9C772F]" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#191B1F] tracking-tight">
                      {svc.title}
                    </h2>

                    <p className="text-sm font-serif italic text-[#727988]">
                      "{svc.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm text-[#525866] leading-relaxed pt-2">
                      {svc.description}
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => onNavigate('booking')}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#191B1F] hover:text-[#9C772F] pb-1 border-b border-[#191B1F] hover:border-[#9C772F] transition-colors"
                      >
                        <span>Request Service Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Key Components List */}
                  <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#EAE5DC] p-6 sm:p-8 rounded-[2px]">
                    <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#191B1F] mb-5 font-sans-ui">
                      Service Scope & Deliverables
                    </h3>

                    <div className="space-y-3.5">
                      {svc.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#353A44]">
                          <CheckCircle2 className="w-4 h-4 text-[#9C772F] shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Service Advisory CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-[#191B1F] text-white p-8 sm:p-12 rounded-[2px] text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading">
            Need a Bespoke Real Estate Strategy?
          </h2>
          <p className="text-xs sm:text-sm text-white/75 max-w-xl mx-auto leading-relaxed font-light">
            Whether evaluating a commercial building purchase or structuring an overseas portfolio, speak directly with our senior Karachi consultants.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-[#C5A059] hover:bg-[#D4B36D] text-[#141517] text-xs uppercase tracking-wider font-bold rounded-[2px] transition-all"
            >
              Contact Advisory Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
