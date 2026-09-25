import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, Building, User } from 'lucide-react';
import { PRESS_PARTNERSHIP_CONTENT } from '../../data/pressData';

export const PressPartnershipSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate realistic asynchronous network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section className="relative w-full bg-[#F5F2EB] text-[#141413] py-24 sm:py-32 border-b border-[#E7E5E0]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Partnership Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:py-6">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#78350F] font-semibold block">
                {PRESS_PARTNERSHIP_CONTENT.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#141413] leading-[1.15]">
                {PRESS_PARTNERSHIP_CONTENT.headline}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-light">
              {PRESS_PARTNERSHIP_CONTENT.description}
            </p>

            <div className="pt-6 border-t border-[#E7E5E0] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#78716C]">
                <ShieldCheck className="w-4 h-4 text-[#78350F]" />
                <span>CONFIDENTIAL CORPORATE INQUIRY LINE</span>
              </div>
              <p className="text-xs text-[#78716C]">
                Executive response within 24 hours for press, retail procurement, and media relations.
              </p>
            </div>
          </div>

          {/* Right Column: Reach Out to Us Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] border border-[#E7E5E0] p-8 sm:p-12 shadow-xs">
            <div className="mb-8 pb-4 border-b border-[#E7E5E0]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#78350F] font-semibold block mb-1">
                COMMUNICATIONS & MEDIA DESK
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#141413]">
                Reach out to us
              </h3>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-[#F5F2EB] border border-[#E0DCD4] text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-[#78350F] mx-auto" />
                <h4 className="text-xl font-serif font-medium text-[#141413]">
                  Inquiry Received
                </h4>
                <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Choice Foods. A member of our corporate relations team will review your message and connect promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 border border-[#141413] text-xs font-mono uppercase tracking-widest text-[#141413] hover:bg-[#141413] hover:text-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="press-firstName"
                      className="text-xs font-mono tracking-wider uppercase text-[#78716C]"
                    >
                      First Name *
                    </label>
                    <div className="relative">
                      <input
                        id="press-firstName"
                        required
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="e.g. Eleanor"
                        className="w-full bg-[#F5F2EB] border border-[#D6D3D1] px-4 py-3 text-sm text-[#141413] placeholder-[#A8A29E] focus:outline-none focus:border-[#141413] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="press-lastName"
                      className="text-xs font-mono tracking-wider uppercase text-[#78716C]"
                    >
                      Last Name *
                    </label>
                    <div className="relative">
                      <input
                        id="press-lastName"
                        required
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="e.g. Vance"
                        className="w-full bg-[#F5F2EB] border border-[#D6D3D1] px-4 py-3 text-sm text-[#141413] placeholder-[#A8A29E] focus:outline-none focus:border-[#141413] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="press-email"
                      className="text-xs font-mono tracking-wider uppercase text-[#78716C]"
                    >
                      Corporate Email *
                    </label>
                    <div className="relative">
                      <input
                        id="press-email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full bg-[#F5F2EB] border border-[#D6D3D1] px-4 py-3 text-sm text-[#141413] placeholder-[#A8A29E] focus:outline-none focus:border-[#141413] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="press-company"
                      className="text-xs font-mono tracking-wider uppercase text-[#78716C]"
                    >
                      Organization / Publication *
                    </label>
                    <div className="relative">
                      <input
                        id="press-company"
                        required
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. Global Grocery Times"
                        className="w-full bg-[#F5F2EB] border border-[#D6D3D1] px-4 py-3 text-sm text-[#141413] placeholder-[#A8A29E] focus:outline-none focus:border-[#141413] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="press-message"
                    className="text-xs font-mono tracking-wider uppercase text-[#78716C]"
                  >
                    How can we help? *
                  </label>
                  <textarea
                    id="press-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your press request, editorial inquiry, or retail program objectives..."
                    className="w-full bg-[#F5F2EB] border border-[#D6D3D1] px-4 py-3 text-sm text-[#141413] placeholder-[#A8A29E] focus:outline-none focus:border-[#141413] transition-colors resize-y"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-[#78716C]">
                    All submissions subject to Choice Foods Group privacy policy.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#141413] text-white hover:bg-[#292524] text-xs font-mono uppercase tracking-widest transition-colors inline-flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
