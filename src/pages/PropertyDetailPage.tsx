import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { Property } from '../types/property';
import { FullscreenGallery } from '../components/FullscreenGallery';
import { 
  ArrowLeft, 
  MapPin, 
  Maximize2, 
  Bed, 
  Bath, 
  Car, 
  Home, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  GraduationCap, 
  Building2, 
  ShoppingBag, 
  UtensilsCrossed, 
  CarFront, 
  Bus 
} from 'lucide-react';

interface PropertyDetailPageProps {
  property: Property;
  onNavigate: (page: PageId, extraParams?: { propertyId?: string }) => void;
  onOpenInquiryModal?: (property: Property) => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  property,
  onNavigate,
  onOpenInquiryModal
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');

  const images = property.galleryImages && property.galleryImages.length > 0 
    ? property.galleryImages 
    : [property.mainImage];

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#FCFCFA]">
      {/* Breadcrumb & Back bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => onNavigate('properties')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#636A78] hover:text-[#191B1F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Properties</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        {/* Header Title & Price Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#EAE5DC]">
          <div>
            <div className="flex items-center gap-3 text-xs mb-2">
              <span className="font-mono text-[#9C772F] font-semibold tracking-wider">
                Property ID: {property.id}
              </span>
              <span aria-hidden="true" className="text-[#C8C2B5]">·</span>
              <span className="text-[#656C7A] uppercase tracking-wider font-medium">
                {property.type}
              </span>
              <span aria-hidden="true" className="text-[#C8C2B5]">·</span>
              <span className="text-[#191B1F] bg-[#F2EDE2] px-2 py-0.5 rounded-[1px] font-semibold">
                {property.availability}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading text-[#191B1F] tracking-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#5D6370] mt-3">
              <MapPin className="w-4 h-4 text-[#9C772F] shrink-0" />
              <span>{property.location}</span>
            </div>
          </div>

          <div className="lg:text-right">
            <div className="text-xs uppercase tracking-wider text-[#79808E] font-medium">
              Price
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-[#191B1F] tabular-nums tracking-tight font-serif-heading mt-0.5">
              {property.price}
            </div>
          </div>
        </div>

        {/* IMAGE GALLERY SECTION */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Main Primary Large Image */}
            <div className="lg:col-span-9 relative aspect-[16/10] bg-[#F0EEEA] rounded-[2px] overflow-hidden group">
              <img
                src={images[activeImageIndex]}
                alt={`${property.title} - Main View`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Fullscreen Trigger */}
              <button
                onClick={() => setFullscreenOpen(true)}
                className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/90 text-white text-xs px-3.5 py-2 rounded-[2px] flex items-center gap-2 backdrop-blur-sm transition-colors"
                aria-label="View Fullscreen Gallery"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fullscreen Gallery</span>
              </button>
            </div>

