"use client";

import React, { useState } from "react";
import { SmartHomeSceneViewer } from "./SmartHomeSceneViewer";
import { SmartHomeSceneSelector } from "./SmartHomeSceneSelector";
import { SmartHomeSceneDetails } from "./SmartHomeSceneDetails";
import { smartHomeScenes, SceneId } from "@/data/scenes";
import { Sparkles, Info } from "lucide-react";

interface SmartHomeExperienceProps {
  className?: string;
  onOpenConsultation?: () => void;
}

export function SmartHomeExperience({
  className = "",
  onOpenConsultation,
}: SmartHomeExperienceProps) {
  const [activeSceneId, setActiveSceneId] = useState<SceneId>("evening");

  const currentScene =
    smartHomeScenes.find((s) => s.id === activeSceneId) || smartHomeScenes[0];

  return (
    <section
      id="experience"
      className={`relative py-28 border-t border-theme overflow-hidden bg-theme-main transition-colors duration-300 ${className}`}
    >
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse,var(--gold-subtle),transparent_70%)] pointer-events-none" />

      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme text-xs uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span>Interactive Living Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-theme-main tracking-tight">
            One home. Every possibility.
          </h2>

          <p className="text-theme-secondary text-sm sm:text-base font-light leading-relaxed">
            Experience how the same living space adapts seamlessly to the rhythms of your day.
            Select a mode below to preview coordinated lighting, shading, climate, and security.
          </p>
        </div>

        {/* Scene Selector Controls */}
        <div className="flex justify-center">
          <SmartHomeSceneSelector
            scenes={smartHomeScenes}
            activeSceneId={activeSceneId}
            onSelectScene={setActiveSceneId}
          />
        </div>

        {/* Room Visual Hero Composition */}
        <div className="space-y-8">
          <SmartHomeSceneViewer scene={currentScene} />
          <SmartHomeSceneDetails scene={currentScene} />
        </div>

        {/* Notice of simulated state */}
        <div className="p-4 rounded-xl bg-theme-surface border border-theme text-theme-secondary text-xs flex flex-col sm:flex-row items-center justify-between gap-3 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-[var(--gold)] shrink-0" />
            <span>
              This interactive demonstration simulates Zenith residential scenes and device states.
            </span>
          </div>
          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="text-[var(--gold-deep)] dark:text-[var(--gold)] font-medium hover:underline whitespace-nowrap cursor-pointer"
            >
              Consult with an Automation Engineer →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

