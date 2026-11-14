import React from "react";
import { SmartHomeScene } from "@/data/scenes";
import { SmartHomeDeviceIndicators } from "./SmartHomeDeviceIndicators";
import { Lightbulb, Blinds, Thermometer, Shield } from "lucide-react";

interface SmartHomeSceneDetailsProps {
  scene: SmartHomeScene;
  className?: string;
}

export function SmartHomeSceneDetails({
  scene,
  className = "",
}: SmartHomeSceneDetailsProps) {
  return (
    <div
      id={`scene-panel-${scene.id}`}
      role="tabpanel"
      aria-label={`${scene.name} details`}
      className={`scene-content space-y-6 ${className}`}
    >
      {/* Top description card */}
      <div className="p-6 sm:p-7 rounded-2xl zenith-surface border border-theme">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-theme">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--gold-deep)] dark:text-[var(--gold)]">
                {scene.name} Configuration
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light text-theme-main tracking-tight">
              {scene.headline}
            </h3>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="px-3 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold-deep)] dark:text-[var(--gold)] border border-[var(--gold)]/30 text-xs font-mono font-medium">
              4 Subsystems Coordinated
            </span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-theme-secondary font-light leading-relaxed pt-4">
          {scene.description}
        </p>

        {/* Coordinated Subsystems 4-column summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 mt-2 border-t border-theme/60">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-theme-secondary font-medium flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[var(--gold)]" />
              Illumination
            </span>
            <p className="text-xs font-medium text-theme-main">
              {scene.lightingState.label}
            </p>
            <p className="text-[11px] font-mono text-[var(--gold-deep)] dark:text-[var(--gold)]">
              {scene.lightingState.colorTemp} • {scene.lightingState.level}% Output
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-theme-secondary font-medium flex items-center gap-1.5">
              <Blinds className="w-3.5 h-3.5 text-[var(--gold)]" />
              Drapery
            </span>
            <p className="text-xs font-medium text-theme-main">
              {scene.curtainState.label}
            </p>
            <p className="text-[11px] text-theme-secondary">
              {scene.curtainState.status}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-theme-secondary font-medium flex items-center gap-1.5">
              <Thermometer className="w-3.5 h-3.5 text-[var(--gold)]" />
              Comfort Climate
            </span>
            <p className="text-xs font-medium text-theme-main">
              {scene.climateState.label}
            </p>
            <p className="text-[11px] text-theme-secondary">
              Passive Quiet Air Distribution
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-theme-secondary font-medium flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              Sentry Status
            </span>
            <p className="text-xs font-medium text-theme-main truncate">
              {scene.securityState.status}
            </p>
            <p className="text-[11px] text-emerald-500 font-medium">
              Mode: {scene.securityState.mode.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Device grid */}
      <div>
        <p className="text-xs uppercase tracking-widest text-theme-secondary font-semibold mb-3">
          Synchronized Hardware States
        </p>
        <SmartHomeDeviceIndicators devices={scene.devices} />
      </div>
    </div>
  );
}

