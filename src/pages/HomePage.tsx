import React from 'react';
import { PageId } from '../components/Navbar';
import { PropertyCard } from '../components/PropertyCard';
import { PropertySearchFilter, FilterState } from '../components/PropertySearchFilter';
import { PROPERTIES, KARACHI_LOCATIONS_LIST } from '../data/properties';
import imgHero from '../assets/images/hero_karachi_residence_1791363799769.jpg';
import imgEditorial from '../assets/images/editorial_karachi_architecture_1791363836706.jpg';
import { ArrowUpRight, Compass, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, extraParams?: { propertyId?: string; filterLocation?: string }) => void;
  onSearchSubmit: (filters: FilterState) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSearchSubmit }) => {
  // 6 Curated Featured Properties for the homepage
  const featuredProperties = PROPERTIES.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#101216] text-white overflow-hidden pt-20">
        {/* Background Image with Measured Editorial Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgHero}
            alt="Luxury Architecture Karachi"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-stage measured contrast scrim for WCAG AA compliance */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101216] via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#E6D2A8] font-sans-ui">
                REAL ESTATE · KARACHI
              </span>
              <span className="h-[1px] w-8 bg-[#C5A059]" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-heading leading-[1.12] mb-6 text-balance">
              Find a Property That Fits Your Future.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-light mb-10 max-w-2xl">
              Manzil Realtors & Builders helps buyers, investors, landlords, and businesses discover carefully selected real estate opportunities across Karachi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('properties')}
                className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#D6B56D] text-[#141517] text-xs uppercase tracking-[0.16em] font-bold rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('booking')}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs uppercase tracking-[0.16em] font-semibold rounded-[2px] transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <span>Book a Viewing</span>
                <ArrowUpRight className="w-4 h-4 text-[#E6D2A8]" />
              </button>
            </div>

            {/* Subtle Signature Touch */}
            <div className="pt-12 flex items-center gap-3 text-white/60">
              <span className="font-signature text-2xl text-[#E6D2A8]/90">
                Manzil
              </span>
              <span className="text-xs uppercase tracking-widest text-white/50">
                Bespoke Karachi Property Advisory
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROPERTY SEARCH SECTION */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-3 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C6D2B] bg-white px-3 py-1 border border-[#EBE5DB] rounded-[1px] shadow-sm">
            Find Your Next Property
          </span>
        </div>
        <PropertySearchFilter
          onSearch={(filters) => {
            onSearchSubmit(filters);
            onNavigate('properties');
          }}
        />
      </section>

      {/* 3. SELECTED PROPERTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#F0ECE4]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] mb-2 font-sans-ui">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#191B1F] font-serif-heading tracking-tight">
              Selected Properties
            </h2>
            <p className="text-sm text-[#5C6370] mt-2 max-w-xl">
              A curated selection of residential and commercial opportunities for buyers and investors.
            </p>
          </div>

          <button
            onClick={() => onNavigate('properties')}
            className="group flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-bold text-[#191B1F] hover:text-[#9C772F] transition-colors pb-1 border-b border-[#191B1F] hover:border-[#9C772F] self-start md:self-auto"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 6 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onSelect={(id) => onNavigate('property-detail', { propertyId: id })}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('properties')}
            className="px-9 py-3.5 bg-[#191B1F] hover:bg-[#2C313C] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-[2px] transition-all shadow-sm"
          >
            View All Properties
          </button>
        </div>
      </section>

      {/* 4. WHY MANZIL (Editorial Split Section) */}
      <section className="bg-[#F8F6F1] py-20 sm:py-28 border-y border-[#EDE7DC] my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Large image of a premium Karachi property */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-[2px] overflow-hidden shadow-lg border border-[#E2DBD0] bg-white">
                <img
                  src={imgEditorial}
                  alt="Architectural detailing Karachi villa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#E2DBD0] p-4 rounded-[2px] shadow-md hidden sm:block max-w-[200px]">
                <div className="text-[10px] uppercase tracking-wider text-[#9C772F] font-semibold">
                  Location Focus
                </div>
                <div className="text-xs font-serif font-bold text-[#191B1F] mt-0.5">
                  Gulshan · DHA · Clifton
                </div>
              </div>
            </div>

            {/* Right side: Editorial text & 3 minimalist points */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
                  The Agency Perspective
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#191B1F] font-serif-heading tracking-tight mt-2 text-balance">
                  Real Estate Decisions Deserve Better Guidance.
                </h2>
                <p className="text-sm sm:text-base text-[#525866] leading-relaxed mt-4">
                  From first-time buyers to experienced investors, Manzil Realtors & Builders focuses on making every property decision clearer, more informed, and more efficient.
                </p>
              </div>

              {/* 3 Minimalist Points */}
              <div className="space-y-6 pt-2">
                <div className="border-l-2 border-[#C5A059] pl-5">
                  <h3 className="text-base font-bold text-[#191B1F] font-serif-heading">
                    Local Market Knowledge
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6370] leading-relaxed mt-1">
                    Understanding Karachi's neighborhoods, property trends, zoning nuances, and true long-term value opportunities.
                  </p>
                </div>

                <div className="border-l-2 border-[#C5A059] pl-5">
                  <h3 className="text-base font-bold text-[#191B1F] font-serif-heading">
                    Carefully Selected Opportunities
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6370] leading-relaxed mt-1">
                    Presenting verified properties with clear information, title transparency, and practical investment considerations.
                  </p>
                </div>

                <div className="border-l-2 border-[#C5A059] pl-5">
                  <h3 className="text-base font-bold text-[#191B1F] font-serif-heading">
                    Personalized Guidance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D6370] leading-relaxed mt-1">
                    Helping clients move from initial property discovery to scheduled viewing and decision-making with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] mb-2 font-sans-ui">
            Our Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#191B1F] font-serif-heading tracking-tight">
            Property Services, Built Around Your Goals
          </h2>
          <p className="text-sm text-[#5D6370] mt-3">
            Structured advisory and management services designed for Karachi homeowners, investors, and commercial enterprises.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#E9E4DC] p-8 rounded-[2px] hover:border-[#C5A059] transition-all flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-[#9C772F] mb-4">01</div>
              <h3 className="text-xl font-bold text-[#191B1F] font-serif-heading mb-3">
                Property Buying
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Find residential and commercial properties aligned with your requirements, lifestyle, and financial budget.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#191B1F] hover:text-[#9C772F] transition-colors"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white border border-[#E9E4DC] p-8 rounded-[2px] hover:border-[#C5A059] transition-all flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-[#9C772F] mb-4">02</div>
              <h3 className="text-xl font-bold text-[#191B1F] font-serif-heading mb-3">
                Property Selling
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Present your property professionally to qualified prospects and connect with serious, vetted buyers.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#191B1F] hover:text-[#9C772F] transition-colors"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white border border-[#E9E4DC] p-8 rounded-[2px] hover:border-[#C5A059] transition-all flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-[#9C772F] mb-4">03</div>
              <h3 className="text-xl font-bold text-[#191B1F] font-serif-heading mb-3">
                Investment Advisory
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Identify high-growth opportunities based on micro-location demand, asset type, and calculated rental yields.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#191B1F] hover:text-[#9C772F] transition-colors"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white border border-[#E9E4DC] p-8 rounded-[2px] hover:border-[#C5A059] transition-all flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-[#9C772F] mb-4">04</div>
              <h3 className="text-xl font-bold text-[#191B1F] font-serif-heading mb-3">
                Property Management
              </h3>
              <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed">
                Practical, dependable day-to-day support for owners managing residential or commercial Karachi real estate assets.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#191B1F] hover:text-[#9C772F] transition-colors"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('services')}
            className="px-8 py-3.5 border border-[#191B1F] hover:bg-[#191B1F] hover:text-white text-[#191B1F] text-xs uppercase tracking-[0.16em] font-semibold rounded-[2px] transition-all"
          >
            Explore Our Services
          </button>
        </div>
      </section>

      {/* 6. KARACHI LOCATIONS */}
      <section className="bg-white py-20 border-t border-[#EDE7DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] mb-2 font-sans-ui">
              Geographic Focus
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#191B1F] font-serif-heading tracking-tight">
              Explore Karachi's Key Property Markets
            </h2>
            <p className="text-sm text-[#5D6370] mt-2 max-w-xl">
              Tap any sector to view curated residential and commercial listings within that locality.
            </p>
          </div>

          {/* Editorial Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {KARACHI_LOCATIONS_LIST.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  onNavigate('properties', { filterLocation: loc });
                }}
                className="group p-5 bg-[#FAF9F6] border border-[#EAE5DC] rounded-[2px] text-left hover:border-[#C5A059] hover:bg-white transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#9C772F] font-semibold">
                    Karachi
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A0A7B5] group-hover:text-[#9C772F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="text-sm font-semibold text-[#191B1F] group-hover:text-[#9C772F] transition-colors font-serif-heading">
                  {loc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DARK PREMIUM CTA */}
      <section className="bg-[#14161A] text-white py-24 border-t border-[#252830]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#E6D2A8] font-sans-ui">
            <span>Private Consultations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading tracking-tight text-white leading-tight">
            Looking for the Right Property?
          </h2>

          <p className="text-sm sm:text-base text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            Tell us what you are looking for and our team will help you identify suitable residential or commercial opportunities.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('booking')}
              className="px-9 py-4 bg-[#C5A059] hover:bg-[#D4B36D] text-[#141517] text-xs uppercase tracking-[0.18em] font-bold rounded-[2px] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Book a Private Viewing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-9 py-4 border border-white/20 hover:bg-white/10 text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-[2px] transition-all"
            >
              <span>Contact Our Agency</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
