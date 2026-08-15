import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CalendarClock,
  Gauge,
  Globe,
  Home,
  Layers,
  Leaf,
  Mic,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wand2,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { EcosystemSection } from "@/components/EcosystemSection";
import {
  PageShell,
  PageHero,
  SectionHeading,
  IconCardGrid,
  FinalCTA,
  SECTION,
} from "@/components/page-ui";
import { reveal, fade } from "@/lib/motion";
import zenithPanel from "@/assets/zenith-panel.jpg";
import zenithRoom from "@/assets/zenith-room.jpg";
import expRoom from "@/assets/exp-room.jpg";
import switchImg from "@/assets/prod-switch.jpg";
import panelImg from "@/assets/prod-panel.jpg";
import lightingImg from "@/assets/prod-lighting.jpg";
import lockImg from "@/assets/prod-lock.jpg";
import hubImg from "@/assets/prod-hub.jpg";
import whyPanels from "@/assets/why-panels.jpg";

export const Route = createFileRoute("/zenith")({
  head: () => ({
    meta: [
      { title: "Zenith Ecosystem — Smart Living by Lumiwaves" },
      {
        name: "description",
        content:
          "Zenith is the Lumiwaves smart living ecosystem: switches, panels, lighting, curtains, locks and sensors working as one beautifully intelligent home.",
      },
      { property: "og:title", content: "Zenith Ecosystem — Smart Living by Lumiwaves" },
      {
        property: "og:description",
        content:
          "One ecosystem. Every room. Zenith turns a house into a home that anticipates you.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-love-layout.lovable.app/zenith" },
      { property: "og:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-love-layout.lovable.app/zenith" }],
  }),
  component: ZenithPage,
});

const ecosystemProducts = [
  { img: switchImg, alt: "Zenith black glass smart switch", title: "Zenith Smart Switches", body: "Glass, haptics and light — on every wall." },
  { img: panelImg, alt: "Zenith wall touch panel with gold bezel", title: "Zenith Touch Panels", body: "One surface. Complete control." },
  { img: lightingImg, alt: "Warm architectural lighting", title: "Zenith Smart Lighting", body: "Light that follows the hour and the mood." },
  { img: zenithRoom, alt: "Automated curtains in a luxury living room", title: "Zenith Smart Curtains", body: "Daylight, drawn on schedule." },
  { img: lockImg, alt: "Zenith smart lock on a dark wooden door", title: "Zenith Smart Locks", body: "Arrive, and the door already knows." },
  { img: hubImg, alt: "Zenith matte black sensor hub", title: "Zenith Sensors", body: "Quiet awareness in every room." },
];

const intelligent = [
  { icon: Wand2, title: "Automation", body: "Scenes that run themselves — morning, evening, away." },
  { icon: CalendarClock, title: "Schedules", body: "Time-of-day intelligence tuned to your routine." },
  { icon: Globe, title: "Remote Control", body: "Your home, in your pocket, anywhere on earth." },
  { icon: Leaf, title: "Energy Saving", body: "Insight and automation that quietly reduce waste." },
  { icon: ShieldCheck, title: "Security", body: "Locks, sensors and cameras acting as one system." },
  { icon: Mic, title: "Voice Commands", body: "Say it once. The whole room responds." },
];

const appFeatures = [
  { icon: Sparkles, title: "Scenes", body: "Dinner, Cinema, Goodnight — one tap each." },
  { icon: Home, title: "Rooms", body: "Every space, organised exactly as you live." },
  { icon: CalendarClock, title: "Scheduling", body: "Set it once and forget it, elegantly." },
  { icon: Globe, title: "Remote Access", body: "Secure control from any distance." },
  { icon: Gauge, title: "Energy Monitoring", body: "See consumption room by room, live." },
];

const assistants = [
  { name: "Alexa", body: "Alexa, set the living room to Evening." },
  { name: "Google Assistant", body: "Hey Google, close the curtains." },
  { name: "Siri Shortcuts", body: "Hey Siri, goodnight." },
];

function ZenithPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Zenith Ecosystem"
        titleTop="A home that"
        titleAccent="anticipates"
        titleEnd=" you."
        body="Zenith is the Lumiwaves flagship ecosystem — switches, panels, light, shade, security and sound, designed as one continuous experience."
        image={zenithPanel}
        imageAlt="Zenith touch panel glowing on a dark wall"
        primary={{ label: "Experience Zenith", to: "/contact" }}
        secondary={{ label: "Our Services", to: "/services" }}
      />

      {/* Meet Zenith */}
      <section className={`${SECTION} pb-6`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fade(0.05)} className="overflow-hidden rounded-3xl ring-1 ring-foreground/10">
            <img
              src={expRoom}
              alt="Softly lit interior controlled by Zenith"
              width={912}
              height={760}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </motion.div>
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Meet Zenith"
              title="Luxury, made intelligent."
              body="Zenith exists because automation had become something you manage. We wanted something you simply live with — warm to the touch, quiet in the room, obvious to use."
            />
            <motion.p
              {...reveal(0.1)}
              className="mt-4 text-[1rem] leading-relaxed text-muted-foreground"
            >
              Every Zenith device shares one design language and one brain. Add a room, a light or a
              lock years later, and it still feels like the same home.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product ecosystem */}
      <section className={SECTION}>
        <SectionHeading
          eyebrow="Product Ecosystem"
          title={<>Six products. <span className="text-gold">One</span> language.</>}
          center
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemProducts.map((p, i) => (
            <motion.article
              key={p.title}
              {...reveal(i * 0.08)}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group overflow-hidden rounded-2xl bg-hero-base/80 ring-1 ring-foreground/[0.06] transition-[box-shadow] duration-500 hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.95)] hover:ring-gold/40"
            >
              <div className="relative aspect-[4/3.2] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={768}
                  height={614}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-hero-base to-transparent" />
              </div>
              <div className="px-6 pb-7 pt-5">
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gold/80">Zenith</p>
                <h3 className="mt-3 font-display text-xl font-medium text-foreground">{p.title}</h3>
                <span className="mt-4 block h-px w-8 bg-gold/50" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Connected home experience — reuses the homepage ecosystem visualisation */}
      <div className="mt-20 sm:mt-28">
        <EcosystemSection />
      </div>

      {/* Intelligent features */}
      <section className={SECTION}>
        <SectionHeading
          eyebrow="Intelligent Features"
          title="Intelligence you never have to think about."
        />
        <IconCardGrid items={intelligent} />
      </section>

      {/* App experience */}
      <section className={SECTION}>
        <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-hero-base">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_40%]">
            <div className="px-7 py-12 sm:px-12 sm:py-16">
              <SectionHeading
                eyebrow="App Experience"
                title={<>The Lumiwaves app. <span className="text-gold">Effortless.</span></>}
                body="Beautifully restrained, deliberately simple — the whole home on one calm screen."
              />
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                {appFeatures.map(({ icon: Icon, title, body }, i) => (
                  <motion.div
                    key={title}
                    {...reveal(i * 0.07)}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4"
                  >
                    <Icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.2} />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative min-h-64 lg:min-h-full">
              <img
                src={whyPanels}
                alt="Zenith app running on a phone beside a wall panel"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-hero-base to-transparent lg:inset-y-0 lg:h-full lg:w-32 lg:bg-linear-to-r" />
            </div>
          </div>
        </div>
      </section>

      {/* Voice assistants */}
      <section className={SECTION}>
        <SectionHeading
          eyebrow="Voice Assistant Integration"
          title="Speak naturally. Zenith listens."
          center
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {assistants.map((a, i) => (
            <motion.article
              key={a.name}
              {...reveal(i * 0.08)}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-foreground/10 bg-hero-base/70 p-8 text-center backdrop-blur-xs"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/35 text-gold">
                {i === 2 ? (
                  <Layers className="h-6 w-6" strokeWidth={1.3} />
                ) : i === 1 ? (
                  <Radio className="h-6 w-6" strokeWidth={1.3} />
                ) : (
                  <Smartphone className="h-6 w-6" strokeWidth={1.3} />
                )}
              </span>
              <h3 className="mt-6 font-display text-xl font-medium text-foreground">{a.name}</h3>
              <p className="mt-3 text-[0.95rem] italic leading-relaxed text-muted-foreground">
                &ldquo;{a.body}&rdquo;
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <FinalCTA
        image={zenithRoom}
        title="Experience"
        accent="Zenith."
        body="Book an hour in our experience center and feel the difference a single, considered ecosystem makes."
        secondary={{ label: "View Projects", to: "/projects" }}
      />

      <SiteFooter />
    </PageShell>
  );
}
