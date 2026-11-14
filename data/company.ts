export interface CompanyInfo {
  name: string;
  parentBrand: string;
  tagline: string;
  coreMessage: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  experienceCenter: {
    title: string;
    location: string;
    description: string;
  };
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  socials: {
    name: string;
    href: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Zenith",
  parentBrand: "Lumiwaves",
  tagline: "Intelligent Living, Seamlessly Integrated",
  coreMessage: "Intelligence, seamlessly integrated.",
  description:
    "Zenith is a bespoke smart home automation and architectural technology ecosystem by Lumiwaves. We engineer luxury residences where lighting, climate, security, and motorized shading respond intuitively to the rhythm of your day.",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@lumiwaves.in",
  address: {
    street: "127, Vellalar Street",
    city: "Puducherry",
    state: "Puducherry",
    postalCode: "605001",
    country: "India",
    full: "127, Vellalar Street, Puducherry 605001, India",
  },
  experienceCenter: {
    title: "Zenith Experience Center",
    location: "127, Vellalar Street, Puducherry",
    description:
      "Schedule a private walkthrough to experience our tactile black-glass switch panels, circadian lighting sequences, and local-first automation hardware in person.",
  },
  stats: [
    {
      value: "10-Year",
      label: "Hardware Reliability",
      detail: "Engineered to outlast transient consumer electronics.",
    },
    {
      value: "100%",
      label: "Local-First Core",
      detail: "Operates autonomously without relying on cloud connections.",
    },
    {
      value: "<10ms",
      label: "Switch Response",
      detail: "Instant tactile feedback via capacitive glass interfaces.",
    },
    {
      value: "Dedicated",
      label: "System Engineer",
      detail: "Direct engineering support from schematic design through commissioning.",
    },
  ],
  socials: [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "YouTube", href: "#" },
  ],
};

