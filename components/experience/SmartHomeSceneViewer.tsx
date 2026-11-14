import React from "react";
import Image from "next/image";
import { SmartHomeScene } from "@/data/scenes";
import { Sparkles } from "lucide-react";

interface SmartHomeSceneViewerProps {
  scene: SmartHomeScene;
  className?: string;
}

export function SmartHomeSceneViewer({
  scene,
  className = "",
}: SmartHomeSceneViewerProps) {
  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden zenith-surface shadow-2xl border-theme aspect-[16/10] sm:aspect-[16/9] min-h-[380px] sm:min-h-[480px] ${className}`}
      style={
        {
          "--scene-brightness": scene.cssVariables.lightingBrightness,
          "--scene-warmth": scene.cssVariables.lightingWarmth,
          "--drapery-width": scene.cssVariables.draperyWidth,
        } as React.CSSProperties
      }
    >
      {/* 1. Base Room Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src={scene.image}
          alt={`Zenith living room in ${scene.name}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="scene-image object-cover object-center transition-all duration-700"
          style={{
            filter: `brightness(${scene.cssVariables.lightingBrightness}) hue-rotate(${scene.cssVariables.lightingWarmth}) contrast(1.04)`,
          }}
        />
      </div>

      {/* 2. Dynamic Lighting Overlay Layer */}
      <div
        className="lighting-layer absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: scene.lightingState.overlayGradient,
          opacity: scene.cssVariables.ambientOpacity,
        }}
      />

      {/* Subtle top/bottom framing vignettes */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* 4. Live Scene HUD Badge (Top Left) */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex flex-wrap gap-2 items-center">
        <div className="px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-ping" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--gold-light)]">
            {scene.name}
          </span>
          <span className="text-[10px] text-neutral-300 border-l border-white/20 pl-2">
            {scene.lightingState.colorTemp}
          </span>
        </div>

        <div className="hidden sm:flex px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-neutral-200 items-center gap-1.5 shadow-lg">
          <span className="text-emerald-400">●</span>
          <span>Drapery: <strong>{scene.curtainState.status}</strong></span>
        </div>
      </div>

      {/* 5. Live Scene State Pill (Bottom Left) */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 max-w-md text-white drop-shadow-md">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--gold-light)] mb-1 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
          <span>Synchronized Scene Trigger</span>
        </p>
        <h4 className="text-lg sm:text-2xl font-light tracking-tight text-white leading-tight">
          {scene.headline}
        </h4>
      </div>

      {/* 6. Security & Climate Readout (Bottom Right) */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 hidden md:flex items-center gap-3">
        <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
          <span className="text-neutral-400 text-[10px] uppercase block">HVAC Climate</span>
          <span className="font-mono text-[var(--gold-light)] font-semibold">
            {scene.climateState.label}
          </span>
        </div>
        <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
          <span className="text-neutral-400 text-[10px] uppercase block">Sentry Shield</span>
          <span className="text-emerald-400 font-medium">
            {scene.securityState.mode.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
