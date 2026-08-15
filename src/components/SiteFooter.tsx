import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { fade } from "@/lib/motion";
import {
  ADDRESS_LINES,
  EMAIL,
  LEGAL_LINKS,
  MAIL_HREF,
  PHONE_DISPLAY,
  SOCIAL_LINKS,
  TEL_HREF,
} from "@/lib/site";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About Lumiwaves", to: "/about" },
      { label: "Zenith Ecosystem", to: "/zenith" },
      { label: "Services", to: "/services" },
      { label: "Projects", to: "/projects" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Zenith",
    links: [
      { label: "Smart Switches", to: "/zenith" },
      { label: "Touch Panels", to: "/zenith" },
      { label: "Smart Locks", to: "/zenith" },
      { label: "Smart Lighting", to: "/zenith" },
      { label: "Smart Curtains", to: "/zenith" },
      { label: "Sensors", to: "/zenith" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Installation Process", to: "/services" },
      { label: "Warranty", to: "/faq" },
      { label: "Service & Support", to: "/services" },
      { label: "FAQs", to: "/faq" },
      { label: "Experience Center", to: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <motion.footer
      {...fade()}
      className="border-t border-foreground/10 bg-hero-base px-6 pt-16 pb-8 text-center sm:px-12 sm:text-left lg:px-20 2xl:px-30"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)_1.2fr] lg:gap-10">
        <div className="min-w-0">
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            <svg viewBox="0 0 60 16" className="h-5 w-14 shrink-0 text-gold" aria-hidden="true">
              <path d="M2 10c6-9 12 5 18-3s12 5 18-3 12 5 18-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <div className="min-w-0">
              <p className="truncate font-display text-3xl font-medium text-foreground">Lumiwaves</p>
              <p className="text-sm text-muted-foreground">Living, Smarter.</p>
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-sm text-[0.95rem] sm:mx-0 leading-relaxed text-muted-foreground">
            We create intelligent living experiences that blend technology, design and comfort — for
            homes that deserve more.
          </p>
          {SOCIAL_LINKS.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-4 sm:justify-start">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-foreground/15 px-5 text-sm text-foreground/80 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="min-w-0 lg:border-l lg:border-foreground/10 lg:pl-8">
            <h2 className="font-display text-lg font-medium text-foreground">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-muted-foreground transition-colors duration-300 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="min-w-0">
          <h2 className="font-display text-lg font-medium text-foreground">Get in Touch</h2>
          <ul className="mt-5 space-y-4 text-[0.95rem] text-muted-foreground">
            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{ADDRESS_LINES.join(", ")}</span>
            </li>
            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={TEL_HREF} className="transition-colors duration-300 hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start justify-center gap-3 sm:justify-start">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={MAIL_HREF} className="break-all transition-colors duration-300 hover:text-gold">
                {EMAIL}
              </a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="btn-lift group mt-7 inline-flex items-center gap-3 rounded-full border border-gold/60 px-7 py-3.5 text-[0.95rem] text-gold hover:bg-gold hover:text-hero-base"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-foreground/10 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lumiwaves. All rights reserved.</p>
        {LEGAL_LINKS.length > 0 && (
          <div className="flex items-center justify-center gap-4 sm:justify-start">
            {LEGAL_LINKS.map((l, i) => (
              <span key={l.label} className="flex items-center gap-4">
                {i > 0 && <span className="text-foreground/20">|</span>}
                <Link to={l.to} className="transition-colors duration-300 hover:text-gold">
                  {l.label}
                </Link>
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.footer>
  );
}
