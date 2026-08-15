import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { staggerChild, staggerParent } from "@/lib/motion";
import { ArrowRight, Play, Home, ShieldCheck, SlidersHorizontal, Gem } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSmartHome } from "@/components/HeroSmartHome";
import { EcosystemSection } from "@/components/EcosystemSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WhyZenithSection } from "@/components/WhyZenithSection";
import { StoriesSection } from "@/components/StoriesSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meet Zenith — Lumiwaves Smart Home Automation" },
      {
        name: "description",
        content:
          "Zenith is a premium smart automation ecosystem by Lumiwaves, bringing comfort, control and elegance into every modern home.",
      },
      { property: "og:title", content: "Meet Zenith — Lumiwaves Smart Home Automation" },
      {
        property: "og:description",
        content: "The intelligence behind every modern home. Premium smart automation by Lumiwaves.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-love-layout.lovable.app/" },
      { property: "og:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-love-layout.lovable.app/" }],
  }),
  component: Index,
});

const features = [
  { icon: Home, line1: "Smart Living", line2: "Redefined" },
  { icon: ShieldCheck, line1: "Engineered\u00a0for", line2: "Reliability" },
  { icon: SlidersHorizontal, line1: "Seamless", line2: "Control" },
  { icon: Gem, line1: "Crafted for", line2: "Elegance" },
];

function Index() {
  return (
    <main className="min-h-screen bg-backdrop p-3 sm:p-5 lg:p-6">
      <section className="relative overflow-hidden rounded-[2rem] bg-hero-base">
        {/* Ambient lighting */}
        <div
          aria-hidden="true"
          className="breathe-glow pointer-events-none absolute -left-40 top-[-10%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(201,168,76,0.10),transparent)] blur-3xl"
        />

        <div className="relative flex min-h-dvh flex-col">
          <SiteHeader />

          <div className="grid flex-1 items-center gap-10 px-6 pt-8 pb-10 sm:px-12 sm:pt-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-12 lg:px-14 xl:px-20">
            {/* Copy */}
            <motion.div initial="hidden" animate="show" variants={staggerParent} className="max-w-xl">
              <motion.p
                variants={staggerChild}
                className="text-xs font-medium uppercase tracking-[0.35em] text-gold"
              >
                Zenith by Lumiwaves
              </motion.p>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,10vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-foreground sm:text-[clamp(3rem,6vw,5.25rem)]">
                <motion.span variants={staggerChild} className="block">
                  Your Home.
                </motion.span>
                <motion.span variants={staggerChild} className="block">
                  Now <span className="text-gold">Intelligent.</span>
                </motion.span>
              </h1>
              <motion.p
                variants={staggerChild}
                className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted-foreground"
              >
                Experience lighting, comfort, security and automation working together — control the
                house right here.
              </motion.p>

              <motion.div
                variants={staggerChild}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <Link
                  to="/zenith"
                  className="btn-lift group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-foreground px-8 text-[0.95rem] font-medium text-hero-base sm:w-auto"
                >
                  Explore Zenith
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-lift inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground hover:border-gold hover:text-gold sm:w-auto"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Book a Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Interactive smart-home demo */}
            <HeroSmartHome />
          </div>

          {/* Feature strip */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerParent}
            transition={{ delayChildren: 0.6 }}
            className="grid max-w-3xl grid-cols-2 gap-y-8 px-6 pb-12 sm:px-12 md:grid-cols-4 md:gap-y-0 lg:px-14 xl:px-20"
          >
            {features.map(({ icon: Icon, line1, line2 }, i) => (
              <motion.div
                key={line1}
                variants={staggerChild}
                className={`pr-6 ${i > 0 ? "md:border-l md:border-foreground/15 md:pl-6" : ""}`}
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                <p className="mt-4 whitespace-nowrap text-sm text-foreground">{line1}</p>
                <p className="text-sm text-muted-foreground">{line2}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      <EcosystemSection />
      <ProductsSection />
      <ExperienceSection />
      <WhyZenithSection />
      <StoriesSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
