import React from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import { Award, Cpu, ShieldCheck, Headphones } from "lucide-react";

export function BrandIntro() {
  const pillarIcons = [Award, Cpu, ShieldCheck, Headphones];

  return (
    <section className="py-24 bg-theme-secondary/40 border-t border-theme transition-colors duration-300">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Photo with Detail Callout */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] zenith-surface shadow-2xl border-theme">
              <Image
                src="/assets/why-panels.jpg"
                alt="Zenith tactile glass panel craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating craftsmanship label */}
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--gold-light)]">
                  Tactile Materiality
                </p>
                <h4 className="text-sm font-light mt-0.5">
                  Solid Black Glass with CNC-Chamfered Brushed Gold
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
                The Philosophy of Zenith
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-theme-main tracking-tight leading-tight">
                Designed to be felt, <br />
                <span className="italic font-normal">never to intrude.</span>
              </h2>
            </div>

            <p className="text-theme-secondary text-sm sm:text-base font-light leading-relaxed">
              At Zenith, we believe an intelligent home should never feel like an electronics store.
              We replace clusters of generic plastic switches and disparate smartphone apps with
              sculptural, architectural touchpoints and whisper-quiet automations that respond
              naturally to your lifestyle.
            </p>

            <p className="text-theme-secondary text-sm sm:text-base font-light leading-relaxed">
              Whether you are relaxing in the evening, screening a film in privacy, or traveling
              overseas, Zenith works autonomously in the background—engineered to commercial-grade
              standards so your home remains effortlessly serene.
            </p>

            {/* 4 Pillars Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {companyData.stats.map((stat, idx) => {
                const Icon = pillarIcons[idx] || Award;
                return (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl zenith-surface border border-theme flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 text-[var(--gold-deep)] dark:text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xl sm:text-2xl font-light text-[var(--gold-deep)] dark:text-[var(--gold)]">
                        {stat.value}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-theme-main">
                        {stat.label}
                      </h4>
                      <p className="text-xs text-theme-secondary mt-1 leading-snug">
                        {stat.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

