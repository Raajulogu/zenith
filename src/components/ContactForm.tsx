import { useId, useState, type FormEvent } from "react";
import { ArrowRight, Check, Home, Loader2, Mail, MessageSquare, Phone, User } from "lucide-react";

const fieldBase =
  "h-14 min-h-12 w-full rounded-xl border border-foreground/12 bg-foreground/[0.03] pl-12 pr-4 text-[0.95rem] text-foreground placeholder:text-muted-foreground/80 outline-hidden transition-colors duration-300 focus-glow focus:border-gold/60 focus:bg-foreground/[0.05]";

const errorRing = "border-destructive/70 focus:border-destructive";

type Values = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_RE = /^[+]?[\d][\d\s\-()]{7,17}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  else if (v.name.trim().length > 100) e.name = "Name is too long.";
  if (!PHONE_RE.test(v.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address.";
  else if (v.email.trim().length > 255) e.email = "Email is too long.";
  if (v.message.trim().length > 1000) e.message = "Please keep it under 1000 characters.";
  return e;
}

const empty: Values = { name: "", phone: "", email: "", interest: "", message: "" };

/**
 * Shared lead form used on the homepage and the contact page.
 *
 * Submission is not wired to a backend yet: `submitLead` is the single place
 * to plug in a server function / email service later without touching the UI.
 */
async function submitLead(_values: Values): Promise<void> {
  // TODO: connect to Lovable Cloud (server function + leads table) before launch.
  await new Promise((r) => setTimeout(r, 700));
}

export function ContactForm({
  title,
  subtitle = "We'll get back to you within 24 hours.",
  submitLabel,
  interestLabel,
  interestOptions,
  messagePlaceholder = "Tell us about your requirements...",
  className = "",
}: {
  title: string;
  subtitle?: string;
  submitLabel: string;
  interestLabel: string;
  interestOptions: string[];
  messagePlaceholder?: string;
  className?: string;
}) {
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus("loading");
    try {
      await submitLead(values);
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  const id = (k: string) => `${uid}-${k}`;
  const busy = status === "loading";

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={id(`${k}-error`)} className="mt-1.5 text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className={`rounded-3xl border border-foreground/12 bg-hero-base/80 p-6 backdrop-blur-xs sm:p-8 ${className}`}
    >
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="sr-only">
            Your name
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-7 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id={id("name")}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              disabled={busy}
              placeholder="Your Name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? id("name-error") : undefined}
              className={`${fieldBase} ${errors.name ? errorRing : ""}`}
            />
          </div>
          {err("name")}
        </div>
        <div>
          <label htmlFor={id("phone")} className="sr-only">
            Phone number
          </label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-4 top-7 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={set("phone")}
              disabled={busy}
              placeholder="Phone Number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? id("phone-error") : undefined}
              className={`${fieldBase} ${errors.phone ? errorRing : ""}`}
            />
          </div>
          {err("phone")}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={id("email")} className="sr-only">
          Email address
        </label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-7 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            disabled={busy}
            placeholder="Email Address"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? id("email-error") : undefined}
            className={`${fieldBase} ${errors.email ? errorRing : ""}`}
          />
        </div>
        {err("email")}
      </div>

      <div className="mt-4">
        <label htmlFor={id("interest")} className="sr-only">
          {interestLabel}
        </label>
        <div className="relative">
          <Home className="pointer-events-none absolute left-4 top-7 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <select
            id={id("interest")}
            name="interest"
            value={values.interest}
            onChange={set("interest")}
            disabled={busy}
            className={`${fieldBase} appearance-none pr-10 ${
              values.interest ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            <option value="">{interestLabel}</option>
            {interestOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={id("message")} className="sr-only">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-5 h-4 w-4 text-muted-foreground" />
          <textarea
            id={id("message")}
            name="message"
            rows={4}
            value={values.message}
            onChange={set("message")}
            disabled={busy}
            placeholder={messagePlaceholder}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? id("message-error") : undefined}
            className={`w-full resize-none rounded-xl border border-foreground/12 bg-foreground/[0.03] py-4 pl-12 pr-4 text-[0.95rem] text-foreground placeholder:text-muted-foreground/80 outline-hidden transition-colors duration-300 focus-glow focus:border-gold/60 focus:bg-foreground/[0.05] ${
              errors.message ? errorRing : ""
            }`}
          />
        </div>
        {err("message")}
      </div>

      <button
        type="submit"
        disabled={busy}
        className="btn-lift group mt-5 inline-flex h-14 min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-gold to-gold/80 text-[0.95rem] font-medium text-hero-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {busy ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <div aria-live="polite" className="min-h-0">
        {status === "success" && (
          <p className="mt-4 flex items-start gap-2 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 text-[0.95rem] text-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            Thank you — your request has reached our team. We&apos;ll be in touch within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 rounded-xl border border-destructive/50 bg-destructive/10 px-4 py-3 text-[0.95rem] text-foreground">
            Something went wrong. Please call or WhatsApp us instead — we&apos;ll respond right away.
          </p>
        )}
      </div>
    </form>
  );
}
