import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Lightbulb,
  Fan,
  Blinds,
  Wind,
  Lock,
  Unlock,
  Sparkles,
  Hand,
} from "lucide-react";
import houseImg from "@/assets/hero-house.jpg";

type DeviceKey = "light" | "fan" | "curtains" | "ac" | "lock";

const EASE_CSS = "cubic-bezier(0.22,1,0.36,1)";

/* ------------------------------------------------------------------ */
/* Ceiling fan — rAF driven so it accelerates and coasts to a stop.    */
/* ------------------------------------------------------------------ */
function CeilingFan({ on, reduced }: { on: boolean; reduced: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const speed = useRef(0);
  const angle = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) {
      if (ref.current) ref.current.style.transform = "rotate(0deg)";
      return;
    }
    const target = on ? 240 : 0; // deg / sec
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      // gentle ease toward target speed
      speed.current += (target - speed.current) * Math.min(dt * (on ? 1.6 : 1.1), 1);
      angle.current = (angle.current + speed.current * dt) % 360;
      if (ref.current) ref.current.style.transform = `rotate(${angle.current}deg)`;
      if (speed.current < 0.6 && !on) {
        speed.current = 0;
        raf.current = null;
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };

    if (raf.current === null) raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) {
        cancelAnimationFrame(raf.current);
        raf.current = null;
      }
    };
  }, [on, reduced]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[39%] top-[40%] h-[7%] w-[7%] -translate-x-1/2 -translate-y-1/2"
    >
      <div ref={ref} className="h-full w-full will-change-transform">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <g fill="currentColor" className="text-foreground/45">
            {[0, 120, 240].map((r) => (
              <ellipse key={r} cx="50" cy="30" rx="8" ry="21" transform={`rotate(${r} 50 50)`} />
            ))}
          </g>
          <circle cx="50" cy="50" r="7" className="fill-foreground/60" />
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function HeroSmartHome() {
  const reduced = !!useReducedMotion();
  const [state, setState] = useState<Record<DeviceKey, boolean>>({
    light: false,
    fan: false,
    curtains: true, // partially open at rest
    ac: false,
    lock: true, // secured
  });
  const [touched, setTouched] = useState(false);

  const toggle = (key: DeviceKey) => {
    setTouched(true);
    setState((s) => ({ ...s, [key]: !s[key] }));
  };

  const allOn = () => {
    setTouched(true);
    setState((s) => ({ ...s, light: true, fan: true, curtains: true, ac: true }));
  };

  const t = (ms: number) => ({ transitionDuration: `${reduced ? 120 : ms}ms`, transitionTimingFunction: EASE_CSS });

  const devices: { key: DeviceKey; name: string; icon: typeof Lightbulb; on: string; off: string }[] = [
    { key: "light", name: "Lights", icon: Lightbulb, on: "On", off: "Off" },
    { key: "fan", name: "Fan", icon: Fan, on: "On", off: "Off" },
    { key: "curtains", name: "Curtains", icon: Blinds, on: "Open", off: "Closed" },
    { key: "ac", name: "Climate", icon: Wind, on: "24°C", off: "Off" },
    { key: "lock", name: "Front Lock", icon: state.lock ? Lock : Unlock, on: "Secured", off: "Unlocked" },
  ];

  return (
    <div className="relative w-full min-w-0">
      {/* ---------------- visual ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.5rem] ring-1 ring-foreground/10 sm:rounded-[2rem]"
      >
        <div className="relative aspect-4/3 w-full sm:aspect-16/10">
          <img
            src={houseImg}
            alt="Modern Lumiwaves smart home at dusk, controlled by the Zenith ecosystem"
            width={1600}
            height={1008}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* LIGHTS — a brightened copy of the house masked to the glazing, plus warm spill */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 transition-opacity"
            style={{ opacity: state.light ? 1 : 0, ...t(900) }}
          >
            <img
              src={houseImg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                filter: "brightness(2.35) saturate(1.25) sepia(0.22) contrast(1.02)",
                WebkitMaskImage:
                  "radial-gradient(30% 12% at 33% 42%, #000 25%, transparent 75%), radial-gradient(26% 14% at 62% 63%, #000 25%, transparent 75%), radial-gradient(16% 10% at 84% 64%, #000 25%, transparent 78%)",
                maskImage:
                  "radial-gradient(30% 12% at 33% 42%, #000 25%, transparent 75%), radial-gradient(26% 14% at 62% 63%, #000 25%, transparent 75%), radial-gradient(16% 10% at 84% 64%, #000 25%, transparent 78%)",
                WebkitMaskComposite: "source-over",
              }}
            />
            <div className="absolute inset-x-[10%] top-[33%] h-[19%] rounded-[2rem] bg-[radial-gradient(closest-side,rgba(255,196,116,0.32),transparent)] blur-xl" />
            <div className="absolute inset-x-[24%] top-[54%] h-[22%] rounded-[3rem] bg-[radial-gradient(closest-side,rgba(255,201,128,0.34),transparent)] blur-xl" />
            <div className="absolute inset-x-[18%] top-[74%] h-[24%] bg-[radial-gradient(closest-side,rgba(255,183,99,0.24),transparent)] blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_52%,rgba(255,186,105,0.10),transparent_70%)]" />
          </div>

          {/* CURTAINS — two sheer panels over the upper-left glazing */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[13%] top-[35%] h-[15%] w-[30%] overflow-hidden"
          >
            <div
              className="absolute inset-y-0 left-0 w-[52%] transition-transform"
              style={{
                transform: `translateX(${state.curtains ? "-80%" : "0%"})`,
                background:
                  "linear-gradient(90deg, rgba(214,201,182,0.22), rgba(214,201,182,0.11) 70%, rgba(214,201,182,0.03))",
                ...t(900),
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-[52%] transition-transform"
              style={{
                transform: `translateX(${state.curtains ? "80%" : "0%"})`,
                background:
                  "linear-gradient(270deg, rgba(214,201,182,0.22), rgba(214,201,182,0.11) 70%, rgba(214,201,182,0.03))",
                ...t(900),
              }}
            />
          </div>

          {/* FAN */}
          <CeilingFan on={state.fan} reduced={reduced} />

          {/* AC — very subtle cool wash + drifting airflow lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[70%] top-[54%] h-[14%] w-[22%] transition-opacity"
            style={{ opacity: state.ac ? 1 : 0, ...t(700) }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(150,200,235,0.20),transparent)] blur-lg" />
            {!reduced &&
              [0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="absolute left-[10%] h-px w-[55%] bg-gradient-to-r from-transparent via-[rgba(178,214,240,0.55)] to-transparent"
                  style={{
                    top: `${32 + i * 16}%`,
                    animation: `ac-drift 3.2s ${i * 0.5}s ${EASE_CSS} infinite`,
                  }}
                />
              ))}
          </div>

          {/* LOCK badge on the entrance */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[86%] top-[64%] -translate-x-1/2 -translate-y-1/2"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md transition-colors sm:h-9 sm:w-9"
              style={{
                borderColor: state.lock ? "rgba(201,168,76,0.55)" : "rgba(240,240,240,0.35)",
                background: state.lock ? "rgba(201,168,76,0.16)" : "rgba(20,20,20,0.45)",
                ...t(500),
              }}
            >
              {state.lock ? (
                <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={1.6} />
              ) : (
                <Unlock className="h-3.5 w-3.5 text-foreground/80" strokeWidth={1.6} />
              )}
            </span>
          </div>

          {/* Invitation cue */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center transition-opacity duration-700 sm:bottom-5"
            style={{ opacity: touched ? 0 : 1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-hero-base/60 px-4 py-2 text-[0.7rem] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-md">
              <Hand className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
              Tap to experience Zenith
            </span>
          </div>
        </div>
      </motion.div>

      {/* ---------------- controls ---------------- */}
      <div
        role="group"
        aria-label="Zenith smart home demo controls"
        className="snap-rail -mx-1 mt-4 flex w-full min-w-0 px-1 sm:mx-0 sm:px-0 gap-3 overflow-x-auto pb-1 sm:mt-5 sm:grid sm:grid-cols-3 sm:overflow-visible"
      >
        {devices.map(({ key, name, icon: Icon, on, off }) => {
          const active = state[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              aria-pressed={active}
              aria-label={`${name} — currently ${active ? on : off}`}
              className={`btn-lift group flex min-h-[4.5rem] w-[10.5rem] shrink-0 snap-start items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:w-auto ${
                active
                  ? "border-gold/40 bg-gold/10"
                  : "border-foreground/12 bg-foreground/[0.03] hover:border-foreground/25"
              }`}
            >
              <Icon
                className={`h-5 w-5 shrink-0 transition-colors duration-500 ${
                  active ? "text-gold" : "text-foreground/50"
                }`}
                strokeWidth={1.4}
              />
              <span className="min-w-0">
                <span className="block truncate text-[0.8rem] text-foreground">{name}</span>
                <span
                  className={`block truncate text-[0.75rem] transition-colors duration-500 ${
                    active ? "text-gold" : "text-muted-foreground"
                  }`}
                >
                  {active ? on : off}
                </span>
              </span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={allOn}
          className="btn-lift flex min-h-[4.5rem] w-[10.5rem] shrink-0 snap-start items-center gap-3 rounded-2xl border border-foreground/20 bg-foreground/[0.06] px-4 py-3 text-left transition-colors duration-500 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:w-auto"
        >
          <Sparkles className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} />
          <span className="min-w-0">
            <span className="block truncate text-[0.8rem] text-foreground">Everything On</span>
            <span className="block truncate text-[0.75rem] text-muted-foreground">One tap scene</span>
          </span>
        </button>
      </div>
    </div>
  );
}
