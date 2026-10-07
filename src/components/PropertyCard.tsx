import React from 'react';
import { Property } from '../types/property';
import { ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onSelect: (propertyId: string) => void;
  className?: string;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  className = ''
}) => {
  return (
    <article
      onClick={() => onSelect(property.id)}
      className={`group cursor-pointer bg-white border border-[#E9E5DD] rounded-[2px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#D5C29E] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] flex flex-col ${className}`}
    >
      {/* 4:3 Aspect Ratio Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0EEEA]">
        <img
          src={property.mainImage}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Quiet, minimalist status marker */}
        <div className="absolute top-3 left-3 bg-[#191B1F]/80 backdrop-blur-sm text-white/95 text-[11px] uppercase tracking-[0.16em] font-medium px-2.5 py-1 rounded-[1px]">
          {property.availability}
        </div>

        {/* Property ID tag */}
        <div className="absolute top-3 right-3 text-[11px] font-mono tracking-wider text-white/90 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-[1px]">
          {property.id}
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Small uppercase category */}
          <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#9C772F] mb-1.5 font-sans-ui">
            {property.type} · {property.purpose}
          </div>

          {/* Property Title */}
          <h3 className="text-lg font-semibold text-[#191B1F] tracking-tight group-hover:text-[#9C772F] transition-colors font-serif-heading line-clamp-1 mb-1">
            {property.title}
          </h3>

          {/* Location */}
          <p className="text-xs text-[#5D636F] mb-4">
            {property.location}
          </p>

          {/* Property Specifications - Zero-Pill Unboxed Text with Separators */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#4E5460] py-2.5 border-y border-[#F0ECE4] mb-4">
            <span className="font-medium text-[#22252B]">{property.area}</span>
            {property.bedrooms !== undefined && (
              <>
                <span aria-hidden="true" className="text-[#C8C2B5]">·</span>
                <span>{property.bedrooms} Beds</span>
              </>
            )}
            {property.bathrooms !== undefined && (
              <>
                <span aria-hidden="true" className="text-[#C8C2B5]">·</span>
                <span>{property.bathrooms} Baths</span>
              </>
            )}
            {property.parkingSpaces !== undefined && (
              <>
                <span aria-hidden="true" className="text-[#C8C2B5]">·</span>
                <span>{property.parkingSpaces} Parking</span>
              </>
            )}
          </div>
        </div>

        {/* Bottom Price & Minimal Arrow CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#828997]">Price</div>
            <div className="text-base font-bold text-[#191B1F] tabular-nums tracking-tight">
              {property.price}
            </div>
          </div>

          <div className="w-8 h-8 rounded-full border border-[#E5E0D5] flex items-center justify-center text-[#191B1F] group-hover:bg-[#191B1F] group-hover:text-white group-hover:border-[#191B1F] transition-all">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
};
