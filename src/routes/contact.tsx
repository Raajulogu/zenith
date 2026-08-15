import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Home,
  Clock4,
  BadgeCheck,
  Headset,
  Sparkles,
  ShieldCheck,
  Navigation,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { TEL_HREF, MAIL_HREF, WHATSAPP_HREF, MAPS_HREF, PHONE_DISPLAY, EMAIL } from "@/lib/site";
import roomImg from "@/assets/zenith-room.jpg";
import expImg from "@/assets/exp-room.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lumiwaves — Let's Build Your Smart Home" },
      {
        name: "description",
        content:
          "Talk to the Lumiwaves team about Zenith smart home automation. Free consultation, expert guidance and premium installation across India.",
      },
      { property: "og:title", content: "Contact Lumiwaves — Let's Build Your Smart Home" },
      {
        property: "og:description",
        content: "Book a free consultation and start your Zenith smart living journey.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-love-layout.lovable.app/contact" },
      { property: "og:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:image", content: "https://pixel-love-layout.lovable.app/og-lumiwaves.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-love-layout.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const options = [
  { icon: Phone, label: "Call Us", value: PHONE_DISPLAY, note: "Mon–Sat, 9am – 7pm", href: TEL_HREF },
  { icon: Mail, label: "Email Us", value: EMAIL, note: "Reply within 24 hours", href: MAIL_HREF },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with a specialist", note: "Fastest response", href: WHATSAPP_HREF },
  { icon: MapPin, label: "Visit Us", value: "Pondicherry, India", note: "Experience center", href: "#office" },
];

const trust = [
  { icon: Sparkles, title: "Free Consultation", body: "No cost, no obligation, no pressure." },
  { icon: Headset, title: "Expert Guidance", body: "Specialists, not salespeople." },
  { icon: Home, title: "Tailored Automation", body: "Designed around your floor plan." },
  { icon: BadgeCheck, title: "Premium Installation", body: "Our own certified install team." },
  { icon: ShieldCheck, title: "Reliable Support", body: "10 year warranty, lifetime care." },
];

function ContactPage() {
  return (
    <main className="min-h-screen bg-backdrop p-3 sm:p-5 lg:p-6">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] bg-hero-base">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <img
            src={expImg}
            alt="Luxury interior lit by Zenith smart lighting"
            width={1200}
            height={900}
            className="h-full w-full animate-slow-zoom object-cover brightness-110"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-linear-to-r from-hero-base to-transparent" />
        </div>

        <div className="relative flex min-h-[34rem] flex-col lg:min-h-[38rem]">
          <SiteHeader />
          <div className="flex flex-1 flex-col justify-center px-6 pt-10 pb-12 sm:px-12 sm:pt-14 lg:px-14 xl:px-20">
            <div className="max-w-xl animate-rise">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Contact</p>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,10vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-foreground">
                Let&apos;s build your
                <br />
                <span className="text-gold">smart home.</span>
              </h1>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                Tell us about your space. We&apos;ll shape a Zenith experience around the way you
                actually live.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#form"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-foreground px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={TEL_HREF}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div
              className="animate-rise mt-12 overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:hidden"
              style={{ animationDelay: "160ms" }}
            >
              <img
                src={expImg}
                alt="Luxury interior lit by Zenith smart lighting"
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-4/3 w-full animate-slow-zoom object-cover brightness-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {options.map(({ icon: Icon, label, value, note, href }, i) => (
            <a
              key={label}
              href={href}
              className="animate-rise group rounded-3xl border border-foreground/10 bg-hero-base/80 p-7 backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/35 text-gold transition-colors duration-300 group-hover:border-gold">
                <Icon className="h-5 w-5" strokeWidth={1.3} />
              </span>
              <h2 className="mt-6 font-display text-lg font-medium text-foreground">{label}</h2>
              <p className="mt-1 break-words text-[0.95rem] text-gold">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{note}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="form" className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-16">
          <div className="animate-rise min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Start Here</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,7vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
              A conversation, not a quotation.
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
              Share a few details and a Lumiwaves specialist will call you back within one working
              day — with ideas, not a script.
            </p>
            <div className="mt-10 hidden overflow-hidden rounded-3xl ring-1 ring-foreground/10 lg:block">
              <img
                src={roomImg}
                alt="Zenith control panel in a warmly lit living room"
                width={912}
                height={600}
                loading="lazy"
                className="aspect-16/10 w-full object-cover"
              />
            </div>
          </div>

          <ContactForm
            className="animate-rise"
            title="Book a Consultation"
            submitLabel="Book Consultation"
            interestLabel="Project Type"
            interestOptions={["New Home", "Renovation", "Apartment", "Villa", "Commercial Space"]}
            messagePlaceholder="Tell us about your space..."
          />
        </div>
      </section>

      {/* Why contact */}
      <section className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="rounded-3xl border border-foreground/10 bg-hero-base/80 px-7 py-10 backdrop-blur-xs sm:px-12 sm:py-12">
          <h2 className="max-w-lg font-display text-[clamp(1.6rem,5.5vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground">
            Why talk to Lumiwaves first?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {trust.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="animate-rise min-w-0"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.2} />
                <h3 className="mt-4 font-display text-lg font-medium text-foreground">{title}</h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section id="office" className="mx-auto max-w-[95rem] px-6 pt-20 sm:px-12 sm:pt-28 lg:px-20 2xl:px-30">
        <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-hero-base">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="px-7 py-12 sm:px-12 sm:py-16">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">Experience Center</p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,6vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
                Lumiwaves, Pondicherry.
              </h2>
              <ul className="mt-8 space-y-5 text-[0.95rem] text-muted-foreground">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
                  <span>
                    <span className="block text-foreground">Address</span>
                    ECR Road, White Town, Pondicherry 605001, India
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Clock4 className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
                  <span>
                    <span className="block text-foreground">Business Hours</span>
                    Monday – Saturday, 9:00 am – 7:00 pm · Sunday by appointment
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
                  <span>
                    <span className="block text-foreground">Reception</span>
                    <a href={TEL_HREF} className="transition-colors hover:text-gold">{PHONE_DISPLAY}</a>
                  </span>
                </li>
              </ul>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex min-h-14 items-center gap-3 rounded-full border border-gold/60 px-7 text-[0.95rem] text-gold transition-colors duration-300 hover:bg-gold hover:text-hero-base"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            <div className="relative min-h-64 border-t border-foreground/10 lg:min-h-full lg:border-l lg:border-t-0">
              <img
                src={expImg}
                alt="The Lumiwaves experience center interior"
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 grid place-items-center bg-hero-base/40 backdrop-blur-[1px]">
                <div className="rounded-2xl border border-foreground/15 bg-hero-base/80 px-6 py-4 text-center backdrop-blur-xs">
                  <MapPin className="mx-auto h-6 w-6 text-gold" strokeWidth={1.3} />
                  <p className="mt-2 text-[0.95rem] text-foreground">Map coming soon</p>
                  <p className="text-sm text-muted-foreground">White Town, Pondicherry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                Ready to experience <span className="text-gold">Zenith?</span>
              </h2>
              <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
                Let&apos;s design your dream smart home together — beautifully, and without the
                guesswork.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#form"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-linear-to-r from-gold to-gold/80 px-8 text-[0.95rem] font-medium text-hero-base transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
                >
                  About Lumiwaves
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
