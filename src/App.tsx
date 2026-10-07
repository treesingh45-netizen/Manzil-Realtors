/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { ContactInsightsPage } from './pages/ContactInsightsPage';
import { LegalModal } from './components/LegalModal';
import { FilterState } from './components/PropertySearchFilter';
import { PROPERTIES } from './data/properties';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>('MRB-001');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Global Filter state for Properties marketplace
  const [filters, setFilters] = useState<FilterState>({
    purpose: 'All',
    type: 'All',
    location: 'All',
    budgetIndex: 0,
    bedrooms: 'All',
    sortBy: 'newest'
  });

  // Navigation handler
  const handleNavigate = (
    page: PageId,
    extraParams?: { propertyId?: string; filterLocation?: string }
  ) => {
    if (extraParams?.propertyId) {
      setSelectedPropertyId(extraParams.propertyId);
    }

    if (extraParams?.filterLocation) {
      setFilters((prev) => ({
        ...prev,
        location: extraParams.filterLocation as any
      }));
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage('properties');
  };

  // Find currently selected property or default to first
  const currentProperty =
    PROPERTIES.find((p) => p.id === selectedPropertyId) || PROPERTIES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFA] text-[#191B1F]">
      {/* Top Bar Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSearchSubmit={handleSearchSubmit}
          />
        )}

        {currentPage === 'properties' && (
          <PropertiesPage
            onNavigate={handleNavigate}
            activeFilters={filters}
            onUpdateFilters={setFilters}
          />
        )}

        {currentPage === 'property-detail' && (
          <PropertyDetailPage
            property={currentProperty}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'insights' && (
          <ContactInsightsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'booking' && (
          <BookingPage
            onNavigate={handleNavigate}
            preselectedPropertyId={selectedPropertyId}
          />
        )}

        {currentPage === 'contact' && (
          <ContactInsightsPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Sticky Mobile "Book a Viewing" action bar (under 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8E2D7] p-3 flex items-center justify-between shadow-lg">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-[#9C772F] font-semibold">
            Manzil Realtors
          </div>
          <div className="text-xs font-bold text-[#191B1F]">
            Gulshan-e-Iqbal, Karachi
          </div>
        </div>
        <button
          onClick={() => handleNavigate('booking')}
          className="px-5 py-2.5 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] shadow-sm"
        >
          Book a Viewing
        </button>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Legal Notice Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
