"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sun,
  ShieldCheck,
  Smartphone,
  SlidersHorizontal,
  Lightbulb,
  Blinds,
  Volume2,
  Thermometer,
  Lock,
  Unlock,
  Camera,
  Bell,
  Activity,
  Zap,
  Award,
  Headphones,
  CheckCircle2,
  X,
  Sparkles,
  ArrowRight,
  Menu,
  Play,
  Pause,
  Plus,
  Minus,
  Radio,
  Eye,
} from "lucide-react";

export default function ZenithLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Villa",
    query: "",
  });

  // ─────────────────────────────────────────────────────────────
  // 1. HERO ORBITAL STATE
  // ─────────────────────────────────────────────────────────────
  const [activeHeroFeature, setActiveHeroFeature] = useState<number>(0);

  // ─────────────────────────────────────────────────────────────
  // 2. CONTROL SECTION: LIVE AUTOMATION SIMULATION STATE
  // ─────────────────────────────────────────────────────────────
  const [activeControlPin, setActiveControlPin] = useState<number | null>(2); // Default to Lighting
  const [roomLightingScene, setRoomLightingScene] = useState<"sunset" | "cinema" | "daylight" | "night">("sunset");
  const [lightingDimmer, setLightingDimmer] = useState<number>(85);
  const [roomTemperature, setRoomTemperature] = useState<number>(21.5);
  const [climateMode, setClimateMode] = useState<"cool" | "eco" | "warm">("cool");
  const [curtainPosition, setCurtainPosition] = useState<number>(75); // 0 = Closed, 100 = Fully Open
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(true);
  const [audioVolume, setAudioVolume] = useState<number>(68);

  // ─────────────────────────────────────────────────────────────
  // 3. SECURITY SECTION: LIVE AUTOMATION SIMULATION STATE
  // ─────────────────────────────────────────────────────────────
  const [activeSecurityPin, setActiveSecurityPin] = useState<number | null>(1); // Default to Lock
  const [isDoorLocked, setIsDoorLocked] = useState<boolean>(true);
  const [lockStatusMessage, setLockStatusMessage] = useState<string>("Deadbolt Engaged • Touch to Unlock");
  const [securityArmMode, setSecurityArmMode] = useState<"away" | "home" | "night">("away");
  const [isFlashingStrobe, setIsFlashingStrobe] = useState<boolean>(false);
  const [currentTimeString, setCurrentTimeString] = useState<string>("21:30:00");

  // Live timer for camera simulation HUD
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTimeString(now.toTimeString().split(" ")[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleLock = () => {
    if (isDoorLocked) {
      setIsDoorLocked(false);
      setLockStatusMessage("Disengaged • Entry Allowed");
      // Auto relock after 6s for authentic automation feel
      setTimeout(() => {
        setIsDoorLocked(true);
        setLockStatusMessage("Auto-Relocked • Deadbolt Engaged");
      }, 6000);
    } else {
      setIsDoorLocked(true);
      setLockStatusMessage("Deadbolt Engaged • Front Entry Secured");
    }
  };

  const handleFlashStrobe = () => {
    setIsFlashingStrobe(true);
    setTimeout(() => setIsFlashingStrobe(false), 1600);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setDemoModalOpen(false);
      setFormData({ name: "", email: "", phone: "", projectType: "Villa", query: "" });
    }, 2800);
  };

  const heroFeatures = [
    {
      id: 0,
      title: "Comfort",
      icon: Sun,
      tag: "Circadian Warmth & Climate",
      metric: "21.5°C Optimal",
      description: "Auto-balances room warmth and light tone seamlessly with natural sunrise and sunset rhythms.",
    },
    {
      id: 1,
      title: "Security",
      icon: ShieldCheck,
      tag: "24/7 Boundary Sentry",
      metric: "Perimeter Armed",
      description: "Encrypted biometric door entry and multi-radar sensors that guard your villa without false alarms.",
    },
    {
      id: 2,
      title: "Convenience",
      icon: Smartphone,
      tag: "One-Touch Whole Home",
      metric: "14 Devices Synced",
      description: "Master scenes like 'Good Night' or 'Cinema' synchronize every light, shade, and lock instantly.",
    },
    {
      id: 3,
      title: "Smart Control",
      icon: SlidersHorizontal,
      tag: "Tactile Glass Panels",
      metric: "Local-First Core",
      description: "Architectural wall panels with brushed gold chamfers that operate even if the internet goes offline.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#c9a84c] selection:text-black">
      {/* ───────────────────────────────────────────────────────────
          1. NAVIGATION HEADER
      ─────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1540px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-9 w-32 sm:w-36">
              <Image
                src="/assets/ZENITH-LOGO.png"
                alt="Zenith"
                fill
                className="object-contain filter brightness-0 invert"
                priority
              />
            </div>
            <span className="hidden sm:inline-block text-[11px] font-light tracking-[0.25em] text-[#c9a84c] uppercase pl-2 border-l border-white/20">
              Lumiwaves
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-neutral-300">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#why-zenith" className="hover:text-white transition-colors">
              Why Zenith
            </a>
            <a href="#control" className="hover:text-white transition-colors">
              Interactive Room
            </a>
            <a href="#security" className="hover:text-white transition-colors">
              Live Security
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-1">
                <span>Solutions</span>
                <span className="text-[10px] text-neutral-500 group-hover:text-white">▼</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 py-2 bg-[#121212] border border-white/10 rounded-xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                <a
                  href="#control"
                  className="block px-4 py-2.5 text-xs text-neutral-300 hover:bg-white/10 hover:text-white"
                >
                  Residential Automation
                </a>
                <a
                  href="#control"
                  className="block px-4 py-2.5 text-xs text-neutral-300 hover:bg-white/10 hover:text-white"
                >
                  Architectural Lighting
                </a>
                <a
                  href="#security"
                  className="block px-4 py-2.5 text-xs text-neutral-300 hover:bg-white/10 hover:text-white"
                >
                  Integrated Security
                </a>
              </div>
            </div>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.5)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span className="relative z-10">Book A Demo</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-b border-white/10 px-6 py-5 flex flex-col gap-4 text-sm font-light">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Home
            </a>
            <a
              href="#why-zenith"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Why Zenith
            </a>
            <a
              href="#control"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Interactive Room
            </a>
            <a
              href="#security"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white py-1"
            >
              Live Security
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setDemoModalOpen(true);
              }}
              className="w-full mt-2 py-3 rounded-full bg-white text-black text-center text-xs font-medium uppercase tracking-wider"
            >
              Book A Demo
            </button>
          </div>
        )}
      </header>

      {/* ───────────────────────────────────────────────────────────
          2. HERO SECTION (Item 1) - Crisp, Vibrant & Interactive
      ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Image: Vivid, High-Resolution Luxury Penthouse (NO HEAVY MUDDY OVERLAY) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-lifestyle.jpg"
            alt="Zenith Luxury Smart Living"
            fill
            priority
            className="object-cover object-center brightness-105 contrast-102"
          />
          {/* Subtle gradient specifically on the left for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1540px] mx-auto px-6 sm:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-[#c9a84c]/30 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-ping" />
                <span className="text-[11px] font-medium tracking-[0.2em] text-[#c9a84c] uppercase">
                  Zenith Residential Automation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                Intelligent Living, <br />
                <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#c9a84c]">
                  Simplified.
                </span>
              </h1>

              <p className="text-neutral-200 text-base sm:text-lg font-light leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                Transform your home into a smarter, safer, and effortlessly luxurious space with
                Zenith&apos;s bespoke residential automation solutions.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_8px_30px_rgba(201,168,76,0.45)] hover:-translate-y-0.5 cursor-pointer shadow-xl"
                >
                  Book A Demo
                </button>
                <a
                  href="#control"
                  className="px-7 py-3.5 rounded-full border border-white/50 bg-black/40 text-white font-light text-sm tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-0.5 shadow-lg"
                >
                  Experience Smart Home
                </a>
              </div>

              {/* Live Interactive Dashboard Readout */}
              <div className="pt-4 border-t border-white/15">
                <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 mb-2 font-medium">
                  Live System Synchronization
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs text-neutral-200 backdrop-blur-md flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Scene: <strong>{roomLightingScene.toUpperCase()}</strong></span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs text-neutral-200 backdrop-blur-md flex items-center gap-2">
                    <Thermometer className="w-3.5 h-3.5 text-[#c9a84c]" />
                    <span>Climate: <strong>{roomTemperature.toFixed(1)}°C</strong></span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs text-neutral-200 backdrop-blur-md flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c9a84c]" />
                    <span>Security: <strong className="text-emerald-400">ARMED</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Orbital Diagram (Exact Match to Screenshot, Pinned & Animated) */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
                {/* Orbital Geometric Track Rings */}
                <div className="absolute inset-0 rounded-full border border-white/20 animate-breathe pointer-events-none" />
                <div className="absolute inset-8 rounded-full border border-dashed border-[#c9a84c]/30 pointer-events-none" />
                <div className="absolute inset-20 rounded-full border border-white/15 pointer-events-none" />

                {/* Central Focus Core */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-panel flex flex-col items-center justify-center p-3 text-center border border-[#c9a84c]/60 shadow-[0_0_50px_rgba(201,168,76,0.35)]">
                  <div className="w-3 h-3 rounded-full bg-[#c9a84c] mb-1 animate-ping" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9a84c]">
                    Zenith
                  </span>
                  <span className="text-[10px] text-neutral-200 font-light">
                    Smart Core
                  </span>
                </div>

                {/* 4 Orbital Feature Nodes (Comfort, Security, Convenience, Smart Control) */}
                {/* Node 1: Comfort (Top-Left) */}
                <button
                  onClick={() => setActiveHeroFeature(0)}
                  className="absolute top-1 left-2 sm:top-2 sm:left-4 z-20 flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                      activeHeroFeature === 0
                        ? "bg-[#c9a84c] text-black scale-110 shadow-[0_0_35px_rgba(201,168,76,0.8)]"
                        : "glass-pill text-white hover:bg-white hover:text-black hover:scale-105"
                    }`}
                  >
                    <Sun className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white drop-shadow-lg">
                    Comfort
                  </span>
                </button>

                {/* Node 2: Security (Bottom-Left) */}
                <button
                  onClick={() => setActiveHeroFeature(1)}
                  className="absolute bottom-2 left-16 sm:bottom-4 sm:left-24 z-20 flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                      activeHeroFeature === 1
                        ? "bg-[#c9a84c] text-black scale-110 shadow-[0_0_35px_rgba(201,168,76,0.8)]"
                        : "glass-pill text-white hover:bg-white hover:text-black hover:scale-105"
                    }`}
                  >
                    <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white drop-shadow-lg">
                    Security
                  </span>
                </button>

                {/* Node 3: Convenience (Bottom-Right) */}
                <button
                  onClick={() => setActiveHeroFeature(2)}
                  className="absolute bottom-2 right-16 sm:bottom-4 sm:right-24 z-20 flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                      activeHeroFeature === 2
                        ? "bg-[#c9a84c] text-black scale-110 shadow-[0_0_35px_rgba(201,168,76,0.8)]"
                        : "glass-pill text-white hover:bg-white hover:text-black hover:scale-105"
                    }`}
                  >
                    <Smartphone className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white drop-shadow-lg">
                    Convenience
                  </span>
                </button>

                {/* Node 4: Smart Control (Top-Right) */}
                <button
                  onClick={() => setActiveHeroFeature(3)}
                  className="absolute top-1 right-2 sm:top-2 sm:right-4 z-20 flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${
                      activeHeroFeature === 3
                        ? "bg-[#c9a84c] text-black scale-110 shadow-[0_0_35px_rgba(201,168,76,0.8)]"
                        : "glass-pill text-white hover:bg-white hover:text-black hover:scale-105"
                    }`}
                  >
                    <SlidersHorizontal className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-white drop-shadow-lg">
                    Smart Control
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Active Feature Interactive Banner Under Hero */}
          <div className="mt-12 p-4 sm:p-5 rounded-2xl glass-panel border border-[#c9a84c]/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c9a84c] text-black flex items-center justify-center font-bold">
                {activeHeroFeature + 1}
              </div>
              <div>
                <p className="text-xs text-[#c9a84c] uppercase font-semibold tracking-wider">
                  {heroFeatures[activeHeroFeature].tag}
                </p>
                <p className="text-sm text-neutral-200 font-light">
                  {heroFeatures[activeHeroFeature].description}
                </p>
              </div>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs text-white border border-white/20 whitespace-nowrap">
              {heroFeatures[activeHeroFeature].metric}
            </span>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. BLACK BACKGROUND SECTION: WHY ZENITH HOME AUTOMATION? (Item 2)
      ─────────────────────────────────────────────────────────── */}
      <section id="why-zenith" className="relative bg-black py-28 border-t border-neutral-900 overflow-hidden">
        {/* Soft Gold Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#c9a84c]">
              The Art of Living Intelligently
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Why Choose Zenith Home Automation?
            </h2>
            <p className="text-neutral-400 text-base font-light leading-relaxed">
              Experience the perfect blend of architectural luxury, reliable technology, and
              effortless daily convenience tailored to your home.
            </p>
          </div>

          {/* 4 Cards Grid with Expanding Rings on Hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Comfort */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/90 border border-transparent hover:border-white/10">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-115 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]">
                <Sun className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Atmosphere & Comfort</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                Seamless automatic control of circadian lighting, multi-zone temperature, and tailored
                room ambiance.
              </p>
            </div>

            {/* Card 2: Security */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/90 border border-transparent hover:border-white/10">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-115 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]">
                <ShieldCheck className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Proactive Security</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                Intelligent perimeter sensing, biometric door access, and real-time alerts without
                disruptive false alarms.
              </p>
            </div>

            {/* Card 3: Convenience */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/90 border border-transparent hover:border-white/10">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-115 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]">
                <SlidersHorizontal className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Effortless Convenience</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                One intuitive app, architectural touch panels, and natural voice commands that work as
                one unified system.
              </p>
            </div>

            {/* Card 4: Energy Efficiency */}
            <div className="group text-center flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-950/90 border border-transparent hover:border-white/10">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-115 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.35)]">
                <Zap className="w-10 h-10 text-white group-hover:text-[#c9a84c] transition-colors" />
              </div>
              <h3 className="text-xl font-normal text-white mb-2">Intelligent Efficiency</h3>
              <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-[240px]">
                Smart daylight harvesting and automated HVAC scheduling to minimize power waste without
                compromising luxury.
              </p>
            </div>
          </div>

          {/* Zenith Hardware Assurance Bar */}
          <div className="mt-20 border border-white/10 rounded-2xl p-6 sm:p-8 bg-neutral-950/80 backdrop-blur-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Award className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">10-Year Warranty</h4>
                  <p className="text-xs text-neutral-400">Engineered to outlast standard home electronics</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Activity className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Local-First Architecture</h4>
                  <p className="text-xs text-neutral-400">Continues operating smoothly even if internet drops</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Sparkles className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Tactile Black Glass</h4>
                  <p className="text-xs text-neutral-400">Ultra-thin bezels with brushed gold chamfers</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#c9a84c]/10 flex items-center justify-center border border-[#c9a84c]/30 shrink-0">
                  <Headphones className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Dedicated Specialist</h4>
                  <p className="text-xs text-neutral-400">Direct engineering contact, not an automated queue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. SECTION 3: CONTROL YOUR ENTIRE HOME — EFFORTLESSLY (Item 3.i)
             Interactive Automation: Real Lighting Transitions, Thermostat, Motorized Curtains
      ─────────────────────────────────────────────────────────── */}
      <section id="control" className="relative min-h-[920px] lg:min-h-[1000px] flex flex-col justify-between overflow-hidden border-t border-neutral-900 bg-neutral-950">
        {/* Background Image: Vivid, High-Definition Luxury Penthouse (VIBRANT & BRIGHT) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/control-home.jpg"
            alt="Zenith Luxury Living Room Control Experience"
            fill
            className="object-cover object-center brightness-105 contrast-102"
          />

          {/* Dynamic Live Lighting Mode Overlay (Simulates actual automation changing the room ambiance) */}
          <div
            className={`absolute inset-0 transition-all duration-700 pointer-events-none ${
              roomLightingScene === "sunset"
                ? "bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,160,40,0.18),transparent_65%)]"
                : roomLightingScene === "cinema"
                ? "bg-black/55 backdrop-brightness-75"
                : roomLightingScene === "daylight"
                ? "bg-[radial-gradient(ellipse_at_30%_20%,rgba(240,245,255,0.22),transparent_70%)]"
                : "bg-black/40"
            }`}
          />

          {/* Subtle top/bottom vignettes for navigation & contrast */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Section Header */}
        <div className="relative z-20 text-center pt-14 px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/70 border border-white/20 text-[#c9a84c] text-xs uppercase tracking-widest backdrop-blur-md mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Interactive Living Room Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Control Your Entire Home — Effortlessly
          </h2>
          <p className="text-neutral-200 text-sm sm:text-base font-light tracking-wide mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Click on any product pin below to test the live smart home automation response.
          </p>
        </div>

        {/* Pinned Hardware Markers (STABLE ANCHORS - NEVER SHIFT ON CLICK) */}
        <div className="relative z-20 w-full max-w-[1540px] flex-1 mx-auto px-6 h-[500px] sm:h-[580px]">
          {/* PIN 1: CLIMATE CONTROL (Wall Touch Panel - Left) */}
          <div className="absolute top-[35%] left-[8%] sm:top-[38%] sm:left-[11%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setActiveControlPin(activeControlPin === 1 ? null : 1)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  activeControlPin === 1
                    ? "bg-[#c9a84c] text-black scale-125 shadow-[0_0_25px_rgba(201,168,76,0.9)]"
                    : "bg-white text-black hover:bg-[#c9a84c] hover:scale-110"
                }`}
              >
                <Thermometer className="w-5 h-5" />
              </div>
              <span className="mt-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                Climate: {roomTemperature.toFixed(1)}°C
              </span>
            </button>
          </div>

          {/* PIN 2: LIGHTING CONTROL (Chandelier / Chandelier cove - Top Right) */}
          <div className="absolute top-[20%] left-[68%] sm:top-[22%] sm:left-[70%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setActiveControlPin(activeControlPin === 2 ? null : 2)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  activeControlPin === 2
                    ? "bg-[#c9a84c] text-black scale-125 shadow-[0_0_25px_rgba(201,168,76,0.9)]"
                    : "bg-white text-black hover:bg-[#c9a84c] hover:scale-110"
                }`}
              >
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="mt-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                Lighting: {lightingDimmer}%
              </span>
            </button>
          </div>

          {/* PIN 3: CURTAIN CONTROL (Motorized Windows - Middle Left) */}
          <div className="absolute top-[28%] left-[24%] sm:top-[29%] sm:left-[23%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setActiveControlPin(activeControlPin === 3 ? null : 3)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  activeControlPin === 3
                    ? "bg-[#c9a84c] text-black scale-125 shadow-[0_0_25px_rgba(201,168,76,0.9)]"
                    : "bg-white text-black hover:bg-[#c9a84c] hover:scale-110"
                }`}
              >
                <Blinds className="w-5 h-5" />
              </div>
              <span className="mt-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                Shades: {curtainPosition}%
              </span>
            </button>
          </div>

          {/* PIN 4: AUDIO & VIDEO (Smart Hub Speaker on Center Table) */}
          <div className="absolute top-[68%] left-[55%] sm:top-[70%] sm:left-[57%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setActiveControlPin(activeControlPin === 4 ? null : 4)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  activeControlPin === 4
                    ? "bg-[#c9a84c] text-black scale-125 shadow-[0_0_25px_rgba(201,168,76,0.9)]"
                    : "bg-white text-black hover:bg-[#c9a84c] hover:scale-110"
                }`}
              >
                <Volume2 className="w-5 h-5" />
              </div>
              <span className="mt-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                Sound: {isPlayingAudio ? "Playing" : "Paused"}
              </span>
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            LIVE INTERACTIVE SMART HOME CONSOLE DOCK (Real Automation Feel)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative z-30 max-w-[1200px] w-full mx-auto px-6 pb-12">
          <div className="rounded-2xl glass-panel border border-white/20 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            {/* Header Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                  Active System:
                </span>
                <span className="text-xs uppercase tracking-wider text-[#c9a84c] font-bold">
                  {activeControlPin === 1
                    ? "Multi-Zone Climate"
                    : activeControlPin === 2
                    ? "Circadian Lighting & Scenes"
                    : activeControlPin === 3
                    ? "Motorized Drapery"
                    : "Lossless Audio Hub"}
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveControlPin(1)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    activeControlPin === 1 ? "bg-[#c9a84c] text-black font-semibold" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Climate
                </button>
                <button
                  onClick={() => setActiveControlPin(2)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    activeControlPin === 2 ? "bg-[#c9a84c] text-black font-semibold" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Lighting
                </button>
                <button
                  onClick={() => setActiveControlPin(3)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    activeControlPin === 3 ? "bg-[#c9a84c] text-black font-semibold" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Curtains
                </button>
                <button
                  onClick={() => setActiveControlPin(4)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    activeControlPin === 4 ? "bg-[#c9a84c] text-black font-semibold" : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Audio Hub
                </button>
              </div>
            </div>

            {/* Live Controller Body */}
            <div className="pt-5">
              {/* 1. CLIMATE CONTROLLER */}
              {activeControlPin === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Temperature Tuning</h4>
                    <p className="text-xs text-neutral-400">
                      Wall Touch Panel synchronization with dual HVAC zones.
                    </p>
                  </div>

                  {/* Temp adjuster */}
                  <div className="flex items-center justify-center gap-5 bg-black/40 rounded-xl p-3 border border-white/10">
                    <button
                      onClick={() => setRoomTemperature(Math.max(18, roomTemperature - 0.5))}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold font-mono text-[#c9a84c]">
                      {roomTemperature.toFixed(1)}°C
                    </span>
                    <button
                      onClick={() => setRoomTemperature(Math.min(26, roomTemperature + 0.5))}
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Mode select */}
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setClimateMode("cool")}
                      className={`px-3 py-2 rounded-lg text-xs cursor-pointer ${
                        climateMode === "cool" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400" : "bg-white/10 text-neutral-400"
                      }`}
                    >
                      ❄️ Cool Active
                    </button>
                    <button
                      onClick={() => setClimateMode("eco")}
                      className={`px-3 py-2 rounded-lg text-xs cursor-pointer ${
                        climateMode === "eco" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400" : "bg-white/10 text-neutral-400"
                      }`}
                    >
                      🌿 Eco Auto
                    </button>
                    <button
                      onClick={() => setClimateMode("warm")}
                      className={`px-3 py-2 rounded-lg text-xs cursor-pointer ${
                        climateMode === "warm" ? "bg-amber-500/20 text-amber-300 border border-amber-400" : "bg-white/10 text-neutral-400"
                      }`}
                    >
                      🔥 Warm Cove
                    </button>
                  </div>
                </div>
              )}

              {/* 2. LIGHTING CONTROLLER (Directly Changes the Room Image Lighting) */}
              {activeControlPin === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Preset Mood Scenes</h4>
                    <p className="text-xs text-neutral-400">
                      Watch the room lighting change in real-time when selecting a scene.
                    </p>
                  </div>

                  {/* Scene Mode Buttons */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      onClick={() => {
                        setRoomLightingScene("sunset");
                        setLightingDimmer(85);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                        roomLightingScene === "sunset"
                          ? "bg-[#c9a84c] text-black shadow-[0_0_15px_rgba(201,168,76,0.6)]"
                          : "bg-white/10 text-neutral-300 hover:bg-white/20"
                      }`}
                    >
                      🌅 Warm Sunset
                    </button>
                    <button
                      onClick={() => {
                        setRoomLightingScene("cinema");
                        setLightingDimmer(25);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                        roomLightingScene === "cinema"
                          ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                          : "bg-white/10 text-neutral-300 hover:bg-white/20"
                      }`}
                    >
                      🎬 Cinema Night
                    </button>
                    <button
                      onClick={() => {
                        setRoomLightingScene("daylight");
                        setLightingDimmer(100);
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                        roomLightingScene === "daylight"
                          ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                          : "bg-white/10 text-neutral-300 hover:bg-white/20"
                      }`}
                    >
                      ☀️ Crisp Daylight
                    </button>
                  </div>

                  {/* Dimmer Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-neutral-300">
                      <span>Smooth Dimmer</span>
                      <span className="font-mono text-[#c9a84c] font-bold">{lightingDimmer}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={lightingDimmer}
                      onChange={(e) => setLightingDimmer(Number(e.target.value))}
                      className="w-full accent-[#c9a84c] cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* 3. CURTAIN CONTROLLER */}
              {activeControlPin === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Motorized Drapery Glide</h4>
                    <p className="text-xs text-neutral-400">
                      Whisper-quiet motorized tracks synced with solar positioning.
                    </p>
                  </div>

                  {/* Position Toggle */}
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => setCurtainPosition(100)}
                      className={`px-3 py-2 rounded-lg text-xs cursor-pointer ${
                        curtainPosition === 100 ? "bg-[#c9a84c] text-black font-semibold" : "bg-white/10 text-neutral-300"
                      }`}
                    >
                      Open 100%
                    </button>
                    <button
                      onClick={() => setCurtainPosition(50)}
                      className={`px-3 py-2 rounded-lg text-xs cursor-pointer ${
                        curtainPosition === 50 ? "bg-[#c9a84c] text-black font-semibold" : "bg-white/10 text-neutral-300"
                      }`}
                    >
                      Half 50%
                    </button>
                    <button
                      onClick={() => setCurtainPosition(0)}
                      className={`px-3 py-2 rounded-lg text-xs cursor-pointer ${
                        curtainPosition === 0 ? "bg-[#c9a84c] text-black font-semibold" : "bg-white/10 text-neutral-300"
                      }`}
                    >
                      Closed (Privacy)
                    </button>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-neutral-300">
                      <span>Drapery Extension</span>
                      <span className="font-mono text-[#c9a84c] font-bold">{curtainPosition}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-[#c9a84c] transition-all duration-500"
                        style={{ width: `${curtainPosition}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 4. AUDIO CONTROLLER */}
              {activeControlPin === 4 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Lossless Multi-Zone Audio</h4>
                    <p className="text-xs text-neutral-400">
                      Synchronized streaming across all living spaces.
                    </p>
                  </div>

                  {/* Player & Soundwave animation */}
                  <div className="flex items-center justify-center gap-4 bg-black/40 rounded-xl p-3 border border-white/10">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-10 h-10 rounded-full bg-[#c9a84c] text-black flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                    >
                      {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>

                    {/* Equalizer bars */}
                    <div className="flex items-end gap-1 h-7">
                      {[12, 24, 16, 28, 20, 14, 26, 18].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full bg-[#c9a84c] transition-all ${
                            isPlayingAudio ? "animate-pulse" : "opacity-30"
                          }`}
                          style={{
                            height: isPlayingAudio ? `${h}px` : "6px",
                            animationDelay: `${i * 120}ms`,
                          }}
                        />
                      ))}
                    </div>

                    <div className="text-left">
                      <p className="text-xs font-semibold text-white">Lumiwaves Hi-Fi Sync</p>
                      <p className="text-[10px] text-neutral-400">Evening Lounge • 96kHz 24-bit</p>
                    </div>
                  </div>

                  {/* Volume Slider */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-neutral-300">
                      <span>Volume</span>
                      <span className="font-mono text-[#c9a84c] font-bold">{audioVolume}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={audioVolume}
                      onChange={(e) => setAudioVolume(Number(e.target.value))}
                      className="w-full accent-[#c9a84c] cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. SECTION 4: SMART SECURITY AND COMFORT (Item 3.ii)
             Interactive Sentry: Clickable Smart Lock, Live 2K Camera HUD, Radar Sonar
      ─────────────────────────────────────────────────────────── */}
      <section id="security" className="relative min-h-[920px] lg:min-h-[1000px] flex flex-col justify-between overflow-hidden border-t border-neutral-900 bg-neutral-950">
        {/* Background Image: Vivid, High-Definition Twilight Villa (BRIGHT & CRISP) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/security-smart.jpg"
            alt="Zenith Smart Home Security and Comfort"
            fill
            className={`object-cover object-center brightness-105 contrast-102 transition-all duration-300 ${
              isFlashingStrobe ? "brightness-150 contrast-125" : ""
            }`}
          />

          {/* Flash Strobe Deterrence Overlay */}
          {isFlashingStrobe && (
            <div className="absolute inset-0 bg-white/35 animate-ping pointer-events-none" />
          )}

          {/* Subtle top/bottom vignettes for navigation & contrast */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Section Title Banner */}
        <div className="relative z-20 text-center pt-14 px-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/70 border border-emerald-400/40 text-emerald-400 text-xs uppercase tracking-widest backdrop-blur-md mb-3 shadow-lg">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Active Perimeter Guard • 24/7 Monitoring</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            Smart Security and Comfort, In Your Control
          </h2>
          <p className="text-neutral-200 text-sm sm:text-base font-light tracking-wide mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Click on the digital lock, surveillance camera, or security radar markers to interact.
          </p>
        </div>

        {/* Pinned Hardware Markers (STABLE ANCHORS - NEVER SHIFT ON CLICK) */}
        <div className="relative z-20 w-full max-w-[1540px] flex-1 mx-auto px-6 h-[500px] sm:h-[580px]">
          {/* PIN 1: BIOMETRIC SMART LOCK (Door Frame - Far Left) */}
          <div className="absolute top-[48%] left-[8%] sm:top-[46%] sm:left-[11%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => {
                setActiveSecurityPin(1);
                handleToggleLock();
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  isDoorLocked
                    ? "bg-emerald-500 text-black scale-110 shadow-[0_0_30px_rgba(16,185,129,0.8)]"
                    : "bg-amber-500 text-black scale-125 animate-bounce shadow-[0_0_35px_rgba(245,158,11,0.9)]"
                }`}
              >
                {isDoorLocked ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
              </div>
              <span className="mt-2 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                {isDoorLocked ? "Locked 🔒" : "Unlocked 🔓"}
              </span>
            </button>
          </div>

          {/* PIN 2: 2K LIVE CAMERA SURVEILLANCE (Ceiling Dome Camera - Center Left) */}
          <div className="absolute top-[9%] left-[38%] sm:top-[8%] sm:left-[41%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setActiveSecurityPin(activeSecurityPin === 2 ? null : 2)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-emerald-400 opacity-60 animate-ripple pointer-events-none" />
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                    activeSecurityPin === 2
                      ? "bg-[#c9a84c] text-black scale-125 shadow-[0_0_25px_rgba(201,168,76,0.9)]"
                      : "bg-white text-black hover:bg-[#c9a84c] hover:scale-110"
                  }`}
                >
                  <Camera className="w-5 h-5" />
                </div>
              </div>
              <span className="mt-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                Live 2K Camera
              </span>
            </button>
          </div>

          {/* PIN 3: RADAR MOTION SENSING (Patio / Balcony - Left Center) */}
          <div className="absolute top-[50%] left-[26%] sm:top-[48%] sm:left-[28%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setActiveSecurityPin(activeSecurityPin === 3 ? null : 3)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                {/* Sonar sweep effect */}
                <div className="w-12 h-12 rounded-full border border-emerald-400/40 relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 rounded-full border-t border-emerald-400 animate-sonar" />
                </div>
              </div>
              <span className="mt-1 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                Radar Sentry
              </span>
            </button>
          </div>

          {/* PIN 4: SMART ALARM DASHBOARD (Phone in Hand - Right Center) */}
          <div className="absolute top-[40%] left-[58%] sm:top-[38%] sm:left-[56%] -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => setActiveSecurityPin(activeSecurityPin === 4 ? null : 4)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  activeSecurityPin === 4
                    ? "bg-[#c9a84c] text-black scale-125 shadow-[0_0_25px_rgba(201,168,76,0.9)]"
                    : "bg-white text-black hover:bg-[#c9a84c] hover:scale-110"
                }`}
              >
                <Bell className="w-5 h-5" />
              </div>
              <span className="mt-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/30 text-white font-medium text-[11px] tracking-wider uppercase backdrop-blur-md shadow-xl whitespace-nowrap">
                Security Console
              </span>
            </button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            LIVE INTERACTIVE SECURITY SENTRY DOCK (Real Home Security Feel)
        ───────────────────────────────────────────────────────────── */}
        <div className="relative z-30 max-w-[1200px] w-full mx-auto px-6 pb-12">
          <div className="rounded-2xl glass-panel border border-white/20 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                  Sentry Active:
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  REC 2K HDR • [{currentTimeString}]
                </span>
              </div>

              {/* Security Mode Selector */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSecurityArmMode("away")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                    securityArmMode === "away" ? "bg-emerald-500 text-black" : "bg-white/10 text-neutral-300"
                  }`}
                >
                  🛡️ Armed Away
                </button>
                <button
                  onClick={() => setSecurityArmMode("home")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                    securityArmMode === "home" ? "bg-[#c9a84c] text-black" : "bg-white/10 text-neutral-300"
                  }`}
                >
                  🏠 Perimeter Only
                </button>
                <button
                  onClick={() => setSecurityArmMode("night")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                    securityArmMode === "night" ? "bg-indigo-600 text-white" : "bg-white/10 text-neutral-300"
                  }`}
                >
                  🌙 Night Guard
                </button>
              </div>
            </div>

            {/* Interactive Security Controls */}
            <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Digital Lock Toggle */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">Main Entry Door Lock</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{lockStatusMessage}</p>
                </div>
                <button
                  onClick={handleToggleLock}
                  className={`px-4 py-2 rounded-lg text-xs font-bold cursor-pointer transition-all ${
                    isDoorLocked
                      ? "bg-amber-400 text-black hover:bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                      : "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                  }`}
                >
                  {isDoorLocked ? "Unlock Door" : "Lock Door"}
                </button>
              </div>

              {/* Live Camera HUD Indicator */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Patio Dome Camera
                  </span>
                  <span className="text-neutral-400 font-mono">30 FPS • H.265</span>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-snug">
                  Target Recognition: <strong className="text-white">Family Living Room Secure (0 Threats)</strong>
                </p>
              </div>

              {/* Deterrence Strobe Flash Action */}
              <div className="flex justify-end">
                <button
                  onClick={handleFlashStrobe}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-600/20 border border-red-500/50 hover:bg-red-600/40 text-red-300 font-medium text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Eye className="w-4 h-4 text-red-400" />
                  <span>Flash Perimeter Deterrence</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. CLOSING CTA BANNER
      ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black text-center border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a84c]">Begin Your Journey</p>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Designed for Modern Architectural Living
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Experience a home that adapts quietly to your lifestyle — from relaxing evenings to secure
            nights and effortless energy efficiency.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-10 py-4 rounded-full bg-white text-black font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_10px_35px_rgba(201,168,76,0.4)] hover:-translate-y-1 cursor-pointer"
            >
              Upgrade to a Smarter Home Today
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────
          7. FOOTER
      ─────────────────────────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs font-light">
        <div className="max-w-[1540px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="relative h-8 w-28">
                <Image
                  src="/assets/ZENITH-LOGO.png"
                  alt="Zenith"
                  fill
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-xs">
                Zenith is a premium smart automation ecosystem by Lumiwaves, bringing architectural
                elegance, comfort, and dependable control into every modern home.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <h5 className="text-white text-xs uppercase tracking-wider font-medium">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-white transition-colors">Residential Automation</a></li>
                <li><a href="#why-zenith" className="hover:text-white transition-colors">Why Choose Zenith</a></li>
                <li><a href="#control" className="hover:text-white transition-colors">Interactive Room</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Live Security</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <h5 className="text-white text-xs uppercase tracking-wider font-medium">Contact & Support</h5>
              <ul className="space-y-2">
                <li><span>Pondicherry 605001, India</span></li>
                <li><span>White Town, ECR Road</span></li>
                <li><a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a></li>
                <li><a href="mailto:hello@lumiwaves.in" className="hover:text-white">hello@lumiwaves.in</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <h5 className="text-white text-xs uppercase tracking-wider font-medium">Experience Center</h5>
              <p className="text-neutral-400 leading-relaxed">
                Schedule a private walk-through in our experience center to witness tactile switch panels,
                circadian lighting, and unified security live.
              </p>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="mt-2 inline-flex items-center gap-2 text-[#c9a84c] hover:underline cursor-pointer"
              >
                Schedule Private Consultation <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <p>© 2026 Zenith by Lumiwaves. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
              <a href="#" className="hover:text-neutral-400">Terms of Service</a>
              <a href="#" className="hover:text-neutral-400">Warranty Registration</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ───────────────────────────────────────────────────────────
          8. BOOK A DEMO MODAL
      ─────────────────────────────────────────────────────────── */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#121212] border border-white/15 p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c] text-[#c9a84c] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light text-white">Consultation Request Received</h3>
                <p className="text-sm text-neutral-400 max-w-xs mx-auto">
                  A Zenith automation engineer will connect with you within 24 hours to schedule your
                  private consultation.
                </p>
              </div>
            ) : (
              <div>
                <div className="space-y-1 mb-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#c9a84c]">
                    Zenith Consultation
                  </p>
                  <h3 className="text-2xl font-light text-white">Book A Private Demo</h3>
                  <p className="text-xs text-neutral-400">
                    Experience our smart automation ecosystem tailored to your architectural plans.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-1 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#c9a84c]"
                    >
                      <option value="Villa">Luxury Villa</option>
                      <option value="Apartment">Modern Apartment / Penthouse</option>
                      <option value="Commercial">Commercial / Hospitality</option>
                      <option value="Architect">Architect / Interior Designer Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-neutral-300 mb-1 font-medium">Requirements / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your space (rooms, construction stage, preferred systems)..."
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#c9a84c]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] cursor-pointer"
                    >
                      Confirm Booking Request
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
