"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "lg",
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
  }[maxWidth];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full ${maxWidthClass} rounded-3xl zenith-surface p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 border-theme`}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-theme-secondary hover:text-theme-main transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--gold)] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {(title || subtitle) && (
          <div className="mb-6 space-y-1 pr-8">
            {subtitle && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="text-2xl sm:text-3xl font-light text-theme-main tracking-tight">
                {title}
              </h3>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}

