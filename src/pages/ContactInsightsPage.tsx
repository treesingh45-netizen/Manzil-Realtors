import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { ManzilLogo } from '../components/ManzilLogo';
import { InquiryData } from '../types/property';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, TrendingUp, BookOpen, ArrowUpRight } from 'lucide-react';

interface ContactInsightsPageProps {
  onNavigate: (page: PageId, extraParams?: { filterLocation?: string }) => void;
}

export const ContactInsightsPage: React.FC<ContactInsightsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<InquiryData>({
    fullName: '',
    email: '',
    phone: '',
    interestedIn: 'Buying a Residential Property',
    preferredLocation: 'Gulshan-e-Iqbal',
    budget: 'PKR 25M–50M',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const marketInsights = [
    {
      title: 'Karachi Central Residential Dynamics: Gulshan-e-Iqbal & PECHS',
      category: 'Residential Analysis',
      readTime: '4 min read',
      date: 'October 2026',
      summary:
        'Established family sectors in Gulshan-e-Iqbal Block 1 through 13 continue to experience resilient demand due to reliable arterial road networks, educational institutions, and steady multi-generational housing stability.'
    },
    {
      title: 'DHA & Clifton Executive Trends: Demand for Secure Modernist Villas',
      category: 'Luxury Market',
      readTime: '5 min read',
      date: 'September 2026',
      summary:
        'Phase 6 and Phase 8 in DHA Karachi reflect an increasing preference for architecturally curated homes equipped with sustainable solar systems, private security, and low-density communal zoning.'
    },
    {
      title: 'Commercial Floor Yields: Shahrah-e-Faisal and PECHS Corridor',
      category: 'Commercial Outlook',
      readTime: '3 min read',
      date: 'August 2026',
      summary:
        'Grade-A corporate office floorplates with dedicated power redundancies and basement parking retain higher corporate tenancy tenure compared to decentralized commercial hubs.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24 bg-[#FCFCFA]">
      {/* Hero */}
      <section className="bg-[#FAF8F5] border-b border-[#EAE5DC] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
                Consultation & Office
              </span>
              <span className="h-[1px] w-8 bg-[#C5A059]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-heading text-[#191B1F] tracking-tight leading-[1.12]">
              Let's Discuss Your Next Property Move.
            </h1>

            <p className="text-base sm:text-lg text-[#555C68] mt-6 leading-relaxed font-light">
              Whether you are buying, selling, investing, or exploring the market, tell us what you need and we will help you identify the right next step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT 5 COLUMNS: Agency Details & Address */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#E8E2D7] p-8 rounded-[2px] shadow-sm space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C772F] font-sans-ui">
                Contact Details
              </h3>

              <div className="space-y-6">
                <div className="pb-1">
                  <ManzilLogo variant="light" size="md" showText={false} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif-heading text-[#191B1F]">
                    Manzil Realtors & Builders
                  </h2>
                  <p className="text-xs text-[#717885] mt-1">
                    Licensed Real Estate Agency & Consultancy
                  </p>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-[#353A44]">
                  <MapPin className="w-5 h-5 text-[#9C772F] shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-semibold block text-[#191B1F]">Head Office:</span>
                    A-425, Block 1, Gulshan-e-Iqbal
                    <br />
                    Karachi, Pakistan 75300
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-[#353A44]">
                  <Phone className="w-5 h-5 text-[#9C772F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#191B1F]">Direct Telephone:</span>
                    <span className="tabular-nums font-bold text-base tracking-wider text-[#191B1F]">
                      0306 3060592
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-[#353A44]">
                  <Clock className="w-5 h-5 text-[#9C772F] shrink-0 mt-0.5" />
                  <div className="leading-relaxed text-xs">
                    <span className="font-semibold block text-[#191B1F] text-sm">Consultation Hours:</span>
                    Monday – Saturday: 10:00 AM – 7:00 PM
                    <br />
                    Friday: Closed during Jummah prayer (1:00 PM – 3:00 PM)
                  </div>
                </div>
              </div>

              {/* Map Vicinity Container */}
              <div className="pt-4 border-t border-[#F0ECE4]">
                <div className="p-4 bg-[#FAF8F5] border border-[#EAE5DC] rounded-[2px] text-xs text-[#525866]">
                  <span className="font-semibold text-[#191B1F] block mb-1">
                    Visiting Our Office in Gulshan-e-Iqbal:
                  </span>
                  Located in Block 1 with convenient access from University Road and NIPA Chowrangi. Private client parking available.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 7 COLUMNS: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E8E2D7] p-8 sm:p-10 rounded-[2px] shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9C772F] mb-1 font-sans-ui">
                Direct Communication
              </h3>
              <h2 className="text-2xl font-bold font-serif-heading text-[#191B1F] mb-6">
                Send an Inquiry
              </h2>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="e.g. Asad Rehman"
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
                        placeholder="e.g. asad@example.com"
                        className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="e.g. 0300 9876543"
                        className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                        I'm Interested In
                      </label>
                      <select
                        value={formData.interestedIn}
                        onChange={(e) =>
                          setFormData({ ...formData, interestedIn: e.target.value })
                        }
                        className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Buying a Residential Property">Buying a Residential Property</option>
                        <option value="Selling My Property in Karachi">Selling My Property in Karachi</option>
                        <option value="Commercial Investment Advisory">Commercial Investment Advisory</option>
                        <option value="Residential Plot Acquisition">Residential Plot Acquisition</option>
                        <option value="Property Management Inquiry">Property Management Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                        Preferred Location
                      </label>
                      <input
                        type="text"
                        value={formData.preferredLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredLocation: e.target.value })
                        }
                        placeholder="e.g. Gulshan-e-Iqbal, DHA Phase 6"
                        className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full h-11 px-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Under PKR 10M">Under PKR 10M</option>
                        <option value="PKR 10M–25M">PKR 10M–25M</option>
                        <option value="PKR 25M–50M">PKR 25M–50M</option>
                        <option value="PKR 50M+">PKR 50M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#3C414C] mb-1.5 font-sans-ui">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please share details about your timeline, preferred sectors, or any specific properties you wish to discuss..."
                      className="w-full p-3.5 text-sm bg-[#FAF8F5] border border-[#E5E0D5] rounded-[2px] text-[#191B1F] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-9 py-3.5 bg-[#191B1F] hover:bg-[#2F343F] text-white text-xs uppercase tracking-wider font-semibold rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 bg-[#FAF9F6] border border-[#E2DBD0] rounded-[2px] text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#FAF5EB] text-[#9C772F] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif-heading text-[#191B1F]">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555C68] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your inquiry has been received by Manzil Realtors & Builders. An advisor will review your specifications and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 border border-[#191B1F] text-xs uppercase tracking-wider font-semibold rounded-[2px] hover:bg-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* KARACHI MARKET INSIGHTS SECTION */}
      <section className="bg-[#FAF9F6] border-t border-[#EDE7DC] py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#9C772F] font-sans-ui">
                Market Advisory Briefings
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-[#191B1F] tracking-tight mt-1">
                Karachi Real Estate Insights
              </h2>
              <p className="text-sm text-[#5C6370] mt-2 max-w-xl">
                Independent analysis on Karachi property trends, micro-sector capital shifts, and legal considerations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketInsights.map((insight, idx) => (
              <article
                key={idx}
                className="bg-white border border-[#E8E2D7] p-8 rounded-[2px] flex flex-col justify-between hover:border-[#C5A059] transition-all shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)]"
              >
                <div>
                  {/* Clean unboxed metadata (zero-pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-[#8A919E] mb-3">
                    <span className="font-semibold text-[#9C772F] uppercase tracking-wider text-[11px]">
                      {insight.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{insight.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{insight.date}</span>
                  </div>

                  <h3 className="text-xl font-bold font-serif-heading text-[#191B1F] mb-3 leading-snug">
                    {insight.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555C68] leading-relaxed">
                    {insight.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F0ECE4] mt-6">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#191B1F] hover:text-[#9C772F] transition-colors"
                  >
                    <span>Request Full Analysis</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
