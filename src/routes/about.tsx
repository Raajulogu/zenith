import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Gem,
  Cpu,
  ShieldCheck,
  Headset,
  Sparkles,
  Layers,
  Wrench,
  Lightbulb,
  Compass,
  PencilRuler,
  HardHat,
  LifeBuoy,
  Target,
  Eye,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import houseImg from "@/assets/zenith-house.jpg";
import roomImg from "@/assets/zenith-room.jpg";
import panelsImg from "@/assets/why-panels.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lumiwaves — The Craft Behind Zenith" },
      {
        name: "description",
        content:
          "Lumiwaves designs Zenith, a premium smart home ecosystem. Discover our story, philosophy and the craft behind beautifully automated living.",
      },
      { property: "og:title", content: "About Lumiwaves — The Craft Behind Zenith" },
      {
        property: "og:description",
        content:
          "We don't simply manufacture automation. We craft experiences that make everyday living more beautiful.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-love-layout.lovable.app/about" },
      { property: "og:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-love-layout.lovable.app/about" }],
  }),
  component: AboutPage,
});

const philosophy = [
  { icon: Gem, title: "Design", body: "Hardware that belongs on the wall of a beautiful home." },
  { icon: Cpu, title: "Technology", body: "Quiet intelligence that anticipates instead of interrupting." },
  { icon: ShieldCheck, title: "Reliability", body: "Engineered to work on the ten-thousandth touch." },
  { icon: Headset, title: "Customer Experience", body: "One team, from first sketch to years after install." },
  { icon: Sparkles, title: "Luxury Living", body: "Comfort you feel long before you notice the technology." },
];

const reasons = [
  { icon: Wrench, title: "Premium Craftsmanship", body: "Materials, finishes and tolerances held to furniture standards." },
  { icon: Gem, title: "Elegant Design", body: "A single visual language across every switch, panel and lock." },
  { icon: ShieldCheck, title: "Reliable Technology", body: "Local-first control that keeps working when the internet doesn't." },
  { icon: Layers, title: "Seamless Integration", body: "Zenith speaks to lighting, climate, security and voice as one." },
  { icon: LifeBuoy, title: "Dedicated Support", body: "A named specialist for your home, not a ticket queue." },
  { icon: Lightbulb, title: "Future Ready", body: "Over-the-air evolution, so your home gets better with time." },
];

