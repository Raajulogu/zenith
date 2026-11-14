"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useMounted } from "@/lib/useMounted";

interface ThemeToggleProps {
  className?: string;
  variant?: "pill" | "icon" | "minimal";
}

export function ThemeToggle({ className = "", variant = "pill" }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    // Render an inert placeholder to prevent hydration mismatch
    return (
      <div
        className={`w-14 h-7 rounded-full bg-neutral-800/40 border border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  if (variant === "minimal") {
    return (
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full transition-colors cursor-pointer text-theme-secondary hover:text-theme-main focus:outline-none focus:ring-1 focus:ring-[var(--gold)] ${className}`}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-neutral-700" />}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center h-8 w-16 rounded-full transition-all duration-300 cursor-pointer border focus:outline-none focus:ring-1 focus:ring-[var(--gold)] ${
        isDark
          ? "bg-neutral-900 border-neutral-700/80 hover:border-neutral-600"
          : "bg-neutral-200/80 border-neutral-300 hover:border-neutral-400"
      } ${className}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Current: ${isDark ? "Dark Mode" : "Light Mode"}. Click to toggle.`}
    >
      <span className="sr-only">Toggle Dark and Light theme</span>

      {/* Track Icons */}
      <div className="flex items-center justify-between w-full px-2 text-[10px] select-none pointer-events-none">
        <Moon
          className={`w-3.5 h-3.5 transition-opacity duration-200 ${
            isDark ? "text-amber-200 opacity-90" : "text-neutral-400 opacity-30"
          }`}
        />
        <Sun
          className={`w-3.5 h-3.5 transition-opacity duration-200 ${
            !isDark ? "text-amber-600 opacity-100" : "text-neutral-500 opacity-30"
          }`}
        />
      </div>

      {/* Floating Indicator Knob */}
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-sm ${
          isDark
            ? "translate-x-8 bg-neutral-800 text-amber-300 border border-neutral-600"
            : "translate-x-0 bg-white text-amber-500 border border-neutral-200 shadow-neutral-300"
        }`}
      >
        {isDark ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
      </span>
    </button>
  );
}
