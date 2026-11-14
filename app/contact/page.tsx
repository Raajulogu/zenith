"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Villa",
    query: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Villa",
        query: "",
      });
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-theme-main text-theme-main selection:bg-[var(--gold)] selection:text-black transition-colors duration-300">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Header */}
      <section className="pt-36 pb-20 bg-theme-secondary/30 border-b border-theme relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,var(--gold-subtle),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1540px] mx-auto px-6 sm:px-10 relative z-10 text-center space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
            Consultation & Experience Center
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-theme-main tracking-tight leading-tight">
            Connect with Zenith <br />
            <span className="italic font-normal">engineering.</span>
          </h1>
          <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
            Schedule a private walkthrough at our Puducherry Experience Center or request a direct
            architectural consultation with a dedicated automation engineer.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Interactive Form */}
      <section className="py-24 max-w-[1540px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Details & Experience Center Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-theme-main tracking-tight">
                Experience Center & Headquarters
              </h2>
              <p className="text-sm text-theme-secondary font-light leading-relaxed">
                {companyData.experienceCenter.description}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-2xl zenith-surface border border-theme flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-main">
                    Showroom Address
                  </h4>
                  <p className="text-xs sm:text-sm text-theme-secondary mt-1 leading-snug">
                    {companyData.address.full}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl zenith-surface border border-theme flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-main">
                    Telephone
                  </h4>
                  <a
                    href={`tel:${companyData.phone}`}
                    className="text-xs sm:text-sm text-theme-main font-mono hover:text-[var(--gold)] mt-1 block"
                  >
                    {companyData.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-theme-secondary mt-0.5">
                    Direct access to technical consultation team
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl zenith-surface border border-theme flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-main">
                    Electronic Mail
                  </h4>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-xs sm:text-sm text-theme-main hover:text-[var(--gold)] mt-1 block"
                  >
                    {companyData.email}
                  </a>
                  <p className="text-[11px] text-theme-secondary mt-0.5">
                    Responses within 24 business hours
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl zenith-surface border border-theme flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-main">
                    Private Consultation Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-theme-secondary mt-1">
                    Monday — Saturday: 09:30 to 18:30 IST
                  </p>
                  <p className="text-[11px] text-[var(--gold-deep)] dark:text-[var(--gold)] mt-0.5 font-medium">
                    Private appointments recommended
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Consultation Form */}
          <div className="lg:col-span-7 zenith-surface rounded-3xl p-8 sm:p-12 border border-theme shadow-xl">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)] text-[var(--gold)] mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-theme-main">
                  Consultation Request Confirmed
                </h3>
                <p className="text-sm text-theme-secondary max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || "valued client"}. A Zenith automation systems engineer
                  will contact you shortly to coordinate your consultation.
                </p>
                <div className="pt-2 text-xs font-mono text-[var(--gold-deep)] dark:text-[var(--gold)]">
                  Reference: Zenith Private Client Schedule
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 pb-2 border-b border-theme">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
                    Schedule Appointment
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-theme-main">
                    Book A Private Consultation
                  </h3>
                  <p className="text-xs text-theme-secondary">
                    Review your blueprints or experience tactile switch panels in person.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-theme-main mb-1.5">
                    Your Full Name <span className="text-[var(--gold)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 text-xs sm:text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-theme-main mb-1.5">
                      Email Address <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 text-xs sm:text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-theme-main mb-1.5">
                      Phone Number <span className="text-[var(--gold)]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 text-xs sm:text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-theme-main mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main text-xs sm:text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                  >
                    <option value="Villa">Luxury Villa (New Construction / Full Redesign)</option>
                    <option value="Apartment">Modern Apartment / Penthouse</option>
                    <option value="Commercial">Commercial / Boutique Hospitality</option>
                    <option value="Architect">Architect / Interior Design Specification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-theme-main mb-1.5">
                    Architectural Details & Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the property stage, room count, preferred lighting, shades, or security requirements..."
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-theme-secondary border border-theme text-theme-main placeholder-theme-secondary/50 text-xs sm:text-sm focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
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
                    Confirm Consultation Booking
                  </Button>
                </div>

                <p className="text-[11px] text-theme-secondary text-center pt-1 font-light">
                  Strictly confidential. Direct engineering consultation.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer onOpenDemo={() => setIsDemoModalOpen(true)} />
      <ConsultationModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}

