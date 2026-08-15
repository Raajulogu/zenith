import { useState } from "react";
import { ArrowRight, Lightbulb, Blinds, ShieldCheck, Zap, Sunrise, Laptop, Armchair, Monitor, Wine, Moon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { reveal, fade, staggerParent, staggerChild, viewportOnce, EASE } from "@/lib/motion";
import roomImg from "@/assets/exp-room.jpg";

const pillars = [
  {
    icon: Lightbulb,
    title: "Personalized Ambience",
    line1: "Set the perfect mood with intelligent",
    line2: "lighting, scenes and automation.",
  },
  {
    icon: Blinds,
    title: "Adaptive Comfort",
    line1: "Smart climate and curtains that",
    line2: "adjust to you, automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    line1: "Advanced security and real-time alerts",
    line2: "keep what matters most protected.",
  },
  {
    icon: Zap,
    title: "Effortless Control",
    line1: "Control everything from elegant touch",
    line2: "panels, the app, or your voice.",
  },
];

type Scene = {
  icon: typeof Sunrise;
  label: string;
  description: string;
  /** filter applied to the room image */
  filter: string;
  /** full-frame color wash */
  wash: string;
  washOpacity: number;
  /** localized window / daylight glow */
  window: string;
  windowOpacity: number;
  /** warm interior lamp glow */
  lamp: string;
  lampOpacity: number;
};

const scenes: Scene[] = [
  {
    icon: Sunrise,
    label: "Morning",
    description: "Zenith prepares your home — curtains ease open and warm daylight fills the room.",
    filter: "brightness(1.14) saturate(1.05) contrast(0.98)",
    wash: "linear-gradient(120deg, rgba(255,196,120,0.22), rgba(255,236,200,0.08) 55%, transparent)",
    washOpacity: 1,
    window: "radial-gradient(closest-side, rgba(255,226,170,0.55), transparent)",
    windowOpacity: 1,
    lamp: "radial-gradient(closest-side, rgba(255,190,120,0.28), transparent)",
    lampOpacity: 0.45,
  },
  {
    icon: Laptop,
    label: "Work",
    description: "Zenith creates the right environment — clean, neutral light tuned for focus.",
    filter: "brightness(1.16) saturate(0.92) contrast(1.04)",
    wash: "linear-gradient(120deg, rgba(214,232,255,0.16), rgba(255,255,255,0.06) 60%, transparent)",
    washOpacity: 1,
    window: "radial-gradient(closest-side, rgba(226,240,255,0.45), transparent)",
    windowOpacity: 0.9,
    lamp: "radial-gradient(closest-side, rgba(235,244,255,0.22), transparent)",
    lampOpacity: 0.5,
  },
  {
    icon: Armchair,
    label: "Relax",
    description: "Zenith changes the atmosphere — soft amber light, daylight gently dimmed.",
    filter: "brightness(0.94) saturate(1.12) contrast(1.02)",
    wash: "linear-gradient(120deg, rgba(255,150,60,0.16), rgba(120,60,20,0.14) 70%, rgba(20,12,6,0.22))",
    washOpacity: 1,
    window: "radial-gradient(closest-side, rgba(255,196,130,0.22), transparent)",
    windowOpacity: 0.5,
    lamp: "radial-gradient(closest-side, rgba(255,168,84,0.42), transparent)",
    lampOpacity: 1,
  },
  {
    icon: Monitor,
    label: "Movie",
    description: "Zenith sets the stage — ambient light recedes for a cinematic picture.",
    filter: "brightness(0.72) saturate(1.05) contrast(1.08)",
    wash: "linear-gradient(120deg, rgba(30,40,70,0.34), rgba(8,10,18,0.5))",
    washOpacity: 1,
    window: "radial-gradient(closest-side, rgba(120,150,210,0.16), transparent)",
    windowOpacity: 0.35,
    lamp: "radial-gradient(closest-side, rgba(255,164,90,0.22), transparent)",
    lampOpacity: 0.6,
  },
  {
    icon: Wine,
    label: "Dinner",
    description: "Zenith warms the room — low, intimate lighting around the table.",
    filter: "brightness(0.86) saturate(1.14) contrast(1.03)",
    wash: "linear-gradient(120deg, rgba(190,90,40,0.18), rgba(30,16,8,0.34))",
    washOpacity: 1,
    window: "radial-gradient(closest-side, rgba(255,190,130,0.14), transparent)",
    windowOpacity: 0.35,
    lamp: "radial-gradient(closest-side, rgba(255,150,70,0.4), transparent)",
    lampOpacity: 0.95,
  },
  {
    icon: Moon,
    label: "Night",
    description: "Zenith settles the home — windows darken, only soft accent light remains.",
    filter: "brightness(0.6) saturate(0.95) contrast(1.06)",
    wash: "linear-gradient(120deg, rgba(14,20,38,0.46), rgba(6,8,14,0.6))",
    washOpacity: 1,
    window: "radial-gradient(closest-side, rgba(60,80,130,0.18), transparent)",
    windowOpacity: 0.5,
    lamp: "radial-gradient(closest-side, rgba(255,168,96,0.3), transparent)",
    lampOpacity: 0.85,
  },
];

const SCENE_TRANSITION = { duration: 1, ease: EASE } as const;

export function ExperienceSection() {
  const [active, setActive] = useState(2);
  const scene = scenes[active]!;

  return (
    <section className="bg-backdrop px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28 2xl:px-30">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerParent}
        className="flex flex-col items-center text-center"
      >
        <motion.p variants={staggerChild} className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          The Zenith Experience
        </motion.p>
        <motion.h2 variants={staggerChild} className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
          Intelligence That
          <br />
          <span className="text-gold">Enhances Every Moment.</span>
        </motion.h2>
        <motion.p variants={staggerChild} className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
          Zenith blends seamlessly into your lifestyle, anticipating your needs
          <br className="hidden sm:block" /> and creating the perfect atmosphere—effortlessly.
        </motion.p>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-14">
        {/* Pillars */}
        <div className="order-2 lg:order-1 lg:pt-2">
          {pillars.map(({ icon: Icon, title, line1, line2 }, i) => (
            <motion.div
              key={title}
              {...reveal(i * 0.09)}
              className={`flex items-start gap-5 py-6 ${
                i > 0 ? "border-t border-foreground/10" : ""
              }`}
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/30 bg-foreground/[0.03] text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.2} />
              </span>
              <div>
                <h3 className="text-[1.05rem] font-medium text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {line1}
                  <br />
                  {line2}
                </p>
              </div>
            </motion.div>
          ))}

          <a
            href="#"
            className="group mt-6 inline-flex items-center gap-3 border-b border-gold/40 pb-3 text-sm text-gold transition-colors duration-500 hover:border-gold"
          >
            Explore the Zenith Experience
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Visual */}
        <motion.div {...fade(0.1)} className="relative order-1 overflow-hidden rounded-2xl ring-1 ring-foreground/[0.08] lg:order-2">
          <div className="relative">
            <motion.img
              src={roomImg}
              alt="Luxury living room with a wall-mounted Zenith control panel, lighting adapting to the selected scene"
              width={1600}
              height={1008}
              loading="lazy"
              animate={{ filter: scene.filter }}
              transition={SCENE_TRANSITION}
              className="h-full w-full object-cover"
            />

            {/* Ambient light layers */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 mix-blend-soft-light"
              animate={{ opacity: scene.washOpacity, background: scene.wash }}
              transition={SCENE_TRANSITION}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -top-[15%] right-[4%] h-[70%] w-[45%] blur-2xl"
              animate={{ opacity: scene.windowOpacity, background: scene.window }}
              transition={SCENE_TRANSITION}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[18%] left-[8%] h-[45%] w-[38%] blur-3xl"
              animate={{ opacity: scene.lampOpacity, background: scene.lamp }}
              transition={SCENE_TRANSITION}
            />
          </div>

          {/* Scene bar */}
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-foreground/10 bg-background/70 px-5 py-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:px-7 sm:py-5">
            <div className="flex min-h-10 flex-col gap-1">
              <p className="text-[0.8rem] text-muted-foreground">Scenes for Every Moment</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={scene.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="text-[0.78rem] leading-snug text-foreground/80"
                >
                  {scene.description}
                </motion.p>
              </AnimatePresence>
            </div>
            <div
              role="radiogroup"
              aria-label="Zenith scenes"
              className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-2"
            >
              {scenes.map(({ icon: Icon, label }, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={label}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    aria-label={`${label} scene`}
                    onClick={() => setActive(i)}
                    className="group flex min-h-12 flex-col items-center gap-2 rounded-lg text-center outline-none transition-transform duration-200 focus-visible:ring-2 focus-visible:ring-gold/60 active:scale-[0.97]"
                  >
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-full transition-all duration-500 ${
                        isActive
                          ? "border border-gold/60 bg-gold/10 text-gold shadow-[0_0_22px_-6px_rgba(201,168,76,0.8)]"
                          : "text-foreground/70 group-hover:text-gold"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.2} />
                    </span>
                    <span
                      className={`relative text-[0.7rem] transition-colors duration-300 sm:text-xs ${
                        isActive ? "text-gold" : "text-muted-foreground"
                      }`}
                    >
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="scene-underline"
                          className="absolute -bottom-1 left-0 h-px w-full bg-gold"
                          transition={{ duration: 0.45, ease: EASE }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
