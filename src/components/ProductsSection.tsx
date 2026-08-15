import { ArrowRight, ArrowUpRight, Gem, ShieldCheck, Settings, Headphones } from "lucide-react";
import { motion } from "motion/react";
import { reveal, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";
import switchImg from "@/assets/prod-switch.jpg";
import panelImg from "@/assets/prod-panel.jpg";
import lockImg from "@/assets/prod-lock.jpg";
import lightingImg from "@/assets/prod-lighting.jpg";
import hubImg from "@/assets/prod-hub.jpg";

const products = [
  {
    img: switchImg,
    alt: "Zenith black glass smart touch switch on a dark wall",
    title: "Smart Switches",
    line1: "Elegant touch switches that",
    line2: "blend perfectly with your interiors.",
  },
  {
    img: panelImg,
    alt: "Zenith wall-mounted smart touch panel with gold bezel",
    title: "Touch Panels",
    line1: "Intuitive control at your fingertips.",
    line2: "One panel. Complete control.",
  },
  {
    img: lockImg,
    alt: "Zenith smart door lock with keypad on a dark wooden door",
    title: "Smart Locks",
    line1: "Advanced security meets",
    line2: "seamless convenience.",
  },
  {
    img: lightingImg,
    alt: "Warm pendant lighting above a dark shelf",
    title: "Smart Lighting",
    line1: "Set the perfect ambiance",
    line2: "for every moment.",
  },
  {
    img: hubImg,
    alt: "Zenith matte black automation hub",
    title: "Automation Hub",
    line1: "The brain behind your smart home.",
    line2: "Reliable. Powerful. Secure.",
  },
];

const assurances = [
  { icon: Gem, title: "Premium Materials", line1: "Built with the finest materials", line2: "for lasting elegance." },
  { icon: ShieldCheck, title: "10 Year Warranty", line1: "Industry leading warranty", line2: "for complete peace of mind." },
  { icon: Settings, title: "Seamless Integration", line1: "Works effortlessly with your", line2: "lifestyle and devices." },
  { icon: Headphones, title: "Expert Support", line1: "Dedicated support to keep", line2: "your home running smoothly." },
];

export function ProductsSection() {
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
        <motion.p variants={staggerChild} className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Our Products</motion.p>
        <motion.span variants={staggerChild} className="mt-4 block h-px w-12 bg-gold/60" />
        <motion.h2 variants={staggerChild} className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-foreground">
          The Zenith <span className="text-gold">Collection</span>
        </motion.h2>
        <motion.p variants={staggerChild} className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">
          Curated for modern living. Designed with precision.
          <br />
          Built to transform the way you live.
        </motion.p>
        <motion.a
          variants={staggerChild}
          href="#"
          className="btn-lift group mt-10 inline-flex items-center gap-4 rounded-full border border-foreground/15 bg-foreground/[0.06] px-8 py-4 text-[0.95rem] font-medium text-foreground hover:border-gold hover:text-gold"
        >
          Explore All Products
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
        </motion.a>
      </motion.div>

      {/* Product cards */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((p, i) => (
          <motion.article
            key={p.title}
            {...reveal(i * 0.08)}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group overflow-hidden rounded-2xl bg-hero-base/80 ring-1 ring-foreground/[0.06] transition-[box-shadow] duration-500 hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.95)] hover:ring-gold/40"
          >
            <div className="relative aspect-[4/3.4] overflow-hidden">
              <img
                src={p.img}
                alt={p.alt}
                width={768}
                height={768}
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
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {p.line1}
                <br />
                {p.line2}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-sm text-gold transition-colors duration-300 hover:border-gold"
              >
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Assurance bar */}
      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-8 rounded-2xl bg-hero-base/70 px-6 py-9 ring-1 ring-foreground/[0.06] sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {assurances.map(({ icon: Icon, title, line1, line2 }, i) => (
          <motion.div
            key={title}
            {...reveal(i * 0.08)}
            className={`flex items-start gap-4 lg:px-5 ${i > 0 ? "lg:border-l lg:border-foreground/10" : ""}`}
          >
            <Icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.1} />
            <div>
              <h3 className="text-[0.95rem] font-medium text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
