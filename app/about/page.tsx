"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { Button } from "@/components/ui/Button";
import { companyData } from "@/data/company";
import { Award, Cpu, ShieldCheck, Headphones, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const pillarIcons = [Award, Cpu, ShieldCheck, Headphones];

  return (
    <div className="min-h-screen bg-theme-main text-theme-main selection:bg-[var(--gold)] selection:text-black transition-colors duration-300">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-theme-secondary/30 border-b border-theme relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,var(--gold-subtle),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1540px] mx-auto px-6 sm:px-10 relative z-10 text-center space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
            About Zenith & Lumiwaves
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-theme-main tracking-tight leading-tight">
            The art of living <br />
            <span className="italic font-normal">intelligently.</span>
          </h1>
          <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
            Zenith is a bespoke smart home automation and architectural technology ecosystem created by Lumiwaves.
            We engineer residences where technology dissolves into the architecture.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-24 max-w-[1540px] mx-auto px-6 sm:px-10 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] zenith-surface border border-theme shadow-xl">
              <Image
                src="/assets/zenith-house.jpg"
                alt="Zenith luxury residence architecture"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
                Our Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-theme-main tracking-tight">
                Architectural Integrity First
              </h2>
            </div>

            <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
              Modern smart home systems are too often compromised by excessive gadgets, conflicting smartphone
              apps, and cheap plastic wall switches. Zenith was founded to deliver an entirely different caliber
              of residential technology.
            </p>

            <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
              We collaborate with architects, interior specifiers, and discerning luxury homeowners from the
              initial electrical schematics through on-site commissioning. Every touch panel, motorized shade,
              and circadian luminaire is chosen to honor the architectural vision of the space.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsDemoModalOpen(true)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Private Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Matrix */}
        <div className="space-y-8 pt-8 border-t border-theme">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
              Engineering Pillars
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-theme-main">
              Built on Uncompromising Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.stats.map((stat, idx) => {
              const Icon = pillarIcons[idx] || Award;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl zenith-surface border border-theme flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 text-[var(--gold-deep)] dark:text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl font-light text-[var(--gold-deep)] dark:text-[var(--gold)]">
                      {stat.value}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-theme-main">{stat.label}</h4>
                    <p className="text-xs text-theme-secondary mt-1.5 leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Center Callout */}
        <div className="p-8 sm:p-12 rounded-3xl zenith-surface border border-theme shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
              Live Walkthrough Experience
            </span>
            <h4 className="text-2xl font-light text-theme-main">
              Visit the Zenith Experience Center
            </h4>
            <p className="text-xs sm:text-sm text-theme-secondary font-light leading-relaxed">
              Located at {companyData.address.full}. Experience our tactile black-glass switch panels,
              circadian cove lighting, and offline local-first core live in a simulated architectural suite.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Book A Demo
            </Button>
            <Button
              variant="outline"
              size="md"
              href={`tel:${companyData.phone}`}
            >
              Call Us
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
