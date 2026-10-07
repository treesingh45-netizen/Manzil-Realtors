import React, { useState } from 'react';
import { PropertyPurpose, PropertyType, KarachiLocation } from '../types/property';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

export interface FilterState {
  purpose: PropertyPurpose | 'All';
  type: PropertyType | 'All';
  location: KarachiLocation | 'All';
  budgetIndex: number; // index into BUDGET_RANGES
  bedrooms?: number | 'All';
  sortBy: 'newest' | 'price-asc' | 'price-desc';
}

interface PropertySearchFilterProps {
  initialFilters?: Partial<FilterState>;
  onSearch: (filters: FilterState) => void;
  compact?: boolean;
}

export const PropertySearchFilter: React.FC<PropertySearchFilterProps> = ({
  initialFilters,
  onSearch,
  compact = false
}) => {
  const [purpose, setPurpose] = useState<PropertyPurpose | 'All'>(
    initialFilters?.purpose || 'Buy'
  );
  const [type, setType] = useState<PropertyType | 'All'>(
    initialFilters?.type || 'All'
  );
  const [location, setLocation] = useState<KarachiLocation | 'All'>(
    initialFilters?.location || 'All'
  );
  const [budgetIndex, setBudgetIndex] = useState<number>(
    initialFilters?.budgetIndex ?? 0
  );
  const [bedrooms, setBedrooms] = useState<number | 'All'>(
    initialFilters?.bedrooms ?? 'All'
  );
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>(
    initialFilters?.sortBy || 'newest'
  );

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onSearch({
      purpose,
      type,
      location,
      budgetIndex,
      bedrooms,
      sortBy
    });
  };

  const handleReset = () => {
    setPurpose('All');
    setType('All');
    setLocation('All');
    setBudgetIndex(0);
    setBedrooms('All');
    setSortBy('newest');
    onSearch({
      purpose: 'All',
      type: 'All',
      location: 'All',
      budgetIndex: 0,
      bedrooms: 'All',
      sortBy: 'newest'
    });
  };

  return (
    <div className="bg-white border border-[#E9E4DB] rounded-[2px] p-6 sm:p-8 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)]">
      {/* Purpose Tabs (Buy / Rent / Invest) */}
      <div className="flex items-center gap-2 mb-6 border-b border-[#F0ECE4] pb-4">
        <span className="text-xs uppercase tracking-wider text-[#79808E] font-medium mr-2">
          Looking For:
        </span>
        {(['All', 'Buy', 'Rent', 'Invest'] as const).map((p) => {
          const isActive = purpose === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => {
                setPurpose(p);
              }}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors rounded-[2px] focus:outline-none ${
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Property Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-2 font-sans-ui">
              Property Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as PropertyType | 'All')}
              className="w-full h-11 px-3 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
            >
              <option value="All">All Types</option>
              <option value="House">House / Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Office">Commercial Office</option>
              <option value="Shop">Commercial Shop</option>
              <option value="Plot">Residential Plot</option>
              <option value="Commercial Building">Commercial Building</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-2 font-sans-ui">
              Karachi Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value as KarachiLocation | 'All')}
              className="w-full h-11 px-3 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
            >
              <option value="All">All Karachi Areas</option>
              <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
              <option value="DHA Karachi">DHA Karachi</option>
              <option value="Clifton">Clifton</option>
              <option value="Gulistan-e-Jauhar">Gulistan-e-Jauhar</option>
              <option value="PECHS">PECHS</option>
              <option value="North Nazimabad">North Nazimabad</option>
              <option value="Bahria Town Karachi">Bahria Town Karachi</option>
              <option value="Scheme 33">Scheme 33</option>
              <option value="Other Karachi Areas">Other Karachi Areas</option>
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-2 font-sans-ui">
              Budget Range
            </label>
            <select
              value={budgetIndex}
              onChange={(e) => setBudgetIndex(Number(e.target.value))}
              className="w-full h-11 px-3 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
            >
              <option value={0}>All Budgets</option>
              <option value={1}>Under PKR 10M</option>
              <option value={2}>PKR 10M–25M</option>
              <option value={3}>PKR 25M–50M</option>
              <option value={4}>PKR 50M+</option>
            </select>
          </div>

          {/* Bedrooms / Sort Filter */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-2 font-sans-ui">
              {compact ? 'Sort By' : 'Bedrooms'}
            </label>
            {compact ? (
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full h-11 px-3 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
              >
                <option value="newest">Newest Listed</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            ) : (
              <select
                value={bedrooms}
                onChange={(e) =>
                  setBedrooms(e.target.value === 'All' ? 'All' : Number(e.target.value))
                }
                className="w-full h-11 px-3 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors"
              >
                <option value="All">Any Bedrooms</option>
                <option value={3}>3+ Bedrooms</option>
                <option value={4}>4+ Bedrooms</option>
                <option value={5}>5+ Bedrooms</option>
              </select>
            )}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F2EEE7]">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-[#7B828F] hover:text-[#191B1F] flex items-center gap-1.5 transition-colors focus:outline-none"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 h-11 bg-[#191B1F] hover:bg-[#2E333D] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <Search className="w-4 h-4 text-[#C5A059]" />
              <span>Search Properties</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
