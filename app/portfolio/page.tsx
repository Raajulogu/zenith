"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PortfolioPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const portfolioProjects = [
    {
      title: "Glass Pavilion Residence",
      category: "Architectural Villa",
      location: "Private Residence",
      image: "/assets/hero-house.jpg",
      scope: [
        "Astronomical Solar Tracking Shading",
        "Circadian Warm White Illumination (1800K — 5500K)",
        "Local-First Bus Automation Core",
        "Millimeter-Wave Radar Perimeter Sentry",
      ],
      description:
        "A multi-level glass pavilion where natural sunlight is harmoniously balanced with motorized architectural sheer drapery and circadian LED cove integration.",
    },
    {
      title: "Metropolitan Sky Penthouse",
      category: "Penthouse Suite",
      location: "Urban Skyline",
      image: "/assets/control-home.jpg",
      scope: [
        "Whole-Residence Scene Synchronization",
        "Tactile Black Glass Touch Keypads",
        "Lossless Multi-Zone 24-bit Audio Hub",
        "Concealed Dual-Zone VRF Climate Integration",
      ],
      description:
        "A private penthouse sanctuary featuring one-touch master scenes like 'Evening Lounge' and 'Cinema Night', replacing 18 conventional switches with 2 sculptural tactile panels.",
    },
    {
      title: "Twilight Ocean Villa",
      category: "Coastal Estate",
      location: "Puducherry Coastal",
      image: "/assets/security-smart.jpg",
      scope: [
        "Biometric Encrypted Deadbolt Entry",
        "2K HDR Night Surveillance with Local Storage",
        "Perimeter Sonar Radar Guard",
        "Emergency Deterrence Strobe Integration",
      ],
      description:
        "Comprehensive boundary defense for an expansive estate. Multi-radar sensing safeguards perimeters without false alarms, and motorized deadbolts automatically engage.",
    },
    {
      title: "Sanctuary Master Retreat",
      category: "Luxury Suite",
      location: "Private Villa",
      image: "/assets/story-3.jpg",
      scope: [
        "1% Motion-Sensed Footstep Guide Beacons",
        "Dual Blackout Acoustic Shading",
        "Subconscious Rest Climate Tuning (19.5°C)",
        "Zero Phantom Power Mode",
      ],
      description:
        "Designed for pure restorative sleep. All living circuits sleep silently, motorized blackout shades seal ambient light, and sub-1% pathway beacons guide movement without disrupting sleep.",
    },
    {
      title: "Morning Sunlit Kitchen & Terrace",
      category: "Entertaining Space",
      location: "Private Residence",
      image: "/assets/story-1.jpg",
      scope: [
        "Daylight Harvesting Solar Schedule",
        "Acoustic High-Resolution Multi-Room Stream",
        "Motorized Solar Louver Tracking",
      ],
      description:
        "Seamless morning transitions where drapery glides open at sunrise, bringing natural sunlight into culinary and casual breakfast spaces.",
    },
    {
      title: "Private Evening Dining Suite",
      category: "Hospitality & Entertaining",
      location: "Luxury Penthouse",
      image: "/assets/story-2.jpg",
      scope: [
        "2700K Warm Dimming Sunset Profile",
        "Spatial Audio Dining Ambience",
        "One-Touch Entertaining Scene Activation",
      ],
      description:
        "An intimate entertaining setting bathed in warm candlelight-adjacent cove washes and studio-grade lossless acoustic warmth.",
    },
  ];

  return (
    <div className="min-h-screen bg-theme-main text-theme-main selection:bg-[var(--gold)] selection:text-black transition-colors duration-300">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Header */}
      <section className="pt-36 pb-20 bg-theme-secondary/30 border-b border-theme relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,var(--gold-subtle),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1540px] mx-auto px-6 sm:px-10 relative z-10 text-center space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
            Architectural Projects
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-theme-main tracking-tight leading-tight">
            Spaces transformed by <br />
            <span className="italic font-normal">Zenith engineering.</span>
          </h1>
          <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
            Explore private residential commissions where lighting, shading, comfort, and security
            are orchestrated with complete architectural elegance.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 max-w-[1540px] mx-auto px-6 sm:px-10 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioProjects.map((project, idx) => (
            <div
              key={idx}
              className="group zenith-surface rounded-3xl overflow-hidden border border-theme shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-light)]">
                    {project.category} • {project.location}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs sm:text-sm text-theme-secondary font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 border-t border-theme/60 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-theme-main block">
                    Integrated System Scope
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.scope.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-theme-secondary/70 border border-theme/70 text-[11px] text-theme-secondary font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl zenith-surface border border-theme text-center max-w-3xl mx-auto space-y-4">
          <Sparkles className="w-6 h-6 text-[var(--gold)] mx-auto" />
          <h4 className="text-2xl sm:text-3xl font-light text-theme-main">
            Have an Architectural Project in Planning?
          </h4>
          <p className="text-xs sm:text-sm text-theme-secondary max-w-lg mx-auto font-light leading-relaxed">
            Collaborate directly with a Zenith system engineer to integrate circadian lighting,
            motorized shading, and local-first automation seamlessly into your blueprints.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsDemoModalOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Consult with Zenith Engineering
            </Button>
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

