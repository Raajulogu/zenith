import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";


export const metadata: Metadata = {
  title: "Zenith — Luxury Smart Home Automation | Lumiwaves",
  description:
    "Transform your residence into a smarter, safer, and effortless sanctuary with Zenith's luxury residential automation ecosystem.",
  keywords: [
    "smart home",
    "smart life",
    "home automation",
    "zenith automation",
    "zenith automations",
    "smart switches",
    "smart panels",
    "puducherry",
    "luxury home automation",
    "circadian lighting",
    "motorized shading",
    "biometric security",
    "architectural technology",
    "Zenith",
    "Lumiwaves"
  ],
  authors: [{ name: "Zenith by Lumiwaves" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  
  const canonicalUrl = "https://www.zenithautomations.in";
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased dark">
      <head>
        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('zenith_theme');
                  var theme = saved || 'dark';
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* SEO meta */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href="https://www.zenithautomations.in" hrefLang="en-in" />
        <meta property="og:title" content="Zenith – Luxury Smart Home Automation" />
        <meta property="og:description" content="Transform your residence into a smarter, safer, and effortless sanctuary with Zenith's premium automation solutions." />
        <meta property="og:url" content="https://www.zenithautomations.in" />
        <meta property="og:image" content="https://www.zenithautomations.in/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zenith – Luxury Smart Home Automation" />
        <meta name="twitter:description" content="Premium smart‑home solutions for Puducherry and beyond." />
        <meta name="twitter:image" content="https://www.zenithautomations.in/twitter-card.jpg" />
        {/* PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffcc00" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zenith by Lumiwaves",
              url: "https://www.zenithautomations.in",
              logo: "https://www.zenithautomations.in/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/zenith",
                "https://twitter.com/zenith",
                "https://www.facebook.com/zenith"
              ],
              description:
                "Luxury smart‑home automation – circadian lighting, motorized shading, biometric security, and more.",
              contactPoint: [{
                "@type": "ContactPoint",
                telephone: "+91-XXXXXXXXXX",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"]
              }],
              address: {
                "@type": "PostalAddress",
                streetAddress: "127, Vellalar St",
                addressLocality: "Puducherry",
                addressCountry: "IN"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
