"use client";

import React, { useId } from "react";

interface MotorizedWindowCurtainProps {
  isClosed: boolean;
  className?: string;
}

/**
 * MotorizedWindowCurtain
 * Pure architectural SVG component that renders realistic pleated drapery
 * calibrated to the exact 3D perspective of the living room window in control-home.jpg (1376 x 768).
 *
 * Perspective mapping:
 * - Left jamb (emerging from gathered curtain): x = 405
 * - Right jamb (window mullion): x = 822
 * - Top ceiling cove slot: slopes y = 160 -> 228
 * - Bottom floor/sofa contour: floor y = 660 -> sofa backrest y = 475..482
 */
export function MotorizedWindowCurtain({
  isClosed,
  className = "",
}: MotorizedWindowCurtainProps) {
  const uniqueId = useId().replace(/:/g, "-");

  // Calibrated window coordinates on 1376 x 768 native base
  const X_START = 405;
  const X_END = 822;
  const TOTAL_WIDTH = X_END - X_START; // 417px

  // Top ceiling track perspective slope (y = 160 at left to y = 228 at right)
  const getTopY = (x: number): number => {
    const t = Math.max(0, Math.min(1, (x - X_START) / TOTAL_WIDTH));
    return 160 + (228 - 160) * t;
  };

  // Bottom contour matching floor line and sofa backrest contour
  const getBottomY = (x: number): number => {
    if (x <= 645) {
      return 660;
    } else if (x <= 720) {
      const t = (x - 645) / (720 - 645);
      const ease = t * t * (3 - 2 * t);
      return 660 - (660 - 475) * ease;
    } else if (x <= 780) {
      const t = (x - 720) / (780 - 720);
      return 475 + 10 * Math.sin(t * Math.PI);
    } else {
      const t = (x - 780) / (X_END - 780);
      return 475 + (482 - 475) * t;
    }
  };

  // Generate perspective-compressed architectural ripplefold pleats
  // Folds compress slightly from 24px wide on the left to 16px wide on the right (Z-axis perspective)
  const folds: {
    x0: number;
    x1: number;
    yt0: number;
    yt1: number;
    yb0: number;
    yb1: number;
    midX: number;
    index: number;
  }[] = [];

  let currentX = X_START;
  let foldIndex = 0;

  while (currentX < X_END) {
    const t = (currentX - X_START) / TOTAL_WIDTH;
    const pleatWidth = 24 - 8 * t;
    const nextX = Math.min(X_END, currentX + pleatWidth);

    folds.push({
      x0: currentX,
      x1: nextX,
      yt0: getTopY(currentX),
      yt1: getTopY(nextX),
      yb0: getBottomY(currentX),
      yb1: getBottomY(nextX),
      midX: (currentX + nextX) / 2,
      index: foldIndex,
    });

    currentX = nextX;
    foldIndex++;
  }

  return (
    <svg
      viewBox="0 0 1376 768"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      data-closed={isClosed}
      aria-hidden={!isClosed}
    >
      <defs>
        {/* Realistic Ripplefold Gradient (Crest highlight & shadow valleys) */}
        <linearGradient
          id={`ripple-gradient-${uniqueId}`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#221a14" />
          <stop offset="18%" stopColor="#483c31" />
          <stop offset="50%" stopColor="#968371" />
          <stop offset="78%" stopColor="#554639" />
          <stop offset="100%" stopColor="#221a14" />
        </linearGradient>

        {/* Ambient Top Ceiling Cove Lighting Graze (Amber 2700K) */}
        <linearGradient
          id={`cove-graze-${uniqueId}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#ffb957" stopOpacity="0.72" />
          <stop offset="8%" stopColor="#e39d3e" stopOpacity="0.45" />
          <stop offset="22%" stopColor="#9a6222" stopOpacity="0.18" />
          <stop offset="42%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>

        {/* Ambient Bottom Room Shadow (Furniture & floor contact) */}
        <linearGradient
          id={`bottom-shadow-${uniqueId}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="65%" stopColor="#000000" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
        </linearGradient>

        {/* Motorized Ceiling Track Rail Gradient */}
        <linearGradient
          id={`track-rail-${uniqueId}`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#1e1b18" />
          <stop offset="50%" stopColor="#3d3731" />
          <stop offset="100%" stopColor="#181512" />
        </linearGradient>
      </defs>

      {/* ─────────────────────────────────────────────────────────────
          MOTORIZED DRAPERY CURTAIN ASSEMBLY
      ───────────────────────────────────────────────────────────── */}
      <g id={`curtain-assembly-${uniqueId}`}>
        {/* 1. Perspective Ripplefold Pleats */}
        {folds.map((fold) => {
          const points = `${fold.x0},${fold.yt0} ${fold.x1},${fold.yt1} ${fold.x1},${fold.yb1} ${fold.x0},${fold.yb0}`;

          return (
            <polygon
              key={fold.index}
              points={points}
              fill={`url(#ripple-gradient-${uniqueId})`}
              stroke="#1b140e"
              strokeWidth="0.5"
            />
          );
        })}

        {/* 2. Ceiling Cove Amber Graze Overlay */}
        <polygon
          points={`${X_START},${getTopY(X_START)} ${X_END},${getTopY(X_END)} ${X_END},${getBottomY(X_END)} ${X_START},${getBottomY(X_START)}`}
          fill={`url(#cove-graze-${uniqueId})`}
          style={{ mixBlendMode: "screen" }}
        />

        {/* 3. Bottom Ambient Floor & Sofa Shadow Overlay */}
        <polygon
          points={`${X_START},${getTopY(X_START)} ${X_END},${getTopY(X_END)} ${X_END},${getBottomY(X_END)} ${X_START},${getBottomY(X_START)}`}
          fill={`url(#bottom-shadow-${uniqueId})`}
        />

        {/* 4. Architectural Ceiling Track Rail */}
        <line
          x1={X_START}
          y1={getTopY(X_START)}
          x2={X_END}
          y2={getTopY(X_END)}
          stroke={`url(#track-rail-${uniqueId})`}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Subtle Cove Warm Glow Accent beneath rail */}
        <line
          x1={X_START}
          y1={getTopY(X_START) + 1}
          x2={X_END}
          y2={getTopY(X_END) + 1}
          stroke="rgba(255, 185, 87, 0.45)"
          strokeWidth="1"
        />

        {/* 5. Trailing Edge Architectural Hem Line */}
        <line
          x1={X_END}
          y1={getTopY(X_END)}
          x2={X_END}
          y2={getBottomY(X_END)}
          stroke="#16120e"
          strokeWidth="2.5"
        />
      </g>
    </svg>
  );
}
