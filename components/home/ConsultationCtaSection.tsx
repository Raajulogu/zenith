import React from "react";
import { Button } from "../ui/Button";
import { companyData } from "@/data/company";
import { MapPin, Phone, ArrowRight } from "lucide-react";

interface ConsultationCtaSectionProps {
  onOpenDemo: () => void;
}

export function ConsultationCtaSection({ onOpenDemo }: ConsultationCtaSectionProps) {
  return (
    <section
      id="contact"
      className="relative py-28 border-t border-theme bg-theme-main overflow-hidden transition-colors duration-300"
    >
      {/* Subtle radial gold aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse,var(--gold-subtle),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
            Begin Your Consultation
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-theme-main tracking-tight leading-tight">
            Designed for modern <br />
            <span className="italic font-normal">architectural living.</span>
          </h2>
        </div>

        <p className="text-theme-secondary text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Whether you are drawing initial architectural blueprints or modernizing a finished luxury
          residence, connect with our engineering team for a private consultation and live walkthrough.
        </p>

        <div className="pt-2 flex flex-wrap gap-4 items-center justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenDemo}
            className="uppercase tracking-wider text-xs font-semibold"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Book A Private Demo
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href={`tel:${companyData.phone}`}
            className="uppercase tracking-wider text-xs font-medium"
            icon={<Phone className="w-4 h-4 text-[var(--gold)]" />}
            iconPosition="left"
          >
            Call {companyData.phoneDisplay}
          </Button>
        </div>

        {/* Experience Center Footnote */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-theme-secondary border-t border-theme/60 max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0" />
            <span>{companyData.experienceCenter.location}</span>
          </div>
          <span className="hidden sm:inline-block text-theme-secondary/40">•</span>
          <span>Private Walkthroughs by Appointment</span>
        </div>
      </div>
    </section>
  );
}

