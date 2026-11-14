import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zenith — Luxury Smart Home Automation | Lumiwaves",
  description:
    "Transform your residence into a smarter, safer, and effortless sanctuary with Zenith's luxury residential automation ecosystem.",
  keywords: [
    "smart home",
    "luxury home automation",
    "circadian lighting",
    "motorized shading",
    "biometric security",
    "architectural technology",
    "Zenith",
    "Lumiwaves",
  ],
  authors: [{ name: "Zenith by Lumiwaves" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased dark">
      <head>
        {/* Inline script to prevent theme flash on initial load */}
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
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
