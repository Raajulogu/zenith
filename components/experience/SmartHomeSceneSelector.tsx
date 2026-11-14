import React from "react";
import { Sun, Sunset, Film, Moon, Shield } from "lucide-react";
import { SmartHomeScene, SceneId } from "@/data/scenes";

interface SmartHomeSceneSelectorProps {
  scenes: SmartHomeScene[];
  activeSceneId: SceneId;
  onSelectScene: (id: SceneId) => void;
  className?: string;
}

export function SmartHomeSceneSelector({
  scenes,
  activeSceneId,
  onSelectScene,
  className = "",
}: SmartHomeSceneSelectorProps) {
  const getSceneIcon = (id: SceneId) => {
    switch (id) {
      case "day":
        return <Sun className="w-4 h-4" />;
      case "evening":
        return <Sunset className="w-4 h-4" />;
      case "movie":
        return <Film className="w-4 h-4" />;
      case "night":
        return <Moon className="w-4 h-4" />;
      case "away":
        return <Shield className="w-4 h-4" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Smart Home Scenes"
      className={`scene-selector flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:justify-center ${className}`}
    >
      {scenes.map((scene) => {
        const isActive = scene.id === activeSceneId;
        return (
          <button
            key={scene.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`scene-panel-${scene.id}`}
            onClick={() => onSelectScene(scene.id)}
            type="button"
            className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer shrink-0 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] ${
              isActive
                ? "bg-[var(--gold)] text-neutral-950 border-[var(--gold)] shadow-[0_4px_20px_rgba(198,164,92,0.35)] scale-102"
                : "bg-theme-surface text-theme-secondary border-theme hover:border-[var(--gold-border)] hover:text-theme-main"
            }`}
          >
            <span
              className={`p-1 rounded-full transition-colors ${
                isActive ? "bg-black/15 text-neutral-950" : "bg-theme-secondary text-[var(--gold)]"
              }`}
            >
              {getSceneIcon(scene.id)}
            </span>
            <span className="font-semibold">{scene.name}</span>
            <span
              className={`text-[10px] hidden md:inline-block font-mono opacity-80 ${
                isActive ? "text-neutral-900" : "text-theme-secondary"
              }`}
            >
              {scene.subtitle}
            </span>
          </button>
        );
      })}
    </div>
  );
}