            {/* Side 4 Thumbnails */}
            <div className="lg:col-span-3 grid grid-cols-4 lg:grid-cols-1 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/10] rounded-[2px] overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#C5A059] opacity-100 shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2-COLUMN MAIN CONTENT & STICKY BOOKING PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          {/* LEFT 8 COLUMNS: Overview, Description, Features, Location Vicinity */}
          <div className="lg:col-span-8 space-y-12">
            {/* Property Overview Grid */}
            <div className="bg-white border border-[#E9E4DC] p-6 sm:p-8 rounded-[2px]">
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C772F] mb-6 font-sans-ui">
                Property Overview
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs text-[#7B828F] uppercase tracking-wider mb-1">
                    Area
                  </div>
                  <div className="text-base font-bold text-[#191B1F]">
                    {property.area}
                  </div>
                </div>

                {property.bedrooms !== undefined && (
                  <div>
                    <div className="text-xs text-[#7B828F] uppercase tracking-wider mb-1">
                      Bedrooms
                    </div>
                    <div className="text-base font-bold text-[#191B1F]">
                      {property.bedrooms} Bedrooms
                    </div>
                  </div>
                )}

                {property.bathrooms !== undefined && (
                  <div>
                    <div className="text-xs text-[#7B828F] uppercase tracking-wider mb-1">
                      Bathrooms
                    </div>
                    <div className="text-base font-bold text-[#191B1F]">
                      {property.bathrooms} Bathrooms
                    </div>
                  </div>
                )}

                {property.parkingSpaces !== undefined && (
                  <div>
                    <div className="text-xs text-[#7B828F] uppercase tracking-wider mb-1">
                      Parking
                    </div>
                    <div className="text-base font-bold text-[#191B1F]">
                      {property.parkingSpaces} Parking Spaces
                    </div>
                  </div>
                )}

                <div>
                  <div className="text-xs text-[#7B828F] uppercase tracking-wider mb-1">
                    Category
                  </div>
                  <div className="text-base font-bold text-[#191B1F]">
                    {property.type}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-[#7B828F] uppercase tracking-wider mb-1">
                    Status
                  </div>
                  <div className="text-base font-bold text-[#191B1F]">
                    {property.status}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold font-serif-heading text-[#191B1F] mb-4">
                Description
              </h2>
              <p className="text-base text-[#4F5561] leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold font-serif-heading text-[#191B1F] mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.features.map((feat, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 bg-white border border-[#EBE6DD] rounded-[2px]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#9C772F] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#353A44] font-medium leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Vicinity Guide */}
            <div className="pt-4 border-t border-[#EAE5DC]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-serif-heading text-[#191B1F]">
                    Location & Neighborhood
                  </h2>
                  <p className="text-xs text-[#6F7684] mt-1">
                    {property.location}
                  </p>
                </div>
              </div>

              {/* Clean Map Area Container */}
              <div className="relative aspect-[16/8] bg-[#EFECE6] border border-[#E5E0D5] rounded-[2px] overflow-hidden mb-8 flex items-center justify-center">
                <div className="text-center p-6 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 text-[#9C772F] flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-[#191B1F] font-serif-heading">
                    {property.location}
                  </div>
                  <div className="text-xs text-[#6B7280]">
                    Verified Geographic Sector · Karachi, Pakistan
                  </div>
                </div>
              </div>

              {/* Nearby Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-[#E9E4DC] rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#191B1F] mb-1.5 font-sans-ui">
                    <GraduationCap className="w-4 h-4 text-[#9C772F]" />
                    <span>Schools & Universities</span>
                  </div>
                  <p className="text-xs text-[#555C68] leading-relaxed">
                    {property.nearby.schools}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#E9E4DC] rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#191B1F] mb-1.5 font-sans-ui">
                    <Building2 className="w-4 h-4 text-[#9C772F]" />
                    <span>Hospitals & Healthcare</span>
                  </div>
                  <p className="text-xs text-[#555C68] leading-relaxed">
                    {property.nearby.hospitals}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#E9E4DC] rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#191B1F] mb-1.5 font-sans-ui">
                    <ShoppingBag className="w-4 h-4 text-[#9C772F]" />
                    <span>Shopping & Markets</span>
                  </div>
                  <p className="text-xs text-[#555C68] leading-relaxed">
                    {property.nearby.shopping}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#E9E4DC] rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#191B1F] mb-1.5 font-sans-ui">
                    <UtensilsCrossed className="w-4 h-4 text-[#9C772F]" />
                    <span>Dining & Restaurants</span>
                  </div>
                  <p className="text-xs text-[#555C68] leading-relaxed">
                    {property.nearby.restaurants}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#E9E4DC] rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#191B1F] mb-1.5 font-sans-ui">
                    <CarFront className="w-4 h-4 text-[#9C772F]" />
                    <span>Arterial Roads</span>
                  </div>
                  <p className="text-xs text-[#555C68] leading-relaxed">
                    {property.nearby.mainRoads}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#E9E4DC] rounded-[2px]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#191B1F] mb-1.5 font-sans-ui">
                    <Bus className="w-4 h-4 text-[#9C772F]" />
                    <span>Public Transit Links</span>
                  </div>
                  <p className="text-xs text-[#555C68] leading-relaxed">
                    {property.nearby.publicTransport}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: Sticky Side Booking & Inquiry Panel */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-[#E6E0D4] p-6 sm:p-8 rounded-[2px] shadow-sm space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9C772F] block mb-1">
                  Private Arrangement
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-[#191B1F]">
                  Interested in this property?
                </h3>
                <p className="text-xs sm:text-sm text-[#555C68] leading-relaxed mt-2">
                  Request a private viewing and receive comprehensive property documentation.
                </p>
              </div>

              {/* Main Booking Action */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onNavigate('booking', { propertyId: property.id })}
                  className="w-full py-3.5 bg-[#191B1F] hover:bg-[#2F343F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Book a Viewing</span>
                </button>

                {/* Secondary In-Page Inquiry */}
                {!inquirySent ? (
                  <form onSubmit={handleQuickInquiry} className="space-y-3 pt-4 border-t border-[#F0ECE4]">
                    <div className="text-xs font-semibold text-[#191B1F]">
                      Send Quick Inquiry
                    </div>
                    <textarea
                      rows={3}
                      value={inquiryText}
                      onChange={(e) => setInquiryText(e.target.value)}
                      placeholder="Ask about title documents, floor plans, or negotiation..."
                      required
                      className="w-full p-3 text-xs bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] focus:outline-none focus:border-[#C5A059] text-[#191B1F]"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-white border border-[#191B1F] hover:bg-[#F6F4EF] text-[#191B1F] text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Send an Inquiry</span>
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-[#F5F2EA] border border-[#E0D7C4] rounded-[2px] text-xs text-[#2A2E35] leading-relaxed">
                    <span className="font-semibold block text-[#846320] mb-1">
                      Inquiry Logged
                    </span>
                    Thank you. Your inquiry regarding {property.id} has been recorded. Our agency advisor will follow up.
                  </div>
                )}
              </div>

              {/* Viewing Advisory Note */}
              <div className="pt-4 border-t border-[#F0ECE4] text-[11px] text-[#7A818E] leading-relaxed">
                Viewing availability depends on property access schedule and verified appointment confirmation.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <FullscreenGallery
        isOpen={fullscreenOpen}
        onClose={() => setFullscreenOpen(false)}
        images={images}
        currentIndex={activeImageIndex}
        onSelectIndex={setActiveImageIndex}
        title={property.title}
      />
    </div>
  );
};
