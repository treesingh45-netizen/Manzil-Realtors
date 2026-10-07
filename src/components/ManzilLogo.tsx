import React from 'react';

interface ManzilLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const ManzilLogo: React.FC<ManzilLogoProps> = ({
  variant = 'light',
  size = 'md',
  showText = true,
  className = ''
}) => {
  const isDark = variant === 'dark';

  // Proportional icon sizing
  const iconHeight = 
    size === 'sm' ? 'h-8' : size === 'lg' ? 'h-13' : size === 'xl' ? 'h-16' : 'h-10';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Refined Architectural Skyline Calligraphy (منازل - Manzil) */}
      <svg
        viewBox="0 0 180 135"
        className={`${iconHeight} w-auto shrink-0 transition-transform duration-300 group-hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`goldGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBF7A" />
            <stop offset="35%" stopColor="#F5E4B8" />
            <stop offset="70%" stopColor="#C49B45" />
            <stop offset="100%" stopColor="#966F24" />
          </linearGradient>

          <linearGradient id={`goldStroke-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A88232" />
            <stop offset="50%" stopColor="#EED596" />
            <stop offset="100%" stopColor="#B38933" />
          </linearGradient>
        </defs>

        {/* 1. Tall Central Skyscraper (Alif - the tallest tower) */}
        <path
          d="M 72 14 L 98 14 L 98 108 L 72 108 Z"
          stroke={`url(#goldStroke-${variant})`}
          strokeWidth="3.4"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 2. Central Gabled Arch Pavilion (Noon / Vault) */}
        <path
          d="M 83 42 L 98 28 L 113 42 L 113 108 L 83 108 Z"
          stroke={`url(#goldStroke-${variant})`}
          strokeWidth="3.2"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 3. Center Spire & Calligraphic Accent Dots */}
        <path
          d="M 98 28 L 98 46"
          stroke={`url(#goldStroke-${variant})`}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="98" cy="58" r="4.8" fill={`url(#goldGrad-${variant})`} />
        <circle cx="128" cy="74" r="4.5" fill={`url(#goldGrad-${variant})`} />

        {/* 4. Left Stepped Building & Lower Foot (Lam / Kaaf) */}
        <path
          d="M 50 62 L 62 62 L 62 86 L 24 86 L 24 108 L 68 108 L 68 86"
          stroke={`url(#goldStroke-${variant})`}
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 5. Right Wing & Base Loop (Meem) */}
        <path
          d="M 110 108 L 118 108 L 118 68 L 138 68 L 138 108 L 156 108 L 156 86 L 164 86 L 164 108"
          stroke={`url(#goldStroke-${variant})`}
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 6. Base Foundation Tail Line (Zay) */}
        <path
          d="M 98 72 L 98 108 L 88 122 L 74 112"
          stroke={`url(#goldStroke-${variant})`}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 7. Subtle Foundation Anchor Baseline */}
        <line
          x1="18"
          y1="108"
          x2="168"
          y2="108"
          stroke={`url(#goldStroke-${variant})`}
          strokeWidth="1.2"
          opacity="0.3"
        />
      </svg>

      {showText && (
        <div className="flex flex-col tracking-tight text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-xl font-bold tracking-[0.22em] uppercase font-serif-heading transition-colors ${
                isDark ? 'text-white' : 'text-[#141517]'
              }`}
            >
              MANZIL
            </span>
          </div>
          <span
            className={`text-[9px] uppercase tracking-[0.28em] font-semibold ${
              isDark ? 'text-[#E6D2A8]' : 'text-[#9C772F]'
            }`}
          >
            Realtors & Builders
          </span>
        </div>
      )}
    </div>
  );
};
