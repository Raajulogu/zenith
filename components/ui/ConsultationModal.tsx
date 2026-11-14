"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { companyData } from "@/data/company";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectType?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultProjectType = "Villa",
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: defaultProjectType,
    query: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Auto close and reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: defaultProjectType,
        query: "",
      });
    }, 3200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      subtitle="Zenith Private Consultation"
      title="Book A Private Demo"
      maxWidth="lg"
    >
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)] text-[var(--gold)] mx-auto flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-light text-theme-main">
            Consultation Request Received
          </h4>
          <p className="text-sm text-theme-secondary max-w-sm mx-auto leading-relaxed">
            A Zenith automation specialist will reach out within 24 hours to review your architectural plans and coordinate your private session.
          </p>
          <div className="pt-2 text-xs text-[var(--gold-deep)] dark:text-[var(--gold)] font-medium">
            Experience Center: {companyData.address.city}, {companyData.address.country}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <p className="text-xs text-theme-secondary mb-4 leading-relaxed">
            Experience our tactile glass switch panels, circadian lighting sequences, and local-first automation ecosystem tailored to your residence.
          </p>

          <div>
            <label className="block text-theme-main font-medium mb-1.5">
              Full Name <span className="text-[var(--gold)]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-theme-main font-medium mb-1.5">
                Email Address <span className="text-[var(--gold)]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="rajesh@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
              />
            </div>
            <div>
              <label className="block text-theme-main font-medium mb-1.5">
                Phone Number <span className="text-[var(--gold)]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-theme-main font-medium mb-1.5">Project Scope</label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main focus:outline-none focus:border-[var(--gold)] transition-colors"
            >
              <option value="Villa">Luxury Villa (New Construction / Renovation)</option>
              <option value="Apartment">Modern Apartment / Penthouse</option>
              <option value="Commercial">Commercial / Boutique Hospitality</option>
              <option value="Architect">Architect / Interior Designer Partnership</option>
            </select>
          </div>

          <div>
            <label className="block text-theme-main font-medium mb-1.5">
              Architectural Details or Requirements
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about room sizes, construction stage, preferred lighting or security features..."
              value={formData.query}
              onChange={(e) => setFormData({ ...formData, query: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Confirm Booking Request
            </Button>
          </div>

          <p className="text-[11px] text-theme-secondary text-center pt-1">
            Strictly private. We never share your data. Direct engineering response.
          </p>
        </form>
      )}
    </Modal>
  );
}

