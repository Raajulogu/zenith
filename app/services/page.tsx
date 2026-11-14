"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-theme-main text-theme-main selection:bg-[var(--gold)] selection:text-black transition-colors duration-300">
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Header */}
      <section className="pt-36 pb-20 bg-theme-secondary/30 border-b border-theme relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse,var(--gold-subtle),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1540px] mx-auto px-6 sm:px-10 relative z-10 text-center space-y-4 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
            Architectural Systems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-theme-main tracking-tight leading-tight">
            Comprehensive <br />
            <span className="italic font-normal">solutions & engineering.</span>
          </h1>
          <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
            From circadian rhythm lighting and motorized shading to encrypted perimeter sentries,
            explore how Zenith integrates complete residential comfort.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown (6 Solutions) */}
      <section className="py-24 max-w-[1540px] mx-auto px-6 sm:px-10 space-y-24">
        {servicesData.map((service, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-6 relative ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] zenith-surface border border-theme shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-light)]">
                      {service.number} &mdash; {service.shortTitle}
                    </span>
                    <h4 className="text-base font-light">{service.tagline}</h4>
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-6 space-y-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
                    Solution {service.number}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-light text-theme-main tracking-tight">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed">
                  {service.longDescription}
                </p>

                <div className="space-y-2.5 pt-2">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-theme-secondary">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-theme">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-xl bg-theme-secondary/50 border border-theme/60 text-xs">
                      <span className="text-theme-secondary block text-[10px]">{spec.label}</span>
                      <span className="font-mono text-theme-main font-medium mt-0.5 block truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsDemoModalOpen(true)}
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Specify for Project
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Hardware Lineup Grid */}
        <div className="pt-16 border-t border-theme space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
              Engineered Hardware
            </span>
            <h3 className="text-3xl sm:text-4xl font-light text-theme-main">
              The Zenith Hardware Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-theme-secondary font-light">
              Architectural black glass, brushed gold chamfers, and commercial DIN-rail reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((prod) => (
              <div
                key={prod.id}
                className="p-6 rounded-3xl zenith-surface border border-theme shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-black/10 border border-theme/40">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
                    {prod.category}
                  </span>
                  <h4 className="text-lg font-medium text-theme-main">{prod.name}</h4>
                  <p className="text-xs text-theme-secondary leading-relaxed font-light">
                    {prod.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-theme/60 text-[11px]">
                  <span className="text-theme-secondary font-medium">Finish: {prod.finish}</span>
                  {prod.specs.map((s, i) => (
                    <div key={i} className="flex justify-between text-theme-secondary">
                      <span>{s.label}</span>
                      <span className="font-mono text-theme-main">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
