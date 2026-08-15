import { Gem, ShieldCheck, Settings, Zap, Award, Headphones } from "lucide-react";
import { motion } from "motion/react";
import { reveal, fade, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";
import panelsImg from "@/assets/why-panels.jpg";

const reasons = [
  { icon: Gem, title: "Premium Materials", body: "Built with the finest materials for lasting beauty and durability." },
  { icon: ShieldCheck, title: "Advanced Security", body: "Bank-level encryption and secure local control for complete peace of mind." },
  { icon: Settings, title: "Seamless Integration", body: "Works with leading platforms and devices you already use." },
  { icon: Zap, title: "Energy Efficiency", body: "Smarter automation that optimizes usage and reduces energy waste." },
  { icon: Award, title: "10 Year Warranty", body: "Industry leading warranty because we stand by our quality." },
  { icon: Headphones, title: "Expert Support", body: "Dedicated support team always here when you need us." },
];

export function WhyZenithSection() {
  return (
    <section className="bg-hero-base/60 px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-28 2xl:px-30">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerParent}
        className="flex flex-col items-center text-center"
      >
        <motion.p variants={staggerChild} className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Why Zenith</motion.p>
        <motion.h2 variants={staggerChild} className="mt-6 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-foreground">
          Engineered for <span className="text-gold">Excellence.</span>
          <br />
          Trusted for <span className="text-gold">Life.</span>
        </motion.h2>
        <motion.p variants={staggerChild} className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
          At Zenith, every detail is crafted with precision to deliver unmatched
          <br className="hidden sm:block" /> reliability, security and elegance.
        </motion.p>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-14">
        <motion.div {...fade(0.05)} className="overflow-hidden rounded-2xl">
          <img
            src={panelsImg}
            alt="Three Zenith black glass smart switch panels with gold bezels"
            width={1408}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-0">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              {...reveal(i * 0.07)}
              whileHover={{ y: -4 }}
              className={`px-0 sm:px-5 ${
                i % 3 !== 0 ? "sm:border-l sm:border-foreground/10" : ""
              }`}
            >
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.1} />
              <h3 className="mt-4 text-[0.95rem] font-medium text-foreground">{title}</h3>
              <p className="mt-2.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
