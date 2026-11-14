"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "../ui/Logo";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Button } from "../ui/Button";

interface NavbarProps {
  onOpenDemo: () => void;
}

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "/#hero" },
    { label: "Interactive Home", href: "/#experience" },
    { label: "Solutions", href: "/services" },
    { label: "Why Zenith", href: "/#why-zenith" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-theme-main/90 backdrop-blur-md border-b border-theme py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Logo height={26} showTagline={true} />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-theme-secondary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-theme-main transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions (Theme toggle + CTA) */}
        <div className="hidden sm:flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenDemo}
            className="tracking-wider uppercase text-[11px] font-semibold"
          >
            Book A Demo
          </Button>
        </div>

        {/* Mobile menu trigger & Theme toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle variant="minimal" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg text-theme-main hover:bg-theme-secondary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-theme-main border-b border-theme px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-theme-secondary hover:text-theme-main border-b border-theme/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between py-2 text-xs text-theme-secondary">
              <span>Theme Mode</span>
              <ThemeToggle />
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full tracking-wider uppercase text-xs font-semibold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Book A Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
