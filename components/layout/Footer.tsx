import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "../ui/Logo";
import { companyData } from "@/data/company";

interface FooterProps {
  onOpenDemo?: () => void;
}

export function Footer({ onOpenDemo }: FooterProps) {
  return (
    <footer className="bg-theme-secondary/70 border-t border-theme pt-20 pb-12 text-theme-secondary text-xs transition-colors duration-300">
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-theme">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <Logo height={28} showTagline={true} />
            <p className="text-theme-secondary leading-relaxed max-w-sm text-xs sm:text-sm">
              {companyData.description}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold-deep)] dark:text-[var(--gold)] text-[11px] font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
                Local-First Residential Core
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-theme-main text-xs uppercase tracking-widest font-semibold">
              Ecosystem
            </h5>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-theme-main transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-theme-main transition-colors">
                  Solutions & Systems
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-theme-main transition-colors">
                  Architectural Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-theme-main transition-colors">
                  About Zenith
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-theme-main transition-colors">
                  Experience Center & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-theme-main text-xs uppercase tracking-widest font-semibold">
              Contact & Support
            </h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                <span className="leading-snug">{companyData.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <a
                  href={`tel:${companyData.phone}`}
                  className="hover:text-theme-main transition-colors font-mono"
                >
                  {companyData.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-theme-main transition-colors"
                >
                  {companyData.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Experience Center */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-theme-main text-xs uppercase tracking-widest font-semibold">
              {companyData.experienceCenter.title}
            </h5>
            <p className="leading-relaxed">
              {companyData.experienceCenter.description}
            </p>
            {onOpenDemo && (
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center gap-1.5 text-[var(--gold-deep)] dark:text-[var(--gold)] hover:underline font-medium text-xs pt-1 cursor-pointer"
              >
                Schedule Private Walkthrough <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-theme-secondary/80">
          <p>© 2026 {companyData.name} by {companyData.parentBrand}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-theme-main transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-theme-main transition-colors">
              Terms of Integration
            </a>
            <a href="#" className="hover:text-theme-main transition-colors">
              Hardware Warranty
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
