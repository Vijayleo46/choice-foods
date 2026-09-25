import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Send, Building, Mail, User, Phone, Sparkles } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';

export const CapabilitiesPartnership: React.FC = () => {
  const { navigate } = useNavigation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    programType: 'private-label',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const navLinks = [
    {
      title: 'About Choice',
      desc: 'Our People, Places, & Process',
      path: '/about',
    },
    {
      title: 'Executive Leadership',
      desc: '01–11 Stewardship & Operations',
      path: '/leadership',
    },
    {
      title: 'Our Impact',
      desc: 'Empowering Coastal Communities',
      path: '/impact',
    },
    {
      title: 'Press & Media',
      desc: 'Read Our Latest Industry Announcements',
      path: '/press',
    },
  ];

  return (
    <div className="w-full bg-[#FBFBFA] text-[#161615]">
      {/* 1. Learn More About Us Link Cards (Section 11 from Reference Site) */}
      <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-neutral-200">
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-800 font-bold block mb-1">
                DISCOVER MORE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#161615]">
                Learn More About Us
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-900 transition-all text-left group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">
                    EXPLORE
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-lg font-display font-bold text-[#161615] group-hover:text-amber-900 transition-colors">
                  {link.title}
                </h4>
                <p className="text-xs text-neutral-600 font-light mt-1">
                  {link.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Partnerships & Contact Form Section (Section 12 from Reference Site) */}
      <section className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-[#2D617D] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Reference Copy */}
          <div className="lg:col-span-6 space-y-6 lg:py-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-300 font-bold block">
              PARTNERSHIPS
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              A history of integrity and thoughtful investment.
            </h2>

            <div className="space-y-4 text-neutral-100 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              <p>
                We partner with retailers, distributors, and foodservice operators to develop and deliver thoughtful seafood programs.
              </p>
              <p>
                Whether you’re exploring private label, new product development, or long-term supply, our seasoned team of professionals works closely to understand your goals and build the right approach.
              </p>
            </div>

            <div className="pt-6 border-t border-white/20 space-y-3 text-xs font-mono text-neutral-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Direct Executive Governance &amp; Dedicated Account Stewardship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Custom Bench-Top R&amp;D Formulation to Scaled Co-Packing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Transparent Contract Pricing &amp; Guaranteed Supply Allocations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-white text-[#161615] p-8 sm:p-10 rounded-2xl shadow-2xl border border-neutral-200">
            <div className="mb-6 pb-4 border-b border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold block">
                COMMENCE DIALOGUE
              </span>
              <h3 className="text-2xl font-display font-bold text-[#161615]">
                Reach out to us
              </h3>
              <p className="text-xs text-neutral-600 font-light mt-1">
                Tell us about your seafood program requirements and our commercial team will respond promptly.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-display font-bold text-[#161615]">
                  Inquiry Received
                </h4>
                <p className="text-sm text-neutral-600 font-light max-w-sm mx-auto">
                  Thank you for connecting with Choice Foods Group. An executive commercial representative will review your program brief and contact you within one business day.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-neutral-900 text-white rounded text-xs font-mono font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block font-semibold">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm focus:outline-none focus:border-amber-700 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block font-semibold">
                      Work Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sjenkins@supermarket.com"
                        className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm focus:outline-none focus:border-amber-700 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block font-semibold">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Retail Partners Corp"
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block font-semibold">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.programType}
                    onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm focus:outline-none focus:border-amber-700 transition-colors"
                  >
                    <option value="private-label">Private Label Program &amp; Co-Packing</option>
                    <option value="recipe-development">Recipe Formulation &amp; Culinary Development</option>
                    <option value="value-added">Value-Added Ready-to-Cook Seafood</option>
                    <option value="bulk-commodity">Commodity &amp; Bulk Frozen Supply</option>
                    <option value="other">General Commercial Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 block font-semibold">
                    Project Brief / Volumes / Target Timeline
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on your projected volume, target categories, or packaging formats..."
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded text-sm focus:outline-none focus:border-amber-700 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#161615] hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 shadow-lg group"
                >
                  <span>Submit Partnership Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
