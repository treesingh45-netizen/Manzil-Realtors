import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullscreenGalleryProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  title: string;
}

export const FullscreenGallery: React.FC<FullscreenGalleryProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
  title
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen) return null;

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between text-white/80 pb-4 border-b border-white/10">
        <div>
          <h3 className="text-sm font-medium tracking-wide text-white">{title}</h3>
          <span className="text-xs text-[#C5A059] font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
          aria-label="Close Fullscreen Gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/80 transition-colors border border-white/20 focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={images[currentIndex]}
          alt={`${title} - view ${currentIndex + 1}`}
          referrerPolicy="no-referrer"
          className="max-h-[75vh] max-w-[90vw] object-contain rounded-[2px] shadow-2xl transition-all duration-300"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/80 transition-colors border border-white/20 focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails Bar */}
      <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => onSelectIndex(idx)}
            className={`w-16 h-12 rounded-[2px] overflow-hidden border-2 transition-all ${
              currentIndex === idx
                ? 'border-[#C5A059] scale-105 opacity-100'
                : 'border-white/20 opacity-50 hover:opacity-80'
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
  );
};
