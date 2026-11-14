import React from "react";
import Image from "next/image";

export function PortfolioSection() {
  const projects = [
    {
      title: "Glass Pavilion Villa",
      location: "Private Residence",
      scope: "Circadian Lighting • Motorized Drapery • Radar Perimeter",
      image: "/assets/hero-house.jpg",
    },
    {
      title: "Sky Penthouse Living Space",
      location: "Metropolitan Suite",
      scope: "Whole-Home Scene Control • Tactile Glass Panels • Lossless Audio",
      image: "/assets/control-home.jpg",
    },
    {
      title: "Twilight Architectural Residence",
      location: "Coastal Villa",
      scope: "Biometric Portal Sentry • 2K HDR Night Surveillance",
      image: "/assets/security-smart.jpg",
    },
    {
      title: "Private Master Retreat",
      location: "Architectural Suite",
      scope: "1% Footstep Beacons • Dual Blackout Shading • Acoustic Rest",
      image: "/assets/story-3.jpg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-28 border-t border-theme bg-theme-secondary/20 transition-colors duration-300"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
              Architectural Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-theme-main tracking-tight">
              Spaces transformed by <br />
              <span className="italic font-normal">invisible engineering.</span>
            </h2>
          </div>

          <p className="text-theme-secondary text-sm max-w-md font-light leading-relaxed">
            A visual retrospective of residences where technology yields completely to
            architectural elegance and peaceful daily living.
          </p>
        </div>

        {/* 2x2 Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden aspect-[16/10] zenith-surface border border-theme shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--gold-light)]">
                  {project.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light">
                  {project.scope}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

