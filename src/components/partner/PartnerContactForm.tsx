import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PARTNER_INQUIRY_OPTIONS } from '../../data/partnerData';

interface FormProps {
  formId?: string;
  onSuccess?: () => void;
}

export const PartnerContactForm: React.FC<FormProps> = ({ formId = 'partner-form' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    interest: PARTNER_INQUIRY_OPTIONS[0],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please provide a valid corporate email.';
    }
    if (!formData.website.trim()) {
      newErrors.website = 'Company website is required.';
    }
    if (!formData.interest) {
      newErrors.interest = 'Please select a program category.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  if (isSuccess) {
    return (
      <div className="py-10 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-display font-medium text-[#141413]">
          Inquiry Received
        </h4>
        <p className="text-sm text-[#5A5854] max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out, <span className="font-semibold text-[#141413]">{formData.fullName}</span>. Our commercial development team will review your requirements for <span className="italic">{formData.interest}</span> and respond within one business day.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              website: '',
              interest: PARTNER_INQUIRY_OPTIONS[0],
            });
          }}
          className="text-xs font-mono tracking-wider uppercase text-amber-800 underline hover:text-amber-900 pt-2 block mx-auto cursor-pointer"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div className="space-y-1.5">
        <label
          htmlFor={`${formId}-fullName`}
          className="block text-xs font-mono tracking-wider uppercase text-neutral-600"
        >
          Full Name <span className="text-amber-700">*</span>
        </label>
        <input
          id={`${formId}-fullName`}
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: '' });
          }}
          placeholder="e.g. Eleanor Vance"
          className={`w-full bg-[#FBFBFA] border px-4 py-3 text-sm text-[#141413] placeholder-neutral-400 focus:outline-none focus:bg-white transition-colors ${
            errors.fullName ? 'border-rose-500' : 'border-[#E7E7E3] focus:border-[#141413]'
          }`}
        />
        {errors.fullName && (
          <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Corporate Email */}
      <div className="space-y-1.5">
        <label
          htmlFor={`${formId}-email`}
          className="block text-xs font-mono tracking-wider uppercase text-neutral-600"
        >
          Email Address <span className="text-amber-700">*</span>
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          placeholder="name@company.com"
          className={`w-full bg-[#FBFBFA] border px-4 py-3 text-sm text-[#141413] placeholder-neutral-400 focus:outline-none focus:bg-white transition-colors ${
            errors.email ? 'border-rose-500' : 'border-[#E7E7E3] focus:border-[#141413]'
          }`}
        />
        {errors.email && (
          <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Website */}
      <div className="space-y-1.5">
        <label
          htmlFor={`${formId}-website`}
          className="block text-xs font-mono tracking-wider uppercase text-neutral-600"
        >
          Website <span className="text-amber-700">*</span>
        </label>
        <input
          id={`${formId}-website`}
          type="text"
          value={formData.website}
          onChange={(e) => {
            setFormData({ ...formData, website: e.target.value });
            if (errors.website) setErrors({ ...errors, website: '' });
          }}
          placeholder="https://company.com"
          className={`w-full bg-[#FBFBFA] border px-4 py-3 text-sm text-[#141413] placeholder-neutral-400 focus:outline-none focus:bg-white transition-colors ${
            errors.website ? 'border-rose-500' : 'border-[#E7E7E3] focus:border-[#141413]'
          }`}
        />
        {errors.website && (
          <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.website}
          </p>
        )}
      </div>

      {/* Program Requirement Select */}
      <div className="space-y-1.5">
        <label
          htmlFor={`${formId}-interest`}
          className="block text-xs font-mono tracking-wider uppercase text-neutral-600"
        >
          What are you looking for <span className="text-amber-700">*</span>
        </label>
        <select
          id={`${formId}-interest`}
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          className="w-full bg-[#FBFBFA] border border-[#E7E7E3] px-4 py-3 text-sm text-[#141413] focus:outline-none focus:bg-white focus:border-[#141413] transition-colors cursor-pointer"
        >
          {PARTNER_INQUIRY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#141413] hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-[0.2em] py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 group cursor-pointer disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
              <span>Processing Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-amber-400" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
