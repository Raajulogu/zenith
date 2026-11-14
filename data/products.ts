export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  finish: string;
  specs: { label: string; value: string }[];
}

export const productsData: ProductItem[] = [
  {
    id: "zenith-core-hub",
    name: "Zenith Core Hub",
    category: "Central Controllers",
    tagline: "The offline-first automation brain of your residence.",
    description:
      "A silent, solid-state central controller that orchestrates all lighting, shading, HVAC, and security systems locally without depending on external cloud servers.",
    image: "/assets/prod-hub.jpg",
    finish: "Anodized Matte Black / Brushed Gold Edge",
    specs: [
      { label: "Architecture", value: "Local-First Realtime OS" },
      { label: "Interfaces", value: "RS485, DMX, IP, Zigbee, Relay" },
      { label: "Power", value: "Low-Power 12V DC / PoE Support" },
    ],
  },
  {
    id: "zenith-glass-panel",
    name: "Zenith Touch Glass Panel",
    category: "Architectural Controls",
    tagline: "Tactile black glass with brushed gold chamfers.",
    description:
      "Sculptural capacitive touch panels featuring subtle haptic response, proximity illumination, and customized laser-etched scene designations.",
    image: "/assets/prod-panel.jpg",
    finish: "Tempered Black Glass / Brushed Gold Bezel",
    specs: [
      { label: "Glass", value: "Anti-Fingerprint Tempered Glass" },
      { label: "Chamfer", value: "Precision CNC Milled Gold Finish" },
      { label: "Lighting", value: "Proximity Auto-Dimming Backlight" },
    ],
  },
  {
    id: "zenith-switch-module",
    name: "Zenith Tactile Switch Plate",
    category: "Architectural Controls",
    tagline: "Micro-travel mechanical elegance for daily control.",
    description:
      "Ultra-low profile switch mechanisms designed for intuitive, tactile actuation of individual lighting circuits, motorized shades, and pathway guide modes.",
    image: "/assets/prod-switch.jpg",
    finish: "Brushed Obsidian Black & Champagne Gold Trim",
    specs: [
      { label: "Actuation", value: "Micro-Travel Tactile Feedback" },
      { label: "Circuits", value: "2, 4, or 6 Gang Modular Layouts" },
      { label: "Reliability", value: "Rated for 500,000+ Cycles" },
    ],
  },
  {
    id: "zenith-circadian-driver",
    name: "Zenith Circadian Lighting Driver",
    category: "Lighting Infrastructure",
    tagline: "0.1% flicker-free tunable white illumination engine.",
    description:
      "Commercial-grade DIN-rail multichannel LED drivers capable of smooth astronomical circadian Kelvin transitions and deep ambient dimming.",
    image: "/assets/prod-lighting.jpg",
    finish: "Industrial Aluminum Chassis",
    specs: [
      { label: "Dimming Range", value: "0.1% to 100% Smooth Logarithmic" },
      { label: "Spectrum", value: "1800K — 6500K Dynamic Tunable White" },
      { label: "Protocols", value: "DALI-2 / 0-10V / DMX512" },
    ],
  },
  {
    id: "zenith-biometric-lock",
    name: "Zenith Biometric Deadbolt Lock",
    category: "Security & Access",
    tagline: "Heavy-duty motorized deadbolt with encrypted biometrics.",
    description:
      "Architectural front-entry biometric lock engineered with encrypted semiconductor fingerprint scanning, auto-deadbolt engagement, and seamless Away mode triggers.",
    image: "/assets/prod-lock.jpg",
    finish: "Solid Forged Brass & Matte Black Ceramic PVD",
    specs: [
      { label: "Biometrics", value: "3D Capacitive Semiconductor Sensor" },
      { label: "Deadbolt", value: "Hardened Steel Motorized Bolt" },
      { label: "Security", value: "AES-256 Local Encryption" },
    ],
  },
];