const process = [
  { icon: Compass, step: "01", title: "Discover", body: "We listen to how you live before we plan a single circuit." },
  { icon: PencilRuler, step: "02", title: "Design", body: "A tailored automation blueprint, drawn around your interiors." },
  { icon: HardHat, step: "03", title: "Install", body: "Clean, precise installation by our own certified team." },
  { icon: LifeBuoy, step: "04", title: "Support", body: "Ongoing care, tuning and updates for the life of your home." },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-backdrop p-3 sm:p-5 lg:p-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] bg-hero-base">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src={houseImg}
            alt="Modern luxury home glowing at dusk"
            width={1200}
            height={900}
            className="h-full w-full animate-slow-zoom object-cover brightness-110"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-linear-to-r from-hero-base to-transparent" />
        </div>

        <div className="relative flex min-h-[38rem] flex-col lg:min-h-[42rem]">
          <SiteHeader />
          <div className="flex flex-1 flex-col justify-center px-6 pt-10 pb-12 sm:px-12 sm:pt-14 lg:px-14 xl:px-20">
            <div className="max-w-xl animate-rise">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">About Lumiwaves</p>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,10vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-foreground">
                We craft the
                <br />
                <span className="text-gold">feeling</span> of home.
              </h1>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                Lumiwaves is a smart living company. Zenith, our flagship ecosystem, is how we turn
                thoughtful engineering into everyday elegance.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-foreground px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
                >
                  Explore Zenith
                </Link>
              </div>
            </div>

            <div
              className="animate-rise mt-12 overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:hidden"
              style={{ animationDelay: "160ms" }}
            >
              <img
                src={houseImg}
                alt="Modern luxury home glowing at dusk"
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-4/3 w-full animate-slow-zoom object-cover brightness-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 pb-6 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="animate-rise overflow-hidden rounded-3xl ring-1 ring-foreground/10">
            <img
              src={roomImg}
              alt="Warmly lit living room with Zenith controls"
              width={912}
              height={760}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div className="animate-rise min-w-0" style={{ animationDelay: "120ms" }}>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Our Story</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,7vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
              It began with a light switch that felt wrong.
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted-foreground">
              Beautiful homes were being finished with plastic, clutter and apps nobody enjoyed
              opening. We believed automation should disappear into the architecture — warm to the
              touch, quiet in the room, obvious to use.
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">
              So we built Zenith from the wall outward: the glass, the haptics, the light behind it,
              then the intelligence underneath. Today Lumiwaves designs, installs and cares for
              complete smart living experiences — one home at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 lg:px-20 2xl:px-30">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {[
            {
              icon: Eye,
              label: "Vision",
              title: "A world where every home quietly takes care of the people inside it.",
            },
            {
              icon: Target,
              label: "Mission",
              title: "To make premium automation feel effortless, dependable and beautifully personal.",
            },
          ].map(({ icon: Icon, label, title }, i) => (
            <article
              key={label}
              className="animate-rise rounded-3xl border border-foreground/10 bg-hero-base/80 p-8 backdrop-blur-xs transition-transform duration-300 hover:-translate-y-1 sm:p-12"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/35 text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.3} />
              </span>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.35em] text-gold">{label}</p>
              <h3 className="mt-4 font-display text-[clamp(1.5rem,4.5vw,2.25rem)] font-light leading-[1.15] tracking-[-0.01em] text-foreground">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Our Philosophy</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,7vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
            Five convictions we build by.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {philosophy.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              className="animate-rise rounded-3xl border border-foreground/10 bg-hero-base/70 p-7 backdrop-blur-xs transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/35 text-gold">
                <Icon className="h-5 w-5" strokeWidth={1.3} />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why customers choose */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-hero-base">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_38%]">
            <div className="px-7 py-12 sm:px-12 sm:py-16">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Why Lumiwaves</p>
              <h2 className="mt-4 max-w-lg font-display text-[clamp(1.9rem,7vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
                Chosen for the details others skip.
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                {reasons.map(({ icon: Icon, title, body }, i) => (
                  <div
                    key={title}
                    className="animate-rise grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <Icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.2} />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-64 lg:min-h-full">
              <img
                src={panelsImg}
                alt="Zenith panels in a range of premium finishes"
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

      {/* Process timeline */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Our Design Process</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,7vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
            Four steps. No surprises.
          </h2>
        </div>
        <ol className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden
            className="pointer-events-none absolute left-8 top-0 hidden h-px w-full bg-linear-to-r from-gold/40 to-transparent lg:block"
          />
          {process.map(({ icon: Icon, step, title, body }, i) => (
            <li
              key={title}
              className="animate-rise relative lg:pr-8"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/35 bg-hero-base text-gold transition-colors duration-300 hover:border-gold">
                <Icon className="h-6 w-6" strokeWidth={1.3} />
              </span>
              <p className="mt-6 text-xs font-medium tracking-[0.3em] text-gold">{step}</p>
              <h3 className="mt-2 font-display text-2xl font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 pb-6 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero-base">
          <img
            src={roomImg}
            alt=""
            aria-hidden
            width={1600}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-40"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-hero-base via-hero-base/85 to-transparent" />
          <div className="relative px-7 py-16 sm:px-12 sm:py-24 lg:px-20">
            <div className="max-w-xl animate-rise">
              <h2 className="font-display text-[clamp(2rem,8vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-foreground">
                Come feel <span className="text-gold">Zenith</span> for yourself.
              </h2>
              <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
                Spend an hour in our experience center, or let us come to you. Either way, the
                conversation starts with how you live.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-linear-to-r from-gold to-gold/80 px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
                >
                  Explore Zenith
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
