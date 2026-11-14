import React from "react";
import { Lightbulb, Blinds, Thermometer, ShieldCheck, Volume2, Zap } from "lucide-react";
import { DeviceState } from "@/data/scenes";

interface SmartHomeDeviceIndicatorsProps {
  devices: DeviceState[];
  className?: string;
}

export function SmartHomeDeviceIndicators({
  devices,
  className = "",
}: SmartHomeDeviceIndicatorsProps) {
  const getCategoryIcon = (category: DeviceState["category"]) => {
    switch (category) {
      case "lighting":
        return <Lightbulb className="w-4 h-4 text-[var(--gold)]" />;
      case "curtains":
        return <Blinds className="w-4 h-4 text-[var(--gold)]" />;
      case "climate":
        return <Thermometer className="w-4 h-4 text-[var(--gold)]" />;
      case "security":
        return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case "audio":
        return <Volume2 className="w-4 h-4 text-[var(--gold)]" />;
      default:
        return <Zap className="w-4 h-4 text-[var(--gold)]" />;
    }
  };

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${className}`}>
      {devices.map((device) => (
        <div
          key={device.name}
          className="device-indicator p-3 rounded-xl bg-theme-surface border border-theme shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-[var(--gold-border)]"
          data-category={device.category}
          data-active={device.active}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="p-1.5 rounded-lg bg-theme-secondary/80">
              {getCategoryIcon(device.category)}
            </div>
            {device.metric && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold-deep)] dark:text-[var(--gold)] border border-[var(--gold)]/20 font-medium">
                {device.metric}
              </span>
            )}
          </div>

          <div>
            <p className="text-xs font-medium text-theme-main leading-tight truncate">
              {device.name}
            </p>
            <p className="text-[11px] text-theme-secondary mt-0.5 truncate">
              {device.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
