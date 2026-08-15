import type { Transition, Variants } from "motion/react";

/** Apple-like easing — calm, decelerating, never bouncy. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;

export const ease = (duration = 0.6, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE,
});

/** Fade up on first entry into the viewport. Plays once. */
export const reveal = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: ease(duration, delay),
});

/** Fade only — used where translation would fight sticky/absolute layout. */
export const fade = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: viewportOnce,
  transition: ease(duration, delay),
});

/** Page-load entrance (no viewport gate). */
export const enter = (delay = 0, duration = 0.6, y = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: ease(duration, delay),
});

/** Restrained hover lift for cards. */
export const cardHover = {
  whileHover: { y: -6, scale: 1.02 },
  transition: { duration: 0.45, ease: EASE },
} as const;

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
