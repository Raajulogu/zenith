import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Building2, Home, Star, Briefcase } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import {
  PageShell,
  PageHero,
  SectionHeading,
  FinalCTA,
  SECTION,
} from "@/components/page-ui";
import { reveal, fade, viewportOnce, staggerParent, staggerChild } from "@/lib/motion";
import zenithHouse from "@/assets/zenith-house.jpg";
import zenithRoom from "@/assets/zenith-room.jpg";
import expRoom from "@/assets/exp-room.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import panelImg from "@/assets/prod-panel.jpg";
import lightingImg from "@/assets/prod-lighting.jpg";
import whyPanels from "@/assets/why-panels.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Zenith Homes & Spaces by Lumiwaves" },
      {
        name: "description",
        content:
          "Villas, apartments, offices and commercial spaces automated with Zenith. Explore Lumiwaves projects, case study highlights and client stories.",
      },
      { property: "og:title", content: "Projects — Zenith Homes & Spaces by Lumiwaves" },
      {
        property: "og:description",
        content: "A thousand homes, one standard. See where Zenith lives.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-love-layout.lovable.app/projects" },
      { property: "og:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-love-layout.lovable.app/projects" }],
  }),
  component: ProjectsPage,
});

const categories = [
  {
    icon: Home,
    img: story1,
    label: "Premium Villas",
    title: "Whole-home automation across four levels",
    body: "Lighting, shade, climate and security unified for families who move between floors all day.",
  },
  {
    icon: Building2,
    img: story2,
    label: "Modern Apartments",
    title: "Compact homes, complete control",
    body: "Retrofit-friendly Zenith installs that respect existing interiors and tight timelines.",
  },
  {
    icon: Briefcase,
    img: expRoom,
    label: "Office Automation",
    title: "Workplaces that manage themselves",
    body: "Occupancy-aware lighting, meeting-room scenes and measurable energy savings.",
  },
  {
    icon: Building2,
    img: story3,
    label: "Commercial Spaces",
    title: "Hospitality-grade consistency",
    body: "Showrooms, clinics and boutique hotels running identical scenes across every room.",
  },
];

const gallery = [
  { img: zenithRoom, alt: "Living room with Zenith lighting scenes", span: "sm:col-span-2 sm:row-span-2" },
  { img: panelImg, alt: "Zenith touch panel in a hallway", span: "" },
  { img: lightingImg, alt: "Architectural lighting detail", span: "" },
  { img: whyPanels, alt: "Zenith switch plates in three finishes", span: "sm:col-span-2" },
  { img: story2, alt: "Apartment skyline living room at night", span: "" },
  { img: story3, alt: "Villa driveway with automated lighting", span: "" },
];

const caseStudies = [
  { metric: "42", suffix: "%", title: "Lower lighting energy", body: "Prestige villa, Bangalore — daylight-linked scenes across 68 circuits." },
  { metric: "9", suffix: " days", title: "Retrofit, start to handover", body: "Sea-facing apartment, Chennai — zero interior damage." },
  { metric: "220", suffix: "+", title: "Devices on one network", body: "Corporate HQ, Hyderabad — single-pane control for facilities." },
];

const testimonials = [
  { quote: "The install team treated our home better than we do. Everything simply works.", name: "Nandini K.", city: "Bangalore" },
  { quote: "Zenith made a 20-year-old apartment feel brand new — without touching the interiors.", name: "Rohit V.", city: "Chennai" },
  { quote: "Facilities used to get twelve calls a week. Now they get none.", name: "Meera D.", city: "Hyderabad" },
];

