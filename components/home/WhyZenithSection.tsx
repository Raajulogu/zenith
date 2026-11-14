import React from "react";
import { Award, ShieldCheck, Sparkles, Headphones, Check } from "lucide-react";

export function WhyZenithSection() {
  const differentiators = [
    {
      icon: Award,
      title: "10-Year Built Reliability",
      subtitle: "Engineered to outlast standard home electronics",
      description:
        "Consumer smart plugs and Wi-Fi switches frequently fail within 2 to 3 years. Zenith hardware is built to commercial DIN-rail and architectural standards, engineered for a decade of flawless daily duty.",
    },
    {
      icon: ShieldCheck,
      title: "100% Local-First Autonomy",
      subtitle: "Never immobilized by internet or cloud outages",
      description:
        "Your residence should never freeze because a remote cloud provider has an outage. Zenith’s local bus processor runs all logic on-premise, guaranteeing instantaneous sub-10ms switch response.",
    },
    {
      icon: Sparkles,
      title: "Tactile Black Glass & Gold Finishes",
      subtitle: "Architectural jewelry crafted for luxury interiors",
      description:
        "Say goodbye to clusters of white plastic wall switches. Zenith tactile touch panels feature solid anti-fingerprint tempered black glass with precision CNC-chamfered brushed gold accents.",
    },
    {
      icon: Headphones,
      title: "Dedicated Systems Specialist",
      subtitle: "Direct engineering partnership, not an automated chatbot",
      description:
        "From early schematic wiring reviews with your architect to on-site commissioning and lifetime support, you have direct access to a dedicated Zenith automation systems engineer.",
    },
  ];

  return (
    <section
      id="why-zenith"
      className="py-28 border-t border-theme bg-theme-main transition-colors duration-300"
    >
      <div className="max-w-[1540px] mx-auto px-6 sm:px-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--gold-deep)] dark:text-[var(--gold)]">
            Architectural Standards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-theme-main tracking-tight">
            Why Zenith Home Automation?
          </h2>
          <p className="text-theme-secondary text-sm sm:text-base font-light leading-relaxed">
            A bespoke convergence of architectural beauty, uncompromising local-first engineering,
            and dedicated white-glove commissioning.
          </p>
        </div>

        {/* 4 Differentiators Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 sm:p-10 rounded-3xl zenith-surface border border-theme shadow-md flex flex-col justify-between transition-all duration-300 hover:border-[var(--gold-border)]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold-deep)] dark:text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--gold-deep)] dark:text-[var(--gold)]">
                      {item.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-theme-main mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-theme-secondary font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-theme flex items-center gap-2 text-xs text-[var(--gold-deep)] dark:text-[var(--gold)] font-medium">
                  <Check className="w-4 h-4 text-[var(--gold)]" />
                  <span>Verified Zenith Engineering Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
