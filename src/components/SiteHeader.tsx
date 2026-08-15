import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks: { label: string; to: string }[] = [
  { label: "Zenith", to: "/zenith" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];



export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 lg:relative lg:py-6 xl:px-14 ${
          scrolled
            ? "border-b border-foreground/10 bg-hero-base/80 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md lg:border-0 lg:bg-transparent lg:shadow-none lg:backdrop-blur-none"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="min-w-0"
        >
        <Link to="/" aria-label="Lumiwaves — home" className="flex min-w-0 flex-col gap-1">
          <svg viewBox="0 0 60 16" className="h-3 w-14 text-gold" aria-hidden="true">
            <path
              d="M2 10c6-9 12 5 18-3s12 5 18-3 12 5 18-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
          <span className="truncate font-display text-base font-semibold tracking-[0.22em] text-foreground sm:text-lg lg:text-xl">
            LUMIWAVES
          </span>
        </Link>
        </motion.div>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 justify-self-center xl:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2 2xl:gap-8"
        >
          {navLinks.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={l.to}
                className="relative text-[0.95rem] text-foreground/85 transition-colors duration-300 hover:text-gold focus-visible:text-gold focus-visible:outline-hidden after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:w-full focus-visible:after:w-full"
              >
                {l.label}
              </Link>
            </motion.div>
          ))}

        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/contact"
            className="btn-lift hidden rounded-full border border-foreground/25 px-6 py-3 text-sm text-foreground hover:border-gold hover:text-gold sm:inline-flex"
          >
            Book Experience
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-lift grid h-12 w-12 shrink-0 place-items-center rounded-full border border-foreground/25 text-foreground hover:border-gold hover:text-gold focus-visible:border-gold focus-visible:outline-hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>


      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="mt-[76px] flex h-[calc(100dvh-76px)] flex-col justify-between overflow-y-auto px-6 pb-10 pt-8 sm:px-10"
            >
              <ul className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 * i }}
                    className="border-b border-foreground/10"
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="flex min-h-14 items-center justify-between py-5 font-display text-2xl font-light text-foreground transition-colors duration-300 hover:text-gold"
                    >
                      {l.label}
                      <ArrowRight className="h-4 w-4 text-gold" />
                    </Link>
                  </motion.li>

                ))}
              </ul>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-gold to-gold/80 px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 active:scale-[0.98]"
              >
                Book Experience
                <ArrowRight className="h-4 w-4" />
              </Link>

            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
