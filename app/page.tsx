"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandIntro } from "@/components/home/BrandIntro";
import { SmartHomeExperience } from "@/components/experience/SmartHomeExperience";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechnologyStory } from "@/components/home/TechnologyStory";
import { WhyZenithSection } from "@/components/home/WhyZenithSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ConsultationCtaSection } from "@/components/home/ConsultationCtaSection";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

export default function ZenithHomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-theme-main text-theme-main selection:bg-[var(--gold)] selection:text-black transition-colors duration-300">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* 2. Architectural Hero Section */}
      <HeroSection onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* 3. Brand Introduction & Craftsmanship */}
      <BrandIntro />

      {/* 4. Mandatory Interactive Smart-Home Experience (Day, Evening, Movie, Night, Away) */}
      <SmartHomeExperience
        onOpenConsultation={() => setIsDemoModalOpen(true)}
      />

      {/* 5. Integrated Solutions & Services Explorer */}
      <ServicesSection
        onOpenConsultation={() => setIsDemoModalOpen(true)}
      />

      {/* 6. Technology Storytelling & Live Security Simulation */}
      <TechnologyStory
        onOpenConsultation={() => setIsDemoModalOpen(true)}
      />

      {/* 7. Why Zenith & Hardware Assurance */}
      <WhyZenithSection />

      {/* 8. Architectural Residence Portfolio */}
      <PortfolioSection />

      {/* 9. Closing Consultation Call to Action */}
      <ConsultationCtaSection
        onOpenDemo={() => setIsDemoModalOpen(true)}
      />

      {/* 10. Global Architectural Footer */}
      <Footer onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* 11. Book A Demo Private Consultation Modal */}
      <ConsultationModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
