import {
  Lightbulb,
  Blinds,
  Lock,
  Shield,
  MonitorSmartphone,
  Volume2,
  Thermometer,
  Wifi,
  RefreshCcw,
  Smartphone,
  Zap,
  Award,
} from "lucide-react";
import { motion } from "motion/react";
import { reveal, fade } from "@/lib/motion";
import houseImg from "@/assets/zenith-house.jpg";

const leftFeatures = [
  { icon: Lightbulb, title: "Smart Lighting", line1: "Set the perfect mood", line2: "for every moment." },
  { icon: Blinds, title: "Smart Curtains", line1: "Automated comfort", line2: "at your command." },
  { icon: Lock, title: "Smart Locks", line1: "Advanced security", line2: "for total peace of mind." },
  { icon: Shield, title: "Smart Security", line1: "24/7 protection for", line2: "what matters most." },
];

const rightFeatures = [
  { icon: MonitorSmartphone, title: "Touch Panels", line1: "Control your entire home", line2: "from one elegant panel." },
  { icon: Volume2, title: "Voice Control", line1: "Hands-free convenience", line2: "with your voice." },
  { icon: Thermometer, title: "Climate Control", line1: "Smart temperature", line2: "for perfect comfort." },
  { icon: Wifi, title: "Smart Sensors", line1: "Intelligent sensing for", line2: "a safer, smarter home." },
];

const bottomBar = [
  { icon: RefreshCcw, title: "Seamless Integration", line1: "All Zenith devices work", line2: "in perfect harmony." },
  { icon: Smartphone, title: "Control from Anywhere", line1: "Manage your home from", line2: "anywhere in the world." },
  { icon: Zap, title: "Automate Effortlessly", line1: "Create smart scenes and", line2: "routines with ease." },
  { icon: Award, title: "Made for Modern Living", line1: "Designed to complement", line2: "your lifestyle." },
];

type Feature = (typeof leftFeatures)[number];

function FeatureItem({
  feature,
  align,
  delay,
}: {
  feature: Feature;
  align: "left" | "right";
  delay: number;
}) {
  const { icon: Icon, title, line1, line2 } = feature;
  return (
    <motion.div
      {...reveal(delay / 1000)}
      className={`flex items-start gap-4 ${
        align === "right" ? "flex-row-reverse text-right lg:flex-row lg:text-left" : ""
      }`}
    >
      <div className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/25 bg-gold/[0.04] shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.6),0_0_24px_-6px_rgba(201,168,76,0.45)] sm:h-16 sm:w-16">
        <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
        <span
          aria-hidden="true"
          className={`absolute top-1/2 hidden h-px w-16 origin-left border-t border-dashed border-gold/30 lg:block ${
            align === "left" ? "left-full ml-3" : "right-full mr-3"
          }`}
        />
      </div>
      <div className="min-w-0">
        <p className="text-[1.05rem] font-medium text-foreground">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {line1}
          <br />
          {line2}
        </p>
      </div>
    </motion.div>
  );
}

