import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { reveal, staggerParent, staggerChild, viewportOnce } from "@/lib/motion";
import { SiteHeader } from "@/components/SiteHeader";

/** Standard page shell padding used by every page (matches home + about). */
export const SECTION =
  "mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-backdrop p-3 sm:p-5 lg:p-6">{children}</main>;
}

export function PageHero({
  eyebrow,
  titleTop,
  titleAccent,
  titleEnd,
  body,
  image,
  imageAlt,
  primary = { label: "Book a Consultation", to: "/contact" },
  secondary,
}: {
  eyebrow: string;
  titleTop: string;
  titleAccent?: string;
  titleEnd?: string;
  body: string;
  image: string;
  imageAlt: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-hero-base">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <img
          src={image}
          alt={imageAlt}
          width={1200}
          height={900}
          className="h-full w-full animate-slow-zoom object-cover brightness-110"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-linear-to-r from-hero-base to-transparent" />
      </div>

      <div className="relative flex min-h-[38rem] flex-col lg:min-h-[42rem]">
        <SiteHeader />
        <div className="flex flex-1 flex-col justify-center px-6 pt-10 pb-12 sm:px-12 sm:pt-14 lg:px-14 xl:px-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerParent}
            className="max-w-xl"
          >
            <motion.p
              variants={staggerChild}
              className="text-xs font-medium uppercase tracking-[0.35em] text-gold"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              variants={staggerChild}
              className="mt-6 font-display text-[clamp(2.5rem,10vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-foreground"
            >
              {titleTop}
              {(titleAccent || titleEnd) && <br />}
              {titleAccent && <span className="text-gold">{titleAccent}</span>}
              {titleEnd}
            </motion.h1>
            <motion.p
              variants={staggerChild}
              className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted-foreground sm:text-[0.95rem]"
            >
              {body}
            </motion.p>
            <motion.div
              variants={staggerChild}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                to={primary.to}
                className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-foreground px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
              >
                {primary.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
                >
                  {secondary.label}
                </Link>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            {...reveal(0.16)}
            className="mt-12 overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:hidden"
          >
            <img
              src={image}
              alt={imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-4/3 w-full animate-slow-zoom object-cover brightness-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerParent}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <motion.p
        variants={staggerChild}
        className="text-xs font-medium uppercase tracking-[0.35em] text-gold"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={staggerChild}
        className="mt-4 font-display text-[clamp(1.9rem,7vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground"
      >
        {title}
      </motion.h2>
      {body && (
        <motion.p
          variants={staggerChild}
          className="mt-6 text-[1rem] leading-relaxed text-muted-foreground"
        >
          {body}
        </motion.p>
      )}
    </motion.div>
  );
}

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number }>;

export function IconCardGrid({
  items,
  columns = 3,
}: {
  items: { icon: IconType; title: string; body: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`mt-10 grid grid-cols-1 gap-4 lg:gap-6 ${cols}`}>
      {items.map(({ icon: Icon, title, body }, i) => (
        <motion.article
          key={title}
          {...reveal(i * 0.07)}
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-foreground/10 bg-hero-base/70 p-7 backdrop-blur-xs sm:p-8"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/35 text-gold">
            <Icon className="h-5 w-5" strokeWidth={1.3} />
          </span>
          <h3 className="mt-5 font-display text-xl font-medium text-foreground">{title}</h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function FinalCTA({
  image,
  title,
  accent,
  body,
  secondary,
}: {
  image: string;
  title: string;
  accent?: string;
  body: string;
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="mx-auto max-w-[95rem] px-6 pt-20 pb-6 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
      <div className="relative overflow-hidden rounded-[2rem] bg-hero-base">
        <img
          src={image}
          alt=""
          aria-hidden
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full animate-slow-zoom object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-hero-base via-hero-base/85 to-transparent" />
        <div className="relative px-7 py-16 sm:px-12 sm:py-24 lg:px-20">
          <motion.div {...reveal()} className="max-w-xl">
            <h2 className="font-display text-[clamp(2rem,8vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-foreground">
              {title} {accent && <span className="text-gold">{accent}</span>}
            </h2>
            <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">{body}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-linear-to-r from-gold to-gold/80 px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              {secondary && (
                <Link
                  to={secondary.to}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
