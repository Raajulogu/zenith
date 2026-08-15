import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { PageShell, PageHero, SectionHeading, FinalCTA, SECTION } from "@/components/page-ui";
import { reveal, EASE } from "@/lib/motion";
import zenithPanel from "@/assets/zenith-panel.jpg";
import zenithRoom from "@/assets/zenith-room.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Zenith Smart Homes by Lumiwaves" },
      {
        name: "description",
        content:
          "Answers on Zenith installation, compatibility, warranty, support, the Lumiwaves app, voice control and automation.",
      },
      { property: "og:title", content: "FAQ — Zenith Smart Homes by Lumiwaves" },
      {
        property: "og:description",
        content: "Everything you might ask before automating your home with Zenith.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-love-layout.lovable.app/faq" },
      { property: "og:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-love-layout.lovable.app/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: groups.flatMap((g) =>
            g.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const groups: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "General",
    items: [
      { q: "What exactly is Zenith?", a: "Zenith is the Lumiwaves smart living ecosystem — switches, touch panels, lighting, curtains, locks and sensors that share one design language and one control layer." },
      { q: "Is Zenith only for new homes?", a: "No. Roughly half of our installations are retrofits into finished homes, completed without damaging interiors." },
      { q: "How much does a Zenith home cost?", a: "It scales with the number of rooms and circuits. After a consultation we provide a fixed, itemised proposal — no open-ended estimates." },
    ],
  },
  {
    category: "Installation",
    items: [
      { q: "How long does an installation take?", a: "A typical apartment takes 5–9 days; a full villa 8–14 weeks including design and commissioning." },
      { q: "Do you use subcontractors?", a: "Never. Every Lumiwaves site is run by our own certified engineers." },
      { q: "Will my walls need rework?", a: "In most retrofits Zenith fits existing back boxes. Where changes are needed, we make good and finish to match." },
    ],
  },
  {
    category: "Compatibility",
    items: [
      { q: "Does Zenith work with my existing lights?", a: "Yes. Zenith controls conventional, LED and dimmable fixtures, and integrates with most leading lighting brands." },
      { q: "Can I keep my current router and network?", a: "Usually yes. We assess your network during the site survey and recommend upgrades only when reliability requires it." },
      { q: "Does Zenith work with other smart brands?", a: "Zenith integrates with major climate, security, audio and voice platforms through standard protocols." },
    ],
  },
  {
    category: "Warranty",
    items: [
      { q: "What does the warranty cover?", a: "Ten years on Zenith hardware and two years on installation workmanship, documented at handover." },
      { q: "Is labour included in warranty visits?", a: "Yes — in-warranty diagnosis, replacement and labour are covered." },
    ],
  },
  {
    category: "Support",
    items: [
      { q: "Who do I call when something goes wrong?", a: "Your named specialist. Same person, same number, for the life of your system." },
      { q: "How quickly do you respond?", a: "Remote diagnostics within a few hours; on-site attendance for critical issues within 48 hours." },
    ],
  },
  {
    category: "Mobile App",
    items: [
      { q: "Can the whole family use the app?", a: "Yes. Add unlimited household members with individual permissions per room or device." },
      { q: "Does the app work away from home?", a: "Yes, over an encrypted remote connection — anywhere in the world." },
    ],
  },
  {
    category: "Voice Control",
    items: [
      { q: "Which assistants are supported?", a: "Alexa, Google Assistant and Siri Shortcuts, all configured during commissioning." },
      { q: "Do I need voice control to use Zenith?", a: "Not at all. Panels, switches and the app work fully on their own." },
    ],
  },
  {
    category: "Automation",
    items: [
      { q: "Can scenes change through the day?", a: "Yes. Scenes can follow sunrise and sunset, occupancy, schedules or your arrival." },
      { q: "What happens if the internet goes down?", a: "Zenith is local-first. Switches, panels and automations keep working; only remote access pauses." },
    ],
  },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      {...reveal(index * 0.05)}
      className="rounded-2xl border border-foreground/10 bg-hero-base/70 backdrop-blur-xs transition-colors duration-300 hover:border-gold/40"
    >
      <h3>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-14 w-full items-center justify-between gap-6 px-6 py-5 text-left text-[1rem] text-foreground transition-colors duration-300 hover:text-gold focus-visible:text-gold focus-visible:outline-hidden sm:px-8"
        >
          {q}
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/35 text-gold"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-muted-foreground sm:px-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Frequently Asked"
        titleTop="Everything you"
        titleAccent="might ask."
        body="Clear answers on installation, compatibility, warranty and living with Zenith day to day."
        image={zenithPanel}
        imageAlt="Zenith touch panel glowing in a dark hallway"
        primary={{ label: "Talk to a Specialist", to: "/contact" }}
        secondary={{ label: "Explore Zenith", to: "/zenith" }}
      />

      {groups.map(({ category, items }) => (
        <section key={category} className={SECTION}>
          <SectionHeading eyebrow={category} title={`${category} questions.`} />
          <div className="mt-8 grid grid-cols-1 gap-4">
            {items.map((it, i) => (
              <AccordionItem key={it.q} q={it.q} a={it.a} index={i} />
            ))}
          </div>
        </section>
      ))}

      <FinalCTA
        image={zenithRoom}
        title="Still have a"
        accent="question?"
        body="Our specialists answer in plain language — no scripts, no pressure, no jargon."
        secondary={{ label: "Our Services", to: "/services" }}
      />

      <SiteFooter />
    </PageShell>
  );
}