function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Projects"
        titleTop="A thousand homes."
        titleAccent="One"
        titleEnd=" standard."
        body="From sea-facing apartments to sprawling villas and corporate floors — every Lumiwaves project is finished to the same quiet, exacting standard."
        image={zenithHouse}
        imageAlt="Luxury villa glowing at dusk with Zenith lighting"
        primary={{ label: "Discuss Your Project", to: "/contact" }}
        secondary={{ label: "Explore Zenith", to: "/zenith" }}
      />

      {/* Featured luxury home */}
      <section className={`${SECTION} pb-6`}>
        <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-hero-base">
          <div className="grid grid-cols-1 lg:grid-cols-[46%_minmax(0,1fr)]">
            <motion.div {...fade(0.05)} className="relative min-h-72 lg:min-h-full">
              <img
                src={story1}
                alt="Featured luxury villa illuminated at night"
                width={1000}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-hero-base to-transparent lg:inset-y-0 lg:h-full lg:left-auto lg:w-32 lg:bg-linear-to-l" />
            </motion.div>
            <div className="px-7 py-12 sm:px-12 sm:py-16">
              <SectionHeading
                eyebrow="Featured Project"
                title="The Hillcrest Residence"
                body="A 9,000 sq ft villa where 12 rooms, 3 gardens and a private cinema respond to a single Goodnight scene."
              />
              <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  ["Location", "Bangalore"],
                  ["Scope", "Whole home"],
                  ["Devices", "180+"],
                  ["Timeline", "14 weeks"],
                ].map(([k, v], i) => (
                  <motion.div key={k} {...reveal(i * 0.07)}>
                    <dt className="text-xs uppercase tracking-[0.25em] text-gold/80">{k}</dt>
                    <dd className="mt-2 font-display text-xl text-foreground">{v}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={SECTION}>
        <SectionHeading eyebrow="Where Zenith Lives" title="Every kind of space." />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {categories.map(({ icon: Icon, img, label, title, body }, i) => (
            <motion.article
              key={label}
              {...reveal(i * 0.08)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group overflow-hidden rounded-2xl bg-hero-base/80 ring-1 ring-foreground/[0.06] transition-[box-shadow] duration-500 hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.95)] hover:ring-gold/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  width={1000}
                  height={563}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-foreground/20 bg-background/40 text-foreground backdrop-blur-sm transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-hero-base to-transparent" />
              </div>
              <div className="px-7 pb-8 pt-6">
                <span className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-gold/80">
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                  {label}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium text-foreground">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className={SECTION}>
        <SectionHeading eyebrow="Project Gallery" title="Details, up close." center />
        <div className="mt-10 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[200px] lg:auto-rows-[230px]">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.alt}
              {...reveal(i * 0.06)}
              className={`group overflow-hidden rounded-2xl ring-1 ring-foreground/[0.06] ${g.span}`}
            >
              <img
                src={g.img}
                alt={g.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Case study highlights */}
      <section className={SECTION}>
        <SectionHeading eyebrow="Case Study Highlights" title="Outcomes, not adjectives." />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.title}
              {...reveal(i * 0.08)}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-foreground/10 bg-hero-base/70 p-8 backdrop-blur-xs"
            >
              <p className="font-display text-[clamp(2.5rem,6vw,3.5rem)] font-semibold leading-none text-gold">
                {c.metric}
                <span className="text-[0.5em] text-gold/80">{c.suffix}</span>
              </p>
              <h3 className="mt-5 font-display text-xl font-medium text-foreground">{c.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={SECTION}>
        <SectionHeading eyebrow="Client Testimonials" title="In their words." center />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              {...reveal(i * 0.08)}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-foreground/10 bg-hero-base/70 p-8 backdrop-blur-xs"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={staggerParent}
                className="flex gap-1 text-gold"
              >
                {Array.from({ length: 5 }).map((_, k) => (
                  <motion.span key={k} variants={staggerChild}>
                    <Star className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  </motion.span>
                ))}
              </motion.div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-sm font-medium text-foreground">{t.name}</span>
                <span className="text-xs text-muted-foreground">{t.city}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div {...reveal(0.1)} className="mt-10">
          <Link
            to="/faq"
            className="group inline-flex items-center gap-3 border-b border-gold/40 pb-2 text-sm text-gold transition-colors duration-500 hover:border-gold"
          >
            Questions before you start?
            <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      <FinalCTA
        image={zenithRoom}
        title="Your home could be"
        accent="next."
        body="Share your floor plan and we'll come back with a Zenith scheme, a schedule and a fixed price."
        secondary={{ label: "Our Services", to: "/services" }}
      />

      <SiteFooter />
    </PageShell>
  );
}
