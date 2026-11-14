"use client";

import React, { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

interface ServicesSectionProps {
  onOpenConsultation?: () => void;
}

export function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);

  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <section
      id="solutions"
      className="py-28 border-t border-theme bg-theme-main transition-colors duration-300"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
              Integrated Architectural Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-theme-main tracking-tight">
              Bespoke systems, <br />
              <span className="italic font-normal">orchestrated in harmony.</span>
            </h2>
          </div>

          <p className="text-theme-secondary text-sm max-w-md font-light leading-relaxed">
            Every Zenith solution is engineered for architectural discretion, seamlessly integrating
            into masonry, ceilings, and millwork.
          </p>
        </div>

        {/* Varied Composition: Editorial Showcase with Tab Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector Index (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {servicesData.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  type="button"
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 cursor-pointer border flex items-center justify-between group ${
                    isSelected
                      ? "zenith-surface border-[var(--gold)] shadow-md"
                      : "bg-transparent border-transparent hover:bg-theme-secondary/40 text-theme-secondary"
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase ${
                        isSelected
                          ? "text-[var(--gold-deep)] dark:text-[var(--gold)] font-bold"
                          : "text-theme-secondary/70"
                      }`}
                    >
                      {service.number} &mdash; {service.shortTitle}
                    </span>
                    <h3
                      className={`text-base font-medium transition-colors ${
                        isSelected ? "text-theme-main" : "text-theme-secondary group-hover:text-theme-main"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? "text-[var(--gold)] translate-x-1"
                        : "text-theme-secondary/40 group-hover:text-theme-secondary"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Solution In-Depth Showcase (Right 8 cols) */}
          <div className="lg:col-span-8 zenith-surface rounded-3xl p-6 sm:p-10 border border-theme shadow-xl space-y-8 animate-in fade-in duration-300">
            {/* Visual Hero of Solution */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] min-h-[280px] sm:min-h-[380px] border border-theme/60">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--gold-light)]">
                  {activeService.number} &mdash; {activeService.shortTitle}
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-white">
                  {activeService.title}
                </h4>
                <p className="text-xs text-neutral-300 max-w-lg leading-relaxed font-light">
                  {activeService.tagline}
                </p>
              </div>
            </div>

            {/* Description Narrative */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
                {activeService.longDescription}
              </p>
            </div>

            {/* Features & Specs Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-theme">
              {/* Features List */}
              <div className="space-y-3">
                <h5 className="text-xs uppercase tracking-widest font-semibold text-theme-main">
                  Key Capabilities
                </h5>
                <ul className="space-y-2.5">
                  {activeService.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-theme-secondary">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hardware Specifications */}
              <div className="space-y-3">
                <h5 className="text-xs uppercase tracking-widest font-semibold text-theme-main">
                  Engineering Standards
                </h5>
                <div className="space-y-2">
                  {activeService.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-theme-secondary/60 border border-theme/70 flex items-center justify-between text-xs"
                    >
                      <span className="text-theme-secondary">{spec.label}</span>
                      <span className="font-mono text-theme-main font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Consultation Action */}
            {onOpenConsultation && (
              <div className="pt-4 flex items-center justify-between border-t border-theme">
                <span className="text-xs text-theme-secondary">
                  Ready to specify this solution for your architectural plans?
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={onOpenConsultation}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Consult an Engineer
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
