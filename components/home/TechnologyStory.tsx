"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Lock,
  Unlock,
  Camera,
  Radio,
  Eye,
  ShieldCheck,
  Cpu,
  Server,
  Activity,
  ArrowRight,
} from "lucide-react";

interface TechnologyStoryProps {
  onOpenConsultation?: () => void;
}

export function TechnologyStory({ onOpenConsultation }: TechnologyStoryProps) {
  // Interactive Simulation State (Preserved from original project functionality)
  const [isLocked, setIsLocked] = useState(true);
  const [lockStatus, setLockStatus] = useState("Deadbolt Engaged • Perimeter Secured");
  const [isFlashingStrobe, setIsFlashingStrobe] = useState(false);
  const [currentTime, setCurrentTime] = useState("21:30:00");
  const [activeTab, setActiveTab] = useState<"security" | "architecture">("security");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(" ")[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleLock = () => {
    if (isLocked) {
      setIsLocked(false);
      setLockStatus("Disengaged • Entry Permitted");
      // Auto-relock after 6s (preserves authentic security simulation)
      setTimeout(() => {
        setIsLocked(true);
        setLockStatus("Auto-Relocked • Deadbolt Engaged");
      }, 6000);
    } else {
      setIsLocked(true);
      setLockStatus("Deadbolt Engaged • Perimeter Secured");
    }
  };

  const handleFlashStrobe = () => {
    setIsFlashingStrobe(true);
    setTimeout(() => setIsFlashingStrobe(false), 1600);
  };

  return (
    <section
      id="technology"
      className="py-28 border-t border-theme bg-theme-secondary/30 transition-colors duration-300"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme text-xs uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
            <Cpu className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Engineering & Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-theme-main tracking-tight">
            Local-first intelligence. <br />
            <span className="italic font-normal">Fortress-grade security.</span>
          </h2>

          <p className="text-theme-secondary text-sm sm:text-base font-light leading-relaxed">
            Discover how Zenith hardware coordinates real-time residential sentry defense and autonomous
            automation without relying on vulnerable cloud servers or external internet.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-theme-surface border border-theme">
            <button
              onClick={() => setActiveTab("security")}
              type="button"
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === "security"
                  ? "bg-[var(--gold)] text-neutral-950 font-semibold shadow-sm"
                  : "text-theme-secondary hover:text-theme-main"
              }`}
            >
              Interactive Security Sentry
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              type="button"
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === "architecture"
                  ? "bg-[var(--gold)] text-neutral-950 font-semibold shadow-sm"
                  : "text-theme-secondary hover:text-theme-main"
              }`}
            >
              Local-First Core Architecture
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Security Sentry */}
        {activeTab === "security" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Visual Interactive Viewport */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] min-h-[380px] sm:min-h-[500px] zenith-surface border border-theme shadow-2xl">
              <Image
                src="/assets/security-smart.jpg"
                alt="Zenith Villa Security Sentry Simulation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1400px"
                className={`object-cover object-center transition-all duration-300 ${
                  isFlashingStrobe ? "brightness-150 contrast-125" : ""
                }`}
              />

              {/* Flash Strobe Deterrence Overlay */}
              {isFlashingStrobe && (
                <div className="absolute inset-0 bg-white/40 animate-ping pointer-events-none" />
              )}

              {/* Gradient Vignettes */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/75 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

              {/* Top Camera HUD Stream */}
              <div className="absolute top-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4 text-white">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-emerald-400">2K HDR Sentry Active</span>
                  <span className="text-neutral-400 border-l border-white/20 pl-2 font-mono">
                    [{currentTime}]
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-xs font-mono text-neutral-300">
                    H.265 Local • 0 Threats
                  </span>
                </div>
              </div>

              {/* Bottom Interactive Lock & Strobe Controls Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-white space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-light)]">
                    Main Portal Biometric Status
                  </p>
                  <p className="text-sm sm:text-base font-light">{lockStatus}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleToggleLock}
                    type="button"
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg ${
                      isLocked
                        ? "bg-amber-400 hover:bg-amber-300 text-black shadow-amber-500/20"
                        : "bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-500/20"
                    }`}
                  >
                    {isLocked ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    <span>{isLocked ? "Unlock Door" : "Engage Lock"}</span>
                  </button>

                  <button
                    onClick={handleFlashStrobe}
                    type="button"
                    className="px-5 py-2.5 rounded-full bg-red-600/30 hover:bg-red-600/50 text-red-200 border border-red-500/40 text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md shadow-lg"
                  >
                    <Eye className="w-4 h-4 text-red-400" />
                    <span>Deterrence Strobe</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sentry Capabilities 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl zenith-surface border border-theme space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[var(--gold)]/10 text-[var(--gold-deep)] dark:text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20 mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-medium text-theme-main">Biometric Deadbolt Sentry</h4>
                <p className="text-xs text-theme-secondary leading-relaxed">
                  Semiconductor fingerprint sensors verify authorized residents in under 0.3 seconds.
                  Motorized deadbolts automatically engage when doors close.
                </p>
              </div>

              <div className="p-6 rounded-2xl zenith-surface border border-theme space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 mb-3">
                  <Radio className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-medium text-theme-main">Millimeter-Wave Radar</h4>
                <p className="text-xs text-theme-secondary leading-relaxed">
                  High-frequency radar tracking maps human motion across boundaries without false alarms
                  triggered by pets, rain, or swaying landscaping.
                </p>
              </div>

              <div className="p-6 rounded-2xl zenith-surface border border-theme space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[var(--gold)]/10 text-[var(--gold-deep)] dark:text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20 mb-3">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-medium text-theme-main">Encrypted Local Storage</h4>
                <p className="text-xs text-theme-secondary leading-relaxed">
                  Surveillance footage is recorded locally with AES-256 encryption. Zero monthly cloud
                  subscriptions, zero data scraping, complete household privacy.
                </p>
              </div>
            </div>
            {/* Consultation Action */}
            {onOpenConsultation && (
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  type="button"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)] hover:underline cursor-pointer"
                >
                  Schedule Private System Engineering Consultation <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Local-First Core Architecture */}
        {activeTab === "architecture" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
                  Architectural Autonomy
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-theme-main tracking-tight">
                  Why Local-First Architecture Matters
                </h3>
              </div>

              <p className="text-sm text-theme-secondary font-light leading-relaxed">
                Most consumer smart devices rely on external cloud servers. If your internet goes down,
                or a cloud provider suffers an outage, switches fail and automations stall.
              </p>

              <p className="text-sm text-theme-secondary font-light leading-relaxed">
                Zenith is engineered on a local-first bus architecture. The Zenith Core Hub processes all
                lighting commands, motorized shading schedules, and security responses locally in hardware.
                You enjoy instantaneous sub-10ms response and uninterrupted operation.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl zenith-surface border border-theme flex items-start gap-3">
                  <Server className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-medium text-theme-main">Zero Cloud Dependency</h5>
                    <p className="text-[11px] text-theme-secondary mt-0.5">
                      Your switches, scenes, and alarms work 100% offline without internet.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl zenith-surface border border-theme flex items-start gap-3">
                  <Activity className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-medium text-theme-main">Sub-10ms Switch Actuation</h5>
                    <p className="text-[11px] text-theme-secondary mt-0.5">
                      Direct hardware communication eliminates the lag common in wireless cloud devices.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl zenith-surface border border-theme flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-medium text-theme-main">Absolute Household Privacy</h5>
                    <p className="text-[11px] text-theme-secondary mt-0.5">
                      No video streams or lifestyle habits are ever monetized or uploaded to third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Diagram / Hardware Shot */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] zenith-surface border border-theme shadow-xl">
                <Image
                  src="/assets/zenith-house.jpg"
                  alt="Zenith integrated luxury villa architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-light)]">
                    Engineered Infrastructure
                  </span>
                  <h4 className="text-base font-light">
                    Concealed Wiring, DIN-Rail Distribution & Offline Intelligence
                  </h4>
                </div>
              </div>
            </div>
            {/* Consultation Action */}
            {onOpenConsultation && (
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  type="button"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)] hover:underline cursor-pointer"
                >
                  Schedule Private System Engineering Consultation <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
