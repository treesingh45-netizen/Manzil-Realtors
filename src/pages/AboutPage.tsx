import React from 'react';
import { PageId } from '../components/Navbar';
import { ManzilLogo } from '../components/ManzilLogo';
import imgEditorial from '../assets/images/editorial_karachi_architecture_1791363836706.jpg';
import imgHero from '../assets/images/hero_karachi_residence_1791363799769.jpg';
import { Shield, Target, Compass, Users, MapPin, Phone, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#FCFCFA]">
      {/* Hero Header */}
      <section className="bg-[#FAF8F5] border-b border-[#EAE5DC] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
                About The Agency
              </span>
              <span className="h-[1px] w-8 bg-[#C5A059]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-heading text-[#191B1F] tracking-tight leading-[1.12]">
              A More Considered Approach to Real Estate.
            </h1>

            <p className="text-base sm:text-lg text-[#555C68] mt-6 leading-relaxed font-light">
              Manzil Realtors & Builders is a Karachi-based real estate agency focused on helping clients navigate property buying, selling, and investment with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Split: Our Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[2px] overflow-hidden border border-[#E2DBD0] shadow-md bg-white">
              <img
                src={imgEditorial}
                alt="Karachi architectural craft"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#191B1F] text-white p-5 rounded-[2px] shadow-lg max-w-xs hidden sm:block">
              <div className="text-[10px] uppercase tracking-widest text-[#E6D2A8] font-semibold">
                Guiding Principle
              </div>
              <div className="text-sm font-serif italic mt-1 text-white/90">
                "Clarity over promotion. Grounded counsel over speculative hype."
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C772F] font-sans-ui">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#191B1F] tracking-tight">
              Property Decisions Shape Futures.
            </h2>
            <div className="space-y-4 text-base text-[#525866] leading-relaxed font-light">
              <p>
                Property decisions are rarely just financial decisions. They shape where people live, work, invest, and build their future.
              </p>
              <p>
                Our approach is therefore straightforward: understand the client's objective, identify suitable opportunities, present information clearly, and support the client throughout the process.
              </p>
              <p>
                We maintain an unyielding commitment to factual verification. Every property we showcase is evaluated for zoning legality, title clarity, neighborhood utilities, and true market price alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For (4 Premium Sections) */}
      <section className="bg-[#FAF9F6] border-y border-[#EDE7DC] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
              Foundational Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#191B1F] tracking-tight mt-2">
              What We Stand For
            </h2>
            <p className="text-sm text-[#5C6370] mt-3">
              Four fundamental commitments that govern how Manzil operates across every Karachi transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Integrity */}
            <div className="bg-white border border-[#E8E2D7] p-8 rounded-[2px] space-y-4 hover:border-[#C5A059] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EC] text-[#9C772F] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-[#191B1F]">
                Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#555C68] leading-relaxed">
                Clear communication and responsible property guidance. We refuse to compromise transparency for short-term commissions.
              </p>
            </div>

            {/* 2. Market Understanding */}
            <div className="bg-white border border-[#E8E2D7] p-8 rounded-[2px] space-y-4 hover:border-[#C5A059] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EC] text-[#9C772F] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-[#191B1F]">
                Market Understanding
              </h3>
              <p className="text-xs sm:text-sm text-[#555C68] leading-relaxed">
                Local knowledge informed by Karachi's evolving property landscape, civic infrastructure shifts, and micro-sector yields.
              </p>
            </div>

            {/* 3. Client Focus */}
            <div className="bg-white border border-[#E8E2D7] p-8 rounded-[2px] space-y-4 hover:border-[#C5A059] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EC] text-[#9C772F] flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-[#191B1F]">
                Client Focus
              </h3>
              <p className="text-xs sm:text-sm text-[#555C68] leading-relaxed">
                Solutions built around each client's actual requirements, timeline, capital constraints, and intended usage profile.
              </p>
            </div>

            {/* 4. Long-Term Relationships */}
            <div className="bg-white border border-[#E8E2D7] p-8 rounded-[2px] space-y-4 hover:border-[#C5A059] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#FAF5EC] text-[#9C772F] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif-heading text-[#191B1F]">
                Long-Term Relationships
              </h3>
              <p className="text-xs sm:text-sm text-[#555C68] leading-relaxed">
                The goal is not just one transaction, but lasting trust and multi-generational real estate advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Elegant Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white border border-[#E8E2D7] p-8 sm:p-12 rounded-[2px] shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10 flex flex-col items-center">
            <div className="mb-3">
              <ManzilLogo variant="light" size="lg" showText={false} />
            </div>
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#9C772F] font-sans-ui">
              Official Agency Details
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#191B1F] tracking-tight mt-1">
              Company Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#F0ECE4] pt-8">
            <div className="space-y-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#79808E] font-medium">
                  Registered Agency
                </div>
                <div className="text-lg font-bold text-[#191B1F] font-serif-heading">
                  Manzil Realtors & Builders
                </div>
                <div className="text-xs text-[#5D6370] mt-0.5">
                  Business Type: Real Estate Agency & Consultancy
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#79808E] font-medium">
                  Karachi Headquarters
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#2C3038] mt-1">
                  <MapPin className="w-4 h-4 text-[#9C772F] shrink-0 mt-0.5" />
                  <span>
                    A-425, Block 1, Gulshan-e-Iqbal,
                    <br />
                    Karachi, Pakistan 75300
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#79808E] font-medium">
                  Direct Line
                </div>
                <div className="flex items-center gap-2.5 text-base font-bold text-[#191B1F] tabular-nums mt-1">
                  <Phone className="w-4 h-4 text-[#9C772F] shrink-0" />
                  <span>0306 3060592</span>
                </div>
                <div className="text-xs text-[#717885] mt-1">
                  Available for viewing scheduling & formal inquiries
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-2.5 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] hover:bg-[#323640] transition-colors"
                >
                  Contact Agency
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
