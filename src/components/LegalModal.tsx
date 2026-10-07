import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white border border-[#E5E0D5] rounded-[2px] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#7B828F] hover:text-[#191B1F] hover:bg-[#F5F2EB] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9C772F]">
              Manzil Realtors & Builders
            </span>
            <h2 className="text-2xl font-bold font-serif-heading text-[#191B1F] mt-1">
              {isPrivacy ? 'Privacy & Confidentiality Policy' : 'Terms & Agency Conditions'}
            </h2>
            <p className="text-xs text-[#717885] mt-1">
              Updated October 2026 · Karachi, Pakistan
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#4E5460] leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  At <strong>Manzil Realtors & Builders</strong>, we maintain strict privacy protocols regarding all prospective client information, property inspection records, financial capability assessments, and transaction documentation.
                </p>
                <h4 className="font-bold text-[#191B1F] text-sm pt-2">
                  1. Information We Collect
                </h4>
                <p>
                  We collect details provided through our viewing forms and inquiry requests, including names, contact numbers, email addresses, and specific property criteria for arranging appointments in Karachi.
                </p>
                <h4 className="font-bold text-[#191B1F] text-sm pt-2">
                  2. Use of Information
                </h4>
                <p>
                  Your details are utilized strictly for verifying appointment logistics, transmitting title records, coordinating property viewings with owners, and answering technical inquiries. We never sell, exchange, or publicly disclose client records.
                </p>
                <h4 className="font-bold text-[#191B1F] text-sm pt-2">
                  3. Contact & Inquiries
                </h4>
                <p>
                  For any privacy requests or record removal, you may reach our office directly at A-425, Block 1, Gulshan-e-Iqbal, Karachi.
                </p>
              </>
            ) : (
              <>
                <p>
                  These Terms of Service govern the viewing, reservation, and real estate advisory services facilitated by <strong>Manzil Realtors & Builders</strong>.
                </p>
                <h4 className="font-bold text-[#191B1F] text-sm pt-2">
                  1. Property Presentation & Demo Listings
                </h4>
                <p>
                  Properties showcased on this platform represent curated inventory specifications. Pricing, dimensions, and availability are subject to seller verification, official title scrutiny, and final mutation agreements in accordance with Sindh Building Control Authority (SBCA) and relevant housing authority regulations.
                </p>
                <h4 className="font-bold text-[#191B1F] text-sm pt-2">
                  2. Viewing Appointments
                </h4>
                <p>
                  Viewing requests require mutual confirmation between the agency, client, and current property custodian. Manzil reserves the right to request verified identification prior to facilitating private premises inspections.
                </p>
                <h4 className="font-bold text-[#191B1F] text-sm pt-2">
                  3. Professional Real Estate Advisory
                </h4>
                <p>
                  All transactional steps, earnest payments (biyana), and sales deeds are conducted in accordance with customary Pakistani real estate law and documentation standards.
                </p>
              </>
            )}
          </div>

          <div className="pt-6 border-t border-[#F0ECE4] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px]"
            >
              Close Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
