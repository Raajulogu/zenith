"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import {
  ArrowDown,
  ShieldCheck,
  Sun,
  Sunset,
  Film,
  Moon,
  Thermometer,
  Smartphone,
  Wifi,
} from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

type HeroSceneKey = "day" | "evening" | "movie" | "night";

interface HeroSceneConfig {
  name: string;
  lightingLabel: string;
  kelvin: string;
  lightOutput: string;
  temp: string;
  climateMode: string;
  securityStatus: string;
  securityColor: string;
  badgeGlow: string;
}

const HERO_SCENES: Record<HeroSceneKey, HeroSceneConfig> = {
  day: {
    name: "Day Mode",
    lightingLabel: "Circadian Daylight",
    kelvin: "5500K",
    lightOutput: "100%",
    temp: "21.0°C",
    climateMode: "Active Circadian Airflow",
    securityStatus: "Radar Perimeter Armed",
    securityColor: "text-emerald-400",
    badgeGlow: "rgba(255, 230, 160, 0.4)",
  },
  evening: {
    name: "Evening Mode",
    lightingLabel: "Concealed Amber Coves",
    kelvin: "2700K",
    lightOutput: "70%",
    temp: "21.5°C",
    climateMode: "Comfort Lounge Cycle",
    securityStatus: "Villa Sentry Armed",
    securityColor: "text-emerald-400",
    badgeGlow: "rgba(245, 175, 65, 0.45)",
  },
  movie: {
    name: "Movie Mode",
    lightingLabel: "Cinema Indigo Backlight",
    kelvin: "2000K",
    lightOutput: "25%",
    temp: "20.5°C",
    climateMode: "Cinema Silent AC (18dB)",
    securityStatus: "Whole-Villa Locked",
    securityColor: "text-indigo-400",
    badgeGlow: "rgba(99, 102, 241, 0.45)",
  },
  night: {
    name: "Night Mode",
    lightingLabel: "Warm Pathway Beacon",
    kelvin: "2200K",
    lightOutput: "15%",
    temp: "19.5°C",
    climateMode: "Whisper Rest Cycle",
    securityStatus: "Fortress Radar Armed",
    securityColor: "text-amber-400",
    badgeGlow: "rgba(255, 185, 90, 0.35)",
  },
};

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const [activeScene, setActiveScene] = useState<HeroSceneKey>("evening");
  const current = HERO_SCENES[activeScene];

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] sm:min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-theme-main transition-colors duration-300"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. BACKGROUND ARCHITECTURAL LIFESTYLE PHOTOGRAPHY
      ───────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-lifestyle.jpg"
          alt="Resident holding smartphone controlling Zenith residential smart ecosystem"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center brightness-[0.92] dark:brightness-[0.88] contrast-[1.04]"
        />
        {/* Subtle radial focus vignette around her phone */}
        <div
          className="absolute right-[15%] top-[40%] w-[480px] h-[480px] rounded-full pointer-events-none transition-all duration-700 hidden lg:block"
          style={{
            background: `radial-gradient(circle, ${current.badgeGlow} 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
        />

        {/* Editorial Gradients for flawless text legibility while revealing the resident */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/25 dark:from-black/95 dark:via-black/65 dark:to-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-theme-main via-theme-main/60 to-transparent" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. FOREGROUND HERO CONTENT & INTERACTIVE HUD
      ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* ──────────────────────────────────────────
              LEFT: Brand Narrative & Primary CTAs
          ────────────────────────────────────────── */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 text-white">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[var(--gold)]/40 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-ping" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[var(--gold-light)] uppercase">
                Zenith Residential Automation
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.08] drop-shadow-[0_2px_24px_rgba(0,0,0,0.85)]">
              Intelligence, <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[var(--gold-light)]">
                seamlessly integrated.
              </span>
            </h1>

            <p className="text-neutral-200 text-base sm:text-lg font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
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

            {/* Key Hardware Reliability Proof Points (Preserved from old card) */}
            <div className="pt-6 border-t border-white/15">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-mono">
                    Latency
                  </span>
                  <p className="text-sm font-semibold text-[var(--gold-light)] font-mono">
                    &lt; 10 ms
                  </p>
                  <span className="text-[10px] text-neutral-300">Local Encrypted Bus</span>
                </div>

                <div className="p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-mono">
                    Warranty
                  </span>
                  <p className="text-sm font-semibold text-white font-mono">
                    10-Year Built
                  </p>
                  <span className="text-[10px] text-neutral-300">Commercial Grade</span>
                </div>

                <div className="p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-mono">
                    Offline Core
                  </span>
                  <p className="text-sm font-semibold text-emerald-400 font-mono">
                    100% Local
                  </p>
                  <span className="text-[10px] text-neutral-300">Zero Cloud Trap</span>
                </div>

                <div className="p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block font-mono">
                    Showroom
                  </span>
                  <p className="text-sm font-semibold text-white font-mono">
                    Puducherry
                  </p>
                  <span className="text-[10px] text-neutral-300">127, Vellalar St</span>
                </div>
              </div>
            </div>
          </div>

          {/* ──────────────────────────────────────────
              RIGHT: Connected Residence HUD & Floating Beacons
              (Unblocks her hands & phone, framing her in 3D telemetry)
          ────────────────────────────────────────── */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex flex-col justify-end lg:min-h-[580px]">
            
            {/* 1. Floating Top Ceiling Illumination Beacon (Near lighting cove) */}
            <div className="hidden lg:flex absolute top-4 right-4 xl:right-10 items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/65 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-500 hover:scale-105">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)] animate-ping" />
              <Sun className="w-4 h-4 text-[var(--gold)]" />
              <div className="text-left text-xs leading-tight">
                <span className="text-[10px] font-mono text-[var(--gold-light)] uppercase tracking-wider block">
                  Ceiling Coves • {current.kelvin}
                </span>
                <span className="font-light text-neutral-200">
                  {current.lightingLabel} ({current.lightOutput})
                </span>
              </div>
            </div>

            {/* 2. Floating Climate & Airflow Beacon */}
            <div className="hidden xl:flex absolute top-1/4 -left-2 xl:-left-6 items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/65 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-500 hover:scale-105">
              <Thermometer className="w-4 h-4 text-sky-400" />
              <div className="text-left text-xs leading-tight">
                <span className="text-[10px] font-mono text-sky-300 uppercase tracking-wider block">
                  HVAC Climate Sync
                </span>
                <span className="font-light text-neutral-200">
                  {current.temp} • {current.climateMode}
                </span>
              </div>
            </div>

            {/* 3. Floating Perimeter Security Beacon */}
            <div className="hidden lg:flex absolute bottom-6 right-2 xl:right-6 items-center gap-2.5 px-3.5 py-2 rounded-full bg-black/65 backdrop-blur-xl border border-white/20 text-white shadow-2xl transition-all duration-500 hover:scale-105">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div className="text-left text-xs leading-tight">
                <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider block">
                  Autonomous Sentry
                </span>
                <span className="font-light text-neutral-200">
                  {current.securityStatus}
                </span>
              </div>
            </div>

            {/* ──────────────────────────────────────────
                4. THE ZENITH MOBILE APP FLOATING DOCK
                (Positioned near her smartphone — fully interactive)
            ────────────────────────────────────────── */}
            <div className="hidden w-full max-w-xs mx-auto lg:max-w-sm lg:mx-0 lg:ml-auto p-4 sm:p-6 rounded-3xl bg-black/75 backdrop-blur-2xl border border-white/25 text-white shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-4 relative z-20">
              {/* Phone mockup showing Zenith app UI */}
              <Image src="/assets/phone-mockup.svg" alt="Zenith mobile app mockup" width={300} height={600} className="mx-auto mb-3 rounded-lg" />
              
              {/* Phone App Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-deep)] flex items-center justify-center text-black font-semibold shadow-md">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold tracking-wide text-white">
                        Zenith Mobile App
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 block">
                      Local Bus • Instant Control
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  <Wifi className="w-3 h-3" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* CTA Buttons inside the mock app */}
            <div className="flex flex-col gap-2 pt-3">
              <Button variant="primary" size="lg" onClick={onOpenDemo} className="uppercase tracking-wider text-xs font-semibold">
                Book A Private Demo
              </Button>
              <Button variant="glass" size="lg" href="#experience" className="uppercase tracking-wider text-xs font-medium">
                Explore Smart Home
              </Button>
              <Button variant="glass" size="lg" className="uppercase tracking-wider text-xs font-medium">
                Live Demo
              </Button>
            </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-300 font-light">
                  Active Room: <strong className="text-white font-medium">Master Living Suite</strong>
                </span>
                <span className="text-[11px] font-mono text-[var(--gold-light)]">
                  {current.name}
                </span>
              </div>

              {/* Interactive One-Touch Scene Selector */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Tap to preview scene trigger:
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveScene("day")}
                    className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                      activeScene === "day"
                        ? "bg-[var(--gold)] text-black font-semibold shadow-lg scale-102"
                        : "bg-white/10 hover:bg-white/15 text-neutral-300"
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Day</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveScene("evening")}
                    className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                      activeScene === "evening"
                        ? "bg-[var(--gold)] text-black font-semibold shadow-lg scale-102"
                        : "bg-white/10 hover:bg-white/15 text-neutral-300"
                    }`}
                  >
                    <Sunset className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Evening</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveScene("movie")}
                    className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                      activeScene === "movie"
                        ? "bg-[var(--gold)] text-black font-semibold shadow-lg scale-102"
                        : "bg-white/10 hover:bg-white/15 text-neutral-300"
                    }`}
                  >
                    <Film className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Movie</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveScene("night")}
                    className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                      activeScene === "night"
                        ? "bg-[var(--gold)] text-black font-semibold shadow-lg scale-102"
                        : "bg-white/10 hover:bg-white/15 text-neutral-300"
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Night</span>
                  </button>
                </div>
              </div>

              {/* Real-time Subsystem Status Stream */}
              <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Sun className="w-3 h-3 text-[var(--gold)]" />
                    Illumination
                  </span>
                  <span className="text-white font-mono text-[11px]">
                    {current.kelvin} • {current.lightOutput}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Thermometer className="w-3 h-3 text-sky-400" />
                    Climate
                  </span>
                  <span className="text-white font-mono text-[11px]">
                    {current.temp} Target
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Perimeter
                  </span>
                  <span className={`font-mono text-[11px] ${current.securityColor}`}>
                    {current.securityStatus}
                  </span>
                </div>
              </div>

              {/* Bottom Quick Footnote */}
              <div className="pt-2 text-[10px] text-neutral-400 flex items-center justify-between border-t border-white/10">
                <span>Encrypted Mesh Bus</span>
                <span className="text-[var(--gold-light)] font-mono">&lt; 10ms response</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
