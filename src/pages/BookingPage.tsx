import React, { useState, useEffect } from 'react';
import { PageId } from '../components/Navbar';
import { PROPERTIES } from '../data/properties';
import { ViewingRequestData } from '../types/property';
import { Calendar, Clock, User, ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft, Building } from 'lucide-react';

interface BookingPageProps {
  onNavigate: (page: PageId) => void;
  preselectedPropertyId?: string;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  onNavigate,
  preselectedPropertyId
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState<ViewingRequestData>({
    requirement: 'Buy',
    propertyId: preselectedPropertyId || 'MRB-001',
    propertyName: 'Contemporary Family Residence',
    preferredDate: '',
    preferredTime: '11:00 AM',
    fullName: '',
    email: '',
    phone: '',
    preferredLocation: 'Gulshan-e-Iqbal',
    budgetRange: 'PKR 25M–50M',
    additionalRequirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Update propertyName when preselectedPropertyId changes
  useEffect(() => {
    if (preselectedPropertyId) {
      const match = PROPERTIES.find((p) => p.id === preselectedPropertyId);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          propertyId: match.id,
          propertyName: match.title,
          preferredLocation: match.locationArea
        }));
      }
    }
  }, [preselectedPropertyId]);

  const propertyOptions = [
    { id: 'MRB-001', title: 'Contemporary Family Residence (Gulshan-e-Iqbal)' },
    { id: 'MRB-002', title: 'Executive Apartment Residence (DHA Phase 6)' },
    { id: 'MRB-003', title: 'Modern Family Home (Gulistan-e-Jauhar)' },
    { id: 'MRB-004', title: 'Premium Commercial Office (PECHS)' },
    { id: 'MRB-005', title: 'Clifton Executive Residence (Clifton Block 5)' },
    { id: 'MRB-006', title: 'Bahria Town Investment Plot (Bahria Town)' },
    { id: 'MRB-007', title: 'North Nazimabad Family Home (North Nazimabad)' },
    { id: 'MRB-008', title: 'DHA Modern Apartment (DHA Phase 8)' },
    { id: 'MRB-009', title: 'Commercial Retail Opportunity (Gulshan-e-Iqbal)' },
    { id: 'MRB-010', title: 'Scheme 33 Residential Plot (Scheme 33)' },
    { id: 'MRB-011', title: 'PECHS Commercial Building (PECHS Block 2)' },
    { id: 'MRB-012', title: 'Luxury DHA Residence (DHA Phase 6)' },
    { id: 'OTHER', title: 'Other Property / General Portfolio Consultation' }
  ];

  const timeOptions = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#FCFCFA]">
      {/* Hero */}
      <section className="bg-[#FAF8F5] border-b border-[#EAE5DC] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
                Private Appointment Desk
              </span>
              <span className="h-[1px] w-8 bg-[#C5A059]" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold font-serif-heading text-[#191B1F] tracking-tight">
              Book a Private Property Viewing
            </h1>

            <p className="text-base text-[#555C68] mt-3 leading-relaxed">
              Tell us what you are looking for and we will help arrange the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT 8 COLUMNS: Multi-Step Booking Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-[#E8E2D7] rounded-[2px] p-6 sm:p-10 shadow-sm">
              {!submitted ? (
                <div>
                  {/* Step Indicators */}
                  <div className="flex items-center justify-between border-b border-[#F0ECE4] pb-6 mb-8 text-xs font-medium">
                    {[
                      { step: 1, label: 'Requirement' },
                      { step: 2, label: 'Property' },
                      { step: 3, label: 'Schedule' },
                      { step: 4, label: 'Information' }
                    ].map((s) => (
                      <div
                        key={s.step}
                        className={`flex items-center gap-2 cursor-pointer ${
                          currentStep === s.step
                            ? 'text-[#9C772F] font-bold'
                            : currentStep > s.step
                            ? 'text-[#191B1F]'
                            : 'text-[#A0A7B5]'
                        }`}
                        onClick={() => setCurrentStep(s.step)}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono ${
                            currentStep === s.step
                              ? 'bg-[#191B1F] text-[#E6D2A8]'
                              : currentStep > s.step
                              ? 'bg-[#EFEAE0] text-[#191B1F]'
                              : 'bg-[#F5F3ED] text-[#A0A7B5]'
                          }`}
                        >
                          {s.step}
                        </span>
                        <span className="hidden sm:inline">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* STEP 1: Your Requirement */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-in fade-in duration-200">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#9C772F] font-semibold">
                            Step 01
                          </span>
                          <h3 className="text-xl font-bold font-serif-heading text-[#191B1F] mt-1">
                            Your Requirement
                          </h3>
                          <p className="text-xs text-[#6F7684] mt-1">
                            Select the primary objective of your property inquiry.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-2">
                          {['Buy', 'Rent', 'Investment', 'Commercial Property'].map(
                            (req) => {
                              const isSelected = formData.requirement === req;
                              return (
                                <button
                                  key={req}
                                  type="button"
                                  onClick={() =>
                                    setFormData({ ...formData, requirement: req })
                                  }
                                  className={`p-4 border rounded-[2px] text-center transition-all ${
                                    isSelected
                                      ? 'border-[#191B1F] bg-[#191B1F] text-white shadow-sm'
                                      : 'border-[#E5E0D5] bg-[#FAF8F5] text-[#2C313C] hover:border-[#C5A059]'
                                  }`}
                                >
                                  <div className="text-xs font-semibold tracking-wider uppercase">
                                    {req}
                                  </div>
                                </button>
                              );
                            }
                          )}
                        </div>

                        <div className="pt-6 flex justify-end">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="px-6 py-3 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center gap-2 hover:bg-[#2F343F]"
                          >
                            <span>Continue to Property</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Property Selection */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-in fade-in duration-200">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#9C772F] font-semibold">
                            Step 02
                          </span>
                          <h3 className="text-xl font-bold font-serif-heading text-[#191B1F] mt-1">
                            Select Property
                          </h3>
                          <p className="text-xs text-[#6F7684] mt-1">
                            Choose the specific listing or request an unlisted sector viewing.
                          </p>
                        </div>

                        <div className="space-y-4 pt-2">
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-2 font-sans-ui">
                              Property Name / Property ID
                            </label>
                            <select
                              value={formData.propertyId}
                              onChange={(e) => {
                                const val = e.target.value;
                                const matched = propertyOptions.find((p) => p.id === val);
                                setFormData({
                                  ...formData,
                                  propertyId: val,
                                  propertyName: matched ? matched.title : 'Other Property'
                                });
                              }}
                              className="w-full h-12 px-4 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            >
                              {propertyOptions.map((opt) => (
                                <option key={opt.id} value={opt.id}>
                                  {opt.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="pt-6 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(1)}
                            className="px-6 py-3 border border-[#E5E0D5] text-[#191B1F] text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center gap-2 hover:bg-[#FAF8F5]"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            className="px-6 py-3 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center gap-2 hover:bg-[#2F343F]"
                          >
                            <span>Continue to Schedule</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Preferred Date & Time */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-in fade-in duration-200">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#9C772F] font-semibold">
                            Step 03 & 04
                          </span>
                          <h3 className="text-xl font-bold font-serif-heading text-[#191B1F] mt-1">
                            Preferred Date & Time
                          </h3>
                          <p className="text-xs text-[#6F7684] mt-1">
                            Choose an appointment window that fits your schedule.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                          {/* Calendar Selector */}
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-2 font-sans-ui">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              required
                              value={formData.preferredDate}
                              onChange={(e) =>
                                setFormData({ ...formData, preferredDate: e.target.value })
                              }
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full h-12 px-4 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            />
                            <p className="text-[11px] text-[#787F8D] mt-1.5">
                              Viewings are hosted Monday through Saturday.
                            </p>
                          </div>

                          {/* Preferred Time Dropdown */}
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-2 font-sans-ui">
                              Preferred Time
                            </label>
                            <select
                              value={formData.preferredTime}
                              onChange={(e) =>
                                setFormData({ ...formData, preferredTime: e.target.value })
                              }
                              className="w-full h-12 px-4 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            >
                              {timeOptions.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                            <p className="text-[11px] text-[#787F8D] mt-1.5">
                              Daylight viewings are recommended for architectural inspection.
                            </p>
                          </div>
                        </div>

                        <div className="pt-6 flex justify-between">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(2)}
                            className="px-6 py-3 border border-[#E5E0D5] text-[#191B1F] text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center gap-2 hover:bg-[#FAF8F5]"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentStep(4)}
                            className="px-6 py-3 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center gap-2 hover:bg-[#2F343F]"
                          >
                            <span>Client Information</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Client Information */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-in fade-in duration-200">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#9C772F] font-semibold">
                            Step 05
                          </span>
                          <h3 className="text-xl font-bold font-serif-heading text-[#191B1F] mt-1">
                            Client Information
                          </h3>
                          <p className="text-xs text-[#6F7684] mt-1">
                            Provide your contact details so our coordinator can confirm your arrangement.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={(e) =>
                                setFormData({ ...formData, fullName: e.target.value })
                              }
                              placeholder="e.g. Tariq Hashmi"
                              className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              placeholder="e.g. client@domain.com"
                              className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              placeholder="e.g. 0300 1234567"
                              className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                              Preferred Location
                            </label>
                            <select
                              value={formData.preferredLocation}
                              onChange={(e) =>
                                setFormData({ ...formData, preferredLocation: e.target.value })
                              }
                              className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            >
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

                          <div className="sm:col-span-2">
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                              Budget Range
                            </label>
                            <select
                              value={formData.budgetRange}
                              onChange={(e) =>
                                setFormData({ ...formData, budgetRange: e.target.value })
                              }
                              className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            >
                              <option value="Under PKR 10M">Under PKR 10M</option>
                              <option value="PKR 10M–25M">PKR 10M–25M</option>
                              <option value="PKR 25M–50M">PKR 25M–50M</option>
                              <option value="PKR 50M+">PKR 50M+</option>
                            </select>
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                              Additional Requirements
                            </label>
                            <textarea
                              rows={3}
                              value={formData.additionalRequirements}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  additionalRequirements: e.target.value
                                })
                              }
                              placeholder="Any specific family requirements, commercial zoning needs, or questions..."
                              className="w-full p-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                            />
                          </div>
                        </div>

                        <div className="pt-6 flex justify-between items-center">
                          <button
                            type="button"
                            onClick={() => setCurrentStep(3)}
                            className="px-6 py-3 border border-[#E5E0D5] text-[#191B1F] text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center gap-2 hover:bg-[#FAF8F5]"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            <span>Previous</span>
                          </button>
                          <button
                            type="submit"
                            className="px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4B36D] text-[#141517] text-xs uppercase tracking-wider font-bold rounded-[2px] shadow-sm transition-all"
                          >
                            Request Viewing
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              ) : (
                /* Success Screen */
                <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FAF5EB] text-[#9C772F] flex items-center justify-center mx-auto border border-[#EADFCB]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#191B1F]">
                    Viewing Request Received
                  </h3>

                  <div className="max-w-md mx-auto p-5 bg-[#FAF9F6] border border-[#E8E2D7] rounded-[2px] text-xs text-[#525866] leading-relaxed">
                    <p className="font-semibold text-[#191B1F] mb-1.5">
                      Request Summary: {formData.propertyName}
                    </p>
                    <p>
                      Date: {formData.preferredDate || 'Earliest Available'} · Time: {formData.preferredTime}
                    </p>
                    <p className="mt-2 text-[#7A8290]">
                      Client: {formData.fullName} ({formData.phone})
                    </p>
                  </div>

                  <p className="text-sm text-[#555C68] max-w-lg mx-auto leading-relaxed">
                    Thank you. Your viewing request has been received. Our team will review your requirements and contact you with the next available arrangement.
                  </p>

                  <div className="pt-4 flex items-center justify-center gap-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="px-6 py-2.5 border border-[#191B1F] text-[#191B1F] text-xs uppercase tracking-wider font-semibold rounded-[2px] hover:bg-[#FAF8F5]"
                    >
                      Book Another Viewing
                    </button>
                    <button
                      onClick={() => onNavigate('properties')}
                      className="px-6 py-2.5 bg-[#191B1F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px]"
                    >
                      Browse More Properties
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT 4 COLUMNS: Booking Information Side Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E8E2D7] p-6 sm:p-8 rounded-[2px] shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C772F] mb-4 font-sans-ui">
                Before Your Viewing
              </h3>

              <div className="space-y-4 text-xs text-[#525866] leading-relaxed">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9C772F] mt-1.5 shrink-0" />
                  <p>
                    Please bring any relevant identification or property-related documents when required.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9C772F] mt-1.5 shrink-0" />
                  <p>
                    Viewing availability depends on property access and owner confirmation.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9C772F] mt-1.5 shrink-0" />
                  <p>
                    Property details and pricing may change based on availability and final seller terms.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#F0ECE4] mt-6">
                <div className="text-[11px] uppercase tracking-wider text-[#7E8592] font-semibold mb-1">
                  Agency Escort
                </div>
                <p className="text-xs text-[#5D6370]">
                  All scheduled viewings are conducted by an official Manzil representative who will provide title records and neighborhood guidance.
                </p>
              </div>
            </div>

            {/* Direct Contact Reference */}
            <div className="bg-[#FAF9F6] border border-[#EAE5DC] p-6 rounded-[2px] text-xs text-[#525866]">
              <div className="font-bold text-[#191B1F] font-serif-heading text-sm mb-1">
                Prefer to discuss first?
              </div>
              <p className="leading-relaxed">
                Contact our Gulshan-e-Iqbal advisory desk during regular business hours on <span className="text-[#191B1F] font-bold">0306 3060592</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
