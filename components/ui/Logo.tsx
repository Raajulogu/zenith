"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../theme/ThemeProvider";
import { useMounted } from "@/lib/useMounted";

interface LogoProps {
  className?: string;
  forceVariant?: "white" | "dark" | "gold";
  showTagline?: boolean;
  href?: string;
  height?: number;
}

export function Logo({
  className = "",
  forceVariant,
  showTagline = true,
  href = "/",
  height = 28,
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  // Determine which asset to use
  let variant = forceVariant;
  if (!variant) {
    if (!mounted) {
      variant = "white"; // safe SSR default for dark background
    } else {
      variant = resolvedTheme === "dark" ? "white" : "dark";
    }
  }

  const logoSrc =
    variant === "white"
      ? "/assets/zenith-logo-white.png"
      : variant === "gold"
      ? "/assets/zenith-logo-gold.png"
      : "/assets/zenith-logo-dark.png";

  // The cropped logo aspect ratio is 5317 / 1635 ~= 3.2519
  const width = Math.round(height * 3.252);

  const content = (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <div className="relative flex items-center" style={{ height: `${height}px`, width: `${width}px` }}>
        <Image
          src={logoSrc}
          alt="Zenith Luxury Smart Home"
          width={width}
          height={height}
          priority
          className="object-contain transition-opacity duration-300"
        />
      </div>

      {showTagline && (
        <span
          className={`text-[10px] font-medium tracking-[0.25em] uppercase pl-2.5 border-l transition-colors duration-300 ${
            variant === "white"
              ? "text-[var(--gold)] border-neutral-700/80"
              : "text-[var(--gold-deep)] border-neutral-300"
          }`}
        >
          Lumiwaves
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded">
        {content}
      </Link>
    );
  }

  return content;
}
