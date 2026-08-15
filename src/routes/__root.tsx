import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { MotionConfig } from "motion/react";

import appCss from "../styles.css?url";
import { ADDRESS_LINES, EMAIL, PHONE_E164, SITE_URL } from "../lib/site";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <main className="min-h-dvh bg-backdrop p-3 sm:p-5 lg:p-6">
      <section className="relative flex min-h-[calc(100dvh-1.5rem)] items-center justify-center overflow-hidden rounded-[2rem] bg-hero-base px-6 py-20 text-center sm:px-12">
        <div className="max-w-lg">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">404</p>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,8vw,4rem)] font-semibold leading-[1.03] tracking-[-0.02em] text-foreground">
            This page isn&apos;t <span className="text-gold">part of the system.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[1rem] leading-relaxed text-muted-foreground">
            The page you were looking for has moved or never existed. Let&apos;s get you back to
            something beautiful.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="btn-lift inline-flex min-h-14 w-full items-center justify-center whitespace-nowrap rounded-full bg-foreground px-8 text-[0.95rem] font-medium text-hero-base sm:w-auto"
            >
              Back to Home
            </Link>
            <Link
              to="/zenith"
              className="inline-flex min-h-14 w-full items-center justify-center whitespace-nowrap rounded-full border border-foreground/20 px-8 text-[0.95rem] text-foreground transition-colors duration-300 hover:border-gold hover:text-gold sm:w-auto"
            >
              Explore Zenith
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-14 w-full items-center justify-center whitespace-nowrap rounded-full border border-gold/50 px-8 text-[0.95rem] text-gold transition-colors duration-300 hover:bg-gold hover:text-hero-base sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumiwaves — Zenith Smart Home Automation" },
      {
        name: "description",
        content:
          "Lumiwaves designs and installs Zenith, a premium smart home ecosystem of switches, panels, lighting, curtains, locks and sensors.",
      },
      { name: "author", content: "Lumiwaves" },
      { property: "og:site_name", content: "Lumiwaves" },
      { property: "og:title", content: "Lumiwaves — Zenith Smart Home Automation" },
      {
        property: "og:description",
        content: "Premium smart living, designed and installed end to end by Lumiwaves.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Lumiwaves",
          url: SITE_URL,
          description:
            "Lumiwaves designs and installs Zenith, a premium smart home automation ecosystem.",
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS_LINES[0],
            addressLocality: "Pondicherry",
            addressCountry: "IN",
          },
          telephone: PHONE_E164,
          email: EMAIL,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </MotionConfig>
    </QueryClientProvider>

  );
}