export function EcosystemSection() {
  return (
    <section className="relative mt-4 overflow-hidden rounded-[2rem] bg-hero-base px-6 py-16 sm:px-12 sm:py-24 lg:px-14 lg:py-28 2xl:px-20">
      {/* Heading */}
      <motion.div {...reveal()} className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Smart Ecosystem</p>
        <h2 className="mt-6 font-display text-[clamp(2.1rem,5vw,3.9rem)] font-normal leading-[1.12] tracking-[-0.02em] text-foreground">
          Everything. Connected.
          <br />
          Beautifully <span className="text-gold">Intelligent.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
          Zenith devices work together seamlessly to automate, secure and elevate every corner of your
          home.
        </p>
        <svg viewBox="0 0 60 16" className="mx-auto mt-6 h-3 w-12 text-gold" aria-hidden="true">
          <path
            d="M2 7c6-7 12 4 18-2s12 4 18-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M2 12c6-7 12 4 18-2s12 4 18-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Stage */}
      <div className="mx-auto mt-14 grid max-w-7xl items-center gap-10 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-6">
        {/* Left column */}
        <div className="order-2 flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:order-1 lg:flex lg:gap-12">
          {leftFeatures.map((f, i) => (
            <div key={f.title} className={i % 2 === 1 ? "lg:-ml-4" : ""}>
              <FeatureItem feature={f} align="left" delay={120 + i * 80} />
            </div>
          ))}
        </div>

        {/* Center */}
        <div className="relative order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-[620px]">
            {/* orbit */}
            <div className="pointer-events-none absolute left-1/2 top-[52%] h-[64%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-gold/35" />
            <div className="pointer-events-none absolute left-1/2 top-[52%] h-[64%] w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-gold/[0.03] blur-2xl" />
            {[
              "left-[-5%] top-[32%]",
              "left-[-8%] top-[64%]",
              "right-[-5%] top-[32%]",
              "right-[-8%] top-[64%]",
            ].map((pos) => (
              <span
                key={pos}
                className={`soft-pulse absolute h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_2px_rgba(201,168,76,0.5)] ${pos}`}
              />
            ))}
            <img
              src={houseImg}
              alt="Isometric view of a luxury smart home at night with lit interiors"
              width={1280}
              height={1024}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain mix-blend-lighten"
            />

            {/* Phone */}
            <motion.div {...fade(0.25)} className="absolute bottom-[-6%] left-1/2 w-[27%] min-w-[132px] -translate-x-1/2 rounded-[1.6rem] border border-foreground/15 bg-[#0b0b0b] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]">
              <div className="rounded-[1.2rem] bg-[#0e0e0e] p-3">
                <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-foreground/20" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.5rem] text-foreground">My Home</p>
                    <p className="text-[0.4rem] text-muted-foreground">Welcome back</p>
                  </div>
                  <span className="h-3 w-3 rounded-full bg-gold/70" />
                </div>
                <p className="mt-3 text-[0.45rem] text-foreground/80">All Devices</p>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {[Lightbulb, Thermometer, Shield, Blinds, Zap, Wifi].map((Icon, i) => (
                    <div
                      key={i}
                      className="grid aspect-square place-items-center rounded-md border border-foreground/10 bg-foreground/[0.04]"
                    >
                      <Icon className="h-3 w-3 text-gold" strokeWidth={1.2} />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between border-t border-foreground/10 pt-2">
                  {[Smartphone, MonitorSmartphone, Zap, Award].map((Icon, i) => (
                    <Icon key={i} className="h-2.5 w-2.5 text-foreground/50" strokeWidth={1.2} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right column */}
        <div className="order-3 flex flex-col gap-10 sm:grid sm:grid-cols-2 lg:flex lg:gap-12">
          {rightFeatures.map((f, i) => (
            <div key={f.title} className={i % 2 === 1 ? "lg:-mr-4" : ""}>
              <FeatureItem feature={f} align="right" delay={120 + i * 80} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 rounded-3xl border border-foreground/10 bg-foreground/[0.02] px-6 py-8 sm:grid-cols-2 sm:px-10 lg:mt-24 lg:grid-cols-4 lg:gap-0 lg:px-8">
        {bottomBar.map(({ icon: Icon, title, line1, line2 }, i) => (
          <motion.div
            key={title}
            {...reveal(i * 0.09)}
            className={`flex items-start gap-4 ${
              i > 0 ? "lg:border-l lg:border-foreground/10 lg:pl-6" : ""
            } ${i < 3 ? "lg:pr-6" : ""}`}
          >
            <Icon className="mt-1 h-7 w-7 shrink-0 text-gold" strokeWidth={1.1} />
            <div className="min-w-0">
              <p className="text-[0.92rem] font-medium leading-tight text-foreground">{title}</p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground">
                {line1}
                <br />
                {line2}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
