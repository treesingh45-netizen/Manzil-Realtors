import React from 'react';
import { ManzilLogo } from './ManzilLogo';
import { PageId } from './Navbar';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, extraParams?: { filterLocation?: string }) => void;
  onOpenLegalModal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal }) => {
  const handleNav = (page: PageId, filterLocation?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate(page, filterLocation ? { filterLocation } : undefined);
  };

  return (
    <footer className="bg-[#121316] text-[#A6ADB9] border-t border-[#23272F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#23272F]">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-5">
            <ManzilLogo variant="dark" size="md" />
            <p className="text-sm text-[#949CA9] leading-relaxed max-w-sm pt-2">
              Property decisions, handled with clarity. Premium Karachi real estate consultancy serving buyers, private investors, and businesses.
            </p>
            <div className="pt-2 text-xs text-[#C5A059] tracking-wider uppercase font-medium">
              Karachi, Pakistan · Est. Consultancy
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 font-sans-ui">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#E6D2A8] transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('properties')}
                  className="hover:text-[#E6D2A8] transition-colors focus:outline-none"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#E6D2A8] transition-colors focus:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#E6D2A8] transition-colors focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('insights')}
                  className="hover:text-[#E6D2A8] transition-colors focus:outline-none"
                >
                  Market Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('booking')}
                  className="hover:text-[#E6D2A8] transition-colors focus:outline-none text-[#C5A059]"
                >
                  Book a Viewing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 font-sans-ui">
              Key Locations
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Gulshan-e-Iqbal',
                'DHA Karachi',
                'Clifton',
                'Gulistan-e-Jauhar',
                'PECHS',
                'North Nazimabad'
              ].map((loc) => (
                <li key={loc}>
                  <button
                    onClick={() => handleNav('properties', loc)}
                    className="hover:text-[#E6D2A8] transition-colors flex items-center justify-between w-full text-left group"
                  >
                    <span>{loc}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5 font-sans-ui">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-[#A6ADB9]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  A-425, Block 1, Gulshan-e-Iqbal
                  <br />
                  Karachi, Pakistan 75300
                </span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="tabular-nums font-medium text-white tracking-wider">
                  0306 3060592
                </span>
              </div>
              <div className="pt-2 text-xs text-[#7B8392]">
                Consultations arranged by private appointment or registered request.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#717885] gap-4">
          <p>© 2026 Manzil Realtors & Builders. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegalModal && onOpenLegalModal('privacy')}
              className="hover:text-[#D1C4A5] transition-colors focus:outline-none"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-[#323640]">·</span>
            <button
              onClick={() => onOpenLegalModal && onOpenLegalModal('terms')}
              className="hover:text-[#D1C4A5] transition-colors focus:outline-none"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
