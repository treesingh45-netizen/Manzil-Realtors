import React, { useState, useMemo } from 'react';
import { PageId } from '../components/Navbar';
import { PropertyCard } from '../components/PropertyCard';
import { PROPERTIES, BUDGET_RANGES, KARACHI_LOCATIONS_LIST, PROPERTY_TYPES_LIST } from '../data/properties';
import { PropertyPurpose, PropertyType, KarachiLocation, Property } from '../types/property';
import { FilterState } from '../components/PropertySearchFilter';
import { SlidersHorizontal, RotateCcw, Search, Grid3X3, ArrowUpDown } from 'lucide-react';

interface PropertiesPageProps {
  onNavigate: (page: PageId, extraParams?: { propertyId?: string }) => void;
  activeFilters: FilterState;
  onUpdateFilters: (filters: FilterState) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  onNavigate,
  activeFilters,
  onUpdateFilters
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  // Apply full filtering logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((item: Property) => {
      // 1. Purpose
      if (activeFilters.purpose !== 'All' && item.purpose !== activeFilters.purpose) {
        return false;
      }

      // 2. Type
      if (activeFilters.type !== 'All' && item.type !== activeFilters.type) {
        return false;
      }

      // 3. Location
      if (activeFilters.location !== 'All' && item.locationArea !== activeFilters.location) {
        return false;
      }

      // 4. Budget
      const budgetDef = BUDGET_RANGES[activeFilters.budgetIndex || 0];
      if (budgetDef) {
        if (item.priceNumeric < budgetDef.min || item.priceNumeric > budgetDef.max) {
          return false;
        }
      }

      // 5. Bedrooms
      if (activeFilters.bedrooms && activeFilters.bedrooms !== 'All') {
        if (!item.bedrooms || item.bedrooms < activeFilters.bedrooms) {
          return false;
        }
      }

      // 6. Free text search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLoc = item.location.toLowerCase().includes(query);
        const matchesId = item.id.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLoc && !matchesId && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (activeFilters.sortBy === 'price-asc') {
        return a.priceNumeric - b.priceNumeric;
      }
      if (activeFilters.sortBy === 'price-desc') {
        return b.priceNumeric - a.priceNumeric;
      }
      return 0; // default newest
    });
  }, [activeFilters, searchTerm]);

  const displayedProperties = filteredProperties.slice(0, visibleCount);

  const handleResetFilters = () => {
    setSearchTerm('');
    onUpdateFilters({
      purpose: 'All',
      type: 'All',
      location: 'All',
      budgetIndex: 0,
      bedrooms: 'All',
      sortBy: 'newest'
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FCFCFA]">
      {/* Hero Header */}
      <div className="bg-[#FAF8F5] border-b border-[#EAE5DC] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
                Marketplace Inventory
              </span>
              <span className="h-[1px] w-6 bg-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif-heading text-[#191B1F] tracking-tight">
              Properties
            </h1>
            <p className="text-sm sm:text-base text-[#555C68] mt-3 leading-relaxed">
              Explore residential, commercial, and investment opportunities across Karachi.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Advanced Filter Bar */}
        <div className="bg-white border border-[#E9E4DC] rounded-[2px] p-6 mb-10 shadow-sm">
          {/* Top row: search + quick purpose */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#F0ECE4]">
            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C93A0]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, sector, ID (e.g. Gulshan, MRB-001)..."
                className="w-full h-10 pl-10 pr-4 text-xs bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] focus:outline-none focus:border-[#C5A059] focus:bg-white text-[#191B1F]"
              />
            </div>

            {/* Purpose tabs */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs uppercase tracking-wider text-[#79808E] font-medium mr-2">
                Purpose:
              </span>
              {(['All', 'Buy', 'Rent', 'Invest'] as const).map((p) => {
                const isActive = activeFilters.purpose === p;
                return (
                  <button
                    key={p}
                    onClick={() =>
                      onUpdateFilters({
                        ...activeFilters,
                        purpose: p
                      })
                    }
                    className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-colors ${
                      isActive
                        ? 'bg-[#191B1F] text-[#E6D2A8]'
                        : 'bg-[#F6F4EF] text-[#555B66] hover:text-[#191B1F]'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom row: multi-dropdown controls */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-5">
            {/* Property Type */}
            <div>
              <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#6E7582] mb-1.5">
                Type
              </label>
              <select
                value={activeFilters.type}
                onChange={(e) =>
                  onUpdateFilters({
                    ...activeFilters,
                    type: e.target.value as any
                  })
                }
                className="w-full h-10 px-2.5 text-xs bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="All">All Types</option>
                {PROPERTY_TYPES_LIST.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#6E7582] mb-1.5">
                Location
              </label>
              <select
                value={activeFilters.location}
                onChange={(e) =>
                  onUpdateFilters({
                    ...activeFilters,
                    location: e.target.value as any
                  })
                }
                className="w-full h-10 px-2.5 text-xs bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="All">All Karachi Areas</option>
                {KARACHI_LOCATIONS_LIST.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
                <option value="Other Karachi Areas">Other Karachi Areas</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#6E7582] mb-1.5">
                Price Range
              </label>
              <select
                value={activeFilters.budgetIndex}
                onChange={(e) =>
                  onUpdateFilters({
                    ...activeFilters,
                    budgetIndex: Number(e.target.value)
                  })
                }
                className="w-full h-10 px-2.5 text-xs bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
              >
                {BUDGET_RANGES.map((b, idx) => (
                  <option key={idx} value={idx}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#6E7582] mb-1.5">
                Bedrooms
              </label>
              <select
                value={activeFilters.bedrooms || 'All'}
                onChange={(e) =>
                  onUpdateFilters({
                    ...activeFilters,
                    bedrooms: e.target.value === 'All' ? 'All' : Number(e.target.value)
                  })
                }
                className="w-full h-10 px-2.5 text-xs bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="All">Any Bedrooms</option>
                <option value={3}>3+ Bedrooms</option>
                <option value={4}>4+ Bedrooms</option>
                <option value={5}>5+ Bedrooms</option>
              </select>
            </div>

            {/* Sort by */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-[10.5px] uppercase tracking-wider font-semibold text-[#6E7582] mb-1.5">
                Sort By
              </label>
              <select
                value={activeFilters.sortBy}
                onChange={(e) =>
                  onUpdateFilters({
                    ...activeFilters,
                    sortBy: e.target.value as any
                  })
                }
                className="w-full h-10 px-2.5 text-xs bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
              >
                <option value="newest">Featured / Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Status summary & reset */}
          <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#F0ECE4] text-xs text-[#717885]">
            <div>
              Showing <span className="font-semibold text-[#191B1F] tabular-nums">{filteredProperties.length}</span> verified demo properties
            </div>
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1.5 text-[#8A6B29] hover:text-[#191B1F] transition-colors focus:outline-none"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white border border-[#E8E2D7] p-12 text-center rounded-[2px] my-12">
            <h3 className="text-xl font-bold font-serif-heading text-[#191B1F]">
              No Properties Match Your Selected Criteria
            </h3>
            <p className="text-sm text-[#676E7C] mt-2 max-w-md mx-auto">
              Try adjusting your price range, location, or property type filters to explore other Karachi listings.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 px-6 py-2.5 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onSelect={(id) => onNavigate('property-detail', { propertyId: id })}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProperties.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-9 py-3.5 bg-white border border-[#191B1F] hover:bg-[#191B1F] hover:text-white text-[#191B1F] text-xs uppercase tracking-[0.18em] font-semibold rounded-[2px] transition-all shadow-sm"
            >
              Load More Properties ({filteredProperties.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
