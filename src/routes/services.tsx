import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  MessagesSquare,
  Ruler,
  Network,
  PencilRuler,
  HardHat,
  SlidersHorizontal,
  CheckCircle2,
  GraduationCap,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import {
  PageShell,
  PageHero,
  SectionHeading,
  IconCardGrid,
  FinalCTA,
  SECTION,
} from "@/components/page-ui";
import { reveal, fade } from "@/lib/motion";
import expRoom from "@/assets/exp-room.jpg";
import zenithRoom from "@/assets/zenith-room.jpg";
import whyPanels from "@/assets/why-panels.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Design, Install & Care by Lumiwaves" },
      {
        name: "description",
        content:
          "From first consultation to lifelong support: Lumiwaves designs, installs, configures and cares for your Zenith smart home end to end.",
      },
      { property: "og:title", content: "Services — Design, Install & Care by Lumiwaves" },
      {
        property: "og:description",
        content: "One team, one accountability — consultation, design, installation, training and support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-love-layout.lovable.app/services" },
      { property: "og:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-love-layout.lovable.app/services" }],
  }),
  component: ServicesPage,
});

const journey = [
  { icon: MessagesSquare, step: "01", title: "Consultation", body: "We start with how you live — rooms, routines, priorities." },
  { icon: Ruler, step: "02", title: "Site Assessment", body: "A full survey of wiring, network, light and architecture." },
  { icon: Network, step: "03", title: "Automation Planning", body: "Scenes, zones and logic mapped before a wire is drawn." },
  { icon: PencilRuler, step: "04", title: "Custom Design", body: "Finishes, engraving and placement matched to your interiors." },
  { icon: HardHat, step: "05", title: "Installation", body: "Certified in-house teams. Clean sites. Zero improvisation." },
  { icon: SlidersHorizontal, step: "06", title: "Configuration", body: "Every scene tuned to the light and mood of your home." },
  { icon: CheckCircle2, step: "07", title: "Testing", body: "A 120-point commissioning check before handover." },
  { icon: GraduationCap, step: "08", title: "Training", body: "An unhurried walkthrough for everyone in the household." },
  { icon: LifeBuoy, step: "09", title: "Support", body: "A named specialist, reachable — never a ticket queue." },
  { icon: ShieldCheck, step: "10", title: "Warranty", body: "Ten years of cover on Zenith hardware, in writing." },
];

const promises = [
  { icon: ShieldCheck, title: "Single Accountability", body: "One team owns design, install and aftercare." },
  { icon: HardHat, title: "In-House Engineers", body: "No subcontractors on site, ever." },
  { icon: SlidersHorizontal, title: "Tuned, Not Templated", body: "Scenes built around your home, not a preset." },
  { icon: LifeBuoy, title: "Lifelong Care", body: "Updates, tuning and expansion for years to come." },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        titleTop="Designed, installed,"
        titleAccent="cared for."
        body="Automation is only as good as the team behind it. Lumiwaves handles every step — from the first conversation to the tenth year of support."
        image={expRoom}
        imageAlt="Lumiwaves specialist commissioning a smart home"
        primary={{ label: "Start With a Consultation", to: "/contact" }}
        secondary={{ label: "Explore Zenith", to: "/zenith" }}
      />

      {/* Journey timeline */}
      <section className={SECTION}>
        <SectionHeading
          eyebrow="The Journey"
          title="Ten steps. One team. No surprises."
          body="Every Lumiwaves home follows the same considered path — refined over a thousand installations."
        />

        <ol className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <span
            aria-hidden
            className="pointer-events-none absolute left-8 top-0 hidden h-px w-full bg-linear-to-r from-gold/40 to-transparent lg:block"
          />
          {journey.map(({ icon: Icon, step, title, body }, i) => (
            <motion.li key={title} {...reveal((i % 5) * 0.09)} className="relative lg:pr-8">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/35 bg-hero-base text-gold transition-colors duration-300 hover:border-gold">
                <Icon className="h-6 w-6" strokeWidth={1.3} />
              </span>
              <p className="mt-6 text-xs font-medium tracking-[0.3em] text-gold">{step}</p>
              <h3 className="mt-2 font-display text-2xl font-medium text-foreground">{title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Split feature */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div {...fade(0.05)} className="order-1 overflow-hidden rounded-3xl ring-1 ring-foreground/10 lg:order-2">
            <img
              src={whyPanels}
              alt="Zenith panels prepared for installation"
              width={912}
              height={760}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
          </motion.div>
          <div className="order-2 min-w-0 lg:order-1">
            <SectionHeading
              eyebrow="How We Work"
              title="Quiet sites. Precise hands."
              body="Our engineers arrive with drawings, protection sheets and a schedule. Interiors stay pristine, timelines stay honest, and the handover happens only when every scene behaves."
            />
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className={SECTION}>
        <SectionHeading eyebrow="Our Promise" title="What every client gets." center />
        <IconCardGrid items={promises} columns={4} />
      </section>

      <FinalCTA
        image={zenithRoom}
        title="Let's plan your"
        accent="home."
        body="Tell us about the space and how you use it. We'll bring the drawings, the finishes and an honest timeline."
        secondary={{ label: "View Projects", to: "/projects" }}
      />

      <SiteFooter />
    </PageShell>
  );
}
