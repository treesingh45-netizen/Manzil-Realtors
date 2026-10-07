import React, { useState, useEffect } from 'react';
import { ManzilLogo } from './ManzilLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export type PageId = 
  | 'home' 
  | 'properties' 
  | 'property-detail' 
  | 'about' 
  | 'services' 
  | 'insights' 
  | 'booking' 
  | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, extraParams?: { propertyId?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Properties', page: 'properties' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Insights', page: 'insights' },
    { label: 'Book a Viewing', page: 'booking' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHeroOverlay = currentPage === 'home' && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroOverlay
          ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white border-b border-white/10'
          : 'bg-[#FCFCFA]/95 backdrop-blur-md text-[#191B1F] border-b border-[#E8E2D7] shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-sm"
          aria-label="Manzil Realtors & Builders - Home"
        >
          <ManzilLogo variant={isHeroOverlay ? 'dark' : 'light'} />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium tracking-wide">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative py-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A059] ${
                  isActive
                    ? isHeroOverlay
                      ? 'text-[#E6D2A8] font-semibold'
                      : 'text-[#9E7B34] font-semibold'
                    : isHeroOverlay
                    ? 'text-white/90 hover:text-white'
                    : 'text-[#3E434D] hover:text-[#191B1F]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isHeroOverlay ? 'bg-[#E6D2A8]' : 'bg-[#C5A059]'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('booking')}
            className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-all flex items-center gap-1.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
              isHeroOverlay
                ? 'bg-[#C5A059] hover:bg-[#D4B36D] text-[#141517] shadow-sm'
                : 'bg-[#191B1F] hover:bg-[#2C3038] text-white border border-[#191B1F]'
            }`}
          >
            <span>Book a Viewing</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
              isHeroOverlay ? 'text-white hover:bg-white/10' : 'text-[#191B1F] hover:bg-[#F2EFE9]'
            }`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Clean Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFCFA] border-b border-[#E8E2D7] px-6 py-6 text-[#191B1F] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left text-base py-2.5 px-3 rounded transition-colors ${
                    isActive
                      ? 'bg-[#F4EFE6] text-[#9E7B34] font-semibold'
                      : 'text-[#2C3038] hover:bg-[#F7F5F0]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#E8E2D7] mt-2">
              <button
                onClick={() => handleNavClick('booking')}
                className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold rounded-[2px] bg-[#191B1F] text-white flex items-center justify-center gap-2"
              >
                <span>Book a Viewing</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
