"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ArrowDown, Sparkles, ShieldCheck, Sun, Activity } from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-theme-main transition-colors duration-300"
    >
      {/* Background Architectural Image (Dark & moody or soft light architectural) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-lifestyle.jpg"
          alt="Zenith Luxury Living Space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 dark:brightness-90 contrast-[1.03]"
        />
        {/* Editorial Gradients for flawless text legibility across light & dark themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20 dark:from-black/95 dark:via-black/60 dark:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-theme-main to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline & Narrative */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6 text-white">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[var(--gold)]/40 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-ping" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[var(--gold-light)] uppercase">
                Zenith Residential Automation
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08] drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              Intelligence, <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[var(--gold-light)]">
                seamlessly integrated.
              </span>
            </h1>

            <p className="text-neutral-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Transform your residence into a smarter, safer, and effortlessly comfortable sanctuary.
              Zenith harmonizes circadian lighting, motorized shading, climate, and proactive security
              into one dependable, local-first ecosystem.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenDemo}
                className="uppercase tracking-wider text-xs font-semibold"
              >
                Book A Private Demo
              </Button>

              <Button
                variant="glass"
                size="lg"
                href="#experience"
                className="uppercase tracking-wider text-xs font-medium"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                Experience Smart Home
              </Button>
            </div>

            {/* Live Core HUD Readout */}
            <div className="pt-8 border-t border-white/15 max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-300 mb-2.5 font-semibold">
                Autonomous Residential Telemetry
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-black/65 border border-white/15 text-xs text-neutral-200 backdrop-blur-md flex items-center gap-2">
                  <Sun className="w-3.5 h-3.5 text-[var(--gold)]" />
                  <span>Kelvin Sync: <strong>Circadian 2700K</strong></span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black/65 border border-white/15 text-xs text-neutral-200 backdrop-blur-md flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sentry: <strong className="text-emerald-400">ARMED</strong></span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black/65 border border-white/15 text-xs text-neutral-200 backdrop-blur-md flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[var(--gold)]" />
                  <span>Offline Core: <strong className="text-emerald-400">ACTIVE</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Architectural Highlight Card */}
          <div className="lg:col-span-4 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-black/70 backdrop-blur-xl border border-white/20 text-white shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[var(--gold-light)] uppercase tracking-widest block">
                    System Architecture
                  </span>
                  <h4 className="text-lg font-light text-white">Local-First Reliability</h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)] text-[var(--gold)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                Zenith hardware communicates through encrypted local bus architecture. Your switches,
                scenes, and security continue functioning with instantaneous response even if the external
                internet drops.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/10">
                  <span className="text-neutral-400">Switch Latency</span>
                  <span className="font-mono text-[var(--gold-light)]">&lt; 10 ms</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/10">
                  <span className="text-neutral-400">Hardware Warranty</span>
                  <span className="text-white">10-Year Built</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/10">
                  <span className="text-neutral-400">Tactile Finishes</span>
                  <span className="text-white">Black Glass & Brushed Gold</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-neutral-400">Showroom</span>
                  <span className="text-white">127, Vellalar Street</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

